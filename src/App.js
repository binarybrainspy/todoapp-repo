import { Routes, Route } from "react-router"
import Home from "./Home"
import TodoApp from "./TodoApp"
import './App.css'

function App() {
    return(
        <div className="renderpages">
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="todoapp" element={ <TodoApp/> } />
            </Routes>
        </div>
    )
}

export default App;