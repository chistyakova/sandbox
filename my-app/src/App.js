import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs'  render={() => <DialogsContainer />} />
          <Route path='/profile/:userId?'  render={() => <ProfileContainer />} />
          <Route path='/users'    render={() => <UsersContainer />} />
          <Route path='/news'     render={() => <News />} />
          <Route path='/settings' render={() => <Settings />} />
        </div>

      </div>
    </BrowserRouter>
  )


}

export default App;
