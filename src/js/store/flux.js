const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            planets: [],
            people: [],
            vehicles: []
        },
        actions: {
            async fetchPlanets() {
                try {
                    const response = await fetch("https://www.swapi.tech/api/planets", {
                        method: "GET"
                    });
                    const data = await response.json();
                    setStore({ planets: data.results });
                } catch (error) {
                    console.log(error);
                }
            },
            async fetchPeople() {
                try {
                    const response = await fetch("https://www.swapi.tech/api/people", {
                        method: "GET"
                    });
                    const data = await response.json();
                    setStore({ people: data.results });
                } catch (error) {
                    console.log(error);
                }
            },
            async fetchVehicles() {
                try {
                    const response = await fetch("https://www.swapi.tech/api/vehicles", {
                        method: "GET"
                    });
                    const data = await response.json();
                    setStore({ vehicles: data.results });
                } catch (error) {
                    console.log(error);
                }
            }
        }
    };
};

export default getState;