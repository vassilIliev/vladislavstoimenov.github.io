import { Link } from 'react-router-dom'
import { theatreProjects } from '../data/projects'
import './Projects.css'

function Theatre() {
  return (
    <div className="theatre-page">
      <section className="section">
        <h2>Stage Directing</h2>
        <div className="projects-grid">
          {/* Projects ordered by year - newest first */}
          <div className="project-item">
            <div className="project-title">"All involved"</div>
            <div className="project-details">Theatro, Sofia (TBA), 2026</div>
          </div>
          <div className="project-item">
            <div className="project-title">"Kazimir & Karoline"</div>
            <div className="project-details">NATFA, Sofia (in process), 2026</div>
          </div>
          
          <Link to="/theatre/tallest-tree" className="project-item clickable">
            {theatreProjects['tallest-tree'].images && theatreProjects['tallest-tree'].images[0] && (
              <div className="project-image">
                <img src={theatreProjects['tallest-tree'].images[0].src} alt={theatreProjects['tallest-tree'].images[0].alt} />
              </div>
            )}
            <div className="project-content">
              <div className="project-title">"The Tallest Tree on Earth"</div>
              <div className="project-details">Derida Stage, Sofia, 2025</div>
              <div className="project-description">{theatreProjects['tallest-tree'].shortDescription}</div>
              <div className="view-more">View Details →</div>
            </div>
          </Link>

          <Link to="/theatre/bulgarian-model" className="project-item clickable">
            {theatreProjects['bulgarian-model'].images && theatreProjects['bulgarian-model'].images[0] && (
              <div className="project-image">
                <img src={theatreProjects['bulgarian-model'].images[0].src} alt={theatreProjects['bulgarian-model'].images[0].alt} />
              </div>
            )}
            <div className="project-content">
              <div className="project-title">"The Bulgarian Model"</div>
              <div className="project-details">Azaryan Theatre, Sofia, 2024</div>
              <div className="project-description">{theatreProjects['bulgarian-model'].shortDescription}</div>
              <div className="view-more">View Details →</div>
            </div>
          </Link>

          <Link to="/theatre/bull" className="project-item clickable">
            {theatreProjects.bull.images && theatreProjects.bull.images[0] && (
              <div className="project-image">
                <img src={theatreProjects.bull.images[0].src} alt={theatreProjects.bull.images[0].alt} />
              </div>
            )}
            <div className="project-content">
              <div className="project-title">"Bull"</div>
              <div className="project-details">Regional Contemporary Arts Centre "Toplocentrala", Sofia, 2023</div>
              <div className="project-description">{theatreProjects.bull.shortDescription}</div>
              <div className="view-more">View Details →</div>
            </div>
          </Link>

          <Link to="/theatre/art" className="project-item clickable">
            {theatreProjects.art.images && theatreProjects.art.images[0] && (
              <div className="project-image">
                <img src={theatreProjects.art.images[0].src} alt={theatreProjects.art.images[0].alt} />
              </div>
            )}
            <div className="project-content">
              <div className="project-title">"Art"</div>
              <div className="project-details">Youth Theatre, Sofia, 2023</div>
              <div className="project-description">{theatreProjects.art.shortDescription}</div>
              <div className="view-more">View Details →</div>
            </div>
          </Link>

          <Link to="/theatre/festival-of-bacchus" className="project-item clickable">
            {theatreProjects['festival-of-bacchus'].images && theatreProjects['festival-of-bacchus'].images[0] && (
              <div className="project-image">
                <img src={theatreProjects['festival-of-bacchus'].images[0].src} alt={theatreProjects['festival-of-bacchus'].images[0].alt} />
              </div>
            )}
            <div className="project-content">
              <div className="project-title">"The Festival of Bacchus"</div>
              <div className="project-details">New Theatre "NDK", Sofia, 2022</div>
              <div className="project-description">{theatreProjects['festival-of-bacchus'].shortDescription}</div>
              <div className="view-more">View Details →</div>
            </div>
          </Link>

          <div className="project-item">
            <div className="project-title">"27 Wagons Full of Cotton"</div>
            <div className="project-details">NATFA, Sofia, 2021</div>
          </div>
          <div className="project-item">
            <div className="project-title">"An Enemy of the People"</div>
            <div className="project-details">NATFA, Sofia, 2020</div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Acting</h2>
        <div className="projects-grid">
          {/* Projects ordered by year - newest first */}
          <div className="project-item">
            <div className="project-title">"Charlie at the Sea"</div>
            <div className="project-details">Doctor & Mailman, Youth Theater, 2024</div>
          </div>

          <Link to="/theatre/dangerous-liaisons" className="project-item clickable">
            {theatreProjects['dangerous-liaisons'].images && theatreProjects['dangerous-liaisons'].images[0] && (
              <div className="project-image">
                <img src={theatreProjects['dangerous-liaisons'].images[0].src} alt={theatreProjects['dangerous-liaisons'].images[0].alt} />
              </div>
            )}
            <div className="project-content">
              <div className="project-title">"Dangerous Liaisons"</div>
              <div className="project-details">Chevalier Danceny, Youth Theater, 2023</div>
              <div className="project-description">{theatreProjects['dangerous-liaisons'].shortDescription}</div>
              <div className="view-more">View Details →</div>
            </div>
          </Link>

          <div className="project-item">
            <div className="project-title">"Ivanov"</div>
            <div className="project-details">Lvov, Youth Theater, 2023</div>
          </div>
          <div className="project-item">
            <div className="project-title">"Little Bastards"</div>
            <div className="project-details">Stefan, Youth Theater, 2023</div>
          </div>
          <div className="project-item">
            <div className="project-title">"#anti-sorrow"</div>
            <div className="project-details">Theater Lab Sfumato, 2023</div>
          </div>
          <div className="project-item">
            <div className="project-title">"The Night Knights"</div>
            <div className="project-details">Sofia Live Club, 2023</div>
          </div>
          <div className="project-item">
            <div className="project-title">"Romeo and Juliet"</div>
            <div className="project-details">Count Paris, Youth Theater, 2023</div>
          </div>
          <div className="project-item">
            <div className="project-title">"The Count of Monte Cristo"</div>
            <div className="project-details">Andrea Cavalcanti, Youth Theater, 2023</div>
          </div>
          <div className="project-item">
            <div className="project-title">"Catastrophe"</div>
            <div className="project-details">Various roles, Sfumato, 2020</div>
          </div>
          <div className="project-item">
            <div className="project-title">"DNA"</div>
            <div className="project-details">Adam, Theatre "Osvobojdenie", 2020</div>
          </div>
          <div className="project-item">
            <div className="project-title">"Sexual Perversity in Chicago"</div>
            <div className="project-details">Dan Shapiro, NATFA, 2019</div>
          </div>
          <div className="project-item">
            <div className="project-title">"Papas in Motion"</div>
            <div className="project-details">Joachim, NATFA, 2019</div>
          </div>
          <div className="project-item">
            <div className="project-title">"Suitcase Packers"</div>
            <div className="project-details">Amatsiya/Pinkus, NATFA, 2019</div>
          </div>
          <div className="project-item">
            <div className="project-title">Impro theater</div>
            <div className="project-details">Hahaha Lab, 2018</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Theatre 