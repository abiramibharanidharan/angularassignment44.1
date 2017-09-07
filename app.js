///<reference path="exam.ts"/>
var Animals;
(function (Animals) {
    function DomesticAnimalDetail(domestic) {
        console.log("Domestic Animal");
        console.log(" The Pet Animal is: " + domestic.pet + " and Mankind Animal is: " + domestic.mankind + " ");
    }
    Animals.DomesticAnimalDetail = DomesticAnimalDetail;
})(Animals || (Animals = {}));
///<reference path="exam.ts"/>
///<reference path="examimplement.ts"/>
var AnimalDetail = { pet: "Dog", mankind: "Cow" };
Animals.DomesticAnimalDetail(AnimalDetail);
