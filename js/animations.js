$(document).ready(function() {
	$('#tweet-controls').hide();
	$('.tweet-compose').on('focus', function() {
		$('#tweet-controls').show();
		$('.tweet-compose').css('height', '75px');
	});
	var countDown = function() {
		var keyCount = 140 - $('.tweet-compose').val().length;
		$('#char-count').text(keyCount);
		if (keyCount < 10) {
			$('#char-count').css('color', 'red');
		}
		else ($('#char-count').css('color', '#999'));
		if (keyCount <= 0) {
			$('#tweet-submit').hide();
		}
		else($('#tweet-submit').show());
	};
	$('.tweet-compose').keyup(countDown);
    $('.tweet-compose').change(countDown);
    
    $('#tweet-submit').on('click', function() {
   		var tweetStuff = $('#profile-summary').clone();
   		var tweetWords = $('.tweet-compose').val();
   		$('#stream').prepend(tweetStuff, tweetWords);
   		$('.tweet-compose').val('');
    });
    $('.tweet-actions').hide();
    $('.tweet').hover(function() 
    	{$('.tweet-actions').show()}, function() 
    	{$('.tweet-actions').hide()})
    $('.stats').hide();
    $('.tweet').on('click', function() {
    	$('.stats').show();
    });
});