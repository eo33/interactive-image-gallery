$(document).ready(()=>{
    // Create card components for Posts
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