// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import ActivationPage from './pages/ActivationPage';
import RecoveryPhrase from './pages/RecoveryPhrasePage';
import IdentifiantPage from './pages/IdentifiantPage';

import LoadingPage from './pages/LoadingPage';
import LoaderAndHome from './pages/LoaderAndHome';
import ErrorPage from './pages/ErrorPage';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* 1) "/" => LoaderAndHome => loader unique la 1ère fois */}
          <Route path="/" element={<LoaderAndHome />} />

          {/*
            2) "/loading-recovery" => LoadingPage
               => alwaysShow = true pour forcer le splash 
                  même si on a déjà vu la home
          */}
          <Route
            path="/loading-recovery"
            element={
              <LoadingPage
                nextPath="/recovery-phrase"
                displayDuration={4000}
                fadeOutDelay={3500}
                alwaysShow={true}
              />
            }
          />

          {/* Recovery Phrase */}
          <Route 
            path="/recovery-phrase" 
            element={
              <>
                <Navbar />
                <RecoveryPhrase />
                
              </>
            }
          />

          {/* Activation */}
          <Route 
            path="/activation" 
            element={
              <>
                <Navbar />
                <ActivationPage />
               
              </>
            }
          />

          {/* Identifiant */}
          <Route 
            path="/identifiant" 
            element={
              <>
                <Navbar />
                <IdentifiantPage />
               
              </>
            }
          />

          {/* Page d'erreur */}
          <Route path="/error" element={<ErrorPage />} />

          {/* Route inconnue => redirect "/" */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
