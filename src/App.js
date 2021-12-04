import './index.css';
import {
  BrowserRouter as Router,
  Switch, Route, Redirect
} from "react-router-dom"
import axios from 'axios';
import { useContext, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import { AuthContext } from './context/AuthContext';
import CreateRunLog from './pages/createrunlog/CreateRunLog';
import DetailRunLog from './pages/detailrunlog/DetailRunLog';
import PageNotFound from './pages/pagenotfound/PageNotFound';


function App() {
  const { auth, setAuth } = useContext(AuthContext)

  useEffect(() => {
    axios
      .get("https://my-running-log-api.herokuapp.com/api/auth/me", {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuth({ ...auth, isLoggedIn: false });
        } else {
         setAuth({
          username: response.data.username,
          userId: response.data.id,
          expiresAt: response.data.expiresAt,
          isLoggedIn: true 
          })
        }
      })
  }, [])

  return (
    <>
    <Router>
    <Navbar />
    <Switch>
    <Route exact path="/">
          {!auth.isLoggedIn && <Redirect to='/login' />}
          {auth.isLoggedIn && <Home />}
        </Route>

        <Route path="/login">
          {auth.isLoggedIn && <Redirect to='/' />}
          {!auth.isLoggedIn && <Login />}
        </Route>

        <Route path="/signup">
          {auth.isLoggedIn && <Redirect to='/' />}
          {!auth.isLoggedIn && <Signup />}
        </Route>
    <Route path='/createrunlog' exact component={CreateRunLog} />
    <Route path='/detailrunlog/:id' exact component={DetailRunLog} />
    <Route path="*" exact component={PageNotFound} />
    </Switch>
    </Router>
    </>
  );
}

export default App;
