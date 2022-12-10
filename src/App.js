import { HashRouter, Route, Routes, } from 'react-router-dom'
import Landing from './pages/LandingPage/Landing'
import RegisterPage from "./pages/AuthPage/RegisterPage";
import LoginPage from "./pages/AuthPage/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import Notification from "./pages/Notification/Notification";
import React, { Suspense } from 'react'
import './scss/style.scss'
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
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path='/landing' element={<Landing/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/profile' element={<ProfilePage/>}/>
            <Route path='/notif' element={<Notification/>}/>
            <Route path='*' element={<DefaultLayout/>}/>
          </Routes>
        </Suspense>
      </HashRouter>
    </>
  );
}

export default App;
