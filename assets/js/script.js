
function randomInteger(min, max) {
    
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};


document.querySelector('body').onmousemove = function(event) {
    event = event || window.event; // кроссбраузерность
    console.log(event); // вывод в консоль
    console.log(event.clientX)
    let x = window.innerWidth;
    let y = window.innerHeight;
    
    x = event.clientX
    y =  event.clientY
    //console.log(clientX)

    function fishFlex(event) {
        //window.innerWidth = event.clientX;
        //window.innerHeight = event.clientY;
        //console.log(event.clientX)
        const fish = document.querySelector('.fish');
        fish.style.top ='80px';
        fish.style.top = y + 'px';
        fish.style.left = x + 'px';
    };
    fishFlex();
}


