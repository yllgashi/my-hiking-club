function Logo() {
    alert("This service is comming soon!");
}

function ChooseCity() {
    var choosenCity = window.prompt("What is the city you looking for ?\nEx: Prishtine");
    if(choosenCity == "Prishtine")
    {
        document.getElementById("ClickCity").setAttribute("href", "https://en.wikipedia.org/wiki/Pristina");
    }
    else if(choosenCity == "Prizren")
    {
        document.getElementById("ClickCity").setAttribute("href", "https://en.wikipedia.org/wiki/Prizren");
    }
    else
    {
        document.getElementById("ClickCity").setAttribute("target", "_self");
        alert("We do not have information about this city!");
    }
}