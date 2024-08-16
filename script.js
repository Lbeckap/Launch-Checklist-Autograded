
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
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);

    }).then(function () {
        const planet = pickPlanet(listedPlanets);
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
    }) 
 });