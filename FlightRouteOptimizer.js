const selects =
document.querySelectorAll(".custom-select");

selects.forEach(select => {

    const box =
    select.querySelector(".select-box");

    const options =
    select.querySelector(".options");

    const allOptions =
    select.querySelectorAll(".option");

    box.addEventListener("click", () => {

        document
        .querySelectorAll(".options")
        .forEach(drop => {

            if(drop !== options){
                drop.classList.remove("show");
            }
        });

        document
        .querySelectorAll(".select-box")
        .forEach(b => {

            if(b !== box){
                b.classList.remove("active");
            }
        });

        options.classList.toggle("show");
        box.classList.toggle("active");
    });

    allOptions.forEach(option => {

        option.addEventListener("click", () => {

            box.querySelector("span").innerText =
            option.innerText;

            options.classList.remove("show");
            box.classList.remove("active");
        });
    });
});

window.addEventListener("click", (e) => {

    if(!e.target.closest(".custom-select")){

        document
        .querySelectorAll(".options")
        .forEach(drop => {
            drop.classList.remove("show");
        });

        document
        .querySelectorAll(".select-box")
        .forEach(box => {
            box.classList.remove("active");
        });
    }
});


const airports = [

{
    code: "HYD",
    city: "Hyderabad",
    airport: "Rajiv Gandhi International Airport",
    state: "Telangana",
    lat: 17.2403,
    lng: 78.4294
},

{
    code: "BLR",
    city: "Bangalore",
    airport: "Kempegowda International Airport",
    state: "Karnataka",
    lat: 13.1986,
    lng: 77.7066
},

{
    code: "MAA",
    city: "Chennai",
    airport: "Chennai International Airport",
    state: "Tamil Nadu",
    lat: 12.9941,
    lng: 80.1709
},

{
    code: "COK",
    city: "Kochi",
    airport: "Cochin International Airport",
    state: "Kerala",
    lat: 10.1520,
    lng: 76.4019
},

{
    code: "TRV",
    city: "Thiruvananthapuram",
    airport: "Trivandrum International Airport",
    state: "Kerala",
    lat: 8.4821,
    lng: 76.9201
},

{
    code: "CCJ",
    city: "Kozhikode",
    airport: "Calicut International Airport",
    state: "Kerala",
    lat: 11.1368,
    lng: 75.9553
},

{
    code: "IXE",
    city: "Mangalore",
    airport: "Mangalore International Airport",
    state: "Karnataka",
    lat: 12.9613,
    lng: 74.8901
},

{
    code: "VTZ",
    city: "Visakhapatnam",
    airport: "Visakhapatnam Airport",
    state: "Andhra Pradesh",
    lat: 17.7212,
    lng: 83.2245
},

{
    code: "VGA",
    city: "Vijayawada",
    airport: "Vijayawada International Airport",
    state: "Andhra Pradesh",
    lat: 16.5304,
    lng: 80.7968
},

{
    code: "CJB",
    city: "Coimbatore",
    airport: "Coimbatore International Airport",
    state: "Tamil Nadu",
    lat: 11.0310,
    lng: 77.0434
},

{
    code: "DEL",
    city: "Delhi",
    airport: "Indira Gandhi International Airport",
    state: "Delhi",
    lat: 28.5562,
    lng: 77.1000
},

{
    code: "IXC",
    city: "Chandigarh",
    airport: "Chandigarh International Airport",
    state: "Punjab",
    lat: 30.6735,
    lng: 76.7885
},

{
    code: "LKO",
    city: "Lucknow",
    airport: "Chaudhary Charan Singh International Airport",
    state: "Uttar Pradesh",
    lat: 26.7606,
    lng: 80.8893
},

{
    code: "JAI",
    city: "Jaipur",
    airport: "Jaipur International Airport",
    state: "Rajasthan",
    lat: 26.8242,
    lng: 75.8122
},

{
    code: "ATQ",
    city: "Amritsar",
    airport: "Sri Guru Ram Dass Jee International Airport",
    state: "Punjab",
    lat: 31.7096,
    lng: 74.7973
},

{
    code: "SXR",
    city: "Srinagar",
    airport: "Srinagar International Airport",
    state: "Jammu and Kashmir",
    lat: 33.9871,
    lng: 74.7743
},

{
    code: "DED",
    city: "Dehradun",
    airport: "Jolly Grant Airport",
    state: "Uttarakhand",
    lat: 30.1897,
    lng: 78.1803
},

{
    code: "VNS",
    city: "Varanasi",
    airport: "Lal Bahadur Shastri International Airport",
    state: "Uttar Pradesh",
    lat: 25.4524,
    lng: 82.8593
},

{
    code: "AGR",
    city: "Agra",
    airport: "Agra Airport",
    state: "Uttar Pradesh",
    lat: 27.1577,
    lng: 77.9609
},

{
    code: "GWL",
    city: "Gwalior",
    airport: "Rajmata Vijaya Raje Scindia Airport",
    state: "Madhya Pradesh",
    lat: 26.2933,
    lng: 78.2278
},

{
    code: "BOM",
    city: "Mumbai",
    airport: "Chhatrapati Shivaji Maharaj International Airport",
    state: "Maharashtra",
    lat: 19.0896,
    lng: 72.8656
},

{
    code: "AMD",
    city: "Ahmedabad",
    airport: "Sardar Vallabhbhai Patel International Airport",
    state: "Gujarat",
    lat: 23.0734,
    lng: 72.6266
},

{
    code: "GOI",
    city: "Goa",
    airport: "Goa International Airport",
    state: "Goa",
    lat: 15.3808,
    lng: 73.8314
},

{
    code: "PNQ",
    city: "Pune",
    airport: "Pune Airport",
    state: "Maharashtra",
    lat: 18.5821,
    lng: 73.9197
},

{
    code: "NAG",
    city: "Nagpur",
    airport: "Dr. Babasaheb Ambedkar International Airport",
    state: "Maharashtra",
    lat: 21.0922,
    lng: 79.0472
},

{
    code: "RAJ",
    city: "Rajkot",
    airport: "Rajkot Airport",
    state: "Gujarat",
    lat: 22.3092,
    lng: 70.7795
},

{
    code: "STV",
    city: "Surat",
    airport: "Surat International Airport",
    state: "Gujarat",
    lat: 21.1141,
    lng: 72.7418
},

{
    code: "BDQ",
    city: "Vadodara",
    airport: "Vadodara Airport",
    state: "Gujarat",
    lat: 22.3362,
    lng: 73.2263
},

{
    code: "IDR",
    city: "Indore",
    airport: "Devi Ahilyabai Holkar Airport",
    state: "Madhya Pradesh",
    lat: 22.7218,
    lng: 75.8011
},

{
    code: "BHO",
    city: "Bhopal",
    airport: "Raja Bhoj Airport",
    state: "Madhya Pradesh",
    lat: 23.2875,
    lng: 77.3374
},

// EAST INDIA

{
    code: "CCU",
    city: "Kolkata",
    airport: "Netaji Subhas Chandra Bose International Airport",
    state: "West Bengal",
    lat: 22.6547,
    lng: 88.4467
},

{
    code: "BBI",
    city: "Bhubaneswar",
    airport: "Biju Patnaik International Airport",
    state: "Odisha",
    lat: 20.2444,
    lng: 85.8178
},

{
    code: "PAT",
    city: "Patna",
    airport: "Jay Prakash Narayan Airport",
    state: "Bihar",
    lat: 25.5913,
    lng: 85.0870
},

{
    code: "IXR",
    city: "Ranchi",
    airport: "Birsa Munda Airport",
    state: "Jharkhand",
    lat: 23.3143,
    lng: 85.3217
},

{
    code: "GAY",
    city: "Gaya",
    airport: "Gaya Airport",
    state: "Bihar",
    lat: 24.7443,
    lng: 84.9512
},

{
    code: "RPR",
    city: "Raipur",
    airport: "Swami Vivekananda Airport",
    state: "Chhattisgarh",
    lat: 21.1804,
    lng: 81.7388
},

{
    code: "JRG",
    city: "Jharsuguda",
    airport: "Veer Surendra Sai Airport",
    state: "Odisha",
    lat: 21.9135,
    lng: 84.0504
},

{
    code: "IXB",
    city: "Bagdogra",
    airport: "Bagdogra Airport",
    state: "West Bengal",
    lat: 26.6812,
    lng: 88.3286
},

{
    code: "DGH",
    city: "Deoghar",
    airport: "Deoghar Airport",
    state: "Jharkhand",
    lat: 24.4468,
    lng: 86.7049
},

{
    code: "RDP",
    city: "Durgapur",
    airport: "Kazi Nazrul Islam Airport",
    state: "West Bengal",
    lat: 23.6225,
    lng: 87.2430
},


// NORTH EAST INDIA

{
    code: "GAU",
    city: "Guwahati",
    airport: "Lokpriya Gopinath Bordoloi International Airport",
    state: "Assam",
    lat: 26.1061,
    lng: 91.5859
},

{
    code: "IMF",
    city: "Imphal",
    airport: "Imphal International Airport",
    state: "Manipur",
    lat: 24.7600,
    lng: 93.8967
},

{
    code: "SHL",
    city: "Shillong",
    airport: "Shillong Airport",
    state: "Meghalaya",
    lat: 25.7036,
    lng: 91.9787
},

{
    code: "DIB",
    city: "Dibrugarh",
    airport: "Dibrugarh Airport",
    state: "Assam",
    lat: 27.4839,
    lng: 95.0169
},

{
    code: "AJL",
    city: "Aizawl",
    airport: "Lengpui Airport",
    state: "Mizoram",
    lat: 23.8406,
    lng: 92.6197
},

{
    code: "IXA",
    city: "Agartala",
    airport: "Maharaja Bir Bikram Airport",
    state: "Tripura",
    lat: 23.8869,
    lng: 91.2404
},

{
    code: "DMU",
    city: "Dimapur",
    airport: "Dimapur Airport",
    state: "Nagaland",
    lat: 25.8839,
    lng: 93.7711
},

{
    code: "TEZ",
    city: "Tezpur",
    airport: "Tezpur Airport",
    state: "Assam",
    lat: 26.7091,
    lng: 92.7847
},

{
    code: "PYG",
    city: "Pakyong",
    airport: "Pakyong Airport",
    state: "Sikkim",
    lat: 27.2342,
    lng: 88.5873
},

{
    code: "JRH",
    city: "Jorhat",
    airport: "Jorhat Airport",
    state: "Assam",
    lat: 26.7315,
    lng: 94.1755
}

];


