import './StyleSource/variables.scss';

import Footer from './Components/Footer/Footer';
import Home from './Routes/Home/Home';
import NavBar from './Components/NavigationBar/NavBar';

function App() {
    return (
        <div className='App'>
            <NavBar/>
            <Home/>
            <Footer/>
        </div>
    );
}

export default App;