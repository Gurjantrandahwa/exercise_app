import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Box} from "@mui/material";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import ExerciseDetail from "./Pages/ExerciseDetail/ExerciseDetail";
import Footer from "./Components/Footer/Footer";

function App() {
    return <BrowserRouter>
        <Box width={"400px"} sx={{width: {xl: "1488px"}}} m={"auto"}>
            <Navbar/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/exercise/:id"} element={<ExerciseDetail/>}/>
            </Routes>
            <Footer/>
        </Box>
    </BrowserRouter>
}

export default App;
