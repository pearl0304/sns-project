import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// COMPONENTS
import { Login } from './Login';
import { SignUp } from './SignUp';
import { Feed } from './Feed';
import { Header } from '../components/Header';
import { Navigation } from '../components/Navigation';

export const AppRouter = ({ isLogin, userInfo }: any) => {
  return (
    <Router>
      {isLogin && <Header />}
      {isLogin && <Navigation />}
      <Routes>
        <>
          <Route path={'/'} element={<Feed />}></Route>
        </>
        ) : (
        <>
          <Route path={'/login'} element={<Login />}></Route>
          <Route path={'/signup'} element={<SignUp />}></Route>
        </>
        )
      </Routes>
    </Router>
  );
};
