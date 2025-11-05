#!/bin/bash

# Generate optimized favicons from bp_1.png logo
# Requires ImageMagick (install with: brew install imagemagick)

LOGO="public/logo/bp_1.png"
OUTPUT_DIR="public"

if [ ! -f "$LOGO" ]; then
    echo "Error: Logo file not found at $LOGO"
    exit 1
fi

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null && ! command -v magick &> /dev/null; then
    echo "ImageMagick not found. Please install it first:"
    echo "  macOS: brew install imagemagick"
    echo "  Linux: sudo apt-get install imagemagick"
    echo ""
    echo "Or use the online tool at: https://realfavicongenerator.net/"
    exit 1
fi

# Use 'convert' or 'magick' command
if command -v magick &> /dev/null; then
    CMD="magick"
else
    CMD="convert"
fi

echo "Generating favicons from $LOGO..."
echo ""

# Create square versions by adding padding or cropping center
# For a wide logo, we'll create a square with the logo centered

# 16x16 favicon
$CMD "$LOGO" -resize 12x12 -gravity center -background transparent -extent 16x16 "$OUTPUT_DIR/favicon-16x16.png"
echo "✓ Created favicon-16x16.png"

# 32x32 favicon
$CMD "$LOGO" -resize 24x24 -gravity center -background transparent -extent 32x32 "$OUTPUT_DIR/favicon-32x32.png"
echo "✓ Created favicon-32x32.png"

# 180x180 Apple Touch Icon
$CMD "$LOGO" -resize 160x27 -gravity center -background white -extent 180x180 "$OUTPUT_DIR/apple-touch-icon.png"
echo "✓ Created apple-touch-icon.png"

# 192x192 PWA icon
$CMD "$LOGO" -resize 170x28 -gravity center -background white -extent 192x192 "$OUTPUT_DIR/icon-192x192.png"
echo "✓ Created icon-192x192.png"

# 512x512 PWA icon
$CMD "$LOGO" -resize 450x75 -gravity center -background white -extent 512x512 "$OUTPUT_DIR/icon-512x512.png"
echo "✓ Created icon-512x512.png"

# Create ICO file (multi-size)
$CMD "$LOGO" -define icon:auto-resize=16,32,48 "$OUTPUT_DIR/favicon.ico"
echo "✓ Created favicon.ico"

echo ""
echo "Done! All favicon files created in $OUTPUT_DIR"
echo ""
echo "Note: The logo is wide (216x37), so it's been centered with padding."
echo "For best results, consider creating a square icon version of your logo."



