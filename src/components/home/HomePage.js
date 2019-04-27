import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
    <div className="jumbotron">
        <h1>Administration</h1>
        <p>React course manager</p>
        <Link to="about" className="btn btn-lg btn-primary">Learn More</Link>
    </div>
);

export default HomePage;