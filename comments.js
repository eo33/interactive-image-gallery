$(document).ready(()=>{
        // Initialize state of 'Likes' and 'Comments'
    let comments = [{},{},{},{},{},{}]
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