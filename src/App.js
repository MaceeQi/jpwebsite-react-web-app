import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import JadePalace from "./jp";
import "./App.css";

function App() {
    document.body.classList.add('jp-default-style');
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/*" element={<JadePalace/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;
