$(window).scroll(() => {
	
	let pixFromTop = $(this).scrollTop();	

	$('.logo').css({
		'transform': `translate(0px, ${pixFromTop/5}%)`
	});

});


var projectList = [
	"<p>Mini Projects</p>",
	"<hr>",
	"<div><a href='https://dscarlin.github.io/Word-Guess-Game/' target='_blank'>Dinosaur Hangman</a></div>",
	"<div><a href='https://dscarlin.github.io/unit-4-game/' target='_blank'>Lord of the Rings RPG</a></div>",	
	"<div><a href='https://dscarlin.github.io/TriviaGame/' target='_blank'>90's Tv Show Trivia </a></div>",
	"<div><a href='https://dscarlin.github.io/unit-6-giphy/' target='_blank'>News and Entertainment Collection App</a></div>",
	"<div><a href='https://github.com/dscarlin/cliWordGuess' target='_blank'>Node.js Word Guess Game</a></div>",
	];
		

	 


projectList.forEach((element) => {
	$("#projectList").append(element);
})





$("#navWho").click(function() { 
	$('html,body').animate({
        scrollTop: $("#who").offset().top},800);           
});


$("#navPortfolio").click(function() { 
	$('html,body').animate({
        scrollTop: $("#portfolio").offset().top},1000);           
});


$("#navContact").click(function() { 
	$('html,body').animate({
        scrollTop: $("#footer").offset().top},1100);           
});


$('#navResume').click(() => {
	$('#resumeModal').modal('toggle');
});