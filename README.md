# Irfan Rizqulloh | Terminal Portfolio

A high-performance, terminal-themed personal portfolio built with **React**, **Vite**, and **Markdown**. Designed with a focus on Cloud Infrastructure, Cybersecurity, and Automation.

## 🚀 Overview

This portfolio is a single-page application (SPA) that delivers a "terminal" aesthetic while maintaining modern web standards. It features a custom-built dynamic content manager that automatically renders articles, projects, and bio information directly from Markdown files.

### Key Features
- **Terminal Aesthetics**: High-contrast, monochromatic design using monospace typography.
- **Dynamic Content Manager**: Automates the loading of Articles, Projects, and About Me sections via `import.meta.glob`.
- **Glossary Tooltips**: Interactive, context-aware tooltips that provide technical definitions for keywords within articles.
- **SEO Optimized**: Fully semantic HTML with proper meta tags for better search engine indexing.
- **Ultra-Lightweight**: Single-file build option (`index.html`) using `vite-plugin-singlefile`.

## 🛠️ Tech Stack

- **Frontend**: React 18, React Router 6
- **Build Tool**: Vite
- **Icons**: Lucide-React, React-Icons
- **Content**: Markdown (React-Markdown)
- **Styling**: Vanilla CSS (Modern CSS Variables)

## 📁 Project Structure

```bash
├── src/
│   ├── data/           # Markdown-based content (Articles, Projects, Bio)
│   ├── pages/          # React Page Components
│   ├── main.jsx        # App entry point
├── public/assets/      # Images and PDF Resume
├── style.css           # Global terminal design system
└── vite.config.js      # Build & Plugin configuration
```

## 💻 Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/irfanr69/personal-profile.git
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```
   *The optimized output will be in the `dist/` directory.*

## 📄 License

This project is open-source and available under the MIT License.
