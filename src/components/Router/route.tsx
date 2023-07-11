import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import SignupPage from '../../pages/SignUp';

function RouteApp() {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage/>} />
      {/* <Route path="*" element={<NotFound />} />
      <Route path="/dashboard" element={ <Dashboard /> } />
      <Route path="/urlshortener" element={ <UrlPage/> } />
      <Route path="/qrcodegenerator"
        element={ <LinkShortener />} /> */}
    </Routes>
  </>
  )
}

export default RouteApp;
