import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RequireAuth from './features/auth/RequireAuth';
import Login from './features/auth/Login';
import Public from './components/Public';
import Welcome from './features/auth/Welcome';
import Layout from './components/Layout';
import UsersList from './features/users/UsersLists';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* Public routes */}
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        {/*  Protected Routes*/}
        <Route element={<RequireAuth />}>
          <Route path='welcome' element={<Welcome />} />
          <Route path='userslist' element={<UsersList />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App