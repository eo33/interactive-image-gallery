// Fullscreen effect

$(document).ready(()=>{
    //initialize image tracker state 
    window.imageTracker = 0;

    $('.main-card').on('click',(event)=>{
        // From the card template HTML, access the image path src. 
        let imagePath = event.currentTarget.childNodes[1].getAttribute('src')
        $('#fullscreen').removeClass('hide')
        $('#selected-image').attr('src',imagePath)
        window.imageTracker = parseInt(imagePath.split('/').pop().split('.')[0]);
        // Arrows
        if(window.imageTracker == 1){
            $('#left-arrow').addClass('hide')
        } else{
            $('#left-arrow').removeClass('hide')
        }

        if(window.imageTracker == 6){
            $('#right-arrow').addClass('hide')
        } else{
            $('#right-arrow').removeClass('hide')
        }
    })

    $('#right-arrow').on('click',()=>{
        window.imageTracker += 1;
        $('#selected-image').attr('src',`./public/${window.imageTracker}.jpg`)
        $('#left-arrow').removeClass('hide'); // Always show the left arrow
        if (window.imageTracker === 6) {
            $('#right-arrow').addClass('hide'); // Hide the right arrow when at image 6
        }
        
    })

    $('#left-arrow').on('click',()=>{
        window.imageTracker -= 1;
        $('#selected-image').attr('src',`./public/${window.imageTracker}.jpg`)
        $('#right-arrow').removeClass('hide'); // Always show the right arrow
        if (imageTracker === 1) {
            $('#left-arrow').addClass('hide'); // Hide the left arrow when at image 1
        }
    })

    $("#exit-carousel").on('click',()=>{
        $('#fullscreen').addClass('hide')
        window.imageTracker=0;
     })
})