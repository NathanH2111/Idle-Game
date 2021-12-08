let ppc = 1;
let value = 0;
let costauto = 25;
let clickercount = 0;
let ppclicker = 1;
let upgradecost = 10;
let upmashrate = 50;
let supermash = 0;
let supermashcost = 1000;
let supermashrate = 10;
let superupcost = 5000;

document.getElementById("points").innerHTML = value;

document.getElementById("ppctn").innerHTML = ppclicker

document.getElementById("clkcount").innerHTML = clickercount

document.getElementById("pps").innerHTML = clickercount * ppclicker

document.getElementById("btnupcost").innerHTML = upgradecost

document.getElementById("upmash").innerHTML = upmashrate

document.getElementById("autocost").innerHTML = costauto;

document.getElementById("ppm").innerHTML = ppc

document.getElementById("supermasher").innerHTML = supermashcost

document.getElementById("supercount").innerHTML = supermash

document.getElementById("upsupercost").innerHTML = superupcost

document.getElementById("ppsuper").innerHTML = supermashrate

//runs the  btnclick function when pressing any key on the keyboard

window.addEventListener("keydown", btnclick)

//adds points when clicking the Click Me button

function btnclick() {
    value = value + ppc
    document.getElementById("points").innerHTML = value
};


//buys auto clickers

function buyclicker() {
    if (value - costauto >= 0){
        clickercount++
        value = value - costauto
        document.getElementById("points").innerHTML = value
        costauto = costauto * 1.25
        costauto = Math.round(costauto)
        document.getElementById("autocost").innerHTML = costauto
        document.getElementById("clkcount").innerHTML = clickercount
        document.getElementById("pps").innerHTML = clickercount * ppclicker
    }
}

//adds points to value based on clickercount

const timer = setInterval(clickertime, 1000)

function clickertime() {
    value = value + (clickercount * ppclicker) + (supermash * supermashrate)
    document.getElementById("points").innerHTML = value;
    document.getElementById("ppctn").innerHTML = ppclicker
    document.getElementById("supercount").innerHTML = supermash
    document.getElementById("pps").innerHTML = (clickercount * ppclicker) + (supermash * supermashrate)
}

/*upgrades points per button mash*/

function increasemash() {
    if (value - upgradecost >= 0) {
        ppc = ppc * 1.25
        ppc = Math.ceil(ppc)
        value = value - upgradecost
        upgradecost = upgradecost * 1.5;
        upgradecost = Math.round(upgradecost)
        document.getElementById("btnupcost").innerHTML = upgradecost
        document.getElementById("ppm").innerHTML = ppc
    }
}

/*increase mash rate of automashers*/

function autorateup() {
    if (value - upmashrate >= 0) {
        value = value - upmashrate
        upmashrate = upmashrate * 3
        ppclicker = ppclicker * 1.25
        ppclicker = Math.ceil(ppclicker)
        document.getElementById("ppctn").innerHTML = ppclicker
        document.getElementById("upmash").innerHTML = upmashrate
    }
}

/*buys supermasher*/

function buysuper() {
    if (value - supermashcost >= 0) {
        supermash++
        value = value - supermashcost
        supermashcost = supermashcost * 1.50
        supermashcost = Math.round(supermashcost)
        document.getElementById("supermasher").innerHTML = supermashcost
        document.getElementById("supercount").innerHTML = supermash
        
    }
}

function upsuperrate() {
    if(value - superupcost >= 0) {
        value = value - superupcost
        supermashrate = supermashrate * 1.5
        superupcost= superupcost * 3
        supermashrate = Math.ceil(supermashrate)
        document.getElementById("ppsuper").innerHTML = supermashrate
        document.getElementById("upsupercost").innerHTML = superupcost
    }
}