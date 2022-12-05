import React, {useEffect} from 'react';

const disableSplashScreen = () => {
 const splashScreen = document.getElementById('loading');
 if (splashScreen) {
  splashScreen.style.setProperty('display', 'none');
 }
};

export default function LayoutProvider({children}) {
 useEffect(() => {
  disableSplashScreen();
 }, []);

 return <>{children}</>;
}
