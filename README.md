# 🍎 macOS Portfolio

A stunning, interactive portfolio website that replicates the macOS Big Sur interface using React and Tailwind CSS. Features a fully functional window management system, authentic macOS design, and smooth animations.

![macOS Portfolio](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.19-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## ✨ Features

### 🖥️ Authentic macOS Interface
- **MenuBar**: Functional menu items (Projects, Contact, Resume) with hover effects
- **Dock**: Interactive app launcher with real macOS icons and tooltips
- **Desktop**: Beautiful gradient background with animated welcome text
- **Windows**: Draggable, resizable windows with minimize/close controls

### 📱 Portfolio Apps
- **Finder**: Browse projects with sidebar navigation and detailed views
- **Photos**: Project gallery with image previews
- **Safari**: Quick links to favorite websites and resources
- **Resume Viewer**: PDF resume display
- **Contact**: Contact form with social media links
- **Terminal**: Tech stack showcase with command-line aesthetic

### 🎨 Design Highlights
- Glassmorphism effects throughout
- Smooth animations and transitions
- Authentic macOS icons (converted from .icns)
- Responsive window management
- Z-index stacking for multiple windows
- Hover animations on interactive elements

## 🚀 Live Demo

**[View Live Portfolio](https://manishportfolio-gamma.vercel.app)** 🌐

## 📸 Screenshots

### Desktop View
![Desktop View](./screenshots/desktop.png)

### Multiple Windows
![Multiple Windows](./screenshots/windows.png)

## 🛠️ Technologies Used

- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool and dev server
- **Tailwind CSS 3.4.19** - Utility-first CSS framework
- **Lucide React** - Icon library
- **GSAP** - Animation library
- **React Draggable** - Drag functionality

## 📦 Installation

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/macos-portfolio.git
   cd macos-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🏗️ Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

The build output will be in the `dist/` directory.

## 📁 Project Structure

```
macos-portfolio/
├── public/
│   ├── icons/          # macOS app icons
│   ├── Resume.pdf      # Resume file
│   └── profilej.jpg    # Profile image
├── src/
│   ├── apps/           # Portfolio app components
│   │   ├── Contact.jsx
│   │   ├── Photos.jsx
│   │   ├── ResumeViewer.jsx
│   │   ├── Safari.jsx
│   │   └── Terminal.jsx
│   ├── components/     # Core UI components
│   │   ├── Desktop.jsx
│   │   ├── DesktopIcon.jsx
│   │   ├── Dock.jsx
│   │   ├── MenuBar.jsx
│   │   ├── NewFinder.jsx
│   │   └── Window.jsx
│   ├── data/           # Portfolio data
│   │   └── portfolio.js
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## 🎯 Key Features Explained

### Window Management
- Custom drag implementation without external libraries
- Z-index management for window stacking
- Minimize/maximize/close functionality
- Focus management when clicking windows

### MenuBar
- Live clock with real-time updates
- Functional menu items that open corresponding apps
- System icons (WiFi, Battery)
- Glassmorphism backdrop blur effect

### Dock
- Hover effects with tooltips
- Active app indicators
- Opens/focuses windows on click
- Real macOS icons

### Desktop
- Animated welcome text with hover effects
- Gradient background matching macOS Big Sur
- Desktop folder icons
- Pointer-events management for interactivity

## 🎨 Customization

### Update Personal Information

1. **Contact Information** (`src/apps/Contact.jsx`)
   - Update email, phone, location
   - Add your social media links

2. **Projects** (`src/data/portfolio.js`)
   - Add your projects with descriptions
   - Include technologies used
   - Add project links and images

3. **Resume** (`public/Resume.pdf`)
   - Replace with your own resume PDF

4. **Profile Image** (`public/profilej.jpg`)
   - Replace with your profile photo

5. **Tech Stack** (`src/apps/Terminal.jsx`)
   - Update with your technologies

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Vercel will automatically detect Vite and configure the build settings.

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click "Deploy"

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Manish Kumar**
- Portfolio: [manishportfolio-gamma.vercel.app](https://manishportfolio-gamma.vercel.app)
- GitHub: [@Manish7194](https://github.com/Manish7194)
- LinkedIn: [Manish Kumar](https://www.linkedin.com/in/manish-kumar1108/)

## 🙏 Acknowledgments

- macOS design inspiration from Apple Inc.
- Icons converted from official macOS .icns files
- Built with modern web technologies

## 📧 Contact

For any questions or suggestions, feel free to reach out:
- Portfolio: [manishportfolio-gamma.vercel.app](https://manishportfolio-gamma.vercel.app)
- LinkedIn: [Manish Kumar](https://www.linkedin.com/in/manish-kumar1108/)
- GitHub: [@Manish7194](https://github.com/Manish7194)

---

⭐ If you like this project, please give it a star on GitHub!
