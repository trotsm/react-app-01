import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/pages/Profile/Profile'
import Dialogs from "./components/pages/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/pages/Music/Music";
import News from "./components/pages/News/News";
import Settings from "./components/pages/Settings/Settings";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <div className='content-container'>
                    <Navbar/>
                    <div className='main-content'>
                        <Route path='/profile' render={() => <Profile state={props.state.profilePage}/>}/>
                        <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogPage}/>}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
