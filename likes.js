$(document).ready(()=>{

    let likes = [false,false,false,false,false,false]
    // Likes
    if (likes[imageTracker-1]){
        $('#fullscreen-like').addClass('fa-solid')
    } else{
        $('#fullscreen-like').removeClass('fa-solid')
    }

    $('#fullscreen-like').on('click',()=>{
        likes[imageTracker-1] = !likes[imageTracker-1];
        $('#fullscreen-like').toggleClass('fa-solid');
    })

    if (likes[imageTracker-1]){
        $('#fullscreen-like').addClass('fa-solid');
    } else{
        $('#fullscreen-like').removeClass('fa-solid');
    }
    
})