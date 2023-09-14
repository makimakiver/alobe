import Login from "./pages/login/login";
import Home from "./pages/home/home";
import Register from "./pages/register/register";
import AIcreative from "./pages/aicreative/aicreative"
import Profile from "./pages/profile/Profile";
import AIaccount from "./pages/aiaccount/AIaccount";
import { BrowserRouter,  Navigate,  Route,  Routes } from "react-router-dom";
import Chat from "./pages/chat/chat";
import Setting from "./pages/setting/setting";
import Edition from "./pages/accountchange/Edition";
import Comment from "./pages/commments/Comment";
import { AuthContext } from "./state/AuthContext";
import { useContext, useEffect, useState, CSSProperties} from "react";
import PuffLoader from "react-spinners/ClipLoader";
import "./App.css"
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Creationism from "./pages/createAI/Creationism";
import OTP from "./pages/one-time-pad-key/OTP";

function App() {
  const override: CSSProperties = {
    display: "flex",
    margin: "auto",
    borderColor: "red",
    bottom: "50%",
    alignItems: "center",
    fontsize: "100px",
  };
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 8000)
  }, [])
  return (
    <div className="loading">
    {
      loading ?
      
      <PuffLoader
      cssOverride={override}
      color="black"
      speedMultiplier={1.2}
      />
    : 
     <BrowserRouter>
            <Routes>
              <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
              <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
              <Route path="/" element={user ? <Home/>: <Register />} />
              <Route path="/museums" element={<AIcreative />} />
              <Route path="/profile/:username" element={<Profile />} />
              <Route path="/aiaccount/:ainame" element={<AIaccount />} />
              <Route path="/setting" element={user ? <Setting/> : <Navigate to="/register" />}/>
              <Route path="/chat" element={<Chat/>}/>
              <Route path="/aicreationism" element={<Creationism/>}/>
              <Route path="/edit/:username" element={<Edition/>}/>
              <Route path="/comment/:postId" element={<Comment/>}/>
              <Route path="/otp" element={<OTP/>}/>
            </Routes>
      </BrowserRouter>
      
    }
    </div>
    
    
  );
  
}

export default App;
  


// put them in one folder name pages.