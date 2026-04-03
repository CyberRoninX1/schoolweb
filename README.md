# Mahawilacchiya National School Website

A modern, responsive, and feature-rich website for Mahawilacchiya National School, built with HTML, CSS, and JavaScript. The website showcases the school's academic programs, facilities, admissions process, gallery, and contact information.

## 🌐 Live Demo

[View Live Website](https://schoolweb-eta.vercel.app)

## 📋 Project Structure
school-website/
├── index.html # Home page
├── about.html # About Us page
├── academics.html # Academics page
├── admissions.html # Admissions page
├── gallery.html # Photo gallery page
├── contact.html # Contact page
├── css/
│ └── style.css # Main stylesheet
├── js/
│ └── main.js # JavaScript functionality
├── images/ # School images directory
└── assets/ # Additional assets (icons, fonts)


## ✨ Features

- **Fully Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Mobile Menu** - Hamburger menu for mobile navigation
- **Dynamic Gallery** - Filterable image gallery with lightbox functionality
- **Animated Statistics** - Number counter animation when scrolling into view
- **Contact & Admission Forms** - Working form submissions with user feedback
- **Newsletter Subscription** - Email subscription functionality
- **Smooth Scroll Animations** - Elements animate on scroll for better UX
- **Sticky Navigation Bar** - Navbar changes style on scroll
- **Academic Showcase** - Display of curriculum, departments, and facilities

## 🚀 Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with Flexbox, Grid, and CSS animations
- **JavaScript (ES6)** - Interactive features and DOM manipulation
- **Font Awesome 6** - Icon library for visual enhancements
- **Google Fonts (Inter)** - Modern, readable typography

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

## 🔧 Key Functions in `main.js`

| Function | Description |
|----------|-------------|
| `animateStats()` | Triggers number counting animation for statistics |
| Gallery filtering | Filters gallery items by category (campus, events, sports, academic) |
| Lightbox modal | Opens full-size images on click |
| Form submissions | Handles admission, contact, and newsletter forms |
| Scroll animations | Observes elements and fades them in on scroll |
| Mobile menu toggle | Shows/hides navigation on small screens |

## 🖼️ Image Placeholders

The website uses placeholder images from Unsplash and via.placeholder.com. For production, replace these with actual school images in the `/images` folder:

- `images/logo.png` - School logo
- Hero background image
- Gallery images (campus, events, sports, academic)
- About page school building image

## 🚦 Getting Started

### Prerequisites

- Any modern web browser (Chrome, Firefox, Safari, Edge)
- Code editor (VS Code, Sublime Text, etc.) for modifications
- Local server (optional, for testing forms)

### Installation

1. Clone or download the project files
2. Maintain the folder structure as shown above
3. Open `index.html` in your browser

### Running Locally

For the best experience with forms and dynamic content:

```bash
# Using Python's built-in server (if you have Python installed)
python -m http.server 8000

# Or use Live Server extension in VS Code
