import * as React from "react";
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes.jsx'; // Import your router
import Navbar from "./components/ExternalComponents/NavBar.jsx";
import Footer from "./components/ExternalComponents/Footer.jsx";
const { Suspense } = React;

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <img src=".\image\loading.gif" alt="Loading..." className="w-auto" />
        </div>
      }
    >
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </Suspense>
  );
}

export default App;
