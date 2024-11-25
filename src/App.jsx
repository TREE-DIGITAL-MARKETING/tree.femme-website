import * as React from "react";
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes.jsx'; // Import your router
import Navbar from "./components/ExternalComponents/NavBar.jsx";
import Footer from "./components/ExternalComponents/Footer.jsx";
const { Suspense } = React;

function App() {
  return (
    <Suspense className = "p-3" fallback={<div>Loading...</div>}> {/* Suspense to handle lazy loading */}
    <Navbar/>
      <RouterProvider router={router} />
      <Footer/>
    </Suspense>
  );
}

export default App;
