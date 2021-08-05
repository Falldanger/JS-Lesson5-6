let car = {
    color: "green",
    maxSpeed: 250,
    audio: {
        brand: "Sony",
        speakers: 12
    },
    cost: 2000
};

if (car.cost < 3000) {
    console.log('Cheap car');
} else {
    console.log('Expensive car');
}


console.log(car.color);

car.color = 'red';

console.log(car.color);

function colorReset() {
    car.color = 'blue';
    console.log(car.color);
}

colorReset();

let cup = {
    owner: 'Den',
    color: 'black'
}

let cup2 = {
    owner: 'John',
    color: 'green'
}


cupColorReset(cup);


function cupColorReset(cupObj) {
    cupObj.color = 'white';
}

console.log('Cup: ' + cup.color);
console.log('Cup2: ' + cup2.color);