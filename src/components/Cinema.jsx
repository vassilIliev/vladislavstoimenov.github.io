import { Link } from 'react-router-dom'
import { cinemaProjects } from '../data/projects'
import './Projects.css'

function Cinema() {
  return (
    <div className="cinema-page">
      <section className="section">
        <h2>Cinema</h2>
        <div className="projects-grid">
          {/* Projects ordered by year - newest first */}
          <div className="project-item">
            <div className="project-title">"The Movie Actor"</div>
            <div className="project-details">Experimental workshop, 2025</div>
          </div>

          <Link to="/cinema/resonance-principle" className="project-item clickable">
            {cinemaProjects['resonance-principle'].images && cinemaProjects['resonance-principle'].images[0] && (
              <div className="project-image">
                <img src={cinemaProjects['resonance-principle'].images[0].src} alt={cinemaProjects['resonance-principle'].images[0].alt} />
              </div>
            )}
            <div className="project-content">
              <div className="project-title">"The Resonance Principle" (short)</div>
              <div className="project-details">Andrey, Dir. Yassen Genadiev, 2023</div>
              <div className="project-description">{cinemaProjects['resonance-principle'].shortDescription}</div>
              <div className="view-more">View Details →</div>
            </div>
          </Link>

          <Link to="/cinema/shakespeare-street-dog" className="project-item clickable">
            {cinemaProjects['shakespeare-street-dog'].images && cinemaProjects['shakespeare-street-dog'].images[0] && (
              <div className="project-image">
                <img src={cinemaProjects['shakespeare-street-dog'].images[0].src} alt={cinemaProjects['shakespeare-street-dog'].images[0].alt} />
              </div>
            )}
            <div className="project-content">
              <div className="project-title">"Shakespeare Like a Street Dog"</div>
              <div className="project-details">Danko (a.k.a. Sheky), Dir. Valeri Yordanov, 2022</div>
              <div className="project-description">{cinemaProjects['shakespeare-street-dog'].shortDescription}</div>
              <div className="view-more">View Details →</div>
            </div>
          </Link>

          <div className="project-item">
            <div className="project-title">Workshop with Mihail Bilalov</div>
            <div className="project-details">2015</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cinema 