import './Bio.css'

function Bio() {
  return (
    <div className="bio-page">
      <section className="section hero-section">
        <div className="bio-photo">
          <img 
            src="/images/profile-photo.jpg" 
            alt="Vladislav Stoimenov" 
            className="profile-image"
          />
        </div>
        <div className="bio-text">
          <p className="bio-intro">
            Born on July 23, 1996, Vladislav Stoimenov is a Bulgarian stage director and actor. 
            In 2015, he graduated from the National High School for Ancient Languages and Cultures 
            "Constantine-Cyril the Philosopher". He went on to complete a Bachelor's degree in Acting 
            for Drama Theatre in 2019 and earned a Master's degree in Stage Directing in Performing 
            Arts in 2022 at NATFA "Krastyo Sarafov", Sofia, Bulgaria.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Awards & Nominations</h2>
        <ul>
          <li>Ministry of Culture Award for outstanding artistic achievement (2024)</li>
          <li>IKAR Award Nomination – Best Directing Debut (Art by Yasmina Reza, 2024)</li>
          <li>Askeer Award in the category "Rising Star" for the stage directing of the play Art by Yasmina Reza (2023)</li>
          <li>Best Leading Role Award – Shakespeare Like a Street Dog, Sv. Vlas Film Fest, Bulgaria (2022)</li>
          <li>Best Leading Role Award - Shakespeare Like a Street Dog, Golden Rose Festival, Varna, Bulgaria (2022)</li>
          <li>Nai-Nai-Nai Nomination – Best Actor, National academy for theater and film arts, Sofia, Bulgaria (2019)</li>
        </ul>
      </section>

      <section className="section">
        <h2>Stage Directing</h2>
        <ul>
          <li><strong>The Tallest Tree on Earth</strong> by Ivan Vyrypaev — Derida Stage, Sofia (2025)</li>
          <li><strong>The Bulgarian Model</strong> (based on texts by Stanislav Stratiev) — Azaryan Theatre, Sofia (2024)<br />
              <em>(as part of the project "Decay and Resistance" by the Union of Artists in Bulgaria)</em></li>
          <li><strong>Bull</strong> by Mike Bartlett — Regional Contemporary Arts Centre "Toplocentrala", Sofia (2023)</li>
          <li><strong>Art</strong> by Yasmina Reza — Youth Theatre "Nikolay Binev", Sofia (2023)</li>
          <li><strong>The Festival of Bacchus</strong> by Arthur Schnitzler — New Theatre "NDK", Sofia (2022)</li>
          <li><strong>Twenty-seven Wagons Full of Cotton</strong> by Tennessee Williams — NATFA, Sofia (2021)</li>
          <li><strong>An Enemy of the People</strong> by Henrik Ibsen — NATFA, Sofia (2020)</li>
        </ul>
      </section>

      <section className="section">
        <h2>Cinema & Workshops</h2>
        <ul>
          <li><strong>The Movie Actor</strong> – experimental cinema workshop (2025)</li>
          <li><strong>The Resonance Principle</strong> (short) — role: Andrey — Dir. Yassen Genadiev, Sofia (2023)</li>
          <li><strong>Shakespeare Like a Street Dog</strong> — role: Danko — Dir. Valeri Yordanov, Sofia (2022)</li>
          <li>Cinema workshop with Mihail Bilalov (2015)</li>
        </ul>
      </section>

      <section className="section">
        <h2>Acting</h2>
        
        <h3 className="year-heading">2024</h3>
        <ul className="year-list">
          <li><strong>The Doctor and the Mailman</strong> in <em>Charlie at the Sea</em> by Slawomir Mrożek — Youth Theatre, Sofia</li>
        </ul>

        <h3 className="year-heading">2023</h3>
        <ul className="year-list">
          <li><strong>Chevalier Danceny</strong> in <em>Dangerous Liaisons</em> by Choderlos de Laclos — Youth Theatre, Sofia</li>
          <li><strong>Evgeny Konstantinovich Lvov</strong> in <em>Ivanov</em> by Anton Chekhov — Youth Theatre, Sofia</li>
          <li><strong>Stefan</strong> in <em>Little Bastards</em> by Bernhard Georg — Youth Theatre, Sofia</li>
          <li><strong>Actor</strong> in <em>#anti-sorrow</em> by Stefan Ivanov — Sfumato Theatre Laboratory, Sofia</li>
          <li><strong>Actor</strong> in <em>The Night Knights</em> by Yana Borissova — Sofia Live Club, Sofia</li>
          <li><strong>Count Paris</strong> in <em>Romeo and Juliet</em> by William Shakespeare — Youth Theatre, Sofia</li>
          <li><strong>Andrea Cavalcanti</strong> in <em>The Count of Monte Cristo</em> by Alexandre Dumas (son) — Youth Theatre, Sofia</li>
        </ul>

        <h3 className="year-heading">2020</h3>
        <ul className="year-list">
          <li><strong>Minister of Culture / The Actor / The Man / Viktor</strong> in <em>Catastrophe</em> by Samuel Beckett & Harold Pinter — Sfumato Theatre Laboratory, Sofia</li>
          <li><strong>Adam</strong> in <em>DNA</em> by Dennis Kelly — Theatre "Osvobozhdenie", Sofia</li>
        </ul>

        <h3 className="year-heading">2019</h3>
        <ul className="year-list">
          <li><strong>Dan Shapiro</strong> in <em>Sexual Perversity in Chicago</em> by David Mamet — NATFA, Sofia</li>
          <li><strong>Joachim</strong> in <em>Papas in Motion</em> by Ronald Rudoll — NATFA, Sofia</li>
          <li><strong>Amatsiya / Alberto Pinkus</strong> in <em>Suitcase Packers</em> by Hanoch Levin — NATFA, Sofia</li>
        </ul>

        <h3 className="year-heading">2018</h3>
        <ul className="year-list">
          <li><strong>Impro Theatre</strong> — Hahaha Impro Laboratory, Sofia</li>
        </ul>
      </section>

      <section className="section">
        <h2>International Participation & Festivals</h2>
        <ul>
          <li><strong>The Tallest Tree on Earth</strong> — International Theatre Festival "Class", Pleven (2025)</li>
          <li><strong>HOMUNCULUS</strong> (written) — scenic reading at "South-East Revisited Festival", Oberhausen, Germany (2025)</li>
          <li><strong>Workshop:</strong> "Every Adaptation Is a New Beginning" on The Magic Mountain by Thomas Mann — Deutsches Theater, Berlin (2024)</li>
          <li><strong>Dangerous Liaisons</strong> — Apollonia Festival of Arts, Sozopol (2024); Theatre at Crossroads Festival, Plovdiv (2023)</li>
          <li><strong>Art</strong> —<br />
              "VIA Fest – Varna Summer" (2024)<br />
              "Theatre I Love You" Festival, Haskovo (2024)<br />
              "Young Theatre" Festival, Lovech (2023)<br />
              "Theatre at Crossroads", Plovdiv (2023)</li>
          <li><strong>The Suitcase Packers</strong> by Hanoch Levin —<br />
              "Tvoi Shans" Festival, Moscow (2019)<br />
              "Daniil Chirpansky" Festival, Stara Zagora (2019)</li>
        </ul>
      </section>

      <section className="section">
        <h2>Languages</h2>
        <ul>
          <li>English – B2</li>
          <li>German – B1.2</li>
        </ul>
      </section>
    </div>
  )
}

export default Bio 