

let menu = document.querySelector('.menu_icon');
let birthday = document.querySelector('.dayOfBirth');
let check = document.querySelector('.form_container');
let input = document.querySelector('.input');

menu.addEventListener('click', toggle);
    function toggle() {
        let menuItems = document.querySelector('.ul');
        if(menuItems.style.display === "flex") {
            menuItems.style.right = "-100%";
            menuItems.style.display = "none"
        } 
        else {
            menuItems.style.right = "0";
            menuItems.style.display = "flex"


        }
    }

function showBday() {
    birthday.style.display = "block";
}
function calc() {
    let b = document.getElementById('fName').value;
    if (b === "") {
        alert("Input your full name")
    } else {
        check.style.display = "block";
        birthday.style.border = "none";
        // input.style.display= "none";
    
    }
}
function displayDay() {
    var d = new Date(document.getElementById('in').value);
    var c = d.getDay();
    var a = document.getElementById('fName').value;
    var name = '"' + a + " You were born on";
//      var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//     document.getElementById("day").innerHTML = days[d.getDay()];
// // // }
// function displayDay() {    
    if (c == 0) {
    document.getElementById('day').innerHTML = name + " SUNDAY" + '"';                     
    } else if (c == 1) {
    document.getElementById('day').innerHTML = name + " MONDAY" + '"';                     
    }  else if (c == 2) {
    document.getElementById('day').innerHTML = name + " TUESDAY" + '"';                
    } else if (c == 3) {
    document.getElementById('day').innerHTML = name + " WEDNESDAY" + '"';                 
    } else if (c == 4) {
    document.getElementById('day').innerHTML = name + " THURSDAY" + '"';              
    } else if (c == 5) {
    document.getElementById('day').innerHTML = name + " FRIDAY" + '"';             
    } else if (c == 6) {
    document.getElementById('day').innerHTML = name + " SATURDAY" + '"';                 
    } else {
        alert("Please Select your Date of Birth");
    }
} 
