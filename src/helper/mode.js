export const modeLigth = () => {
    const body = document.querySelector("body");
    // const sun = document.querySelector(".sun");
    const a = document.querySelectorAll('a');
    const like = document.querySelector('.likeds .svgHeart')
    
    body.style.backgroundColor = "white";
    body.style.color = "rgb(2, 10, 31)";
    like.style.fill = "rgb(2, 10, 31)"
    // sun.style.color = "rgb(2, 10, 31)";
    for (let i = 0; i < a.length; i++) {
        a[i].style.color = "rgb(2, 10, 31)"
    };
    
}
export const modeDark = () => {
    const body = document.querySelector("body");
    // const moon = document.querySelector(".moon");
    const a = document.querySelectorAll('a');
    const like = document.querySelector('.likeds .svgHeart')
    
    body.style.backgroundColor = "rgb(2, 10, 31)";
    body.style.color = "white";
    like.style.fill = "white"
    // moon.style.color = "rgb(2, 10, 31)";
    for (let i = 0; i < a.length; i++) {
        a[i].style.color = "white"
    };
}