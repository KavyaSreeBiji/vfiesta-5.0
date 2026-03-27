# V-Fiesta 5.0 Demo

Welcome to the official repository for **V-Fiesta 5.0 Demo**! This project is a modern, responsive, and highly interactive single-page application (SPA) built to showcase the event's details, schedule, events, and registration.

[**View Live Site**](https://vfiesta-5-0.vercel.app/)

##  Features

- **Modern & Premium UI:** Built with sleek aesthetics, vibrant gradients, and glassmorphism elements.
- **Dynamic Animations:** Features custom cursor tracking, scroll-reveal animations, and dynamic hover effects.
- **Live Countdown Timer:** A dynamic ticking countdown to the kickoff date (April 18, 2025).
- **Interactive Schedule Navigation:** A mobile-responsive vertical and horizontal event timeline across multiple days.
- **Fully Responsive:** Carefully crafted native CSS media queries to ensure a flawless experience across all devices (mobile, tablet, and desktop).

##  Tech Stack

- **Framework:** [React 18](https://reactjs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** Vanilla CSS (`index.css`) with structured CSS variables for a consistent design system.
- **Deployment:** [Vercel](https://vercel.com/)

##  Getting Started

To run this project locally, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/KavyaSreeBiji/vfiesta-5.0.git
   ```
2. Navigate into the project directory:
   ```bash
   cd vfiesta-react
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server
Start the local Vite development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173/` (or the port specified in your terminal).

### Production Build
To create an optimized production build of the website:
```bash
npm run build
```
Once built, you can preview the production bundle locally over a static server:
```bash
npm run preview
```

##  Project Structure

- `src/components/` - Contains all modular UI components (`Navbar.jsx`, `Hero.jsx`, `Schedule.jsx`, `About.jsx`, etc.)
- `src/index.css` - Global stylesheet handling all custom aesthetics, layout, animations, and responsiveness.
- `src/App.jsx` - Root application component that assembles all sections.

---

