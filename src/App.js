import React, { useEffect } from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import ClassroomDashboard from './pages/Classroom/ClassroomDashboard';
import Stream from './pages/Class/Stream/Stream';
import Classwork from "./pages/Class/Classwork/Classwork";
import HomeLayout from './components/Layout/HomeLayout';
import Root from './components/Layout/Root';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './redux/actions/user';
import ClassLayout from './components/Layout/ClassLayout';
import Protected from './Protected';
import People from './pages/Class/People/People';
import CodeEditor from './pages/CodeEditor/CodeEditor';
import ViewAssignment from './components/Class/Classwork/ViewAssignment';









function App() {

  const { loading, isAuthenticated, user, message, error } = useSelector(state => state.user);

  // console.log(loading, isAuthenticated, user);

  const dispatch = useDispatch();
  // useEffect(() => {
  // if (!error) {
  //   // toast.error(error);
  //   dispatch({ type: 'clearError' });
  // }

  // if (!message) {
  //   // toast.success(message);
  //   dispatch({ type: 'clearMessage' });
  // }
  // }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route
          path='classroom'
          element={
            <Protected>
              <HomeLayout />
            </Protected>}>
          <Route
            index
            element={
              <ClassroomDashboard isArchived={false} />
            } />
        </Route>
        <Route
          path='archived'
          element={
            <Protected>
              <HomeLayout />
            </Protected>}>
          <Route
            index
            element={
              <ClassroomDashboard isArchived={true} />
            } />
        </Route>
        <Route
          path='code-editor'
          element={
            <Protected>
              <HomeLayout />
            </Protected>}>
          <Route
            index
            element={
              <CodeEditor />
            } />
        </Route>
        <Route exact path='class/:id/'
          element={
            <Protected>
              <ClassLayout />
            </Protected>
          }
        >
          <Route exact path='stream' element={<Stream />} />
          <Route exact path='classwork' element={<Classwork />} />
          <Route exact path='people' element={<People />} />
          <Route exact path='viewAssignment' element={<ViewAssignment />} />
        </Route>
      </Route>
    ));






  return (
    <RouterProvider router={router} />
  );
}

export default App;
