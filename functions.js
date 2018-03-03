console.log("checking");


//funcition expressions

var a = function(){
    console.log("a: ", 3);
};

//function declarations
function b() {
    console.log("b: ", 2)
}

var num = 3;
function numPrinter(monkeyButt){
    // monkeyButt = num = 3
    console.log("my number: ", monkeyButt);
}
numPrinter(num);
numPrinter(4);
numPrinter(6);
numPrinter("turtle");



function cat(){
    return "love them"
}
var message = cat();
console.log("message", message);

var instructorPets = [
    {
        instructorName: "Zoe",
        petName: "Biff",
        animalType: "evil car",
        isFavorite: false
    },
    {
        instructorName: "Callan",
        petName: "Seymore",
        animalType: "One Eyed Dog",
        isFavorite: false
    },
    {
        instructorName: "Callan",
        petName: "Wiley",
        animalType: "destructive dog",
        isFavorite: true
    },
    {
        instructorName: "Lauren",
        petName: "Frankie",
        animalType: "sweet dog",
        isFavorite: true
    }
];
function domStringMaker(animalArray){
    // take pet names and create dom string
    // call printToDom function
for(var i = 0; i <animalArray.length; i++){
    var animalString = "";
    if(animalArray[i].isFavorite){
        animalString += '<div class = "pet isFavorite">';
    } else if (!animalArray[i].isFavorite){
        animalString += '<div class = "pet isNotFavorite">';
    } 
    animalString += "<h1>" + animalArray[i].petName + "</h1>";
    animalString += "<h3> Owner: " + animalArray[i].instructorName + "</h3>";
    animalString += "<h3> Type: " + animalArray[i].animalType + "</h3>";
    animalString += '</div>';
    printToDom(animalString, "petNames");
}
};

function printToDom(stringToPrint, divId){
    // take string and innerHTML to the divId
    var myDiv = document.getElementById(divId);
    myDiv.innerHTML += stringToPrint;
};

domStringMaker(instructorPets);

