// <script type="text/javascript">
var quotes = [];
$(document).on('ready', function() {
  //you are simply appending the division below the quote.

  $(document).on("click", '.submit-button', function(){
  	
  	var authorText= $('.author').val();
  	var inspirationalText= $('.inspirational').val();
  	console.log(inspirationalText);
  	console.log(authorText);

    var quote = {text: inspirationalText,
                  author: authorText};
     quotes.push(quote);

  	 var newQuote = $("<div class ='output'><p>" + authorText + "</p><p> " + inspirationalText + "</p>");

     var hideButton= $("<button class='subtract-response'> hide</button></div>");
  	
 
      var starRating= $('<div class="openStar"><span data-rating=1>&#9734</span> <span data-rating=2>&#9734</span> <span data-rating=3>&#9734</span> <span data-rating=4>&#9734</span> <span data-rating=5>&#9734</span></div>');

    $(newQuote).append(starRating);
      $(newQuote).append(hideButton);


    


    $(document).on('click', '.openStar span', function(){
      $(this).css('background-color', 'red');
      console.log($(this).data('rating'));
    });

  	$('.authored-quotes').append(newQuote);

      
    

    // $('.subtract-response').prepend(starRating);
  	$('.inspirational').val('');
    $('.author').val('');

  	return false;
  });

	$(document).on('click', '.subtract-response', function(){
		
		$(this).closest('.output').remove();
		return false;

	
  });
		

});
// </script>