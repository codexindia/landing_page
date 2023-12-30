import Header from './Components/Header';
import Hero from './Components/Hero';

import Footers from './Components/Footer';
import Team from './Components/Team';
import Projects from './Components/Projects';
import Modals from './Components/Modal';
import Testimonials from './Components/Testimonials';
import { useEffect, useState } from 'react';
import Loader from './Components/Loader';

function App() {
  const [progress, setProgress] = useState(30);
  useEffect(() => {
    setTimeout(function () {
      setProgress(50);
    }, 1000);
    setTimeout(function () {
      setProgress(70);
      setProgress(100)
    }, 2000);
  }, []);
  return (
    <>
     <Loader SetProgress={setProgress} progress={progress}/>
      <Header />
      <Hero />
      <Projects />
      <Team />
      <Testimonials />
      <Modals />
      <Footers />

    </>
  )
}

export default App