const routes = [

    // SOUTH INDIA

    { from: "HYD", to: "BLR", distance: 570, time: 70, cost: 2500 },
    { from: "HYD", to: "MAA", distance: 630, time: 75, cost: 2700 },
    { from: "HYD", to: "COK", distance: 860, time: 100, cost: 3600 },
    { from: "HYD", to: "VTZ", distance: 620, time: 80, cost: 2900 },
    { from: "HYD", to: "VGA", distance: 275, time: 45, cost: 1800 },
    { from: "HYD", to: "BOM", distance: 620, time: 90, cost: 3200 },
    { from: "HYD", to: "DEL", distance: 1500, time: 165, cost: 7800 },
    { from: "BLR", to: "MAA", distance: 350, time: 55, cost: 1800 },
    { from: "BLR", to: "COK", distance: 550, time: 75, cost: 2400 },
    { from: "BLR", to: "GOI", distance: 560, time: 80, cost: 2600 },
    { from: "BLR", to: "DEL", distance: 1750, time: 160, cost: 3500 },
    { from: "BLR", to: "BOM", distance: 980, time: 95, cost: 3000 },
    { from: "MAA", to: "COK", distance: 690, time: 90, cost: 3100 },
    { from: "MAA", to: "TRV", distance: 760, time: 95, cost: 3300 },
    { from: "MAA", to: "DEL", distance: 1760, time: 170, cost: 4200 },
    { from: "COK", to: "TRV", distance: 210, time: 40, cost: 1400 },
    { from: "CCJ", to: "COK", distance: 180, time: 35, cost: 1200 },
    { from: "IXE", to: "BLR", distance: 300, time: 50, cost: 1600 },
    { from: "CJB", to: "BLR", distance: 360, time: 55, cost: 1700 },

    // NORTH INDIA

    { from: "DEL", to: "IXC", distance: 240, time: 45, cost: 1600 },
    { from: "DEL", to: "LKO", distance: 420, time: 60, cost: 2100 },
    { from: "DEL", to: "JAI", distance: 280, time: 50, cost: 1700 },
    { from: "DEL", to: "ATQ", distance: 450, time: 65, cost: 2200 },
    { from: "DEL", to: "SXR", distance: 650, time: 80, cost: 3000 },
    { from: "DEL", to: "DED", distance: 210, time: 40, cost: 1500 },
    { from: "DEL", to: "VNS", distance: 680, time: 80, cost: 2800 },
    { from: "DEL", to: "AGR", distance: 180, time: 35, cost: 1300 },
    { from: "DEL", to: "GWL", distance: 320, time: 50, cost: 1800 },
    { from: "LKO", to: "PAT", distance: 520, time: 70, cost: 2300 },
    { from: "VNS", to: "PAT", distance: 260, time: 45, cost: 1500 },
    { from: "JAI", to: "AMD", distance: 660, time: 80, cost: 2900 },

    // WEST INDIA

    { from: "BOM", to: "AMD", distance: 530, time: 70, cost: 2500 },
    { from: "BOM", to: "GOI", distance: 430, time: 60, cost: 1700 },
    { from: "BOM", to: "PNQ", distance: 150, time: 35, cost: 1200 },
    { from: "BOM", to: "NAG", distance: 700, time: 85, cost: 2900 },
    { from: "BOM", to: "RAJ", distance: 740, time: 90, cost: 3200 },
    { from: "BOM", to: "STV", distance: 280, time: 45, cost: 1500 },
    { from: "BOM", to: "DEL", distance: 1150, time: 120, cost: 2100 },
    { from: "AMD", to: "RAJ", distance: 220, time: 40, cost: 1300 },
    { from: "AMD", to: "STV", distance: 260, time: 45, cost: 1400 },
    { from: "AMD", to: "BDQ", distance: 110, time: 30, cost: 1000 },
    { from: "IDR", to: "BHO", distance: 180, time: 35, cost: 1200 },
    { from: "IDR", to: "DEL", distance: 670, time: 80, cost: 2600 },
    { from: "BHO", to: "DEL", distance: 600, time: 75, cost: 2400 },

    // EAST INDIA

    { from: "CCU", to: "BBI", distance: 440, time: 60, cost: 2200 },
    { from: "CCU", to: "PAT", distance: 470, time: 65, cost: 2300 },
    { from: "CCU", to: "IXR", distance: 320, time: 50, cost: 1700 },
    { from: "CCU", to: "GAY", distance: 380, time: 55, cost: 1900 },
    { from: "CCU", to: "RPR", distance: 700, time: 85, cost: 3000 },
    { from: "CCU", to: "IXB", distance: 450, time: 65, cost: 2200 },
    { from: "CCU", to: "DEL", distance: 1300, time: 145, cost: 4100 },
    { from: "BBI", to: "RPR", distance: 530, time: 70, cost: 2500 },
    { from: "PAT", to: "IXR", distance: 330, time: 50, cost: 1600 },
    { from: "JRG", to: "BBI", distance: 280, time: 45, cost: 1500 },
    { from: "DGH", to: "PAT", distance: 260, time: 40, cost: 1400 },
    { from: "RDP", to: "CCU", distance: 180, time: 35, cost: 1200 },

    // NORTH EAST INDIA

    { from: "GAU", to: "IMF", distance: 490, time: 70, cost: 2600 },
    { from: "GAU", to: "SHL", distance: 100, time: 25, cost: 900 },
    { from: "GAU", to: "DIB", distance: 440, time: 65, cost: 2400 },
    { from: "GAU", to: "AJL", distance: 320, time: 50, cost: 1800 },
    { from: "GAU", to: "IXA", distance: 350, time: 55, cost: 1900 },
    { from: "GAU", to: "DMU", distance: 260, time: 45, cost: 1500 },
    { from: "GAU", to: "TEZ", distance: 180, time: 35, cost: 1200 },
    { from: "GAU", to: "JRH", distance: 300, time: 50, cost: 1600 },
    { from: "PYG", to: "IXB", distance: 120, time: 30, cost: 1000 },

    // INTER-REGION CONNECTIONS

    { from: "HYD", to: "CCU", distance: 1180, time: 125, cost: 4500 },
    { from: "HYD", to: "GAU", distance: 1680, time: 180, cost: 6200 },
    { from: "BOM", to: "CCU", distance: 1660, time: 170, cost: 5200 },
    { from: "BOM", to: "GAU", distance: 2060, time: 210, cost: 6800 },
    { from: "DEL", to: "GAU", distance: 1450, time: 150, cost: 4800 },
    { from: "DEL", to: "CCU", distance: 1300, time: 145, cost: 4100 },
    { from: "MAA", to: "CCU", distance: 1380, time: 150, cost: 4700 },
    { from: "BLR", to: "CCU", distance: 1560, time: 165, cost: 5100 },
    { from: "GOI", to: "DEL", distance: 1510, time: 160, cost: 3900 },
    { from: "PNQ", to: "DEL", distance: 1180, time: 125, cost: 3400 },
    { from: "NAG", to: "CCU", distance: 980, time: 110, cost: 3600 },
    { from: "NAG", to: "DEL", distance: 860, time: 95, cost: 3100 },
    { from: "VTZ", to: "CCU", distance: 880, time: 95, cost: 3300 },
    { from: "VTZ", to: "DEL", distance: 1350, time: 145, cost: 4400 },
    { from: "TRV", to: "DEL", distance: 2230, time: 220, cost: 7200 },
    { from: "COK", to: "BOM", distance: 1060, time: 115, cost: 3800 },
    { from: "IXB", to: "DEL", distance: 1120, time: 120, cost: 3900 },
    { from: "PAT", to: "DEL", distance: 1000, time: 110, cost: 3500 },
    { from: "RPR", to: "HYD", distance: 530, time: 70, cost: 2400 },
    { from: "RPR", to: "DEL", distance: 940, time: 105, cost: 3300 }

];



