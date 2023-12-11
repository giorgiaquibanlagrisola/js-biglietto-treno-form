const km = document.getElementById('km');
console.log('km', km, typeof km);

const age = document.getElementById('age');
console.log('age', age, typeof age);

const calcButton = document.getElementById('calc-button');
console.log('calcButton', calcButton, typeof calcButton);

calcButton.addEventListener('click', function() {
    console.log('bottone clickato');

    console.log('km.value', km.value, typeof km.value);
    console.log('age.value', age.value, typeof age.value);

    const kmInNumber = parseInt(km.value);
    const ageInNumber = parseInt(age.value);

    let price = (kmInNumber * 0.21);
    

    if (ageInNumber < 18) {
        price *= 0.2;
    }

    else if (ageInNumber > 65) {
        price *= 0.8;
    }
    
    console.log('price', price, typeof price);

    //price = price.toFixed(2);


});