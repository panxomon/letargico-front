import React from 'react'
import './styles/App.scss'
import Post from './components/blog/blog'
import About from './components/about/about'
import Contacto from './components/contacto/contacto'
import {useRoutes} from 'hookrouter'

import Menu from './components/menu/menu'
import Home from './components/home/home'
import Footer from './components/footer/footer'
import NotFoundPage from './NotFoundPage'

const routes = {
  '/': () => <Home />,
  '/blog': () => <Post />,
  '/contacto': () => <Contacto/>,
  '/about' : () => <About />
}

const App = () => {
    return (
    <div>
      <Menu />  
       {useRoutes(routes) || <NotFoundPage />}
       <Footer /> 
    </div>)
}

export default App