// =====================================
// GRAPH
// =====================================

let graph = {};

// =====================================
// CREATE GRAPH
// =====================================

function createGraph(){

    // RESET GRAPH

    graph = {};



    // CREATE EMPTY NODES

    airports.forEach(airport => {

        graph[airport.code] = [];

    });



    // ADD CONNECTIONS

    routes.forEach(route => {

        // FROM -> TO

        graph[route.from].push({

            node: route.to,
            cost: route.cost,
            time: route.time,
            distance: route.distance

        });



        // TO -> FROM

        graph[route.to].push({

            node: route.from,
            cost: route.cost,
            time: route.time,
            distance: route.distance

        });

    });



    // PRINT GRAPH

    console.log("GRAPH CREATED");

    console.log(graph);

}



// =====================================
// CREATE GRAPH
// WHEN PAGE LOADS
// =====================================

window.addEventListener("DOMContentLoaded", () => {

    createGraph();

});


// =====================================
// FIND ROUTE BUTTON
// =====================================

const searchBtn =
document.querySelector(".search-btn");



searchBtn.addEventListener("click", () => {

    // ALL SELECT BOXES

    const selectBoxes =
    document.querySelectorAll(".select-box");



    // FROM

    const from =
    selectBoxes[0]
    .querySelector("span")
    .innerText;



    // TO

    const to =
    selectBoxes[1]
    .querySelector("span")
    .innerText;



    // PREFERENCE

    const preference =
    selectBoxes[2]
    .querySelector("span")
    .innerText;



    // PRINT VALUES

    console.log("FROM:", from);

    console.log("TO:", to);

    console.log("PREFERENCE:", preference);




    // =====================================
    // RUN FUNCTIONS
    // =====================================

    if(preference === "Cheapest Route"){

        cheapest(from, to);
    }



    else if(preference === "Fastest Route"){

        fastest(from, to);
    }



    else if(preference === "Minimum Stops"){

        minimumStops(from, to);
    }



    else if(preference === "Shortest Distance"){

        shortestDistance(from, to);
    }



    else if(preference === "Balanced Route"){

        balanced(from, to);
    }
    alternative(from,to);

});






