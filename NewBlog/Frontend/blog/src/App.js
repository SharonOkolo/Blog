import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Contact from './Contact';
function App() {
  // const express = require ("express")
  // const collection = require("./signnup/mongo")
  // const cors = require("cors")
  // const app = express()
  // app.use(express.json())
  // app.use(express.urlencoded({extended:true}))
  // app.use(cors())
  
  return (
    <Router>
      <div className="App">
        <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path= "/">
            <Home/>
          </Route>
          <Route path= "/create">
            <Create/>
          </Route>
          <Route path= "/blogs/:id">
            <BlogDetails/>
          </Route>
          <Route path= "/contact">
            <Contact/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </div>
      </div>
    </Router>
  );
}

export default App;
