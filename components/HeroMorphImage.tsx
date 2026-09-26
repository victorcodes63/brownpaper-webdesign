'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'motion/react'
import Image from 'next/image'

const VERT = `
attribute vec2 a_pos;
varying vec2 v_uv;
void main() {
  v_uv = a_pos * 0.5 + 0.5;
  v_uv.y = 1.0 - v_uv.y;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`

const FRAG = `
precision mediump float;
uniform sampler2D u_img;
uniform vec2 u_res;
uniform vec2 u_mouse;
uniform float u_time;
uniform float u_strength;
varying vec2 v_uv;

void main() {
  vec2 uv = v_uv;
  vec2 m = u_mouse;

  // Aspect-correct distance so the ripple stays circular on screen
  // (UV space alone stretches tall panels into ovals).
  vec2 delta = (uv - m) * vec2(u_res.x / max(u_res.y, 1.0), 1.0);
  float d = length(delta);

  float wave =
    sin(uv.y * 10.0 + u_time * 0.7) * 0.006 +
    cos(uv.x * 8.0 - u_time * 0.55) * 0.005;

  float pool = smoothstep(0.42, 0.0, d);
  vec2 dir = length(delta) > 0.0001 ? normalize(delta) : vec2(0.0);
  // Map direction back into UV space for displacement
  dir.x *= max(u_res.y, 1.0) / max(u_res.x, 1.0);
  float ripple = sin(d * 32.0 - u_time * 3.2) * 0.016 * pool;

  uv += dir * ripple * u_strength;
  uv += vec2(wave, wave * 0.8) * u_strength;
  uv += (m - 0.5) * pool * 0.04 * u_strength;
  uv = mix(v_uv, uv, 0.95);

  vec4 color = texture2D(u_img, clamp(uv, 0.001, 0.999));
  gl_FragColor = color;
}
`

function createShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)
  if (!shader) return null
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader)
    return null
  }
  return shader
}

interface HeroMorphImageProps {
  src: string
  alt: string
  className?: string
}

export default function HeroMorphImage({ src, alt, className = '' }: HeroMorphImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const [webglReady, setWebglReady] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const wrap = wrapRef.current
    if (!canvas || !wrap || shouldReduceMotion) return
    // Phones, tablets and touch screens get the still image: the ripple follows
    // a mouse they don't have, and WebGL costs battery for a small strip.
    if (window.matchMedia('(max-width: 1023px), (pointer: coarse)').matches) return

    const gl = canvas.getContext('webgl', { premultipliedAlpha: false, alpha: false })
    if (!gl) return

    const vs = createShader(gl, gl.VERTEX_SHADER, VERT)
    const fs = createShader(gl, gl.FRAGMENT_SHADER, FRAG)
    if (!vs || !fs) return

    const program = gl.createProgram()
    if (!program) return
    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return
    gl.useProgram(program)

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW)

    const aPos = gl.getAttribLocation(program, 'a_pos')
    gl.enableVertexAttribArray(aPos)
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

    const uImg = gl.getUniformLocation(program, 'u_img')
    const uRes = gl.getUniformLocation(program, 'u_res')
    const uMouse = gl.getUniformLocation(program, 'u_mouse')
    const uTime = gl.getUniformLocation(program, 'u_time')
    const uStrength = gl.getUniformLocation(program, 'u_strength')

    const texture = gl.createTexture()
    const image = new window.Image()
    image.crossOrigin = 'anonymous'
    let ready = false

    image.onload = () => {
      gl.bindTexture(gl.TEXTURE_2D, texture)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image)
      ready = true
      setWebglReady(true)
    }
    image.src = src

    const mouse = { x: 0.5, y: 0.55, tx: 0.5, ty: 0.55 }
    let raf = 0
    const start = performance.now()

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const { width, height } = wrap.getBoundingClientRect()
      canvas.width = Math.max(1, Math.floor(width * dpr))
      canvas.height = Math.max(1, Math.floor(height * dpr))
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      gl.viewport(0, 0, canvas.width, canvas.height)
      gl.uniform2f(uRes, canvas.width, canvas.height)
    }

    const onPointer = (e: PointerEvent) => {
      const rect = wrap.getBoundingClientRect()
      mouse.tx = (e.clientX - rect.left) / rect.width
      mouse.ty = (e.clientY - rect.top) / rect.height
    }

    const onLeave = () => {
      mouse.tx = 0.5
      mouse.ty = 0.55
    }

    const draw = (now: number) => {
      raf = requestAnimationFrame(draw)
      if (!ready) return

      mouse.x += (mouse.tx - mouse.x) * 0.08
      mouse.y += (mouse.ty - mouse.y) * 0.08

      gl.clearColor(0.06, 0.08, 0.08, 1)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.uniform1i(uImg, 0)
      gl.uniform2f(uMouse, mouse.x, mouse.y)
      gl.uniform1f(uTime, (now - start) / 1000)
      gl.uniform1f(uStrength, 1)
      gl.drawArrays(gl.TRIANGLES, 0, 6)
    }

    resize()
    raf = requestAnimationFrame(draw)
    wrap.addEventListener('pointermove', onPointer)
    wrap.addEventListener('pointerleave', onLeave)
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(raf)
      wrap.removeEventListener('pointermove', onPointer)
      wrap.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('resize', resize)
      gl.deleteProgram(program)
      gl.deleteShader(vs)
      gl.deleteShader(fs)
      gl.deleteTexture(texture)
      gl.deleteBuffer(buffer)
    }
  }, [src, shouldReduceMotion])

  return (
    <div ref={wrapRef} className={`absolute inset-0 ${className}`}>
      {/* Optimised still (resized per device by next/image); WebGL fades in over it on desktop */}
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(min-width: 1024px) 30vw, 100vw"
        className={`object-cover object-center transition-opacity duration-500 ${
          webglReady && !shouldReduceMotion ? 'opacity-0' : 'opacity-100'
        }`}
      />
      {!shouldReduceMotion && (
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${
            webglReady ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden
        />
      )}
    </div>
  )
}