// =====================================
// CHEAPEST ROUTE
// =====================================

function cheapest(from, to){

    // CREATE GRAPH

    createGraph();



    // REMOVE TEXTS

    from =
    from.match(/\((.*?)\)/)[1];

    to =
    to.match(/\((.*?)\)/)[1];



    // DIJKSTRA VARIABLES

    const distances = {};
    const previous = {};
    const visited = new Set();



    // INITIALIZE

    for(let node in graph){

        distances[node] = Infinity;
        previous[node] = null;
    }

    distances[from] = 0;



    // DIJKSTRA

    while(true){

        let currentNode = null;
        let smallestDistance = Infinity;



        // FIND SMALLEST NODE

        for(let node in distances){

            if(
                !visited.has(node) &&
                distances[node] < smallestDistance
            ){

                smallestDistance =
                distances[node];

                currentNode = node;
            }
        }



        // STOP

        if(currentNode === null){
            break;
        }

        if(currentNode === to){
            break;
        }



        visited.add(currentNode);



        // CHECK NEIGHBORS

        graph[currentNode].forEach(neighbor => {

            const newDistance =

                distances[currentNode] +
                neighbor.cost;



            if(
                newDistance <
                distances[neighbor.node]
            ){

                distances[neighbor.node] =
                newDistance;

                previous[neighbor.node] =
                currentNode;
            }

        });

    }



    // BUILD PATH

    const path = [];

    let current = to;

    while(current){

        path.unshift(current);

        current = previous[current];
    }



    // TOTAL VALUES

    let totalCost = 0;
    let totalTime = 0;
    let totalDistance = 0;



    for(let i = 0; i < path.length - 1; i++){

        const currentAirport =
        path[i];

        const nextAirport =
        path[i + 1];



        const edge =

            graph[currentAirport]
            .find(route =>
                route.node === nextAirport
            );



        totalCost += edge.cost;
        totalTime += edge.time;
        totalDistance += edge.distance;
    }



    // =====================================
    // PRINT IN UI
    // =====================================

    document.getElementById(
        "bestRoute"
    ).innerText =

        path.join(" → ");



    document.getElementById(
        "totalCost"
    ).innerText =

        "₹ " + totalCost;



    document.getElementById(
        "totalTime"
    ).innerText =

        totalTime + " mins";



    document.getElementById(
        "totalStops"
    ).innerText =

        path.length - 2;



    document.getElementById(
        "totalDistance"
    ).innerText =

        totalDistance + " km";



    // =====================================
    // MAP VISUALIZATION
    // =====================================

    drawRoute(path);



    // CONSOLE

    console.log(path);

    console.log(totalCost);

}



