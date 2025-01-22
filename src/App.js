import logo from './logo.svg';
import './css/App.css';
import { ErrorBoundary } from "react-error-boundary";
import { React, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AppNavbar from "./AppNavBar.js";
import Home from "./home.js";
import About from "./about.js";
import Skills from "./skills.js";
import Projects from "./projects.js";
import Contact from "./contact.js";


function ErrorFallback({ error, resetErrorBoundary }) {
  return (
      <div role="alert">
          <p>Something went wrong:</p>
          <pre>{error.message}</pre>
          <button onClick={resetErrorBoundary}>Try again</button>
      </div>
  )
}

function App() {
  return (
    <div>
        <ErrorBoundary FallbackComponent={ErrorFallback} >
            <AppNavbar />
            <Routes>
                <Route path="/" exact={true} element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </ErrorBoundary>
    </div>
);
}

export default App;
