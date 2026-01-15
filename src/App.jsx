import { Routes, Route } from "react-router-dom";

import Boot from "./pages/Boot";

import "./style.css";

export default function App() {
    return <Routes>
        <Route path="/" element={<Boot/>}/>
    </Routes>
}