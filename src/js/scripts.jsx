import useNavegate from 'react-router-dom'
import { getPath } from "../helper/getPath";

export const scripts = () => {
    const navegate = useNavegate()
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
    // Calcula la distancia horizontal y vertical del movimiento.
    // const path = getPath()
    deltaX = event.changedTouches[0].clientX - startX;
    deltaY = event.changedTouches[0].clientY - startY;
    // Compara las distancias para determinar la dirección.
    // Compara las distancias para determinar la dirección.
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) {

            //desplazo hacia la derecha
            const path = getPath
           
        } else {
            //desplazo hacia la izquierda
           
        }
    }
     // Actualiza las coordenadas de inicio para el siguiente movimiento.
    startX = event.changedTouches[0].clientX;
    startY = event.changedTouches[0].clientY;
});


  return (
    <div>scripts</div>
  )
}

