const carrouselContainer = document.querySelector('.carrousel-container')
const point = document.querySelectorAll('.point')

//Cuando click en un punto
    //Saber la posicion de cada punto
    //Aplicar transform translateX a carrousel-container
    //Quitar clase activo de todos los puntos
    //Añadir clase activo al punto que le hacemos click

point.forEach( (eachPoint, i) => {
    point[i].addEventListener('click',()=>{

        let posicion = i
        //posicion es 0 transform es 0
        // posicion es 1 transform es 25%
        // operacion = posicion * -25
        let operacion = posicion * -25

        carrouselContainer.style.transform = `translateX(${operacion}%)`

        point.forEach( (eachPoint, i) =>{
            point[i].classList.remove('active')
        })
        point[i].classList.add('active')
    })
})