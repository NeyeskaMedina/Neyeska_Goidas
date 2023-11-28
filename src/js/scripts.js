
let startX = 0;
let startY = 0;
let deltaX;
let deltaY;
let body = document.querySelector('body');
// Registra las coordenadas desde inicio del toque.
body.addEventListener('touchstart', (event)=>{
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
});
body.addEventListener('touchend',  (event) =>{
    // let sectionPage = document.querySelector('main');
    // Calcula la distancia horizontal y vertical del movimiento.
    deltaX = event.changedTouches[0].clientX - startX;
    deltaY = event.changedTouches[0].clientY - startY;
    // Compara las distancias para determinar la dirección.
    // Compara las distancias para determinar la dirección.
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) {
            //desplazo hacia la derecha
            console.log('Hacia la derecha >>>');
        } else {
            //desplazo hacia la izquierda
            console.log('Hacia la izquierda <<<');
        }
    }
     // Actualiza las coordenadas de inicio para el siguiente movimiento.
    startX = event.changedTouches[0].clientX;
    startY = event.changedTouches[0].clientY;
});