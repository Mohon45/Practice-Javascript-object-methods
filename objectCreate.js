let student = {
  name: "fuzzy",
  display() {
    console.log("Name:", this.name);
  },
};

let std1 = Object.create(student);
std1.name = "Mohon";
std1.display();
