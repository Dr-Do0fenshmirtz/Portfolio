export default function ProjectCard({ title, description, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        border: '1px solid #ccc',
        padding: '20px',
        margin: '10px',
        borderRadius: '10px',
        cursor: 'pointer',
        width: '250px',
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <span style={{ color: 'blue' }}>Click to view</span>
    </div>
  )
}
