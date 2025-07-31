import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { theatreProjects, cinemaProjects } from '../data/projects'
import ImageModal from './ImageModal'
import './ProjectDetail.css'

function ProjectDetail() {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const location = window.location.hash
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Determine type from URL path
  const type = location.includes('/theatre/') ? 'theatre' : 'cinema'
  
  // Get project data based on type
  const projects = type === 'theatre' ? theatreProjects : cinemaProjects
  const project = projects[projectId]

  // Handle case where project is not found
  if (!project) {
    return (
      <div className="project-detail">
        <div className="project-not-found">
          <h1>Project Not Found</h1>
          <p>The requested project could not be found.</p>
          <Link to={`/${type}`} className="back-link">
            ← Back to {type === 'theatre' ? 'Theatre' : 'Cinema'}
          </Link>
        </div>
      </div>
    )
  }

  // Modal handlers
  const openModal = (index) => {
    setCurrentImageIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const nextImage = () => {
    if (project.images && project.images.length > 1) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
      )
    }
  }

  const prevImage = () => {
    if (project.images && project.images.length > 1) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
      )
    }
  }

  return (
    <div className="project-detail">
      {/* Navigation */}
      <div className="project-nav">
        <button onClick={() => navigate(-1)} className="back-button">
          ← Back
        </button>
        <div className="breadcrumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to={`/${type}`}>{type === 'theatre' ? 'Theatre' : 'Cinema'}</Link>
          <span>/</span>
          <span>{project.title}</span>
        </div>
      </div>

      {/* Header */}
      <header className="project-header">
        <div className="project-title-section">
          <h1 className="project-title">{project.title}</h1>
          {project.author && <div className="project-author">by {project.author}</div>}
          {project.translation && <div className="project-translation">Translation: {project.translation}</div>}
          {project.project && <div className="project-context">{project.project}</div>}
          <div className="project-meta">
            <span className="project-year">{project.year}</span>
            {project.venue && <span className="project-venue">{project.venue}</span>}
            {project.director && <span className="project-director">Dir. {project.director}</span>}
            {project.role && <span className="project-role">Role: {project.role}</span>}
            {project.runtime && <span className="project-runtime">{project.runtime}</span>}
            {project.country && <span className="project-country">{project.country}</span>}
            {project.genre && <span className="project-genre">{project.genre}</span>}
            {project.language && <span className="project-language">{project.language}</span>}
            {project.studio && <span className="project-studio">{project.studio}</span>}
            {project.status && (
              <span className={`project-status ${project.status}`}>
                {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
              </span>
            )}
          </div>
          {project.imdb && (
            <div className="project-links">
              <a href={project.imdb} target="_blank" rel="noopener noreferrer" className="imdb-link">
                View on IMDb
              </a>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="project-content">
        {/* Image Gallery */}
        <section className="image-gallery">
          <h2>Gallery</h2>
          <div className="gallery-grid">
            {project.images?.map((image, index) => (
              <div key={index} className="gallery-item">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="gallery-image clickable-image"
                  onClick={() => openModal(index)}
                />
                <div className="image-info">
                  <p className="image-caption">{image.caption}</p>
                </div>
              </div>
            ))}
            {(!project.images || project.images.length === 0) && (
              <div className="gallery-item">
                <div className="image-placeholder">
                  <span>Images coming soon</span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Description */}
        <section className="project-description">
          <h2>About</h2>
          <div className="description-content">
            {project.fullDescription.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Two Column Layout for Details */}
        <div className="project-details-grid">
          {/* Cast */}
          {project.cast && (
            <section className="project-cast">
              <h2>Cast</h2>
              <ul className="cast-list">
                {project.cast.map((member, index) => (
                  <li key={index} className="cast-member">
                    <span className="role">{member.role}</span>
                    <span className="actor">{member.actor}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Crew */}
          {project.crew && (
            <section className="project-crew">
              <h2>Crew</h2>
              <ul className="crew-list">
                {project.crew.map((member, index) => (
                  <li key={index} className="crew-member">
                    <span className="crew-role">{member.role}</span>
                    <span className="crew-name">{member.name}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Awards */}
          {project.awards && project.awards.length > 0 && (
            <section className="project-awards">
              <h2>Awards & Recognition</h2>
              <ul className="awards-list">
                {project.awards.map((award, index) => (
                  <li key={index} className="award-item">{award}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Festivals */}
          {project.festivals && project.festivals.length > 0 && (
            <section className="project-festivals">
              <h2>Festivals & Tours</h2>
              <ul className="festivals-list">
                {project.festivals.map((festival, index) => (
                  <li key={index} className="festival-item">{festival}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Support */}
          {project.support && project.support.length > 0 && (
            <section className="project-support">
              <h2>Support & Funding</h2>
              <ul className="support-list">
                {project.support.map((supporter, index) => (
                  <li key={index} className="support-item">{supporter}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        images={project.images}
        currentIndex={currentImageIndex}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  )
}

export default ProjectDetail 