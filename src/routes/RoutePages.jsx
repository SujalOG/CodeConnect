import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Home from '../pages/Home';
import Singin from '../pages/authPages/Signin';
import Singup from '../pages/authPages/Singup';
import AccountActivate from '../pages/authPages/AccountActivate';
import RoomSelect from '../pages/RoomSelect.jsx';
import PrivateRoutes from './PrivateRoleRoutes.jsx';
import UserProfile from '../pages/UserProfile.jsx';
import ForgotPassword from '../pages/authPages/ForgotPassword.jsx';
import ResetPassword from '../pages/authPages/ResetPassword.jsx';
import Workspace from '../pages/workspacePages/Workspace.jsx';
import WorkspaceProvider from '../context/WorkspaceProvider.jsx';
import { Toaster } from 'react-hot-toast';
import SocialLogin from '../pages/authPages/SocialLogin.jsx';
import HomeMain from '../pages/HomeMain.jsx';

const RoutePages = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Assume this is your auth state

    // Here you would typically check authentication status (e.g., from context or local storage)
    useEffect(() => {
        // Example: Check if user is logged in
        const token = localStorage.getItem('token'); // Replace this logic with your own
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <>
                    {/* Redirect based on authentication status */}
                    <Route path='/' element={isAuthenticated ? <Navigate to="/home" /> : <HomeMain />} />
                    <Route path='/signup' element={<Singup />} />
                    <Route path='/signin' element={<Singin />} />
                    <Route path='/social-login' element={
                        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLELOGIN_CLIENT_ID}>
                            <SocialLogin />
                        </GoogleOAuthProvider>
                    } />
                    <Route path='/auth/activate/:token' element={<AccountActivate />} />
                    <Route path='/auth/password/forgot' element={<ForgotPassword />} />
                    <Route path='/auth/password/reset/:token' element={<ResetPassword />} />
                </>
                {/* Private Routes ------------------------------- */}
                <Route element={<PrivateRoutes />}>
                    <Route path='/home' element={<Home />} />
                    <Route path='/room' element={<RoomSelect />} />
                    <Route path='/room/:roomId' element={
                        <WorkspaceProvider>
                            <Workspace />
                        </WorkspaceProvider>
                    } />
                    <Route path='/user' element={<UserProfile />} />
                </Route>
            </Routes>
            <Toaster position="top-right" reverseOrder={false} />
        </BrowserRouter>
    );
}

export default RoutePages;
