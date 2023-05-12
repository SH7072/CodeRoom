import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Outlet,
} from "react-router-dom";
import Signup from "./pages/Signup/Signup"
import Login from "./pages/Login/Login"
import ClassroomNavbar from './components/Navbar/ClassroomNavbar';
import ClassroomDashboard from './pages/Classroom/ClassroomDashboard';



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
      <Route path='classroom' element={<InnerRoot />}>
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
      <Outlet />
    </div>
  );
}
function InnerRoot() {
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
