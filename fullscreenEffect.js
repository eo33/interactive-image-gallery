// Fullscreen effect

$(document).ready(()=>{
     
     $('.main-card').on('click',(event)=>{
        // From the card template HTML, access the image path src. 
        let imagePath = event.currentTarget.childNodes[1].getAttribute('src')
        console.log(imagePath);
        $('#fullscreen').removeClass('hide')
        $('#selected-image').attr('src',imagePath)
        imageTracker = parseInt(imagePath.split('/').pop().split('.')[0]);
        // Arrows
        if(imageTracker == 1){
            $('#left-arrow').addClass('hide')
        } else{
            $('#left-arrow').removeClass('hide')
        }

        if(imageTracker == 6){
            $('#right-arrow').addClass('hide')
        } else{
            $('#right-arrow').removeClass('hide')
        }
    })

    $('#right-arrow').on('click',()=>{
        imageTracker += 1;
        console.log(imageTracker);
        $('#selected-image').attr('src',`./public/${imageTracker}.jpg`)
        $('#left-arrow').removeClass('hide'); // Always show the left arrow
        if (imageTracker === 6) {
            $('#right-arrow').addClass('hide'); // Hide the right arrow when at image 6
        }

    })

    $('#left-arrow').on('click',()=>{
        imageTracker -= 1;
        $('#selected-image').attr('src',`./public/${imageTracker}.jpg`)
        $('#right-arrow').removeClass('hide'); // Always show the right arrow
        if (imageTracker === 1) {
            $('#left-arrow').addClass('hide'); // Hide the left arrow when at image 1
        }
    })
    $("#exit-carousel").on('click',()=>{
        $('#fullscreen').addClass('hide')
        imageTracker=0;
     })



})