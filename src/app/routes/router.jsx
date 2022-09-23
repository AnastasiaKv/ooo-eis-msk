import {Link, BrowserRouter as Router, Route, IndexRoute, Redirect} from 'react-router-dom'
import React from 'react'

const App = () => {
  return (
    <section className='App'>
      <Router>
        <Route path='/'>
          <IndexRoute />
          <Link to='/'>OOO TRK</Link>
          <Route path='test' />
          <Route path='posts(/:page)' />
          <Route path='article/:hrefTitle' />
          <Route path='tags/:tagName' />
          <Route path='tags/pages/(:page)' />
          <Route path='archive(/:searchKey)' />
          <Redirect path='*' to='/' />
        </Route>
      </Router>
    </section>
  )
}
export default App
