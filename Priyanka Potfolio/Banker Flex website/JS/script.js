let bars = document.getElementById('bars');
console.log(bars);

let navLinks = document.getElementById('navLinks');
console.log(navLinks)

function clickBars(){
    if(bars.style.display == 'block'){
        navLinks.style.display = 'block';
    }
    else{
         navLinks.style.display = 'flex'
    }
}