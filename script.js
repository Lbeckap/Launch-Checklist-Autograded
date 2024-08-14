// Write your JavaScript code here!
window.addEventListener("load", function() {
    const pilot = document.getElementById('pilotName').value.trim();
    const copilot = document.getElementById('coPilotName').value.trim();
    const fuelLevel = document.getElementById('fuelLevel').value.trim();
    const cargoLevel = document.getElementById('cargoMass').value.trim();
    const list = document.getElementById('faultyItems');
    const form = document.getElementById('testForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    });

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);

    }).then(function () {
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        const planet = pickPlanet(listedPlanets);
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
    }) 
 });