// React Portfolio Project Template (Vite)
// All files included in one document. Copy them into proper file paths.

// ==========================
// index.html
// ==========================
// FILE: index.html
/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Portfolio</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
*/

// ==========================
// main.jsx
// ==========================
// FILE: src/main.jsx
/*
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
*/

// ==========================
// App.jsx
// ==========================
// FILE: src/App.jsx
/*
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
*/

// ==========================
// Navbar.jsx
// ==========================
// FILE: src/components/Navbar.jsx
/*
export default function Navbar() {
  return (
    <nav style={{ padding: '20px', display:'flex', gap:'20px', background:'#222', color:'white' }}>
      <h2>My Portfolio</h2>
      <a href="#about" style={{ color:'white' }}>About</a>
      <a href="#projects" style={{ color:'white' }}>Projects</a>
      <a href="#contact" style={{ color:'white' }}>Contact</a>
    </nav>
  )
}
*/

// ==========================
// Hero.jsx
// ==========================
// FILE: src/components/Hero.jsx
/*
export default function Hero() {
  return (
    <section style={{ padding:'60px', textAlign:'center' }}>
      <h1>Hello, I'm Naman Jain</h1>
      <p>Full Stack Developer — React & Java</p>
    </section>
  )
}
*/

// ==========================
// About.jsx
// ==========================
// FILE: src/components/About.jsx
/*
export default function About() {
  return (
    <section id="about" style={{ padding:'60px' }}>
      <h2>About Me</h2>
      <p>I am a developer skilled in React, Java, Spring Boot, and DevOps tools.</p>
    </section>
  )
}
*/

// ==========================
// project data file
// ==========================
// FILE: src/data/projects.js
/*
export const projects = [
  {
    title: "Task Manager",
    description: "React + Spring Boot application",
    link: "https://github.com/yourname/task-manager",
  },
  {
    title: "Portfolio Website",
    description: "Personal site built using React",
    link: "https://yourwebsite.com",
  },
]
*/

// ==========================
// ProjectCard.jsx
// ==========================
// FILE: src/components/ProjectCard.jsx
/*
export default function ProjectCard({ title, description, link }) {
  return (
    <div style={{ border:'1px solid #ccc', padding:'20px', margin:'10px', borderRadius:'10px' }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank">View Project</a>
    </div>
  )
}
*/

// ==========================
// Projects.jsx
// ==========================
// FILE: src/components/Projects.jsx
/*
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" style={{ padding:'60px' }}>
      <h2>My Projects</h2>
      <div style={{ display:'flex', flexWrap:'wrap' }}>
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  )
}
*/

// ==========================
// Contact.jsx
// ==========================
// FILE: src/components/Contact.jsx
/*
export default function Contact() {
  return (
    <section id="contact" style={{ padding:'60px' }}>
      <h2>Contact</h2>
      <p>Email: yourname@gmail.com</p>
      <p>GitHub: github.com/yourname</p>
      <p>LinkedIn: linkedin.com/in/yourname</p>
    </section>
  )
}
*/

// ==========================
// Footer.jsx
// ==========================
// FILE: src/components/Footer.jsx
/*
export default function Footer() {
  return (
    <footer style={{ padding:'20px', textAlign:'center', background:'#222', color:'white' }}>
      © 2025 Naman Jain
    </footer>
  )
}
*/

// ==========================
// index.css
// ==========================
// FILE: src/index.css
/*
* {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}
*/
