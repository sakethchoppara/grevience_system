import React ,{Component} from "react";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Homepage from "./Pages/Homepage/Homepage";
import "./App.css";
import { BrowserRouter , Route ,Routes } from "react-router-dom";
import LostAndFound from "./Pages/LostandFound/LostAndFound";
import LostForm from "./Pages/LostForm/LostForm";
import FoundForm from "./Pages/FoundForm/FoundForm";
import Search from './Pages/Search/Search';

class App extends Component{
  
  render(){
    return(
      <BrowserRouter basename="/">
        <div className="app-body">
          <Routes>
              <Route path="/" element={<LoginPage/>}/>
              <Route path="/home" element={<Homepage/>}/>
              <Route path="/lostNfound" element={<LostAndFound/>} />
              <Route path="/lostNfound/lost" element={<LostForm/>} />
              <Route path="/lostNfound/found" element={<FoundForm/>} />
              <Route path="/lostNfound/search/:id" element={<Search/>} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
