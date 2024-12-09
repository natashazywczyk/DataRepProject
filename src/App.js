//Import all necessary routes to be accessed from navigation bar
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import EditList from './components/EditList';
import AddItem from './components/AddItem';
import Main from './components/Main';
import Home from './components/Home';
import Ideas from './components/Ideas';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          {/*Different clickable routes*/}
          <Route path = "/" element = {<Home />} />
          <Route path = "/ideas" element = {<Ideas />} />
          <Route path = "/main" element = {<Main />} />
          <Route path = "/additem" element = {<AddItem />}/>
          <Route path = "/editlist/:id" element = {<EditList />}/>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
