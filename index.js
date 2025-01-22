// is there a way I could have the same function for home and away 

let homePoints = document.getElementById("home_points")
let awayPoints = document.getElementById("away_points")

function addPoints(teamElement, points) {
    let currentResult = Number(teamElement.textContent)
    teamElement.textContent = currentResult + Number(points)
    if (Number(homePoints.textContent) > Number(awayPoints.textContent)) {
        homePoints.style.border = "2px solid yellow";
        awayPoints.style.border = "0px";
    }
    else if (Number(awayPoints.textContent) > Number(homePoints.textContent)) {
        awayPoints.style.border = "2px solid yellow";
        homePoints.style.border = "0px";
    }
    else {
            homePoints.style.border = "0px";
            awayPoints.style.border = "0px";
    }
}

function reset() {
    homePoints.textContent = 0;
    awayPoints.textContent = 0;
    homePoints.style.border = "0px";
    awayPoints.style.border = "0px";
}





