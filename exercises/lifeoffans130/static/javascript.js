test = new Date()
day = test.toLocaleDateString()
document.write('Today is ' + day);

$(document).ready(function(){
    $("button").click(function(){
        $(".honest").toggle();
    });
});

var $btns = $('.btn').click(function() {
  	if (this.id == 'tripleThreat') {
    	$('main > article').fadeIn(450);
  	} else {
    	var $el = $('.' + this.id).fadeIn(450);
    	$('main > article').not($el).hide();
 	 }
 	$btns.removeClass('active');
 	 $(this).addClass('active');
})