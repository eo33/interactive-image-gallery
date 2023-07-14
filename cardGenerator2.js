// cardGenerator.js

class CardGenerator{
    constructor(imagePath, title) {
        this.imagePath = imagePath;
        this.title = title;
      }
      
      createCard() {
        const CardTemplate = `
        <div class='col'>
          <div class="card" id="${this.title}">
            <img class="card-img-top" src="${this.imagePath}" alt="Card image cap">
            <div class="hide" id="${this.title}-hide">
                <div class="card-img-overlay d-inline-flex justify-content-center align-items-center">
                    <i class="fa-solid fa-thumbs-up p-3 hide"  style="color: #ffffff" > </i>
                    <i class="fa-solid fa-comment p-3 hide" style="color: #ffffff;" > </i>
                </div>
            </div>
          </div>
        </div>
        `;
        $('#cardContainer').append(CardTemplate);
      }
}

// Load document

$(document).ready(()=>{
    // Initialize state of
    let cardInstances = [];
    let likes = [false,false,false,false,false,false]
    let comments = [{},{},{},{},{},{}]

    // Create card components
    for(let i = 1; i <= 6; i++){
        let imagePath = `./public/${i}.jpg`;
        let cardNumb = 'card-num-'+i;
        
        const card = new CardGenerator(imagePath,cardNumb)
        card.createCard();

        // Hover effect
        $('#card-num-'+i).on('mouseenter',()=>{
            $('#card-num-'+i).addClass('image-hover')
            $('#card-num-'+i+'-hide').show()
        })
 
         $('#card-num-'+i).on('mouseleave',()=>{
             $('#card-num-'+i).removeClass('image-hover')
             $('#card-num-'+i+'-hide').hide()
        })

        // Fullscreen effect
        $('#card-num-'+i).on('click',()=>{
            $('#fullscreen').removeClass('hide')
            $('#selected-image').attr('src',`./public/${i}.jpg`)
            imageTracker = i;
            // Arrows
            if(i == 1){
                $('#left-arrow').addClass('hide')
             } else{
                $('#left-arrow').removeClass('hide')
             }

            // Likes
            if(likes[i-1]){
                $('#fullscreen-like').addClass('fa-solid')
            }else{
                $('#fullscreen-like').removeClass('fa-solid')
            }
         })

        cardInstances.push(card);
    }

    $('#right-arrow').on('click',()=>{
        imageTracker += 1;
        console.log(imageTracker);
        console.log(likes);
        $('#selected-image').attr('src',`./public/${imageTracker}.jpg`)
        $('#left-arrow').removeClass('hide'); // Always show the left arrow
        if (imageTracker === 6) {
            $('#right-arrow').addClass('hide'); // Hide the right arrow when at image 6
        }
        console.log(likes[imageTracker-1])
        if (likes[imageTracker-1]){
            $('#fullscreen-like').addClass('fa-solid');
        } else{
            $('#fullscreen-like').removeClass('fa-solid');
        }
    })

    $('#left-arrow').on('click',()=>{
        imageTracker -= 1;
        
        console.log(imageTracker);
        $('#selected-image').attr('src',`./public/${imageTracker}.jpg`)
        $('#right-arrow').removeClass('hide'); // Always show the right arrow
        if (imageTracker === 1) {
            $('#left-arrow').addClass('hide'); // Hide the left arrow when at image 1
        }
        if (likes[imageTracker-1]){
            $('#fullscreen-like').addClass('fa-solid');
        } else{
            $('#fullscreen-like').removeClass('fa-solid');
        }
    })
    $("#exit-carousel").on('click',()=>{
        $('#fullscreen').addClass('hide')
        imageTracker=0;
     })

     $('#fullscreen-like').on('click',()=>{
        likes[imageTracker-1] = !likes[imageTracker-1];
        $('#fullscreen-like').toggleClass('fa-solid');
     })
     
     $('#comment').on('input', function() {
        let commentValue = $(this).val().trim();
        let postButton = $('#comment-button');
        
        if (commentValue !== '') {
          postButton.removeAttr('disabled');
        } else {
          postButton.attr('disabled','');
        }
      });
})