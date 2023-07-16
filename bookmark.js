$(document).ready(() => {

    // Initialize state of bookmark
    window.Bookmark = [false,false,false,false,false,false];
    let saved = [];

    $('#fullscreen-bookmark').on('click',()=>{
        window.Bookmark[imageTracker-1] = ! window.Bookmark[imageTracker-1];
        $('#fullscreen-bookmark').toggleClass('fa-solid');
    })

    // Handle bookmark for fullscreen
    $('.main-card').on('click',(event)=>{
        if (window.Bookmark[imageTracker-1]){
            $('#fullscreen-bookmark').addClass('fa-solid')
        } else{
            $('#fullscreen-bookmark').removeClass('fa-solid')
        }
    })

    // Handle bookmark for right arrow
    $('#right-arrow').on('click',()=>{
        
        if (window.Bookmark[imageTracker-1]){
            $('#fullscreen-bookmark').addClass('fa-solid');
        } else{
            $('#fullscreen-bookmark').removeClass('fa-solid');
        }
    })

    // Handle bookmark for left arrow
    $('#left-arrow').on('click',()=>{
        
        if (window.Bookmark[imageTracker-1]){
            $('#fullscreen-bookmark').addClass('fa-solid');
        } else{
            $('#fullscreen-bookmark').removeClass('fa-solid');
        }
    })

    // Change state of Posts and Saved

    $('#posts').on('click',()=>{
        $('#posts').addClass('border-top')
        $('#saved').removeClass('border-top')

        for(let i = 1; i <= window.Bookmark.length; i++){
            if(window.Bookmark[i-1] == false){
                $(`#card-num-`+i+`-container`).removeClass('hide')
            } 
        }

        // Enable Posts arrows
        $('#right-arrow').removeClass('hide-important')
        $('#left-arrow').removeClass('hide-important')

        // Disable Saved arrows
        $('#right-arrow-saved').addClass('hide')
        $('#left-arrow-saved').addClass('hide')
    })

    $('#saved').on('click',()=>{
        $('#saved').addClass('border-top')
        $('#posts').removeClass('border-top')

        // Hide unbookmark posts and initialize append cards to saved
        
        for(let i = 1; i <= window.Bookmark.length; i++){
            if(window.Bookmark[i-1] == false){
                $(`#card-num-`+i+`-container`).addClass('hide')
            }else{
                $(`#card-num-`+i+`-container`).removeClass('hide')
                saved.push(i)
            }
        }
        console.log(saved);
        // Disable the Posts arrows
        $('#right-arrow').addClass('hide-important')
        $('#left-arrow').addClass('hide-important')

        // Enable the Saved arrows
        $('#right-arrow-saved').removeClass('hide')
        $('#left-arrow-saved').removeClass('hide')
    })

    
    
    
    $('#right-arrow-saved').on('click',()=>{
        let currentIndex = saved.indexOf(window.imageTracker)

        console.log('image tracker: '+ imageTracker);
        console.log('current index: ' + currentIndex)
        currentIndex += 1
        console.log('current index with plus one: ' + currentIndex);
        
        console.log('saved [ currentIndex]: '+saved[currentIndex]);

        $('#selected-image').attr('src',`./public/${saved[currentIndex]}.jpg`)
    })



    $("#exit-carousel").on('click',()=>{
        currentIndex=0;
     })
})