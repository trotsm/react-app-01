import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/pages/Profile/Profile'
import Dialogs from "./components/pages/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import Music from "./components/pages/Music/Music";
import News from "./components/pages/News/News";
import Settings from "./components/pages/Settings/Settings";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <div className='content-container'>
                <Navbar state={props.state.topFriends}/>
                <div className='main-content'>
                    <Route path='/profile' render={() => <Profile
                        state={props.state.profilePage}
                        dispatch={props.dispatch}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs
                        state={props.state.dialogPage}
                        dispatch={props.dispatch}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </div>
    );
};

export default App;
