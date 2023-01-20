import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Editorpage from './pages/Editorpage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }, {
    path: "signup",
    element: <Signup />,
  }, {
    path: "login",
    element: <Login />,
  }, {
    path: "Editorpage",
    element: <Editorpage />,
  }

])

function App() {
  return (

    < RouterProvider
      router={router} />

  );
}

export default App;
