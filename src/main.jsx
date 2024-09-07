import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Produtos from './routes/Produtos.jsx'
import Sobre from './routes/Sobre.jsx'
import Contato from './routes/Contato.jsx'
import GlobalStyled from './global-styled.js'

const router = createBrowserRouter(
  [
    {
      path:'/',
      element: <App/>,
      children:[
        {
          path:'/',
          element: <Home/>
        },
        {
          path:'/produtos',
          element: <Produtos/>
        },
        {
          path:'/contato',
          element: <Contato/>
        },
        {
          path:'/sobre',
          element: <Sobre/>
        }
      ]
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <GlobalStyled/>
  </StrictMode>,
)
