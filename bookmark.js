$(document).ready(() => {
    // Initialize state of bookmark
    window.Bookmark = [false,false,false,false,false,false];
    window.currentIndex = 0;
    let savedMode = false;
    window.listOfIndexes = [];

    // Handle bookmark click
    $('#fullscreen-bookmark').on('click',()=>{
        window.Bookmark[imageTracker-1] = ! window.Bookmark[imageTracker-1];
        $('#fullscreen-bookmark').toggleClass('fa-solid');
    })

    // Handle bookmark when user click on fullscreen
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

        // Unhide unbookmark posts
        for(let i = 1; i <= window.Bookmark.length; i++){
            if(window.Bookmark[i-1] == false){
                $(`#card-num-`+i+`-container`).removeClass('hide')
            } 
        }

        // Enable Posts arrows ('Posts arrows' are different from 'Saved arrows')
        $('#right-arrow').removeClass('hide-important')
        $('#left-arrow').removeClass('hide-important')

        // Disable Saved arrows
        $('#right-arrow-saved').addClass('hide')
        $('#left-arrow-saved').addClass('hide')
        
        window.listOfIndexes = [];
        savedMode = false;
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
                
                window.listOfIndexes.push(i)
            }
        }
        console.log(window.listOfIndexes);
        // Disable the Posts arrows
        $('#right-arrow').addClass('hide-important')
        $('#left-arrow').addClass('hide-important')

        // Enable the Saved arrows
        $('#right-arrow-saved').removeClass('hide')
        $('#left-arrow-saved').removeClass('hide')

        // turn saved mode on
        savedMode = true;
    })

    $('.main-card').on('click',()=>{
        // Current index
        window.currentIndex = window.listOfIndexes.indexOf(window.imageTracker)

        // Hide arrow if at first index, only in saved Mode
        if(savedMode){
            if(window.currentIndex == 0){
                $('#left-arrow-saved').addClass('hide')
            } else {
                $('#left-arrow-saved').removeClass('hide')
            }

            // Hide arrow if at last index
            if(window.currentIndex == window.listOfIndexes.length-1){
                $('#right-arrow-saved').addClass('hide')
            } else {
                $('#right-arrow-saved').removeClass('hide')
            }

            // Show comments
            console.log(window.Comments);
        }
    })    
    
    $('#right-arrow-saved').on('click',()=>{
        window.currentIndex += 1;
        $('#selected-image').attr('src',`./public/${window.listOfIndexes[window.currentIndex]}.jpg`)
        console.log(window.currentIndex)
        $('#left-arrow-saved').removeClass('hide');
        if(window.currentIndex == window.listOfIndexes.length-1){
            $('#right-arrow-saved').addClass('hide')
        }
        //window.generateCommentHTML(window.currentIndex);
    })
        
    $('#left-arrow-saved').on('click',()=>{
        window.currentIndex -= 1;
        $('#selected-image').attr('src',`./public/${window.listOfIndexes[window.currentIndex]}.jpg`)
        console.log(window.currentIndex)

        $('#right-arrow-saved').removeClass('hide');
        if(window.currentIndex == 0){
            $('#left-arrow-saved').addClass('hide')
        }
    })


})