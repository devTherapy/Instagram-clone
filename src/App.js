import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {lazy, Suspense} from 'react'
import * as ROUTES from "./constants/Routes"
import UserContext from './contexts/user';
import useAuthListener from './hooks/use-auth-listener'

const Login = lazy(() => import("./pages/login"));
const SignUp = lazy(() => import("./pages/signUp"));
const Dashboard = lazy(() => import("./pages/dashboard.js"));
const NotFound = lazy(() => import("./pages/not-found"));
const Profile = lazy(() => import("./pages/profile.js"));

function App() {
  const {user} = useAuthListener();
  return(
    <UserContext.Provider value = {{user}}>
    <Router>
    <Suspense fallback={<p>loading......</p>}>
    <Switch>
      <Route path= {ROUTES.LOGIN} component={Login}/>
      <Route path= {ROUTES.SIGN_UP} component={SignUp}/>
      <Route path= {ROUTES.DASHBOARD} component={Dashboard}/>
      <Route component = {NotFound}/>
    </Switch>
    </Suspense>
  </Router>
  </UserContext.Provider>
  )
}
export default App;
