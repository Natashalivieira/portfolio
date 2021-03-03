import Home from './pages';
import MyPortfolio from './pages/MyPortfolio.js';
import './Styles.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './components/Footer';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/home" component={Home} />
                <Route path="/myportfolio" component={MyPortfolio} />
            </Switch>
            <Footer />
        </Router>
    );
}