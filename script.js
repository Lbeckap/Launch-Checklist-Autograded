
window.addEventListener("load", function() {
    const list = document.getElementById('faultyItems');
    const form = document.querySelector('form');

    const pilot = document.querySelector(".formField input[name='pilotName']").value;
    const copilot = document.querySelector(".formField input[name='copilotName']").value;
    const fuelLevel = document.querySelector(".formField input[name='fuelLevel']").value;
    const cargoLevel = document.querySelector(".formField input[name='cargoMass']").value;

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