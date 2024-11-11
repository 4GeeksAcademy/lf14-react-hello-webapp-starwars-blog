import React, { useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import Card from '..component/Card.js'

const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchPlanets();
        actions.fetchPeople();
        actions.fetchVehicles();
    }, []);

    return (
        <div className="home">
            <h1>Planets</h1>
            <div className="card-container">
                {store.planets.slice(0, 5).map((planet, index) => (
                    <Card key={index} data={planet} />
                ))}
            </div>
            <h1>People</h1>
            <div className="card-container">
                {store.people.slice(0, 5).map((person, index) => (
                    <Card key={index} data={person} />
                ))}
            </div>
            <h1>Vehicles</h1>
            <div className="card-container">
                {store.vehicles.slice(0, 5).map((vehicle, index) => (
                    <Card key={index} data={vehicle} />
                ))}
            </div>
        </div>
    );
};

export default Home;