import Contact from "./Pages/Contact"
import Home from "./Pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/contact" element={<Contact />} ></Route>
      </Routes>
    </BrowserRouter>

  </>
  )
}

export default App
