var favAnimal = {
    name: "Leo",
    animal: "Gorilla"
};

// console.log('favAnimal:' favAnimal.animal);

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

console.log("instructorPets:", instructorPets);

for(var i = 0; i < instructorPets.length; i++){
    var instructorPetsName = instructorPets[i].petName;
    var printNames = document.getElementById("petNames");
    printNames.innerHTML += "<h1>" + instructorPetsName + "</h1>";
}
   