// =====================================
// FASTEST ROUTE
// =====================================

function fastest(from, to){

    // CREATE GRAPH

    createGraph();



    // REMOVE TEXTS

    from =
    from.match(/\((.*?)\)/)[1];

    to =
    to.match(/\((.*?)\)/)[1];



    // VARIABLES

    const distances = {};
    const previous = {};
    const visited = new Set();



    // INITIALIZE

    for(let node in graph){

        distances[node] = Infinity;
        previous[node] = null;
    }

    distances[from] = 0;



    // DIJKSTRA

    while(true){

        let currentNode = null;
        let smallestDistance = Infinity;



        for(let node in distances){

            if(
                !visited.has(node) &&
                distances[node] < smallestDistance
            ){

                smallestDistance =
                distances[node];

                currentNode = node;
            }
        }



        if(currentNode === null){
            break;
        }

        if(currentNode === to){
            break;
        }



        visited.add(currentNode);



        graph[currentNode].forEach(neighbor => {

            const newDistance =

                distances[currentNode] +
                neighbor.time;



            if(
                newDistance <
                distances[neighbor.node]
            ){

                distances[neighbor.node] =
                newDistance;

                previous[neighbor.node] =
                currentNode;
            }

        });

    }



    // BUILD PATH

    const path = [];

    let current = to;

    while(current){

        path.unshift(current);

        current = previous[current];
    }



    // TOTAL VALUES

    let totalCost = 0;
    let totalTime = 0;
    let totalDistance = 0;



    for(let i = 0; i < path.length - 1; i++){

        const currentAirport =
        path[i];

        const nextAirport =
        path[i + 1];



        const edge =

            graph[currentAirport]
            .find(route =>
                route.node === nextAirport
            );



        totalCost += edge.cost;
        totalTime += edge.time;
        totalDistance += edge.distance;
    }



    // UI

    document.getElementById(
        "bestRoute"
    ).innerText =

        path.join(" → ");



    document.getElementById(
        "totalCost"
    ).innerText =

        "₹ " + totalCost;



    document.getElementById(
        "totalTime"
    ).innerText =

        totalTime + " mins";



    document.getElementById(
        "totalStops"
    ).innerText =

        path.length - 2;



    document.getElementById(
        "totalDistance"
    ).innerText =

        totalDistance + " km";



    // MAP

    drawRoute(path);

}



