$(document).ready(()=>{

    window.likes = [false,false,false,false,false,false]
    // Likes
    $('#fullscreen-like').on('click',()=>{
        window.likes[imageTracker-1] = !likes[imageTracker-1];
        $('#fullscreen-like').toggleClass('fa-solid');
    })

    // Handle likes for fullscreen
    $('.main-card').on('click',(event)=>{
        if (window.likes[imageTracker-1]){
            //console.log(imageTracker);
            $('#fullscreen-like').addClass('fa-solid')
        } else{
            $('#fullscreen-like').removeClass('fa-solid')
        }
    })

    // Handle likes for right arrow
    $('#right-arrow').on('click',()=>{
        if (likes[imageTracker-1]){
            $('#fullscreen-like').addClass('fa-solid');
        } else{
            $('#fullscreen-like').removeClass('fa-solid');
        }
    })

    // Handle likes for left arrow
    $('#left-arrow').on('click',()=>{
        if (likes[imageTracker-1]){
            $('#fullscreen-like').addClass('fa-solid');
        } else{
            $('#fullscreen-like').removeClass('fa-solid');
        }
    })

    // When exit the fullscreen window, refreshes the like count of all images
    $("#exit-carousel").on('click',()=>{
        for(let i = 1; i <= window.likes.length; i++){
            let element2 = `#card-num-`+i+'-hide';
            if(window.likes[i-1]){
                $(element2).find('.like-outside').text(' 1')
            } else{
                $(element2).find('.like-outside').text('')
            }
        }
    })
})