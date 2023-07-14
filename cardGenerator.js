// cardGenerator.js

function createCard(imagePath,title) {
    // Create the card elements
    let cardCol = $('<div class="col">');
    let card = $('<div class="card shadow-sm">').attr('id',title);
    let cardImg = $('<img class="card-img-top">').attr('src', imagePath).attr('alt', 'Card image cap');
    
    // icons
    let cardOverlay = $('<div class="card-img-overlay d-inline-flex justify-content-center align-items-center">')
    let hider = $('<div class="hide">').attr('id',title+'-hide')
    let like = $('<i class="fa-solid fa-thumbs-up p-3 hide"  style="color: #ffffff" > </i>').attr('id',title+'-like');
    let comment = $('<i class="fa-solid fa-comment p-3 hide" style="color: #ffffff;" > </i>');

    // Append the icons to the image overlay
    cardOverlay.append(hider)
    hider.append(like)
    hider.append(comment)

    // Append the image to the card
    cardCol.append(card);
    card.append(cardImg);
    card.append(cardOverlay);
    
    // Append the card column to the container
    $('#cardContainer').append(cardCol);
}


$(document).ready(function() {
    let imageTracker = 1;
    let counter = [0,0,0,0,0,0]

    for (let i = 1; i <= 6; i++){
        createCard(`./public/${i}.jpg`,'card-num-'+i);

        // Add hover effect
        $('#card-num-'+i).on('mouseenter',()=>{
           $('#card-num-'+i).addClass('image-hover')
           $('#card-num-'+i+'-hide').show()
        })

        $('#card-num-'+i).on('mouseleave',()=>{
            $('#card-num-'+i).removeClass('image-hover')
            $('#card-num-'+i+'-hide').hide()
         })

        // Add fullscreen eeffect

        // Initiate fullscreen when clicked
        $('#card-num-'+i).on('click',()=>{
            $('#fullscreen').removeClass('hide')
            $('#selected-image').attr('src',`./public/${i}.jpg`)
            imageTracker = i;
            if(i == 1){
                $('#left-arrow').addClass('hide')
             } else{
                $('#left-arrow').removeClass('hide')
             }
            $('.fa-thumbs-up').on('click', () => {
                $('#card-num-'+i+'-like').addClass('fa-solid');
            });
         })
    }
    
    $('#right-arrow').on('click',()=>{
        imageTracker += 1;
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


    $('.fa-comment').on('click',(event)=>{
        
    })
});
  