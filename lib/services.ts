// Generated from the original service pages (see _legacy/services-*.bak) — edit freely.

export type ServiceItem = { title: string; description: string }
export type Service = {
  slug: string
  name: string
  tag: string
  statement: string
  lead: string
  image: string
  items: ServiceItem[]
  steps: ServiceItem[]
  packages?: { name: string; features: string[] }[]
  deliverables?: string[]
  benefits?: ServiceItem[]
  /** Commercial facts (client items B10/B11). Blocks render only when present. */
  pricing?: {
    fromKes?: number
    unit?: string // e.g. "per 100 cards"
    minimum?: string // e.g. "100 units"
    turnaround?: { standard?: string; rush?: string }
  }
}

export const services: Service[] = [
  {
    "slug": "brand-identity",
    "name": "Brand Identity",
    "tag": "Identity systems",
    "statement": "A brand is a system, not a logo.",
    "lead": "Logos, colours, type and the guidelines that hold them together, so your brand looks the same on every card, sign and screen.",
    "image": "/images/hero/hero5.jpg",
    "items": [
      {
        "title": "Logo Design",
        "description": "Unique and memorable logos that capture your brand essence and make a strong first impression. We create versatile logo systems with primary, secondary, and icon variations that work across all platforms, from digital applications to print materials, ensuring consistent brand recognition."
      },
      {
        "title": "Brand Guidelines",
        "description": "Comprehensive style guides that ensure consistent brand application across all touchpoints. Our brand guidelines include logo usage rules, color specifications, typography standards, spacing guidelines, and visual examples that empower your team to maintain brand integrity."
      },
      {
        "title": "Color Palettes",
        "description": "Strategic color selection that reflects your brand personality and resonates with your audience. We develop primary and secondary color palettes with hex codes, RGB values, and usage guidelines. Each palette is tested for accessibility and psychological impact to ensure optimal brand communication."
      },
      {
        "title": "Typography",
        "description": "Custom typography selection and pairing that enhances readability and brand recognition. We recommend font families that align with your brand personality, create typographic hierarchies, and establish consistent text styling guidelines for headings, body text, and captions across all applications."
      },
      {
        "title": "Visual Language",
        "description": "Complete visual identity systems that create a cohesive and recognizable brand presence. This includes photography style guidelines, illustration standards, graphic element libraries, and design patterns that work together to form a distinctive visual language unique to your brand."
      },
      {
        "title": "Brand Strategy",
        "description": "Strategic positioning and messaging that differentiates your brand in the market. We conduct market research, analyze competitors, define your brand voice, and develop positioning strategies that help your brand stand out and connect authentically with your target audience."
      }
    ],
    "steps": [
      {
        "title": "Discovery",
        "description": "We learn your business, values, goals and audience through workshops, research and analysis, so every design decision is grounded in who you really are."
      },
      {
        "title": "Development",
        "description": "Multiple creative directions are explored and refined with your feedback (logo, colour, typography and visual elements) until the identity is right."
      },
      {
        "title": "Implementation",
        "description": "Brand guidelines and production-ready assets, with templates and examples so your team can apply the identity confidently everywhere."
      }
    ],
    "deliverables": [
      "Logo variations (primary, secondary, icon, monochrome)",
      "Complete color palette with hex codes and usage guidelines",
      "Typography system with font recommendations and pairing rules",
      "Comprehensive brand guidelines document (PDF and digital)",
      "Brand application examples across various touchpoints",
      "Social media templates and profile guidelines",
      "Business card and stationery design templates",
      "Brand asset package in all required file formats"
    ]
  },
  {
    "slug": "graphic-design",
    "name": "Graphic Design",
    "tag": "Visual communication",
    "statement": "Is your online presence felt?",
    "lead": "Brochures, flyers, social graphics and campaign artwork, designed with print in mind so what you approve is what gets produced.",
    "image": "/images/indiv_services/design.jpg",
    "items": [
      {
        "title": "Marketing Materials",
        "description": "Eye-catching brochures, flyers, posters, and promotional materials that drive engagement and conversions. From tri-fold brochures to large format posters, we create marketing collateral that captures attention and effectively communicates your message to your target audience."
      },
      {
        "title": "Social Media Management",
        "description": "Comprehensive social media management packages designed to maximize your online presence. Choose from our Private, Sergent, or General packages, each tailored to different business needs. We create consistent, on-brand graphics optimized for Instagram, Facebook, LinkedIn, Twitter, and more, ensuring your brand looks professional across all digital channels. Our packages include regular content creation, holiday posters, and strategic posting schedules that drive engagement and build your online community."
      },
      {
        "title": "Unlimited Graphic Design Support",
        "description": "Get unlimited graphic design support for all your branding and marketing needs. This comprehensive service ensures you always have access to professional design services whenever you need them. Perfect for businesses that require frequent design updates, new marketing materials, or ongoing creative support without the overhead of an in-house design team."
      },
      {
        "title": "Business Listing & Advertisement",
        "description": "Enhance your business visibility with our professional business listing and advertisement services. We help you get discovered by creating compelling listings and advertisements that showcase your business effectively. Our team ensures your business information is presented professionally across various platforms, helping you attract new customers and grow your reach."
      },
      {
        "title": "Tailor-Made Packages",
        "description": "We understand that every business has unique needs. Our tailor-made packages are designed to fit your specific requirements, budget, and goals. Whether you need a combination of services or a custom solution, we work with you to create a package that perfectly aligns with your business objectives. Contact us today to discuss your needs and discover how we can help elevate your brand."
      },
      {
        "title": "Infographics",
        "description": "Visual storytelling through compelling infographics that make complex information easy to understand. We transform data, statistics, and concepts into engaging visual narratives that improve comprehension and shareability, making your content more accessible to diverse audiences."
      },
      {
        "title": "Presentation Design",
        "description": "Professional presentations that communicate your message powerfully and leave a lasting impression. Whether for client pitches, investor meetings, or internal communications, we design slides that enhance your narrative and support your objectives with compelling visuals."
      }
    ],
    "steps": [
      {
        "title": "Research",
        "description": "We start by understanding your audience, market, and objectives to inform our design decisions. Through competitor analysis, user research, and brand alignment exercises, we gather insights that shape a strategic design direction tailored to your specific goals and audience needs."
      },
      {
        "title": "Concept",
        "description": "We develop creative concepts that align with your brand and effectively communicate your message. Multiple design directions are explored, refined through feedback, and presented with rationale. Each concept balances creativity with strategic thinking to ensure it resonates with your target audience."
      },
      {
        "title": "Execution",
        "description": "We refine and perfect every detail to deliver polished, professional designs that exceed expectations. From typography and color choices to spacing and layout, every element is carefully considered. Final files are delivered in all required formats, ready for immediate use across all platforms."
      }
    ],
    "packages": [
      {
        "name": "Private",
        "features": [
          "1 post per day (weekdays)",
          "1 Saturday poster",
          "1 special holiday poster"
        ]
      },
      {
        "name": "Sergent",
        "features": [
          "2 posts per day (weekdays)",
          "1 Saturday poster",
          "1 special holiday poster"
        ]
      },
      {
        "name": "General",
        "features": [
          "2 posts per day (weekdays)",
          "Saturday & Sunday posters",
          "2 special holiday posters"
        ]
      }
    ]
  },
  {
    "slug": "packaging-design",
    "name": "Packaging Design",
    "tag": "Shelf & retail",
    "statement": "The box is the first thing they hold.",
    "lead": "Boxes, bags, labels and sleeves designed around your product, then printed and finished in Nairobi.",
    "image": "/images/hero/hero6.jpg",
    "items": [
      {
        "title": "Branded Gift Bags",
        "description": "Custom-branded gift bags perfect for retail, events, and corporate gifts. Available in various sizes, materials, and handle options. High-quality printing ensures your brand stands out."
      },
      {
        "title": "Non-Woven Bags",
        "description": "Eco-friendly non-woven bags with your branding. Durable, reusable, and perfect for shopping, events, and promotional purposes. Available in various sizes and colors."
      },
      {
        "title": "Jute Bags",
        "description": "Sustainable jute bags with custom printing and branding. Natural, biodegradable material perfect for eco-conscious brands. Durable and stylish for everyday use."
      },
      {
        "title": "Tote Bags",
        "description": "Versatile tote bags with your custom design and branding. Perfect for shopping, events, and promotional giveaways. Available in various materials including canvas and cotton."
      },
      {
        "title": "Kraft Bags",
        "description": "Eco-friendly kraft paper bags with custom printing. Natural brown finish perfect for sustainable brands. Available in various sizes with custom handles and closures."
      },
      {
        "title": "Product Packaging",
        "description": "Custom product packaging solutions designed to protect and showcase your products. From boxes to pouches, we create packaging that enhances your brand and product presentation."
      },
      {
        "title": "Wine Bags",
        "description": "Elegant wine bags with custom branding perfect for retail, gifts, and events. Available in various sizes to accommodate different bottle sizes with premium finishes."
      },
      {
        "title": "Drawstring Bags",
        "description": "Convenient drawstring bags with your branding. Perfect for events, promotional items, and retail packaging. Available in various materials and sizes."
      },
      {
        "title": "Packaging Boxes",
        "description": "Custom packaging boxes designed to fit your products perfectly. Available in various sizes, materials, and finishes. Custom printing and branding options available."
      },
      {
        "title": "Product Stickers",
        "description": "Custom product stickers for labeling and branding. Weather-resistant options available for various applications. Perfect for product identification and brand promotion."
      },
      {
        "title": "Non-Woven Shopper",
        "description": "Durable non-woven shopper bags with your custom branding. Reusable and eco-friendly, perfect for retail and promotional purposes. Available in various sizes and colors."
      },
      {
        "title": "Pouches",
        "description": "Custom pouches for product packaging and storage. Available in various materials including paper, plastic, and fabric. Custom printing and sealing options available."
      }
    ],
    "steps": [
      {
        "title": "Consultation",
        "description": "We start by understanding what you need, where it will be used, quantities and deadlines, then recommend the right materials and approach."
      },
      {
        "title": "Design",
        "description": "Concepts are shown as realistic mockups and refined with you until the direction is signed off."
      },
      {
        "title": "Production",
        "description": "Colour-checked proofs first, then production tracked against the agreed date."
      },
      {
        "title": "Delivery",
        "description": "A final quality check before your order is packed and delivered to your office or venue."
      }
    ],
    "benefits": [
      {
        "title": "Brand Protection",
        "description": "Packaging that reinforces your brand identity at every touchpoint."
      },
      {
        "title": "Product Safety",
        "description": "Functional designs that ensure your products arrive in perfect condition."
      },
      {
        "title": "Sustainability",
        "description": "Eco-conscious materials and designs that reduce environmental impact."
      },
      {
        "title": "Market Appeal",
        "description": "Packaging that attracts customers and drives purchase decisions."
      }
    ]
  },
  {
    "slug": "printing-services",
    "name": "Printing",
    "tag": "Print production",
    "statement": "Fast, on-demand printing.",
    "lead": "Offset and digital printing, from a box of business cards to large-format banners, colour-checked before every run.",
    "image": "/images/services/printing.jpg",
    "items": [
      {
        "title": "Business Cards",
        "description": "Professional business cards that make a lasting first impression. Available in various finishes including matte, gloss, textured, and premium card stocks. Custom finishing options include rounded corners, spot UV, foil stamping, and embossing."
      },
      {
        "title": "Custom Made Spiral Notebooks",
        "description": "Custom spiral-bound notebooks tailored to your brand and specifications. Available in various sizes, paper types, and cover materials. Perfect for corporate gifts, promotional items, or internal use with your logo and branding."
      },
      {
        "title": "Hard Cover Notebooks",
        "description": "Premium hard cover notebooks with custom designs and branding. Durable hard covers protect your content while showcasing your brand. Available in various sizes with options for lined, blank, or custom-designed pages."
      },
      {
        "title": "Letterheads",
        "description": "Professional letterheads that establish your brand identity in every business communication. Available in various paper stocks and finishes, ensuring consistent brand representation across all correspondence."
      },
      {
        "title": "Branded Envelopes",
        "description": "Matching branded envelopes designed to complement your letterheads and maintain brand consistency. Available in standard sizes with custom printing options for window envelopes and custom addressing."
      },
      {
        "title": "Company Profiles",
        "description": "Professional company profile documents that showcase your business, services, and achievements. Comprehensive printing solutions for corporate presentations, investor materials, and marketing collateral."
      },
      {
        "title": "Menus",
        "description": "Restaurant and cafe menus designed to showcase your offerings attractively. Durable printing with various binding options including spiral, perfect binding, or laminated single sheets. Custom sizes and finishes available."
      },
      {
        "title": "Vouchers",
        "description": "Custom-printed vouchers for promotions, gift certificates, and special offers. Available in various sizes with security features and professional finishing options to prevent duplication."
      },
      {
        "title": "Flyers",
        "description": "Eye-catching flyers designed to grab attention and communicate your message effectively. Available in various sizes, paper weights, and finishes to maximize impact for your marketing campaigns."
      },
      {
        "title": "Invoice Books",
        "description": "Professional invoice books with custom branding and sequential numbering. Available in various formats including duplicate and triplicate books with carbonless paper for efficient record-keeping."
      },
      {
        "title": "Delivery Books",
        "description": "Custom delivery books for tracking shipments and deliveries. Professional printing with custom branding and sequential numbering. Perfect for logistics and delivery businesses."
      },
      {
        "title": "Certificates",
        "description": "Elegant certificates for awards, achievements, and recognition. Printed on premium paper with custom designs and professional finishing options including embossing and foil stamping."
      },
      {
        "title": "Receipt Books",
        "description": "Professional receipt books with custom branding and sequential numbering. Available in duplicate and triplicate formats with carbonless paper for efficient transaction recording."
      },
      {
        "title": "Stickers",
        "description": "Custom stickers in various shapes, sizes, and finishes. Weather-resistant options available for outdoor use. Perfect for product labeling, branding, and promotional purposes."
      },
      {
        "title": "Exam Booklets",
        "description": "Professional exam booklets for educational institutions. Custom-designed covers with secure binding and various page counts. Available in standard or custom sizes."
      },
      {
        "title": "Brochures",
        "description": "Professional brochures designed to showcase your services and products effectively. From tri-fold to multi-page brochures, we handle everything from concept to print with various paper weights and finishes."
      },
      {
        "title": "Invitation Cards",
        "description": "Elegant invitation cards for weddings, corporate events, and special occasions. Premium printing with various finishing options including embossing, foil stamping, and rounded corners."
      },
      {
        "title": "Calendars",
        "description": "Custom calendars with your branding and imagery. Available in various formats including wall calendars, desk calendars, and pocket calendars. Perfect for corporate gifts and promotional items."
      }
    ],
    "steps": [
      {
        "title": "Consultation",
        "description": "We begin with an in-depth consultation to understand your printing needs, quantity requirements, and specifications. Our team helps you choose the right materials, finishes, and printing methods to achieve your desired outcome while staying within budget."
      },
      {
        "title": "Design & Proof",
        "description": "Our experienced team prepares your files for print, ensuring optimal resolution, color accuracy, and print readiness. We provide digital proofs for your approval, allowing you to see exactly how your final product will look before production begins."
      },
      {
        "title": "Production",
        "description": "We use state-of-the-art printing equipment and premium materials to produce your printed materials. Our offset and digital presses ensure sharp, vibrant results with consistent quality across every piece in your order. Quality control is maintained throughout the entire production process."
      },
      {
        "title": "Quality Check",
        "description": "Every piece is carefully inspected to ensure it meets our high standards of quality. We check for color accuracy, print clarity, finishing quality, and overall consistency. Only products that pass our rigorous quality checks are approved for delivery."
      },
      {
        "title": "Delivery",
        "description": "Your finished products are carefully packaged to prevent damage during transit. We offer various delivery options including standard shipping, express delivery, and local pickup. Our packaging ensures your materials arrive in pristine condition, ready for immediate use."
      }
    ]
  },
  {
    "slug": "display",
    "name": "Display & Signage",
    "tag": "Events & retail",
    "statement": "Seen across the room. Up in minutes.",
    "lead": "Roll-up banners, backdrops, stands and signage for shops, launches and exhibitions, built to go up fast.",
    "image": "/images/services/display.jpg",
    "items": [
      {
        "title": "Pull Up Banners",
        "description": "Portable pull-up banners perfect for trade shows, events, and retail displays. Easy to set up and transport with professional printing and custom sizes. Available with various base options."
      },
      {
        "title": "X-Banner",
        "description": "Versatile X-banner displays with cross-frame construction for stability. Perfect for indoor and outdoor events. Lightweight, portable, and easy to assemble with professional printing."
      },
      {
        "title": "Fabric Tablecloths",
        "description": "Custom-printed fabric tablecloths for events, trade shows, and exhibitions. High-quality printing on durable fabric material. Available in various sizes with custom branding."
      },
      {
        "title": "Backdrop",
        "description": "Professional backdrop displays for events, photo shoots, and exhibitions. Custom-printed in large formats with high-resolution graphics. Available in various materials including fabric and vinyl."
      },
      {
        "title": "Stage Banners",
        "description": "Large format stage banners for events, conferences, and presentations. Durable materials with professional printing. Perfect for creating impactful visual statements at events."
      },
      {
        "title": "Door Stand Banner",
        "description": "Eye-catching door stand banners for retail and event spaces. Custom-designed to fit standard door frames with professional printing and durable materials."
      },
      {
        "title": "Flags",
        "description": "Custom-printed flags for outdoor events, retail spaces, and promotional purposes. Weather-resistant materials with vibrant printing. Available in various sizes and mounting options."
      },
      {
        "title": "Teardrop",
        "description": "Teardrop banner displays with unique shape for maximum visibility. Perfect for retail, events, and trade shows. Portable and easy to set up with professional custom printing."
      },
      {
        "title": "Pop Up",
        "description": "Pop-up displays for trade shows and exhibitions. Easy to set up and transport with professional printing. Available in various sizes and configurations to suit your space requirements."
      },
      {
        "title": "Legend A Frame",
        "description": "Professional A-frame displays for outdoor advertising and wayfinding. Weather-resistant materials with custom printing. Perfect for retail, events, and directional signage."
      },
      {
        "title": "Gazebo Tents",
        "description": "Custom-branded gazebo tents for outdoor events, markets, and exhibitions. Professional printing on durable tent materials. Available in various sizes with custom branding options."
      },
      {
        "title": "Parasol",
        "description": "Custom-branded parasols and umbrellas for outdoor events and promotional purposes. High-quality printing on weather-resistant materials. Perfect for creating branded outdoor spaces."
      }
    ],
    "steps": [
      {
        "title": "Consultation",
        "description": "We begin with a comprehensive consultation to understand your display needs, space constraints, and brand requirements. Our team helps you choose the right materials, size, and design approach to achieve maximum impact."
      },
      {
        "title": "Design",
        "description": "Our experienced designers create custom display solutions that align with your brand identity and marketing objectives. We provide detailed 3D renderings and mockups for your approval before production begins."
      },
      {
        "title": "Production",
        "description": "We use high-quality materials and precision manufacturing techniques to build your display solutions. Our production process ensures durability, functionality, and visual excellence that meets your specifications."
      },
      {
        "title": "Installation",
        "description": "Our professional installation team ensures your displays are set up correctly and safely. We handle everything from delivery to final positioning, ensuring your displays look perfect and function as intended."
      }
    ]
  },
  {
    "slug": "office-stationery",
    "name": "Office Stationery",
    "tag": "Business essentials",
    "statement": "Every document from the same company.",
    "lead": "Letterheads, business cards, envelopes and notebooks, printed as one matching set.",
    "image": "/images/services/stationery.jpg",
    "items": [
      {
        "title": "Tape Dispenser",
        "description": "Professional tape dispensers for office use. Available in various sizes and styles with custom branding options."
      },
      {
        "title": "Pencil Sharpener",
        "description": "Durable pencil sharpeners for office and school use. Available in manual and electric models with custom branding."
      },
      {
        "title": "Label",
        "description": "Custom labels for organization, mailing, and branding. Available in various sizes, shapes, and materials with custom printing."
      },
      {
        "title": "Calculator",
        "description": "Professional calculators for office and business use. Available in standard and scientific models with custom branding."
      },
      {
        "title": "Glue",
        "description": "Quality adhesive products for office and craft use. Available in various forms including sticks, liquid, and specialty adhesives."
      },
      {
        "title": "Scissors",
        "description": "Professional scissors for office and craft use. Available in various sizes and styles with custom branding options."
      },
      {
        "title": "Sticky Notes",
        "description": "Custom branded sticky notes for reminders and organization. Available in various sizes and colors with custom printing."
      },
      {
        "title": "Printing Papers",
        "description": "High-quality printing papers for various office needs. Available in different weights, finishes, and sizes to meet your requirements."
      },
      {
        "title": "Notebook",
        "description": "Custom branded notebooks for notes, meetings, and daily use. Available in various sizes, binding styles, and covers with custom printing."
      },
      {
        "title": "Envelope",
        "description": "Professional envelopes for business correspondence. Available in standard sizes with custom printing and window options."
      },
      {
        "title": "Clipboard",
        "description": "Durable clipboards for mobile work and meetings. Available in various sizes with custom branding options."
      },
      {
        "title": "Folder",
        "description": "Professional folders for document organization and presentation. Available in various styles and materials with custom printing."
      },
      {
        "title": "Wastebasket",
        "description": "Functional wastebaskets for office use. Available in various sizes and materials with custom branding options."
      },
      {
        "title": "Stapler",
        "description": "Reliable staplers for document binding. Available in various sizes and styles including desk and handheld models."
      },
      {
        "title": "Eraser",
        "description": "Quality erasers for writing and drawing. Available in various types including pencil erasers and correction tapes."
      },
      {
        "title": "Push-Pin",
        "description": "Practical push pins for bulletin boards and cork boards. Available in various colors and styles with custom branding."
      },
      {
        "title": "Paper Clip",
        "description": "Essential paper clips for document organization. Available in various sizes and materials including standard and colored options."
      },
      {
        "title": "Rubber Stamp",
        "description": "Custom rubber stamps for official documents and correspondence. Available with custom text and logos."
      },
      {
        "title": "Highlighter",
        "description": "Vibrant highlighters for text marking and organization. Available in various colors and styles with custom branding."
      },
      {
        "title": "Fountain Pen",
        "description": "Premium fountain pens for professional writing. Available in various styles and finishes with custom engraving."
      },
      {
        "title": "Pencil",
        "description": "Quality pencils for writing and drawing. Available in various grades and styles including mechanical and wooden pencils."
      },
      {
        "title": "Marker",
        "description": "Permanent and dry-erase markers for various applications. Available in various colors and tip sizes with custom branding."
      },
      {
        "title": "Ballpoint",
        "description": "Reliable ballpoint pens for everyday writing. Available in various colors and styles with custom logo printing."
      },
      {
        "title": "Bulldog Clip",
        "description": "Strong bulldog clips for document binding and organization. Available in various sizes with custom branding options."
      }
    ],
    "steps": [
      {
        "title": "Consultation",
        "description": "We begin with a detailed consultation to understand your brand requirements, preferred styles, and stationery needs. Our team helps you choose the right paper stocks, finishes, and printing methods to match your brand identity."
      },
      {
        "title": "Design",
        "description": "Our experienced designers create custom stationery designs that align with your brand guidelines. We ensure consistency across all stationery items, creating a cohesive brand identity that reflects your business values."
      },
      {
        "title": "Production",
        "description": "We use premium paper stocks and high-quality printing techniques to produce your stationery. Our production process ensures sharp, vibrant results with consistent color accuracy across all items in your stationery set."
      },
      {
        "title": "Delivery",
        "description": "Your finished stationery is carefully packaged to prevent damage during transit. We offer various delivery options including standard shipping, express delivery, and local pickup to ensure your stationery arrives in pristine condition."
      }
    ]
  },
  {
    "slug": "workwear",
    "name": "Workwear",
    "tag": "Uniforms & apparel",
    "statement": "Your team, wearing the brand well.",
    "lead": "Branded uniforms, T-shirts, caps and safety wear, printed or embroidered for teams of any size.",
    "image": "/images/services/workwear.jpg",
    "items": [
      {
        "title": "Corporate Shirts",
        "description": "Professional corporate shirts designed for business environments. Available in various styles, colors, and sizes with custom branding options."
      },
      {
        "title": "Formal Shirts and Blouses",
        "description": "Elegant formal shirts and blouses for professional settings. Premium quality fabrics with custom tailoring and branding options."
      },
      {
        "title": "Golf Shirts",
        "description": "Comfortable golf shirts perfect for casual corporate wear or team uniforms. Available in various colors with custom logo embroidery or printing."
      },
      {
        "title": "Dustcoats",
        "description": "Professional dustcoats for laboratory, medical, or industrial environments. Durable materials with custom sizing and branding options."
      },
      {
        "title": "Food Safety Jackets",
        "description": "Hygienic food safety jackets designed for kitchen and food service environments. Compliant with safety standards and available with custom branding."
      },
      {
        "title": "Chef Beanies",
        "description": "Professional chef beanies for kitchen staff. Comfortable, hygienic, and available with custom embroidery or printing."
      },
      {
        "title": "T-Shirts",
        "description": "Custom branded t-shirts for teams, events, or promotional purposes. Available in various colors, sizes, and fabric options with custom printing."
      },
      {
        "title": "Guards Attire",
        "description": "Professional security guard uniforms designed for authority and visibility. Durable materials with custom branding and sizing options."
      },
      {
        "title": "Bush Attire",
        "description": "Durable bush and outdoor workwear designed for rugged environments. Weather-resistant materials with custom branding options."
      },
      {
        "title": "Chef Attire",
        "description": "Complete chef uniform sets including jackets, pants, and accessories. Professional kitchen wear with custom branding options."
      },
      {
        "title": "Caps",
        "description": "Custom branded caps for teams, events, or promotional purposes. Available in various styles, colors, and materials with embroidery or printing options."
      },
      {
        "title": "Beanies",
        "description": "Warm and comfortable beanies with custom branding. Perfect for outdoor work or promotional giveaways. Available in various colors and materials."
      },
      {
        "title": "Rainwear",
        "description": "Waterproof rainwear for outdoor workers. Durable and weather-resistant materials with custom sizing and branding options."
      },
      {
        "title": "Half Aprons",
        "description": "Functional half aprons for hospitality, retail, or kitchen environments. Available with custom printing or embroidery."
      },
      {
        "title": "Full Aprons",
        "description": "Comprehensive full aprons for maximum protection in kitchen or workshop environments. Custom sizing and branding available."
      },
      {
        "title": "Reflective Coats",
        "description": "High-visibility reflective coats for safety in low-light conditions. Meets safety standards with custom branding options."
      },
      {
        "title": "Reflective Hats and Jackets",
        "description": "Complete reflective safety gear including hats and jackets. Ensures visibility and safety with custom branding options."
      },
      {
        "title": "Buffs",
        "description": "Versatile buffs for neck protection, face covering, or headwear. Available in various colors with custom printing options."
      },
      {
        "title": "Hoodies",
        "description": "Comfortable branded hoodies for teams or casual corporate wear. Available in various colors, sizes, and materials with custom printing."
      },
      {
        "title": "Rego Jackets",
        "description": "Professional rego jackets for corporate or team use. Custom sizing and branding options available."
      },
      {
        "title": "Conti Suits",
        "description": "Professional conti suits for industrial or workshop environments. Durable materials with custom sizing options."
      },
      {
        "title": "Freezer Jackets",
        "description": "Insulated freezer jackets for cold storage environments. Warm and protective with custom sizing and branding options."
      },
      {
        "title": "Body Warmers",
        "description": "Insulated body warmers for cold weather work. Comfortable and warm with custom branding options."
      },
      {
        "title": "Jackets",
        "description": "Versatile jackets for various work environments. Available in multiple styles with custom sizing and branding options."
      },
      {
        "title": "Gum Boots",
        "description": "Durable gum boots for wet or muddy work environments. Safety-certified options available with custom branding."
      },
      {
        "title": "Safety Boots",
        "description": "Protective safety boots meeting industry safety standards. Various styles available with custom sizing options."
      },
      {
        "title": "Branded Canvas Sneakers",
        "description": "Comfortable branded canvas sneakers for casual work environments. Custom logo printing available on various styles."
      }
    ],
    "steps": [
      {
        "title": "Consultation",
        "description": "We begin with a comprehensive consultation to understand your workwear needs, brand requirements, and team specifications. Our team helps you choose the right fabrics, styles, and branding options."
      },
      {
        "title": "Design",
        "description": "Our experienced designers create custom workwear designs that align with your brand identity. We ensure consistent branding across all workwear items while maintaining comfort and functionality."
      },
      {
        "title": "Production",
        "description": "We work with trusted suppliers to produce high-quality workwear that meets your specifications. Our production process ensures durability, comfort, and accurate brand representation."
      },
      {
        "title": "Delivery",
        "description": "Your finished workwear is carefully packaged and delivered to your location. We ensure proper sizing, quality checks, and timely delivery to meet your team’s needs."
      }
    ]
  },
  {
    "slug": "promotional-items",
    "name": "Promotional Items",
    "tag": "Branded merchandise",
    "statement": "Merchandise people actually keep.",
    "lead": "Branded merchandise that increases visibility and loyalty, from corporate gifts to event giveaways. The range changes with the season, type and brand, so ask for the latest items and we’ll guide you on what fits.",
    "image": "/images/services/promotional_items.jpg",
    "items": [
      {
        "title": "Umbrellas",
        "description": "High-quality branded umbrellas perfect for rainy seasons. Available in various sizes and styles with custom logo printing or embroidery."
      },
      {
        "title": "Medals",
        "description": "Custom-designed medals for awards, sports events, and recognition ceremonies. Available in various metals and finishes with custom engraving."
      },
      {
        "title": "Awards",
        "description": "Elegant award plaques and trophies for corporate recognition, employee achievements, and special occasions. Custom-designed with your branding."
      },
      {
        "title": "Tumblers",
        "description": "Durable branded tumblers for hot and cold beverages. Available in various sizes and materials with custom logo printing or engraving."
      },
      {
        "title": "Ceramic Mugs",
        "description": "Classic ceramic mugs with custom branding. Perfect for office use or corporate gifts. Available in various sizes and colors."
      },
      {
        "title": "Lunch Boxes",
        "description": "Stylish branded lunch boxes for daily use. Available in various sizes and materials with custom logo printing."
      },
      {
        "title": "Lanyards",
        "description": "Custom branded lanyards for ID cards, keys, and event badges. Available in various colors and materials with custom printing."
      },
      {
        "title": "Thermo Flasks",
        "description": "High-quality insulated thermo flasks that keep beverages hot or cold. Perfect for on-the-go professionals with custom branding options."
      },
      {
        "title": "Thermo Mugs",
        "description": "Insulated thermo mugs for beverages. Available in various sizes and styles with custom logo printing or engraving."
      },
      {
        "title": "Lunch Bags",
        "description": "Practical branded lunch bags for daily commutes. Available in various sizes and materials with custom logo printing."
      },
      {
        "title": "Bottle Opener",
        "description": "Practical branded bottle openers for events and corporate gifts. Available in various materials with custom engraving or printing."
      },
      {
        "title": "Key Holder",
        "description": "Functional branded key holders for organization. Available in various styles and materials with custom logo printing."
      },
      {
        "title": "Water Bottles",
        "description": "Eco-friendly branded water bottles for daily hydration. Available in various sizes and materials with custom logo printing."
      },
      {
        "title": "Cups",
        "description": "Versatile branded cups for various occasions. Available in various sizes, materials, and styles with custom branding."
      },
      {
        "title": "Cutlery Set",
        "description": "Premium branded cutlery sets for office or home use. Available in various materials with custom engraving or packaging."
      },
      {
        "title": "Memory Stick",
        "description": "Practical branded USB memory sticks for data storage. Available in various capacities with custom logo printing."
      },
      {
        "title": "Business Card Holder",
        "description": "Elegant branded business card holders for professional networking. Available in various materials with custom engraving."
      },
      {
        "title": "Gates Card Holder and Money Clip",
        "description": "Premium combination card holder and money clip for wallets. Available in various materials with custom branding."
      },
      {
        "title": "Passport Travel",
        "description": "Travel accessories including passport holders and travel wallets. Available in various styles with custom logo printing."
      },
      {
        "title": "Gift Sets",
        "description": "Curated branded gift sets for corporate gifting. Customizable combinations of promotional items tailored to your brand."
      },
      {
        "title": "Golf Sets",
        "description": "Premium branded golf accessories and sets for golf enthusiasts. Available in various combinations with custom branding."
      },
      {
        "title": "Branded Vehicle Emergency Kit",
        "description": "Comprehensive vehicle emergency kits with custom branding. Essential safety items for vehicles with your logo."
      },
      {
        "title": "Coasters",
        "description": "Stylish branded coasters for desks and tables. Available in various materials and designs with custom logo printing."
      },
      {
        "title": "Wine Tote",
        "description": "Elegant branded wine totes for wine bottles. Perfect for corporate gifts and events with custom logo printing."
      },
      {
        "title": "Pens",
        "description": "Quality branded pens for everyday use. Available in various styles and colors with custom logo printing or engraving."
      },
      {
        "title": "Bluetooth Speakers",
        "description": "Premium branded Bluetooth speakers for audio experiences. Available in various sizes with custom logo printing."
      },
      {
        "title": "Folders",
        "description": "Professional branded folders for document organization. Available in various sizes and materials with custom logo printing."
      }
    ],
    "steps": [
      {
        "title": "Consultation",
        "description": "We begin with a detailed consultation to understand your promotional goals, target audience, and budget. Our team helps you choose the right products that align with your brand and marketing objectives."
      },
      {
        "title": "Design",
        "description": "Our experienced designers create custom branding solutions for your promotional items. We ensure your logo and brand message are prominently displayed while maintaining product appeal."
      },
      {
        "title": "Production",
        "description": "We work with trusted suppliers to produce high-quality promotional products that meet your specifications. Our production process ensures accurate branding and timely delivery."
      },
      {
        "title": "Delivery",
        "description": "Your finished promotional items are carefully packaged and delivered to your location. We ensure quality checks and timely delivery to meet your event deadlines or distribution needs."
      }
    ]
  },
  {
    "slug": "fun-times",
    "name": "Fun Times",
    "tag": "Events & team building",
    "statement": "Events that bring your brand to life.",
    "lead": "Team building, company days and outdoor events, planned and run from start to finish.",
    "image": "/images/services/funtimes.jpg",
    "items": [
      {
        "title": "Office Parties",
        "description": "Memorable office parties that bring your team together and boost morale. From themed celebrations to holiday parties, we plan and execute events that create lasting memories and strengthen team bonds."
      },
      {
        "title": "Team Buildings",
        "description": "Engaging team building activities designed to improve communication, collaboration, and team spirit. We organize interactive workshops, games, and activities that foster stronger working relationships."
      },
      {
        "title": "Conference and Expos",
        "description": "Professional conference and expo management services. We handle venue selection, logistics, registration, branding, and all aspects of event coordination to ensure your conference runs smoothly."
      },
      {
        "title": "Outdoor Events",
        "description": "Exciting outdoor events including company picnics, adventure activities, and team outings. We plan and manage outdoor experiences that combine fun with team bonding in beautiful natural settings."
      }
    ],
    "steps": [
      {
        "title": "Consultation",
        "description": "We begin with a comprehensive consultation to understand your event goals, budget, guest count, and preferences. Our team helps you choose the right event type, venue, and activities to achieve your objectives."
      },
      {
        "title": "Planning",
        "description": "Our experienced event planners create detailed event plans covering all aspects from venue selection and catering to entertainment and logistics. We handle every detail to ensure a seamless event experience."
      },
      {
        "title": "Execution",
        "description": "On the day of your event, our team manages all aspects of execution including setup, coordination, and troubleshooting. We ensure everything runs smoothly so you can focus on enjoying the event."
      },
      {
        "title": "Follow-up",
        "description": "After your event, we provide feedback and follow-up to ensure your satisfaction. We also help with post-event activities and gather insights to make future events even better."
      }
    ]
  }
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)

/** Portfolio filter each service maps to (Route to 10, item 014). */
export const serviceCategory: Record<string, string | undefined> = {
  'brand-identity': 'Branding',
  'graphic-design': 'Design',
  'packaging-design': 'Packaging',
  'printing-services': 'Print',
  display: 'Display',
  'office-stationery': 'Print',
}
