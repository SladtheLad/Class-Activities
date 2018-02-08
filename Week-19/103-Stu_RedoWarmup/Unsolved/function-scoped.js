let name = "Nick";

const tinyize = function (name) {
  let myName = 'Tiny ' + name + '!';
  console.log(name);
  console.log(myName);
  return myName;
};

name = tinyize('Rick');
console.log(name);

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}
