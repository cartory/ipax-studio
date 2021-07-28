import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import LandingPage from './pages/landingPage/landingPage'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LandingPage} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  )
}

export default App;