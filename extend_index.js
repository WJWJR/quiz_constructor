function Question(text, answer) {
    this.text = text;
    this.answer = answer;
    //this.choices = choices;

    this.isCorrect = function(event) {
        let li = event.target;
        let answerSpace = li.parentElement.nextElementSibling;
        if (li.textContent === this.answer) {
            answerSpace.textContent = "Yup";
        } else {
            answerSpace.textContent = "Nope";
        }
        console.log(li.textContent, this.answer);
    }


    this.display = function() {
        let source = document.querySelector('#question').innerHTML;
        let template = Handlebars.compile(source);
        let html = template(this);
        document.querySelector('#quiz').insertAdjacentHTML('beforeend', html);
        document.querySelector('#quiz article.multiChoice:last-of-type ul').addEventListener('click', this.isCorrect.bind(this));
        console.log(document.querySelector('#quiz article.multiChoice ul'));
    }


    this.isCorrectSA = function(event) {
        let submit = event.target;
        let shortAnswerWe = submit.previousElementSibling;
        let shortAnswerWeInput = shortAnswerWe.value;
        let yourAnswer = submit.nextElementSibling;
        if (shortAnswerWeInput.toLowerCase() == this.answer.toLowerCase()) {
            yourAnswer.textContent = 'Damn! Your Smart...';
        } else {
            yourAnswer.textContent = 'Maybe you might want to attend the Iron Yard!, Im Just saying';
        }
        console.log(shortAnswerWeInput, this.answer);
    }

    this.displaySA = function() {
        let source = document.querySelector('#shortAnsArticle').innerHTML;
        let template = Handlebars.compile(source);
        let html = template(this);
        document.querySelector('#quiz').insertAdjacentHTML('beforeend', html);
        document.querySelector('#quiz .shortAnswer:last-of-type button.submitButton').addEventListener('click', this.isCorrectSA.bind(this));
    }
    console.log(document.querySelector('#quiz .shortAnswer:last-of-type button.submitButton'));
}
//This is my MultiChoice Constructor
function MultiChoiceQuestion(text, answer, choices) {
    Question.call(this, text, answer);
    this.choices = choices;
    //console.log(MultiChoiceQuestion);
}

function ShortAnswerQuestion(text, answer) {
    Question.call(this, text, answer);
}

//Then I will need to create a prototype to add ** Ask Brian ** choices to ...
MultiChoiceQuestion.prototype.choices = function() {
    this.question = this.question + this.answer + this.choices;
}

// ShortAnswerQuestion.prototype.choices = function(){
//   this.question = this.question + this.answer;
// }

let q1 = new MultiChoiceQuestion('What syntax is used in JavaScript', 'let', ['let', 'hambugers', 'phone', 'merchant']);
let q2 = new MultiChoiceQuestion('What syntax is used in html', 'article', ['article', 'hambugers', 'phone', 'merchant']);
//console.log(q1);
let q3 = new MultiChoiceQuestion('What is foo used for in JavaScript', 'variable', ['variable', 'hambugers', 'phone', 'merchant']);
let q4 = new MultiChoiceQuestion('What does Handlebars used for in JavaScript', 'templating', ['templating', 'hambugers', 'phone', 'merchant']);
let q5 = new ShortAnswerQuestion('Is Detra Fancy', 'yes');
let q6 = new ShortAnswerQuestion('How do you spell Fancy', 'Fancy');
let q7 = new ShortAnswerQuestion('How do you spell Detra', 'Detra');
let q8 = new ShortAnswerQuestion('Brian is the...', 'The Man');


[q1, q2, q3, q4].forEach(question => question.display());

[q5, q6, q7, q8].forEach(question => question.displaySA());


// let url = "https://opentdb.com/api.php?amount=5&category=28&difficulty=medium"
//
// function fetchInit (data) {
//   return {
//     method:
//   }
// }

fetch("https://opentdb.com/api.php?amount=5&category=28&difficulty=medium")
  .then(response => response.json())
  .then(object => object.results[0]);
  .then(apiDataOnPage);
  //.then(jsonData => console.log(jsonData));



function apiDataOnPage(json) {
  let question = new MultiChoiceQuestion(object.results)
  console.log(json);
}
