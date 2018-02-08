var dogs = {
    raining: true,
    noise: "Woof!",
    makeNoise: function () {
        if (this.raining) {
            console.log(this.noise);
        }
    }
};

var cats = {
    raining: true,
    noise: "Meow!",
    makeNoise: function () {
        if (this.raining) {
            console.log(this.noise);
        }
    }
}

function massHysteria(cats, dogs) {
    if (cats.raining && dogs.raining) {
        console.log("WELL SHIT");
    }

}

dogs.makeNoise();
cats.makeNoise();
massHysteria(cats, dogs);