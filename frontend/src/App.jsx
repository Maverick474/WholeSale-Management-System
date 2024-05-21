import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import StockDetails from './components/StockDetails'
import BuyerDetails from './components/BuyerDetails'
import CustomerDetails from './components/CustomerDetails'
import Defaulters from './components/Defaulters'
import PaymentList from './components/PaymentList'
import StockCheck from './components/StockCheck'
import Profit from './components/Profit'
import StockReorder  from './components/StockReorder'
import './App.css'
import Home from './components/Home'
import Footer from './components/Footer'

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <div className='flex'>
                      <Sidebar /> 
                      <div className='ml'>
                       <Home />
                      </div>
                     </div>
        },
        
        {
            path: "/stock",
            element: <div className='flex'>
                      <Sidebar />
                      <div className='ml-flex'>
                        <StockDetails />
                      </div> 
                     </div>
        },

        {
            path: "/buyer",
            element: <div className='flex'>
                      <Sidebar />
                      <div className='ml-flex'>
                       <BuyerDetails />
                      </div>
                     </div>
        },

        {
            path: "/customer",
            element: <div className='flex'>
                      <Sidebar /> 
                      <div className='ml-flex'>
                       <CustomerDetails />
                      </div>
                     </div>
        },

        {
            path: '/defaulter',
            element: <div className='flex'>
                      <Sidebar /> 
                      <div className='ml-flex'>
                       <Defaulters />
                      </div>
                     </div>
        },

        {
            path: "/payment",
            element: <div className='flex'>
                      <Sidebar /> 
                      <div className='ml-flex'>
                       <PaymentList />
                      </div>
                     </div>
        },

        {
            path: "/check",
            element: <div className='flex'>
                       <Sidebar /> 
                       <div className='ml-flex'>
                        <StockCheck />
                       </div>
                      </div>
        }, 

        {
            path: "/profit",
            element: <div className='flex'>
                      <Sidebar />
                      <div className='ml-flex'>
                       <Profit />
                      </div>
                     </div>
        },

        {
            path: "/reorder",
            element: <div className='flex'>
                       <Sidebar /> 
                       <div className='ml-flex'>
                        <StockReorder />
                       </div>
                      </div>
        }
    ])
  return (
    <div>
      <RouterProvider router={router} />
      <Footer />
    </div>
  )
}

export default App
