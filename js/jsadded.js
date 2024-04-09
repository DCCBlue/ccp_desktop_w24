alert("Welcome to my page!");
let Name = prompt("Who is grading this assignment?");
document.querySelector('h1').innerHTML = Name + ' is viewing this page';
let School = prompt('Are you a student at the University of Michigan?');

    if (School === 'Yes' || School === 'yes' || School === 'YES') {
        alert('Go Blue!');
    }
    else {
        alert('The correct answer is Yes. Go Blue or go home!');
    }

