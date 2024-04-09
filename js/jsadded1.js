let Pet = prompt('Do you have any pets?');

    if (Pet === 'Yes' || Pet === 'yes' || Pet === 'YES') {
        let Name = prompt('So cool! What is your pet\'s name?');
        document.querySelector('h1').innerHTML = Name + '\'s Friends';
        alert('That\'s a great name! Welcome to our page about our pets!');

    }
    else {
        alert('Awwww, that\'s ok! Enjoy this page about our pets!');
    }

