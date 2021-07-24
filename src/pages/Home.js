import React, {useContext} from 'react'
import {Link} from "react-router-dom";
import {AuthContext} from "../components/Auth"
import Header from '../components/Header';

function Home() {
    const {currentUser} = useContext(AuthContext);

    return (
        <div>
            {/* <Header /> */}
            <h1>Home</h1>
            {currentUser ? (
                <p>You are logged in - <Link to="/dashboard">View</Link></p>
            ): (
                <p>
                    <Link to="/login">Log in</Link> or <Link to="/signup">Sign Up</Link>
                </p>
            )}
        </div>
    )
}

export default Home
