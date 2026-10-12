
Sinikiwe Masondo | Personal Portfolio

A responsive, single-page portfolio website built with plain HTML, CSS, and JavaScript. It presents who I am, my technical skills, my projects, and a way to get in touch. The design features a pink light theme and a blue dark theme.

Features:

• Single-Page Layout: Five clean sections including Home, About Me, Skills, Projects, and Contact.
• Glassmorphism Navigation: A floating glass navigation bar that stays fixed at the top while scrolling.
• Smooth Scrolling: Every nav and call-to-action button scrolls smoothly to its target section with a header offset.
• Dynamic Theme Toggle: A moon/sun button switches themes with a short color flash, remembers choices via localStorage, and respects system preferences on first visit.
• Fully Responsive: Fluid design that adapts seamlessly to desktop, tablet, and phone screens.
• Interactive Project Cards: Displays project descriptions, dynamic tech tags, and direct source links to GitHub.
• Interactive Contact Form: Built-in validation animations and custom submission states (see limitations).
• Random Footer Jokes: Dynamically injects a random developer joke on page load, which changes when clicked.
• Accessibility First: Native focus outlines, descriptive form labels, explicit aria-label elements, and prefers-reduced-motion support.

Built With:

HTML5:	Page structure and semantically semantic web content.
CSS3:	Grid/Flexbox layouts, theme switching with variables, glassmorphism, and keyframe animations.
JavaScript:	Vanilla implementation for theme toggles, smooth scroll mechanics, and form validation.


How It Works

index.html

The document is split into explicit <section> blocks mapped by ID attributes (home, about, skills, projects, contact). Navigation utilizes <button> elements connected to JavaScript action hooks (e.g., scroll-to-about).

style.css

• Theme Variables: Global style colors live in :root for the light theme and are systematically overridden under body.dark-mode.
• Layout Engines: CSS Grid runs the About layout, skills grid, and project grid items. Flexbox handles alignment inside the navigation header and individual button sets.
• Breakpoints: Responsive rules are cleanly organized at the bottom of the stylesheet using core breakpoints at 900px and 768px.

app.js

The script initializes entirely inside a DOMContentLoaded event listener and manages four main processes:
1. Theme System: Hooks onto the toggle button to cycle the dark-mode class on the <body> element and commits states to localStorage under portfolio-theme.
2. Smooth Scrolling: Leverages a scrollMappings key-value array pairing button elements directly to section containers.
3. Form Handler: Evaluates empty input field status, transitions UI to a "SENDING..." state, and returns a simulated success response.
4. Joke Engine: Pulls a string randomizer against the footerLines array array upon initial load and subsequent user clicks.


Known Limitations & Roadmap

• Email Engine: Form outputs are currently simulated and require a functional form-to-email handler.
• Placeholder Anchors: Default GitHub links contain placeholder strings that throw 404 errors until updated.
• Active States: Scroll tracking styles are defined in style.css (.active) but need an intersection observer setup in app.js to highlight links dynamically.

Planned Improvements

• Replace placeholder items with live production deployment cards.
• Implement a scroll-spy script to auto-highlight active navigation blocks.
• Add a direct link to download an updated resume/CV document.
• Include fixed footer profile anchors for LinkedIn and GitHub networks.


Author

Sinikiwe Masondo
Second-year System Development Student, Gauteng City College
Copyright © 2026 Sinikiwe Masondo. All Rights Reserved.