// =====================================
// SHORTEST DISTANCE
// =====================================

function shortestDistance(from, to){

    // CREATE GRAPH

    createGraph();



    // REMOVE TEXTS

    from =
    from.match(/\((.*?)\)/)[1];

    to =
    to.match(/\((.*?)\)/)[1];



    // VARIABLES

    const distances = {};
    const previous = {};
    const visited = new Set();



    // INITIALIZE

    for(let node in graph){

        distances[node] = Infinity;
        previous[node] = null;
    }

    distances[from] = 0;



    // DIJKSTRA

    while(true){

        let currentNode = null;
        let smallestDistance = Infinity;



        for(let node in distances){

            if(
                !visited.has(node) &&
                distances[node] < smallestDistance
            ){

                smallestDistance =
                distances[node];

                currentNode = node;
            }
        }



        if(currentNode === null){
            break;
        }

        if(currentNode === to){
            break;
        }



        visited.add(currentNode);



        graph[currentNode].forEach(neighbor => {

            const newDistance =

                distances[currentNode] +
                neighbor.distance;



            if(
                newDistance <
                distances[neighbor.node]
            ){

                distances[neighbor.node] =
                newDistance;

                previous[neighbor.node] =
                currentNode;
            }

        });

    }



    // BUILD PATH

    const path = [];

    let current = to;

    while(current){

        path.unshift(current);

        current = previous[current];
    }



    // TOTAL VALUES

    let totalCost = 0;
    let totalTime = 0;
    let totalDistance = 0;



    for(let i = 0; i < path.length - 1; i++){

        const currentAirport =
        path[i];

        const nextAirport =
        path[i + 1];



        const edge =

            graph[currentAirport]
            .find(route =>
                route.node === nextAirport
            );



        totalCost += edge.cost;
        totalTime += edge.time;
        totalDistance += edge.distance;
    }



    // UI

    document.getElementById(
        "bestRoute"
    ).innerText =

        path.join(" → ");



    document.getElementById(
        "totalCost"
    ).innerText =

        "₹ " + totalCost;



    document.getElementById(
        "totalTime"
    ).innerText =

        totalTime + " mins";



    document.getElementById(
        "totalStops"
    ).innerText =

        path.length - 2;



    document.getElementById(
        "totalDistance"
    ).innerText =

        totalDistance + " km";



    // MAP

    drawRoute(path);

}


// =====================================
// MINIMUM STOPS ROUTE
// =====================================

function minimumStops(from, to){

    // CREATE GRAPH

    createGraph();



    // REMOVE TEXTS

    from =
    from.match(/\((.*?)\)/)[1];

    to =
    to.match(/\((.*?)\)/)[1];



    // BFS VARIABLES

    const queue = [[from]];
    const visited = new Set();



    visited.add(from);



    let path = [];



    // BFS

    while(queue.length > 0){

        const currentPath =
        queue.shift();

        const currentNode =
        currentPath[currentPath.length - 1];



        // DESTINATION FOUND

        if(currentNode === to){

            path = currentPath;

            break;
        }



        // CHECK NEIGHBORS

        graph[currentNode].forEach(neighbor => {

            if(
                !visited.has(neighbor.node)
            ){

                visited.add(neighbor.node);

                queue.push([

                    ...currentPath,
                    neighbor.node

                ]);
            }

        });

    }



    // TOTAL VALUES

    let totalCost = 0;
    let totalTime = 0;
    let totalDistance = 0;



    for(let i = 0; i < path.length - 1; i++){

        const currentAirport =
        path[i];

        const nextAirport =
        path[i + 1];



        const edge =

            graph[currentAirport]
            .find(route =>
                route.node === nextAirport
            );



        totalCost += edge.cost;
        totalTime += edge.time;
        totalDistance += edge.distance;
    }



    // UI

    document.getElementById(
        "bestRoute"
    ).innerText =

        path.join(" → ");



    document.getElementById(
        "totalCost"
    ).innerText =

        "₹ " + totalCost;



    document.getElementById(
        "totalTime"
    ).innerText =

        totalTime + " mins";



    document.getElementById(
        "totalStops"
    ).innerText =

        path.length - 2;



    document.getElementById(
        "totalDistance"
    ).innerText =

        totalDistance + " km";



    // MAP

    drawRoute(path);

}



// =====================================
// BALANCED ROUTE
// =====================================

