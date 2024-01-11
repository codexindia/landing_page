
import Contact from "./Pages/Contact"
import Home from "./Pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Service from "./Pages/Service"



function App() {
  return (<>
    <BrowserRouter>
      <Routes>
     
        <Route path="/service" element={<Service />} ></Route>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/contact" element={<Contact />} ></Route>
      </Routes>
    </BrowserRouter>

  </>
  )
}

export default App
