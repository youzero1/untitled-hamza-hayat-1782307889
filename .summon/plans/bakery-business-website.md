---
status: building
title: Bakery business website with services and contact form
---

1. Set up the global stylesheet at /app/src/styles/global.css so it imports Tailwind CSS v4 and defines a warm bakery palette (soft cream background, deep brown text, accent rose/caramel). Expected outcome: site-wide warm, inviting bakery look ready for all pages.

2. Ensure /app/src/main.tsx imports the global stylesheet once and mounts the root app component. Expected outcome: styles apply across the whole site.

3. Create a top navigation bar component at /app/src/components/NavBar.tsx with the bakery name/logo text on the left and smooth-scroll links on the right (Home, Our Bakes, Contact). On mobile it collapses into a simple stacked menu. Expected outcome: visitors can jump to any section from any screen size.

4. Create a hero section component at /app/src/components/Hero.tsx featuring a large welcoming headline (e.g. "Freshly baked, made with love"), a short tagline, and a primary call-to-action button that scrolls to the contact form. Include a warm background treatment (gradient or placeholder bakery image area). Expected outcome: first-time visitors immediately understand what the business is and where to get in touch.

5. Create a shared type definition at /app/src/types/bakeItem.ts describing a bakery offering (id, name, short description, optional price, optional image placeholder). Expected outcome: a consistent shape for everything shown in the services section.

6. Create a data file at /app/src/lib/bakeryItems.ts that exports a list of starter bakery offerings (e.g. sourdough loaves, croissants, custom celebration cakes, wedding cakes, seasonal pastries, cookie boxes) using the shared type. Expected outcome: easy single place to edit what the bakery sells.

7. Create a card component at /app/src/components/BakeCard.tsx that displays one bakery offering — image area, name, description, and price line if present — styled as a soft rounded card with subtle shadow and hover lift. Expected outcome: each offering looks appetizing and consistent.

8. Create the services section component at /app/src/components/OurBakes.tsx that renders a section heading ("Our Bakes"), a short intro line, and a responsive grid of bakery offering cards (1 column mobile, 2 tablet, 3 desktop). Expected outcome: visitors clearly see what is on offer.

9. Create a contact form component at /app/src/components/ContactForm.tsx with fields for name, email, phone (optional), order type / topic (dropdown — General enquiry, Custom cake, Wholesale, Other), and message. Include client-side validation (required fields, valid email format), a submit button with a loading state, and a friendly success confirmation message after submit. Use a custom hook at /app/src/hooks/useContactForm.ts to manage form state, validation, and the submit lifecycle. For now the submit simulates sending (short delay) since no backend is configured — leave a clear extension point comment. Expected outcome: customers can fill in and submit a message and see confirmation.

10. Create a contact section wrapper at /app/src/components/ContactSection.tsx with a heading ("Get in touch"), a short warm invitation paragraph (e.g. ordering lead times, custom cake enquiries welcome), and the contact form beside it on desktop / stacked on mobile. Expected outcome: contact area feels personal and clear.

11. Create a footer component at /app/src/components/Footer.tsx showing the bakery name, a short tagline, and a copyright line with the current year. Expected outcome: clean closing to the page.

12. Create the home page at /app/src/pages/HomePage.tsx that composes the navigation bar, hero, our bakes section, contact section, and footer in order, each with proper section ids for the nav anchor links. Expected outcome: a single scrollable landing page covering everything.

13. Update /app/src/App.tsx to render the home page. Expected outcome: visiting the site shows the full bakery landing experience.

14. Verify visual polish: generous spacing, readable typography, warm accent colors, smooth scroll behavior, focus styles on interactive elements, and the form is fully usable on a phone. Expected outcome: the site feels professional and welcoming on any device.
