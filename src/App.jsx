import { Routes, Route } from "react-router-dom";

import Boot from "./pages/Boot";
import Home from "./pages/Home";
import NotFound from "./pages/404";

import "./style.css";

export default function App() {
    return <Routes>
        <Route path="/" element={<Boot/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
}