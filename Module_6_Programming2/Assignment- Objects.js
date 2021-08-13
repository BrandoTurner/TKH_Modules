let car = {
  make: "Toyota",
  model: "Camry",

  year: 2020,
  color: "Black",
  mileage: "",
  set mile(mile) {
    this.mileage = mile;
  },
  get info() {
    return this.make;
    return this.model;
    return this.year;
  },
  drive: function () {
    console.log("Vroom");
  }
};
car.info;
car.mile = 10000;
car.drive;

let team = {
  sport: "Handball",
  teamName: "",
  home: "Bronx",
  names: ["Spook", " Ash", "Brando", "Juan", "Edd", "Pedro"],
  get name() {
    return this.names;
  },
  set crew(crew) {
    this.teamName = crew;
  },
  win: function () {
    console.log("Rollie!");
  }
};
team.name;
team.crew = "South Park";
team.win;

let animal = {
  species: "house cat",
  genus: "feline",
  type: "calico",
  name: "",
  get catType() {
    return this.type;
  },
  set yat(yat) {
    this.name = yat;
  },
  voice: function () {
    console.log("Meew");
  }
};

animal.getType;
animal.yat = "Cthophulus";
animal.voice;
