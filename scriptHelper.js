require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTarget = document.getElementById('missionTarget');
    missionTarget.innerHTML = `
    <h2>Mission Destination</h2>
     <ol>
        <li>Name:${name}</li>
        <li>Diameter:${diameter}</li>
        <li>Star:${star}</li>
        <li>Distance from Earth:${distance}</li>
        <li>Number of Moons:${moons}</li>
    </ol>
    <img src="${imageUrl}">
    `;
}

function validateInput(testInput) {
    if (testInput === "") {
        return 'Empty';
    } else if (isNaN(testInput)) {
        return 'Not a Number';
    } else if (!isNaN(testInput)) {
        return 'Is a Number';
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot) !== "Not a Number") {
        alert('Pilot is required and must contain letters only.');
    }
    if (validateInput(copilot) !== "Not a Number") {
        alert('CoPilot is is required and must contain letters only.');
    }
    if (validateInput(fuelLevel) !== "Is a Number") {
        alert('Fuel Level must be a number.');
    }
    if (validateInput(cargoLevel) !== "Is a Number") {
        alert('Cargo Level must be a number.');
    }

    const launchStatus = document.getElementById('launchStatus');
    launchStatus.innerHTML = `Shuttle is Ready for Launch`;
    launchStatus.style.color = 'green';

    function notReady() {
        launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
        launchStatus.style.color = 'red';
    }

    const fuelStatus = document.getElementById('fuelStatus');
    const cargoStatus = document.getElementById('cargoStatus');
    if (fuelLevel < 10000) {
        fuelStatus.innerHTML = `Fuel level too low for launch`;
        notReady();
    } else {
        fuelStatus.innerHTML = `Fuel level high enough for launch`;
    }
    if (cargoLevel > 10000) {
        cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
        notReady();
    } else {
        cargoStatus.innerHTML = `Cargo mass low enough for launch`;
    }

    list.style.visibility = 'visible';

    const pilotReady = document.getElementById('pilotStatus');
    pilotReady.innerHTML = `Pilot ${pilot} is ready for launch`;

    const coPilotStatus = document.getElementById('copilotStatus');
    coPilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
}

async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    let data = await planetsReturned.json();
    return data;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;