function balanced(from, to){

    // CREATE GRAPH

    createGraph();



    // REMOVE TEXTS

    from =
    from.match(/\((.*?)\)/)[1];

    to =
    to.match(/\((.*?)\)/)[1];



    // VARIABLES

    const distances = {};
    const previous = {};
    const visited = new Set();



    // INITIALIZE

    for(let node in graph){

        distances[node] = Infinity;
        previous[node] = null;
    }

    distances[from] = 0;



    // DIJKSTRA

    while(true){

        let currentNode = null;
        let smallestDistance = Infinity;



        for(let node in distances){

            if(
                !visited.has(node) &&
                distances[node] < smallestDistance
            ){

                smallestDistance =
                distances[node];

                currentNode = node;
            }
        }



        if(currentNode === null){
            break;
        }

        if(currentNode === to){
            break;
        }



        visited.add(currentNode);



        graph[currentNode].forEach(neighbor => {

            // BALANCED WEIGHT

            const balancedWeight =

                (neighbor.cost / 100) +
                neighbor.time +
                (neighbor.distance / 10);



            const newDistance =

                distances[currentNode] +
                balancedWeight;



            if(
                newDistance <
                distances[neighbor.node]
            ){

                distances[neighbor.node] =
                newDistance;

                previous[neighbor.node] =
                currentNode;
            }

        });

    }



    // BUILD PATH

    const path = [];

    let current = to;

    while(current){

        path.unshift(current);

        current = previous[current];
    }



    // TOTAL VALUES

    let totalCost = 0;
    let totalTime = 0;
    let totalDistance = 0;



    for(let i = 0; i < path.length - 1; i++){

        const currentAirport =
        path[i];

        const nextAirport =
        path[i + 1];



        const edge =

            graph[currentAirport]
            .find(route =>
                route.node === nextAirport
            );



        totalCost += edge.cost;
        totalTime += edge.time;
        totalDistance += edge.distance;
    }



    // UI

    document.getElementById(
        "bestRoute"
    ).innerText =

        path.join(" → ");



    document.getElementById(
        "totalCost"
    ).innerText =

        "₹ " + totalCost;



    document.getElementById(
        "totalTime"
    ).innerText =

        totalTime + " mins";



    document.getElementById(
        "totalStops"
    ).innerText =

        path.length - 2;



    document.getElementById(
        "totalDistance"
    ).innerText =

        totalDistance + " km";



    // MAP

    drawRoute(path);

}











// =====================================
// MAP
// =====================================

const map = L.map("map").setView(
    [22.9734, 78.6569],
    5
);



// =====================================
// MAP LAYER
// =====================================

L.tileLayer(

    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",

    {
        attribution:
        "&copy; OpenStreetMap"
    }

).addTo(map);



// =====================================
// STORE MAP ITEMS
// =====================================

let markers = [];

let routeLine = null;



// =====================================
// DRAW ROUTE
// =====================================

function drawRoute(path){

    // REMOVE OLD MARKERS

    markers.forEach(marker => {

        map.removeLayer(marker);

    });



    // REMOVE OLD ROUTE

    if(routeLine){

        map.removeLayer(routeLine);
    }



    // RESET

    markers = [];



    // STORE COORDINATES

    const coordinates = [];



    // LOOP PATH

    path.forEach(code => {

        // FIND AIRPORT

        const airport =

            airports.find(a =>
                a.code === code
            );



        // SAVE COORDINATES

        coordinates.push([

            airport.lat,
            airport.lng

        ]);



        // CREATE MARKER

        const marker =

            L.marker([

                airport.lat,
                airport.lng

            ])

            .addTo(map)

            .bindPopup(

                airport.city

            );



        markers.push(marker);

    });



    // DRAW ROUTE LINE

    routeLine =

        L.polyline(

            coordinates,

            {
                color: "blue",
                weight: 5
            }

        )

        .addTo(map);



    // AUTO ZOOM

    map.fitBounds(

        routeLine.getBounds()

    );

}








// =====================================
// ALTERNATIVE ROUTES
// =====================================

