import SplashScreen from "./components/SplashScreen"
import Routers from "./Routers"
import { BrowserRouter, useLocation } from "react-router-dom"

function AppContent() {
  const location = useLocation();
  const isOnSplash = location.pathname === '/';
  
  return (
    <>
      {isOnSplash ? <SplashScreen /> : <Routers />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
