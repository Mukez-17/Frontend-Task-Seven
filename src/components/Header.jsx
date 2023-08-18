import React from "react";

const Header = () => {
    return (
        <header>
            <div className="title">
                <h1>GetTickets</h1>
            </div>
            <div className="navigation">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Genre</a></li>
                    <li><a href="/">Upcoming</a></li>
                    <li><a href="/">Book Tickets</a></li>
                    <li><a href="/">About</a></li>

                </ul>
            </div>
            <div className="btn">
                <button type="button">Login</button>
            </div>
        </header>
    );
}

export default Header;