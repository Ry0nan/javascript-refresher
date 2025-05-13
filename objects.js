//okay the real stuff now

const ryonan = {
    name: "Ryonan",
    age: 20,
    sayHello: function() {
        return "Hello!"
    },
    career: {

    }
}

ryonan.age = 21;
ryonan.newProp = [1, 2];

console.log(Object.values(ryonan))
console.log(Object.keys(ryonan))

for (let key in ryonan) {
    console.log(key);
};

const glenn = {
    hairColor: "green",
    arr: [1, 2, 3]
}

const glenn2 = {...ryonan, ...glenn};
console.log(glenn2);

glenn2.career.info = "tech";
console.log(ryonan, glenn2);

