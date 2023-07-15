// cardGenerator.js

class CardGenerator{
    constructor(imagePath, title) {
        this.imagePath = imagePath;
        this.title = title;
      }
      
      createCard() {
        const CardTemplate = `
        <div class='col'>
          <div class="card main-card" id="${this.title}">
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
    }

})