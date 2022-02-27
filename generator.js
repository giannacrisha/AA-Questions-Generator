var questions = [
	"What must be the qualities of a good leader?",
	"If you will be elected, what will be your action to unify the students?",
	"What makes you a good candidate?",
	"What are your duties and responsibilities?",
	"What is the problem that you have seen in the students? And how can you address them?",
	"How dedicated are you in serving the students? Can you fully commit the time necessary for your position?",
	"What are the things that you want to implement for the good of the students?",
	"In relation to the national elections, what kind of a leader or a person should be best fitted for the position of a president?"
]

function newQuestion() {
	var randomNumber = Math.floor(Math.random() * (questions.length));
	document.getElementById('questionDisplay').innerHTML = questions[randomNumber];
}
