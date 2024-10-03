const imageObject1 = document.getElementById('js-image-1')
const imageObject2 = document.getElementById('js-image-2')
const imageObject3 = document.getElementById('js-image-3')
const imageObject4 = document.getElementById('js-image-4')
const imageObject5 = document.getElementById('js-image-5')

const imageObjectArray = [imageObject1, imageObject2, imageObject3, imageObject5, imageObject5]

// for(let item of imageObjectArray) {
//     item.addEventListener('click', function() {
//         item.style.transition = 'all 1s'
//     })
// }

imageObject1.addEventListener('click', function() {
    for(let imageObject of imageObjectArray) {
        if(imageObject.style.width == '700px') {
            imageObject.style.width = '80px'
            imageObject1.style.width = '700px'
        }
        else {
            imageObject2.style.width = '80px'
            imageObject1.style.width = '700px'
            imageObject1.style.transition = 'all 1s'
            // imageObject4.style.width = '80px'
            // imageObject5.style.width = '80px' 
            // imageObject3.style.width = '80px' 
        }
    }
})

imageObject2.addEventListener('click', function() {
    for(let imageObject of imageObjectArray) {
        if(imageObject.style.width == '700px') {
            imageObject.style.width = '80px'
        }
        else {
            imageObject.style.width = '80px'
            imageObject2.style.width = '700px'
            imageObject2.style.transition = 'all 1s'
            imageObject4.style.width = '80px' 
        }
    }
})
imageObject3.addEventListener('click', function() {
    for(let imageObject of imageObjectArray) {
        if(imageObject.style.width == '700px') {
            imageObject.style.width = '80px' 
            imageObject4.style.width = '80px' 
        }
        else {
            imageObject.style.width = '80px'
            imageObject3.style.width = '700px'
            imageObject3.style.transition = 'all 1s'
            imageObject.style.width = '80px' 
        }
    }
})
imageObject4.addEventListener('click', function() {
    for(let imageObject of imageObjectArray) {
        if(imageObject.style.width == '700px') {
            imageObject.style.width = '80px' 
            imageObject4.style.width = '80px'
        }
        else {
            imageObject.style.width = '80px'
            imageObject4.style.width = '700px'
            imageObject4.style.transition = 'all 1s'
            imageObject2.style.width = '80px' 
        }
    }
})
imageObject5.addEventListener('click', function() {
    for(let imageObject of imageObjectArray) {
        if(imageObject.style.width == '700px') {
            imageObject.style.width = '80px' 
            imageObject4.style.width ='80px'
        }
        else {
            imageObject.style.width = '80px'
            imageObject5.style.width = '700px'
            imageObject5.style.transition = 'all 1s'
            imageObject3.style.width = '80px' 
        }
    }
})


