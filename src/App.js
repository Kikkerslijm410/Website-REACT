import './App.css';

import Header from './Pages/Shared/Header';
import Footer from './Pages/Shared/Footer';
import Title from './Pages/Shared/Titel';
import Home from './Pages/Home/Home';

function App() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="Assets/css/styles.css" />
        <Header />
        <Title />
        <Home />
        <Footer />
      </div>
    );
  }

export default App;
