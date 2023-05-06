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
import Signup from "./components/Signup"
import Login from "./components/Login"
import Editorpage from './components/Editorpage';
import ClassroomNavbar from './components/Navbar/ClassroomNavbar';
import ClassroomDashboard from './components/ClassroomDashboard';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <ClassroomDashboard />,
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
      <Route index element={<ClassroomDashboard />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="Editorpage" element={<Editorpage />} />
      <Route path='interview' element={<Root />}>
        <Route index element={<ClassroomDashboard />} />
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
      <ClassroomNavbar />
      <Outlet />
    </div>
  );
}


export default App;
