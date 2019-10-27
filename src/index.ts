import R from 'ramda';

const myArr = [1, 2, 3, 4, 5];

const myObj = {
    'a': "A",
    'b': "B",
    'c': "C"
};

const add9 = R.add(9, R.__);
const squareIt = (x) => Math.pow(x, 2);
const printIt = (x, index) => console.log(x, index);
const isNine = R.equals(9);
const moreThanZero = R.gte(R.__, 0)


console.log(

    R.all(moreThanZero, myArr)
);


