
function randomInteger(min, max) {
    
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};


document.querySelector('body').onmousemove = function(event) {
    event = event || window.event; // кроссбраузерность
    let x = event.clientX - 280;
    let y = event.clientY - 145;
    console.log(x + ' ' + y);
    let cursX = event.clientX - 447;
    let cursY =  event.clientY - 156;

    function fishFlex(event) {
        const fish = document.querySelector('.fish');
        fish.style.top = cursY  + 'px';
        fish.style.left = cursX  + 'px';  
            function fishDeg(){
                 fish.style.transform = 'rotate(' + arcctg(x, y) * 57.2958  + 'deg)';
             }
        fishDeg();
    };

    function arcctg (x, y){
        if(x > 0 && y > 0) return Math.PI / 2 - Math.atan(x / y);
        if(x < 0 && y > 0) return Math.PI / 2 - Math.atan(x / y);
        if(x < 0 && y < 0) return Math.PI + Math.atan(y / x);
        if(x > 0 && y < 0) return 3 * Math.PI / 2 + Math.abs(Math.atan(x / y));
    }

    
    fishFlex();
}
