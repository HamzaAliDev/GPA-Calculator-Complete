import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { useRouter } from 'next/router';
  
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const userEmail = localStorage.getItem('user');

    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    if (!userEmail) {
      router.push('/Login'); // Redirect to login if email is not present
    }
  }, []);
  return(
    <div>
      <Component {...pageProps} />

      <ToastContainer />
    </div>
  ) 
  }
export default MyApp
