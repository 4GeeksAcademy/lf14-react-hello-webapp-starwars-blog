import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Card from "../component/Card";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
const Planets = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchPlanets();
    }, []);

    return (
        <div className="container">
            <h1>Planets</h1>
            <div className="row">
                {store.planets.map((planet, index) => (
                    <div key={index} className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{planet.name}</h5>
                                <Link to={`/planet/${planet.uid}`} className="btn btn-primary">View Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Planets;