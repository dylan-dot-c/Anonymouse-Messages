import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home/index"
import Login from "./pages/Login/index"
import SignUp from "./pages/Signup/index"
import SendMessage from "./pages/SendMessage/index"
import NotFound from "./pages/NotFound/index"
import Dashboard from "./pages/Dashboard/index"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
// import { ToastContainer } from 'react-toastify';



function App() {
  // const [count, setCount] = useState(0)

  return (      
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/send/:username" element={<SendMessage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    <Footer />
    </BrowserRouter>
  )

}

export default App;