function alternative(from, to){

    // CREATE GRAPH

    createGraph();



    // REMOVE TEXTS

    from =
    from.match(/\((.*?)\)/)[1];

    to =
    to.match(/\((.*?)\)/)[1];



    // =====================================
    // CHEAPEST ROUTE
    // DIJKSTRA USING COST
    // =====================================

    const cheapestDistances = {};
    const cheapestPrevious = {};
    const cheapestVisited = new Set();



    for(let node in graph){

        cheapestDistances[node] = Infinity;
        cheapestPrevious[node] = null;
    }

    cheapestDistances[from] = 0;



    while(true){

        let currentNode = null;
        let smallestDistance = Infinity;



        for(let node in cheapestDistances){

            if(
                !cheapestVisited.has(node) &&
                cheapestDistances[node] < smallestDistance
            ){

                smallestDistance =
                cheapestDistances[node];

                currentNode = node;
            }
        }



        if(currentNode === null){
            break;
        }

        if(currentNode === to){
            break;
        }



        cheapestVisited.add(currentNode);



        graph[currentNode].forEach(neighbor => {

            const newDistance =

                cheapestDistances[currentNode] +
                neighbor.cost;



            if(
                newDistance <
                cheapestDistances[neighbor.node]
            ){

                cheapestDistances[neighbor.node] =
                newDistance;

                cheapestPrevious[neighbor.node] =
                currentNode;
            }

        });

    }



    const cheapestPath = [];

    let cheapestCurrent = to;

    while(cheapestCurrent){

        cheapestPath.unshift(
            cheapestCurrent
        );

        cheapestCurrent =
        cheapestPrevious[cheapestCurrent];
    }



    let cheapestCost = 0;
    let cheapestTime = 0;



    for(let i = 0; i < cheapestPath.length - 1; i++){

        const edge =

            graph[cheapestPath[i]]
            .find(route =>
                route.node === cheapestPath[i + 1]
            );



        cheapestCost += edge.cost;
        cheapestTime += edge.time;
    }



    // =====================================
    // FASTEST ROUTE
    // DIJKSTRA USING TIME
    // =====================================

    const fastestDistances = {};
    const fastestPrevious = {};
    const fastestVisited = new Set();



    for(let node in graph){

        fastestDistances[node] = Infinity;
        fastestPrevious[node] = null;
    }

    fastestDistances[from] = 0;



    while(true){

        let currentNode = null;
        let smallestDistance = Infinity;



        for(let node in fastestDistances){

            if(
                !fastestVisited.has(node) &&
                fastestDistances[node] < smallestDistance
            ){

                smallestDistance =
                fastestDistances[node];

                currentNode = node;
            }
        }



        if(currentNode === null){
            break;
        }

        if(currentNode === to){
            break;
        }



        fastestVisited.add(currentNode);



        graph[currentNode].forEach(neighbor => {

            const newDistance =

                fastestDistances[currentNode] +
                neighbor.time;



            if(
                newDistance <
                fastestDistances[neighbor.node]
            ){

                fastestDistances[neighbor.node] =
                newDistance;

                fastestPrevious[neighbor.node] =
                currentNode;
            }

        });

    }



    const fastestPath = [];

    let fastestCurrent = to;

    while(fastestCurrent){

        fastestPath.unshift(
            fastestCurrent
        );

        fastestCurrent =
        fastestPrevious[fastestCurrent];
    }



    let fastestCost = 0;
    let fastestTime = 0;



    for(let i = 0; i < fastestPath.length - 1; i++){

        const edge =

            graph[fastestPath[i]]
            .find(route =>
                route.node === fastestPath[i + 1]
            );



        fastestCost += edge.cost;
        fastestTime += edge.time;
    }



    // =====================================
    // MINIMUM STOPS
    // BFS
    // =====================================

    const queue = [[from]];
    const visited = new Set();

    visited.add(from);



    let minimumPath = [];



    while(queue.length > 0){

        const currentPath =
        queue.shift();

        const currentNode =
        currentPath[currentPath.length - 1];



        if(currentNode === to){

            minimumPath = currentPath;

            break;
        }



        graph[currentNode].forEach(neighbor => {

            if(
                !visited.has(neighbor.node)
            ){

                visited.add(neighbor.node);

                queue.push([

                    ...currentPath,
                    neighbor.node

                ]);
            }

        });

    }



    let minimumCost = 0;
    let minimumTime = 0;



    for(let i = 0; i < minimumPath.length - 1; i++){

        const edge =

            graph[minimumPath[i]]
            .find(route =>
                route.node === minimumPath[i + 1]
            );



        minimumCost += edge.cost;
        minimumTime += edge.time;
    }



    // =====================================
    // PRINT CARDS
    // =====================================

    const altCards =
    document.querySelectorAll(".alt-card");



    // CHEAPEST

    altCards[0]
    .querySelector(".alt-route")
    .innerText =

        cheapestPath.join(" → ");



    altCards[0]
    .querySelector(".alt-info")
    .innerHTML =

        `
        <span>${cheapestTime} mins</span>
        <span>${cheapestPath.length - 2} Stops</span>
        `;



    altCards[0]
    .querySelector(".price")
    .innerText =

        "₹ " + cheapestCost;



    // FASTEST

    altCards[1]
    .querySelector(".alt-route")
    .innerText =

        fastestPath.join(" → ");



    altCards[1]
    .querySelector(".alt-info")
    .innerHTML =

        `
        <span>${fastestTime} mins</span>
        <span>${fastestPath.length - 2} Stops</span>
        `;



    altCards[1]
    .querySelector(".price")
    .innerText =

        "₹ " + fastestCost;



    // MINIMUM STOPS

    altCards[2]
    .querySelector(".alt-route")
    .innerText =

        minimumPath.join(" → ");



    altCards[2]
    .querySelector(".alt-info")
    .innerHTML =

        `
        <span>${minimumTime} mins</span>
        <span>${minimumPath.length - 2} Stops</span>
        `;



    altCards[2]
    .querySelector(".price")
    .innerText =

        "₹ " + minimumCost;

}