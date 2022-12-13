// --- Oppgave 1 --- //

let erSlem = true;
if (erSlem = true) {console.log("Du er slem, ingen gaver til deg..")}
else if (erSlem = false) {console.log("Du er snill du ja, du skal få mange gaver..")}

// --- Oppgave 2 --- //

let julehilsen = "god jul alle sammen!"
julehilsen = julehilsen.toUpperCase();
console.log(julehilsen)

// --- Oppgave 3 --- //

let dyr = ["nisse", "alv", "reinsdyr", "alv", "reinsdyr", "julebrus", "sjokolade", "alv"]
let antalldyr = 0;
let antallAlv = 0;
for (let i = 0; i < dyr.length; i++) {
    antalldyr++
if (dyr[i] === "alv") {antallAlv++}

if (dyr[i] === "alv") {
    dyr.splice(i, 1);
}

}
console.log("Antall ting i tabellen:", antalldyr)
console.log("Antall ganger det står 'alv' i tabellen: " + antallAlv + ".")
console.log(dyr)

// --- Oppgave 4 //

if (Math.random() < 0.25) {console.log("Du er slem du.");}
else {console.log("Du er snill du.")}

