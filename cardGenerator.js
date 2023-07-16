// cardGenerator.js

class cardGenerator{
    constructor(imagePath, title) {
        this.imagePath = imagePath;
        this.title = title;
        this.container = title+'-container'
       
      }
      
      createCard() {
        const CardTemplate = `
        <div class='col' id="${this.container}">
          <div class="card main-card" id="${this.title}">
            <img class="card-img-top" src="${this.imagePath}" alt="Card image cap">
            <div class="hide" id="${this.title}-hide">
                <div class="card-img-overlay d-inline-flex justify-content-center align-items-center">
                    <i class="fa-solid fa-thumbs-up p-3 hide like-outside"  style="color: #ffffff" ></i>
                    <i class="fa-solid fa-comment p-3 hide comment-outside" style="color: #ffffff;" > </i>
                </div>
            </div>
          </div>
        </div>
        `;
        $('#cardContainer').append(CardTemplate);
      }
}

// Export cardGenerator
window.CardGenerator = cardGenerator