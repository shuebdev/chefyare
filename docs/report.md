# Chef Yare Restaurant Website

A responsive restaurant web application built with **HTML**, **CSS**, and **Vanilla JavaScript**. The application allows users to browse meals, desserts, and cakes, manage a shopping cart, and place orders through a simple checkout flow.

---

# Project Overview

The primary objective of this project is to build a clean, scalable, and maintainable restaurant ordering system before integrating a backend.

Current focus is on creating a solid frontend architecture with reusable JavaScript modules, responsive layouts, and a smooth user experience.

The application currently supports:

- Dynamic product rendering
- Product detail pages
- Shopping cart
- Local Storage persistence
- Quantity management
- Category organization
- Responsive design

---

# Technologies

- HTML5
- CSS3
- Vanilla JavaScript (ES6)
- Local Storage API

---

# Project Structure

```
CHEFYARE/
│
├── CSS/
│   ├── 404.css
│   ├── about.css
│   ├── cart.css
│   ├── global.css
│   ├── index.css
│   ├── menu.css
│   ├── order.css
│   ├── product.css
│   └── reset.css
│
├── docs/
│   ├── architecture.md
│   ├── dev-log.md
│   ├── report.md
│   └── roadmap.md
│
├── images/
│
├── js/
│   ├── cart.js
│   ├── filter.js
│   ├── form.js
│   ├── index.js
│   ├── menu.js
│   ├── product.js
│   └── render.js
│
├── 404.html
├── about.html
├── index.html
├── menu.html
├── order.html
└── product.html
```

---

# Application Flow

```
Home Page
     │
     ▼
Menu Page
     │
     ▼
Product Details
     │
     ▼
Add To Cart
     │
     ▼
Local Storage
     │
     ▼
Cart
     │
     ▼
Checkout
```

---

# Current Features

## Home Page

- Responsive navigation
- Hero section
- Featured products
- Categories
- Responsive layout

---

## Menu

- Dynamically renders all products
- Uses JavaScript rendering functions
- Responsive product grid

---

## Product Details

- Product information
- Product image
- Quantity selector
- Size selection
- Add to Cart

---

## Shopping Cart

Implemented features:

- Add products
- Remove products
- Increase quantity
- Decrease quantity
- Total price calculation
- Empty cart state
- Checkout button visibility
- Cart overlay
- Disable page scrolling when cart is active
- Local Storage persistence

---

# JavaScript Modules

## render.js

Contains reusable rendering functions used throughout the project.

---

## product.js

Responsible for

- Product data
- Product rendering
- Product details
- Product interactions

---

## menu.js

Responsible for

- Initializing the menu page
- Rendering menu products

---

## cart.js

Responsible for

- Cart state
- Cart rendering
- Quantity updates
- Local Storage
- Total calculations
- Empty cart logic
- Checkout visibility
- Overlay handling

---

## filter.js

Responsible for

- Search
- Category filtering
- Rendering filtered products

---

## form.js

Responsible for

- Checkout form
- User validation
- Checkout processing

(Currently under development.)

---

## index.js

Homepage-specific functionality.

---

# Current Development Status

## Completed

- Responsive layouts
- Product rendering
- Product details
- Shopping cart
- Local Storage
- Cart quantity management
- Empty cart handling
- Cart overlay
- Checkout button visibility

---

## Currently In Progress (My Work)

I am currently building:

- Checkout validation
- Customer information validation
- Cart summary inside checkout
- Checkout workflow
- Form validation

If you would like to work on any of these, feel free to do so. Just let me know first so we don't end up implementing the same feature twice.

---

# Tasks I'd Like You To Work On

Please focus mainly on the **system functionality**.

Don't spend much time on styling or visual appearance.

I will handle:

- UI improvements
- Responsiveness
- Animations
- Colors
- Spacing
- Overall user experience

I'd appreciate it if you could concentrate on the application logic.

---

## Task 1 — Search

Implement a search feature.

Requirements:

- Search while typing
- Case insensitive
- Filter products by name
- Display matching products instantly
- Show a "No products found" message when nothing matches

---

## Task 2 — Category Filtering

Implement category filtering.

Requirements:

- Clicking a category displays only products in that category.
- "All" displays every product.
- Search and category filtering should work together without conflicts.
- Rendering should update immediately after filtering.

---

# Future Features

Planned after the current milestone:

- Backend integration
- Database
- User authentication
- Payment gateway
- Order management
- Admin dashboard
- Customer accounts
- Favorites
- Order history

---

# Documentation

Please read the documentation inside the **docs/** folder before making changes.

Included documentation:

- architecture.md
- roadmap.md
- report.md
- dev-log.md

These documents explain the project architecture, development progress, and future plans.

---

# Git Workflow

1. Create or use your working branch.
2. Commit changes with meaningful commit messages.
3. Push your branch.
4. Open a Pull Request or let me review the implementation before merging.


# Notes

The project is still under active development.

My current priority is completing the checkout system.

If possible, please focus on the search functionality and category filtering.

Don't worry too much about the UI. It doesn't need to look perfect yet—the priority is building a clean, maintainable, and reliable system. I'll take care of the visual design once the functionality is complete.

Thank you for taking the time to contribute to the project.