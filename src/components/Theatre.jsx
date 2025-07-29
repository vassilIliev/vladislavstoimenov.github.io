import { Link } from 'react-router-dom'
import { theatreProjects } from '../data/projects'
import './Projects.css'

function Theatre() {
  return (
    <div className="theatre-page">
      <section className="section">
        <h2>Stage Directing</h2>
        <div className="projects-grid">
          {/* Featured projects with detail pages */}
          <Link to="/theatre/art" className="project-item clickable">
            <div className="project-title">"Art"</div>
            <div className="project-details">Youth Theater, Sofia, 2023</div>
            <div className="project-description">{theatreProjects.art.shortDescription}</div>
            <div className="view-more">View Details →</div>
          </Link>
          
          <Link to="/theatre/tallest-tree" className="project-item clickable">
            <div className="project-title">"The Tallest Tree on Earth"</div>
            <div className="project-details">Derida Stage, Sofia, 2025</div>
            <div className="project-description">{theatreProjects['tallest-tree'].shortDescription}</div>
            <div className="view-more">View Details →</div>
          </Link>

          {/* Other directing projects */}
          <div className="project-item">
            <div className="project-title">"Kazimir & Karoline"</div>
            <div className="project-details">NATFA, Sofia (in process), 2026</div>
          </div>
          <div className="project-item">
            <div className="project-title">"All involved"</div>
            <div className="project-details">Theatro, Sofia (TBA), 2026</div>
          </div>
          <div className="project-item">
            <div className="project-title">"Entertainment"</div>
            <div className="project-details">Balkan Theater Festival, Blagoevgrad, 2024</div>
          </div>
          <div className="project-item">
            <div className="project-title">"The Bulgarian Model"</div>
            <div className="project-details">Azaryan Theater, Sofia, 2024</div>
          </div>
          <div className="project-item">
            <div className="project-title">"Bull"</div>
            <div className="project-details">Toplocentrala, Sofia, 2023</div>
          </div>
          <div className="project-item">
            <div className="project-title">"The Festival of Bacchus"</div>
            <div className="project-details">New Theater NDK, Sofia, 2022</div>
          </div>
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
          {/* Featured project with detail page */}
          <Link to="/theatre/dangerous-liaisons" className="project-item clickable">
            <div className="project-title">"Dangerous Liaisons"</div>
            <div className="project-details">Chevalier Danceny, Youth Theater, 2023</div>
            <div className="project-description">{theatreProjects['dangerous-liaisons'].shortDescription}</div>
            <div className="view-more">View Details →</div>
          </Link>

          {/* Other acting projects */}
          <div className="project-item">
            <div className="project-title">"Charlie at the Sea"</div>
            <div className="project-details">Doctor & Mailman, Youth Theater, 2024</div>
          </div>
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