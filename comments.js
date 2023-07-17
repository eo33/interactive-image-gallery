$(document).ready(() => {
  // Initialize state of 'Likes' and 'Comments'
  window.Comments = [[], [], [], [], [], []];

  // Template of comment
  window.Commentstemplate = (commentText) => `
    <p class="m-3">
      <strong>Edward O:</strong> ${commentText}
    </p>
  `;
  
  // Generate Comment
  let generateCommentHTML = (imageIndex) => {
    let textToAdd = window.Comments[imageIndex].reduce((acc, commentToAdd) => {
      return acc + window.Commentstemplate(commentToAdd);
    }, '');

    $('#comments-container').html(textToAdd);
    $('#comment-box').val(''); // Clear the comment box

    // Remove the empty-comment element if there are comments
    let emptyCommentElement = $('#empty-container');
    if (Comments[imageTracker - 1].length > 0) {
      emptyCommentElement.addClass('hide-important');
    } else {
      emptyCommentElement.removeClass('hide-important');
    }
  }

  // Switch to input form when user click on comment
  $('#fullscreen-comment').on('click',()=>{
    $('#comment-box').focus();
  })

  // Enable post button when user types a comment
  $('#comment-box').on('input', function () {
    let commentValue = $(this).val().trim();
    let postButton = $('#comment-button');

    if (commentValue !== '') {
      postButton.prop('disabled', false); 
    } else {
      postButton.prop('disabled', true);
    }
  });

  // Show comment after user click on post
  $('#comment-button').click((event) => {
    event.preventDefault();
    // Retrieve what's in the comment box and add it to comments
    let comment = $('#comment-box').val();
    Comments[imageTracker - 1].push(comment);

    generateCommentHTML(imageTracker-1);
  });

  // Show comment on Posts slides
  // Right arrow
  $('#right-arrow',).on('click',()=>{
    generateCommentHTML(imageTracker-1);
  })

  // Left arrow
  $('#left-arrow').on('click',()=>{
    generateCommentHTML(imageTracker-1);
  })

  // Show comment on Saved slides
  // Right arrow saved
  $('#right-arrow-saved',).on('click',()=>{
    console.log(window.listOfIndexes[window.currentIndex])
    console.log(window.Comments)
    generateCommentHTML(window.listOfIndexes[window.currentIndex]-1);
  })

  // Left arrow saved
  $('#left-arrow-saved').on('click',()=>{
    console.log(window.listOfIndexes[window.currentIndex])
    generateCommentHTML(window.listOfIndexes[window.currentIndex]-1);
  })


  // Show comment count after exit
  $("#exit-carousel").on('click',()=>{
    for(let i = 1; i <= window.Comments.length; i++){
      let element2 = `#card-num-`+i+'-hide';

      if(window.Comments[i-1].length > 0){
          $(element2).find('.comment-outside').text(' '+window.Comments[i-1].length)
      } else{
          $(element2).find('.comment-outside').text('')
      }
    }

  // Reload comment when clicking fullscreen
  $('.main-card').on('click',(event)=>{
    generateCommentHTML(imageTracker-1);
  })
})

});
