import 'tailwindcss/tailwind.css'
import DarkModeContext from '../utils/create-dark-mode'
import {useEffect, useState} from "react";
import Head from "next/head";

function MyApp({Component, pageProps}) {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          setDarkMode(true);
          document.body.classList.add("dark");
      } else {
          setDarkMode(false)
          document.body.classList.remove("dark");
      }
  }, []);

  const toggleDarkMode = () => {
      setDarkMode(!darkMode);
      if (darkMode) {
          document.body.classList.remove("dark");
      } else {
          document.body.classList.add("dark");
      }
  }

  return <DarkModeContext.Provider value={[darkMode, toggleDarkMode]}>
      <Head>
          <title>Melvin He</title>
      </Head>
      <Component {...pageProps} />
  </DarkModeContext.Provider>
}

export default MyApp