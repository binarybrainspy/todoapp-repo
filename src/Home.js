// import React from "react";
import { Link } from "react-router";
import './Home.css'

function Home() {
    return (
        <div className="homecont" >
            <h1 className="txt1" >
                Click the button below to <br/> access my todo app.
            </h1>
            <Link className="btn1" to="todoapp">CLICK ME</Link>
        </div>
    )
}

export default Home;