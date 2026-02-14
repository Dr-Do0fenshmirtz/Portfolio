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