import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs'
import { BrowserRouter, Route } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import News from './components/News/News';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route exact path='/dialogs'  render={ () => <Dialogs state = {props.state.dialogPage} /> } />
          <Route path='/profile'        render={ () => <Profile state = {props.state.profilePage} 
                                                                dispatch={props.dispatch}
/> } />
          <Route path='/news'           render={ () => <News /> } />
          <Route path='/settings'       render={ () => <Settings /> } />
        </div>

      </div>
    </BrowserRouter>
  )


}

export default App;
