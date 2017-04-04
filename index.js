//It's okay ask your classmate a Question!
let source = document.querySelector('#question-template').innerHTML;
let template = Handlebars.compile(source);


function Quiz (quizQuestion, correctAnswer, mightBeAnswers) {
  this.question = quizQuestion;
  this.correct = correctAnswer;
  this.mightBe = mightBeAnswers;
  this.display = function(){
    let questionArray = [question1];
    console.log(questionArray);

    //let html = questionArray.map(object => template(object));
    let html = template(this);
    let destination = document.querySelector('.handlebars-demo');
     destination.innerHTML = html;

     let theAnswer = document.querySelector('#answerSpace');
     let theClickedAnswer = document.querySelector('li.correct');
     theClickedAnswer.addEventListener('click',theCorrectAnswer);
     console.log(theAnswer);

    function theCorrectAnswer(event){
      theAnswer.innerText = 'Correct';
    }


    let wrongAnswerClicked = document.querySelectorAll('li.wrongAnswers');
    for (let i = 0; i < wrongAnswerClicked.length; i++) {
    let li = wrongAnswerClicked[i];
    li.addEventListener('click',theIncorrectAnswer);
    }


    function theIncorrectAnswer(event) {
      theAnswer.innerText = "Nope!, sorry try again."
    }

  }
}

let question1 = new Quiz('Does Mary Jane know Javascript?', 'No', ['dances', 'smokes', 'dogs'])
//console.log(question1);

question1.display();
