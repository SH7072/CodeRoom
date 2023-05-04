import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
  Outlet,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Editorpage from './pages/Editorpage';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   }, {
// path: "signup",
//     element: <Signup />,
//   }, {
//     path: "login",
//     element: <Login />,
//   }, {
//     path: "Editorpage",
//     element: <Editorpage />,
//   }

// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="Editorpage" element={<Editorpage />} />
      <Route path='interview' element={<Root />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='new' element={<Signup />} />
      </Route>
    </Route>
  ));

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Root />}>
//       <Route path="signup" element={<Signup />} />
//       <Route path="login" element={<Login />} />
//     </Route>
//   )
// );

function App() {
  return (

    <RouterProvider router={router} />

  );
}

function Root() {
  return (
    <div>
      {/* <h1>Root</h1>
      <ul>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul> */}
      <Outlet />
    </div>
  );
}


export default App;
