import './App.css';


function App() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Pretpark Den Haag</title>
        <link rel="stylesheet" href="assets/css/styles.css" />
        <header>
          <h3>&nbsp; <i className="fa fa-ghost" /> Het Haagse Pretpark</h3>
          <nav>
            <li><a>Home</a></li>
            <li><a href="/Tickets.html">Tickets</a></li>
            <li><a href="/Plattegrond.html">Plattegrond</a></li>
            <li><a href="/About.html">Over ons</a></li>
            <li><a href="/Contact.html">Contact</a></li>
            <li><a href="/Accesibility.html"><i className="fa fa-wheelchair" /></a></li>
          </nav>
        </header>
        <section className="hero">
          <div className="background-image" style={{backgroundImage: 'url(assets/img/hero2.jpg)'}} />
          <h1>Het pretpark van Den Haag!</h1>
          <a href="/Tickets.html" className="btn">Bestel hier uw kaarten!</a>
        </section>
        <section className="contact">
          <h3 className="title">Halloween</h3>	
          <p>Dit is een tekst</p>
          <hr />
          <h3 className="title">Actueel nieuws</h3>	
          <p>Dit is een tekst</p>
          <hr />
          <h3 className="title">Meldt u aan voor onze nieuwsbrief</h3>	
          <p>Wilt u wekelijks op de hoogte blijven van nieuwe aanbiedingen,
            leuke acties of nieuwe attracties. Meldt u dan nu aan voor onze
            nieuwsbrief en blijf op de hoogte van de laatste nieuwtjes</p>
          <form>
            <input type="email" placeholder="Email" />
            <a href="#" className="btn">Aanmelden</a>
          </form>
        </section>
        <footer>
          <p>Volg ons op:</p>
          <ul>
            {/* https://fontawesome.com/icons */}
            <li><a href="#" target="_blank"><i className="fa fa-twitter-square" /></a></li>
            <li><a href="#" target="_blank"><i className="fa fa-facebook-square" /></a></li>
            <li><a href="#" target="_blank"><i className="fa fa-snapchat-square" /></a></li>
            <li><a href="#" target="_blank"><i className="fa fa-youtube-square" /></a></li>
            <li><a href="#" target="_blank"><i className="fa-brands fa-square-instagram" /></a></li>
          </ul> 
          <p>Made by <a href="https://github.com/Kikkerslijm410" target="_blank">Lucas clavel</a></p>
          <p>Lees hier<a href="/Voorwaarden.html"> de algemene voorwaarden</a></p>
        </footer>
      </div>
    );
  }

export default App;
