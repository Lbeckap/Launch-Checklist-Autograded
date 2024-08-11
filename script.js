// Write your JavaScript code here!


//TODO: this is causing the error: Uncaught SyntaxError: redeclaration of var validateInput
//TODO: Why aren't my console logs for validation Input showing?
const { validateInput } = require("./scriptHelper");

window.addEventListener("load", function() {

    const form = document.getElementById('testForm');
    form.addEventListener('submit', validateInput); //TODO: no parenthesis with the call back function right?

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    
 });