const progress = document.getElementById('progress')
const pre = document.getElementById('pre')
const next = document.getElementById('next')
const circle = document.querySelectorAll('.circle')
 

let currentActive = 1 ;

next.addEventListener('click' , () => {

    currentActive++
    // console.log(currentActive)


    // code below is preventing the currentActive to exced the , total length
    // of the the circle value that we have imported from the html which here is 4 
    if(currentActive > circle.length){
        currentActive = circle.length
    }

    console.log(currentActive)

    update()

})


pre.addEventListener('click' , () => {

    currentActive--
    // console.log(currentActive)


    // code below is preventing the currentActive to exced the , total length
    // of the the circle value that we have imported from the html which here is 4 
    if(currentActive < circle.length){
        currentActive = circle.length
    }

    console.log(currentActive)

    update()

})

function update()
{
    circle.forEach((circle , idx ) =>{

         if(idx < currentActive) {

            circle.classList.add('active')

         } else{
             circle.classList.remove('active')
         }

    })


    const actives = document.querySelectorAll('.active')

    // console.log((actives.length / circle.length) * 100) 
    
    progress.style.width = (actives.length - 0.36)  / (circle.length) * 100 + '%' 

    if(currentActive === 1 ){
        pre.disabled = ture
    } else if (currentActive === circle.length){
        
        next.disabled =  true

    } else {
        pre.disable = false
        next.disable = false
    }
}