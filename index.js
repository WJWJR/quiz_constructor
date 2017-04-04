//It's okay ask your classmate a Question!



function Quiz (quizQuestion, correctAnswer, mightBeAnswers) {
  this.question = quizQuestion;
  this.correct = correctAnswer;
  this.mightBe = mightBeAnswers;
}

let question1 = new Quiz('Does Mary Jane know Javascript?', 'No', ['dances', 'smokes', 'dogs'])
//console.log(question1);


 let questionArray = [question1];
 console.log(questionArray);

 let source = document.querySelector('#question-template').innerHTML;
 let template = Handlebars.compile(source);
 let html = questionArray.map(object => template(object));
 let destination = document.querySelector('.handlebars-demo');
  destination.innerHTML = html;

let 
