import React, { useEffect, useState } from 'react';

// FIREBASE
import { firebaseAuth } from './initFirebase';
import { onAuthStateChanged } from 'firebase/auth';

// COMPONENTS
import { AppRouter } from './routes/Router';

// STYLE
import './css/App.css';

const App = () => {
  const [init, setInit] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<{} | null>(null);
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setIsLogin(true);
        setUserInfo(user);
      } else {
        setIsLogin(false);
      }
      setInit(true);
    });
  }, []);
  return <>{init ? <AppRouter isLogin={isLogin} userInfo={userInfo} /> : 'Initializing...'}</>;
};

export default App;
