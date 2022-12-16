import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import React, { Suspense } from 'react'
import './scss/style.scss'
import "./App.css";
import Landing from './pages/LandingPage/Landing'
import RegisterPage from "./pages/AuthPage/RegisterPage";
import LoginPage from "./pages/AuthPage/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import TicketBook from "./pages/TicketPage/TicketBook";
import TicketPage from "./pages/TicketPage/TicketPage";
import TicketPageConfirm from "./pages/TicketPage/TicketPageConfirm";
import Notification from "./pages/Notification/Notification";

function App() {
  const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  )

  const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))


  return (
    <>
      {/* {
        route.pathname === '/admin'
        ? <Sidebar/> 
        : route.pathname === '/ticketschedule' ? <Sidebar />
        : route.pathname === '/listorder' ? <Sidebar />
        : ''
        
      } */}
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/profile' element={<ProfilePage/>}/>
            <Route path='/notif' element={<Notification/>}/>
            <Route path='*' element={<DefaultLayout/>}/>
            <Route path="/ticket" element={<TicketPage />} />
            <Route path="/ticket/confirm" element={<TicketPageConfirm />} />
            <Route path="/ticket/book" element={<TicketBook />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
