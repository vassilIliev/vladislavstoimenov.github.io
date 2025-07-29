import './Bio.css'

function Bio() {
  return (
    <div className="bio-page">
      <section className="section">
        <div className="bio-content">
          <div className="bio-text">
            <p className="bio-intro">
              Born on July 23, 1996, Vladislav Stoimenov is a Bulgarian stage director and actor 
              with a Master's degree in Stage Directing from NATFA "Krastio Sarafov", Sofia. 
              His work spans contemporary and classical theatre, with notable recognition in both 
              national and international festivals.
            </p>
            <p className="contact-info">
              <strong>Email:</strong> <a href="mailto:vladislavstoimenov29@gmail.com">vladislavstoimenov29@gmail.com</a>
            </p>
          </div>
          <div className="bio-photo">
            {/* Photo placeholder - will be added when images are provided */}
            <div className="photo-placeholder">
              <span>Photo will be added</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Education</h2>
        <ul>
          <li>National Gymnasium for Ancient Languages and Cultures "Saint Constantine-Cyril Philosopher", 2015</li>
          <li>Bachelor in Acting – NATFA "Krastio Sarafov", Sofia, 2019</li>
          <li>Master in Stage Directing – NATFA "Krastio Sarafov", Sofia, 2022</li>
        </ul>
      </section>

      <section className="section">
        <h2>Awards</h2>
        <ul>
          <li>Ministry of Culture Award for creative results, 2024</li>
          <li>Ikar Nomination – "Art" (Debut), 2024</li>
          <li>Best Leading Role – "Shakespeare like a Street Dog", Sv. Vlas Film Fest, 2023</li>
          <li>Asker Award – Rising Star for "Art", 2023</li>
          <li>Best Leading Role – "Shakespeare like a Street Dog", Golden Rose Festival, 2022</li>
          <li>NAI NAI NAI Nomination – Best Actor in NATFA, 2019</li>
        </ul>
      </section>

      <section className="section">
        <h2>International Participation</h2>
        <ul>
          <li>"The Tallest Tree on Earth" – Shkola Festival, Pleven, 2025</li>
          <li>"HOMUNCULUS" – South-East Revisited Festival, Oberhausen, Germany, 2025</li>
          <li>Workshop at Deutsches Theater, Berlin – "The Magic Mountain", 2024</li>
          <li>"Entertainment" – Balkan Theater Festival, Blagoevgrad, 2024</li>
          <li>"Dangerous Liaisons" – Apollonia Festival (Sozopol) and Theater at Crossroad (Plovdiv), 2023–2024</li>
          <li>"Art" – Haskovo, Varna, Lovech, Plovdiv Festivals, 2023–2024</li>
          <li>"Suitcase Packers" – Festivals in Moscow and Stara Zagora, 2019</li>
        </ul>
      </section>

      <section className="section">
        <h2>Languages</h2>
        <ul>
          <li>English – B2</li>
          <li>German – B1.1</li>
        </ul>
      </section>
    </div>
  )
}

export default Bio 