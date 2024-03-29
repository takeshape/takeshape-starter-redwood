// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'
import HomePage from './pages/HomePage/HomePage'
import AltHomePage from './pages/AltHomePage/AltHomePage'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" />
      <Route path="/alt" page={AltHomePage} name="alt home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
