`use strict`

// presentation animation (funciones de animacion de carga de inicio de la pagina)

const presentationTexts = document.querySelectorAll(`.Presentation-wrapper-text`)

const presentationHeart = document.querySelector(`.Presentation-heart`)

const presentationHandler = document.querySelector(`.Presentation`)


window.onload = ()=>{

    presentationTexts.forEach((eachTexto , i)=>{
        
        setTimeout(() => {
            presentationTexts[i].classList.add(`isVisible`)
            setTimeout(() =>{
                presentationTexts[i].classList.remove(`isVisible`)
            } , 2500 )
        }, i * 3000)

        setTimeout(()=>{
            
            presentationHeart.classList.add(`isBig`)
        
        } , 7000)

        setTimeout(()=>{

            presentationHandler.classList.add(`isHidden`)

        } , 10000 )

        setTimeout(()=>{

            presentationHandler.classList.add(`isDisplayNone`)

        } , 11000 )
    })
}


// Love behaviour background (funciones para que la imagen de fondo de la palabra love se mueva junto con el evento scroll)

const loveText = document.querySelector(`.Main-loveDifference`)
const windowHeight = document.documentElement.scrollHeight - window.innerHeight

window.addEventListener(`scroll` , ()=>{
    let scrollY = window.scrollY
    let calculoProporcion = Math.floor((100 * scrollY) / windowHeight)
    
    
    loveText.style.transform = `translateY(calc(${calculoProporcion}% / 2))`
    

    console.log(calculoProporcion)
})


// text description flower behaviour (funciones para hacer ligero efecto parallax en el fondo de los titulares de cada zapatilla a medida que haces scroll)

const flowerBg = document.querySelector(`.Product-img`)
const flowerBgReverse = document.querySelector(`.Product-img-reverse`)

window.addEventListener(`scroll` , ()=>{
    let scrollY = window.scrollY
    let calculoProporcion = Math.floor((100 * scrollY) / windowHeight)

    let scrollBehaviour = ()=>{
        flowerBg.style.transform = `translateY(calc(${calculoProporcion / 2 }px))`
        flowerBgReverse.style.transform = `translateY(calc(${calculoProporcion / 2}px))`
    }

    scrollBehaviour()
    
    console.log(`translateY(calc(${calculoProporcion / 2}px ))`)
})

// display product (funciones para mostrar los productos)

const legacyWindow = document.querySelector(`.Legacy`)
const oneWindow = document.querySelector(`.One`)
const productWindow = document.querySelectorAll(`.Product-window`)
const productDescription = document.querySelectorAll(`.Product-description`)
const productButton = document.querySelectorAll(`.Product-button`)
const exitButton = document.querySelectorAll(`.Product-window-exit`)
const mainPage = document.querySelector(`.Main`)

productButton.forEach((eachButton , i)=>{
    productButton[i].addEventListener(`click` , ()=>{
        productWindow[i].classList.add(`isVisible`)

            if(window.innerWidth < 700){
                window.scrollTo({
                    top: 0,
                    behavior: `smooth`  
                })
            }else{
                window.scrollTo({
                    top: 500,
                    behavior: `smooth`  
                })
            }
            
    })
})

productDescription.forEach((eachButton , i)=>{
    productDescription[i].addEventListener(`click` , ()=>{

        productWindow.forEach((eachDescription , i)=>{
            productWindow[i].classList.remove(`isVisible`)
        })

        productWindow[i].classList.add(`isVisible`)
        
            if(window.innerWidth < 700){
                productWindow.scrollTo({
                    top: 0,
                    behavior: `smooth`  
                })
            }else{
                window.scrollTo({
                    top: 500,
                    behavior: `smooth`  
                })
            }
    })
})

exitButton.forEach((eachButton , i)=>{
    exitButton[i].addEventListener(`click` , ()=>{
        productWindow[i].classList.remove(`isVisible`)
    })
})

