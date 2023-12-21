import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Applayout from './layout/Applayout'
import ErrorBoundary from './components/commen/pages/ErrorBoundary'
import Home from './pages/Home/Home'
import Authlayout from './layout/Authlayout'
import Login from './pages/auth/Login'
import Rigister from './pages/auth/Rigister'
import Carpage from './pages/carPage/Carpage'
import Filter from './pages/filter/Filter'
import Panier from './pages/panier/Panier'
import Vendre from './pages/vendre/Vendre'
import Lacot from './pages/lacote/Lacot'
import TouteMarqueModele from './components/commen/pages/TouteMarqueModele'
import Le_rachat_express from './pages/le-rachat-express/Le_rachat_express'
import Financement from './pages/financement/Financement'
import Electrique from './pages/electrique/Electrique'

const router = createBrowserRouter([
  {element:<Applayout /> , path: '/' , errorElement:<ErrorBoundary />  , 
children:[
  {path:'/' , element:<Home />},
  {element:<Carpage /> , path: 'carPage' },
  {element:<Filter /> , path: 'listing'},
  {element:<Panier /> , path: 'panier' },
  {element:<Vendre /> , path: 'vendre'},
  {path:'occasion-voiture' , element:<TouteMarqueModele type={'marques'} />},
  {path:'Le_rachat_express' , element:<Le_rachat_express/>},
  {path:'electrique' , element:<Electrique/>},
  {element:<Lacot /> , path: 'lacot'},
  {element:<Financement /> , path:'financement'}

]},
{element:<Authlayout /> , path: 'connexion' , errorElement:<ErrorBoundary />  , 
children:[
  {path:'' , element:<Login />},
  {path:'rigster' , element:<Rigister />},

]},






])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
