# Apexella GmbH Company Website

A modern company website built with Next.js 15, featuring a blog-style layout to showcase professional services and case studies.

## 🚀 Technology Stack

- **Framework**: Next.js 15.0.2 with Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Content**: Markdown-based blog posts
- **Font**: Inter (Google Fonts)
- **Features**: Dark mode support, responsive design

## 📁 Project Structure

```
apweb/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── _components/        # Reusable React components
│   │   ├── posts/[slug]/       # Dynamic blog post routes
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout component
│   │   └── page.tsx            # Homepage
│   ├── interfaces/             # TypeScript type definitions
│   └── lib/                    # Utility functions and API logic
├── _posts/                     # Markdown blog posts
├── public/                     # Static assets
│   ├── assets/                 # Images and media
│   └── favicon/               # Favicon files
└── package.json               # Dependencies and scripts
```

## 🛠️ Local Development Setup

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

### Installation Steps

1. **Clone the repository** (if not already done):
   ```bash
   git clone https://github.com/zaneding/apweb.git
   cd apweb
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server

## 🎨 Features

- **Company Branding**: Features Apexella GmbH logo and professional styling
- **Case Studies**: Blog-style posts showcasing client projects (e.g., cosmetic defect inspection)
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Proper meta tags and OpenGraph support
- **Fast Performance**: Next.js 15 with Turbopack for rapid development

## 📝 Content Management

### Adding Blog Posts

1. Create a new markdown file in the `_posts/` directory
2. Use the following frontmatter structure:

```markdown
---
title: "Your Post Title"
excerpt: "Brief description of the post content"
coverImage: "/assets/blog/your-post/cover.jpg"
author:
  name: "Author Name"
ogImage:
  url: "/assets/blog/your-post/cover.jpg"
---

Your post content here...
```

### Adding Images

Place images in `public/assets/blog/[post-name]/` and reference them with absolute paths starting with `/assets/`

## 🔧 Configuration

### Tailwind Configuration
- Custom colors for Apexella brand
- Extended spacing and typography
- Dark mode support via class strategy

### TypeScript Configuration
- Strict mode enabled
- Path aliases configured (`@/*` maps to `./src/*`)
- Next.js plugin integration

## 🚨 Security Note

The project currently has 1 critical security vulnerability detected by npm audit. Run `npm audit fix --force` to address security issues.

## 🌐 Deployment

The site is optimized for deployment on Vercel or similar platforms. The build output is static and can be served from any web server.

## 📞 Company Information

**Apexella GmbH** - Professional Service Provider  
Tagline: "Professional | Passion"

This website showcases the company's expertise in:
- AI/ML solutions for industrial applications
- Computer vision systems
- Quality inspection automation
- Custom software development

---

*For development questions or technical support, refer to the Next.js documentation or contact the development team.*