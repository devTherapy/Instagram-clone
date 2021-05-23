import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {lazy, Suspense} from 'react'
import * as ROUTES from "./constants/Routes"
const Login = lazy(() => import("./pages/login"));
const SignUp = lazy(() => import("./pages/signUp"));

function App() {
  return(
    <Router>
    <Suspense fallback={<p>loading......</p>}>
    <Switch>
      <Route path= {ROUTES.LOGIN} component={Login}/>
      <Route path= {ROUTES.SIGN_UP} component={SignUp}/>
    </Switch>
    </Suspense>
  </Router>
  )
}
export default App;
