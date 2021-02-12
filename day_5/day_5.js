const text = document.querySelector('.loading')
const background = document.querySelector('.bg')

let loader = 0

let int = setInterval(blurring,30)

function blurring( {
    loader ++ 

    if (loader > 99){
        clearInterval(int)
    }

    loadText.innerText = `${loader}%`
    loadText.style.opacity = scale(loader, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(loader, 0, 100, 30, 0)}px)`
})

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }
  