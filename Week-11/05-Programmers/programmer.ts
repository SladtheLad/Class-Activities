class Programmer {
  name: string;
  position: string;
  age: number;
  favLang: string;
  constructor(name: string, position: string, age: number, favLang: string) {
    this.name = name;
    this.position = position;
    this.age = age;
    this.favLang = favLang;
  }
  programmer() {
    console.log(this);
  }
}


var Nick = new Programmer("Nick", "web dev", 30, "typescript");

Nick.programmer();
