import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="navbar-brand" href="#">ExerciseTracker</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link" href="#">Exercises</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/create" className="nav-link" href="#">Create Exercise Log</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user" className="nav-link" href="#">Create User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
