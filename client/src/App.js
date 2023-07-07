import './App.css';
import {Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './Views/Home/Home'
import Form from './Views/Form/Form';
import Detail from './Views/Detail/Detail';
import Landing from './Views/Landing/Landing';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route path='/' component={Navbar}/>
      <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/form' component={Form}/>
        <Route path='/detail/:id' component={Detail}/>
        <Route path='/' component={Landing}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
