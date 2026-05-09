# Business Website Development Guide (Next.js)

## 🎨 Theme & Design System
- **Primary Color**: `#0052c9` (deep blue)
- **Accent Color**: `#ff751f` (orange)
- **Typography**: Inter or Poppins (Google Fonts).
- **Spacing**: Use Tailwind spacing scale (`p-8`, `m-6`, etc.).
- **Components**: Build reusable components for uniform design:
  - `Layout`, `Navbar`, `Footer`
  - `Hero`, `Section`, `Button`, `Card`, `Form`

---

## 🧩 Components

### Layout
- Wraps all pages with `<Navbar />` and `<Footer />`.
- Provides consistent background and padding.
- Example:
  ```tsx
  export default function Layout({ children }) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </>
    );
  }
  ```

### Navbar
- Sticky top navigation.
- Links: Home, Services, Portfolio, Careers, About, Contact.
- Active link highlighted with `accent` color.

### Footer
- Company info, quick links, social media icons.
- Background: `primary`, text: white.

### Hero
- Large headline, subtext, CTA button.
- Background: `primary`, text: white.
- CTA button styled with `accent`.

### Section
- Wrapper for consistent spacing.
- Props: `title`, `children`.
- Example:
  ```tsx
  export default function Section({ title, children }) {
    return (
      <section className="py-16 px-8">
        <h2 className="text-3xl font-bold text-primary mb-8">{title}</h2>
        {children}
      </section>
    );
  }
  ```

### Button
- Variants: `primary`, `accent`.
- Uniform padding, rounded corners, hover states.

### Card
- Used for services, testimonials, job postings.
- Props: `title`, `description`, `image`.

### Form
- Contact form with validation (name, email, message).
- Submit via API route (`pages/api/contact.ts`).

---

## 📂 Pages & Sections

### 1. Landing Page (`pages/index.tsx`)
- **Hero Section**: Headline + CTA “Hire Us”.
- **Services Section**: 3–4 cards (Websites, Mobile Apps, Desktop Apps).
- **Portfolio Highlights**: Grid of past projects (Hotel booking, Nursing school, Gangakoshi Agritech).
- **Testimonials & Clients**: Quotes + client logos carousel.
- **Contact Form**: At bottom, styled with `accent` button.

### 2. Services Page (`pages/services.tsx`)
- Detailed breakdown of offerings.
- Each service in a `Card` with icon/illustration.
- CTA: “Request a Quote” button.

### 3. Portfolio Page (`pages/portfolio.tsx`)
- Showcase projects with screenshots.
- Include tech stack badges (React, Next.js, Node.js).
- Short case study: problem → solution → outcome.

### 4. Careers Page (`pages/careers.tsx`)
- Job postings (map over JSON data).
- Each posting: title, description, apply button.
- Section: “Why Work With Us” (culture, benefits).
- CTA: “Apply Now” button styled with `accent`.

### 5. About Page (`pages/about.tsx`)
- Mission statement: helping companies build scalable digital solutions.
- Team bios/photos.
- Vision & values (innovation, reliability, accessibility).

### 6. Contact Page (`pages/contact.tsx`)
- Contact form (name, email, message).
- Business email, phone, office address.
- Map embed (Google Maps iframe).

---

## 🔧 Additional Setup
- **SEO**: Use `next-seo` for meta tags.
- **Forms**: Configure API route for contact form submissions.
- **Dynamic Data**: Store careers and portfolio data in JSON or CMS.
- **Animations**: Use Framer Motion for smooth transitions.
- **Uniform Design**: All sections wrapped in `Section` component.

---

## 🚀 Deployment
- Build: `npm run build`
- Start: `npm run start`
- Deploy: Vercel or Netlify recommended.

```

---