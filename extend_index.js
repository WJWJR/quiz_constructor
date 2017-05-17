let score = [];
let questionsAnsweredCorrect = [];

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
//ShortAnswerQuestion is not needed at all
// ShortAnswerQuestion.prototype.choices = function(){
//   this.question = this.question + this.answer;
// }

// The q1 -q8 questions are hard coded to the page
// let q1 = new MultiChoiceQuestion('What syntax is used in JavaScript', 'let', ['let', 'hambugers', 'phone', 'merchant']);
// let q2 = new MultiChoiceQuestion('What syntax is used in html', 'article', ['article', 'hambugers', 'phone', 'merchant']);
// //console.log(q1);
// let q3 = new MultiChoiceQuestion('What is foo used for in JavaScript', 'variable', ['variable', 'hambugers', 'phone', 'merchant']);
// let q4 = new MultiChoiceQuestion('What does Handlebars used for in JavaScript', 'templating', ['templating', 'hambugers', 'phone', 'merchant']);
// let q5 = new ShortAnswerQuestion('Is Detra Fancy', 'yes');
// let q6 = new ShortAnswerQuestion('How do you spell Fancy', 'Fancy');
// let q7 = new ShortAnswerQuestion('How do you spell Detra', 'Detra');
// let q8 = new ShortAnswerQuestion('Brian is the...', 'The Man');


// [q1, q2, q3, q4].forEach(question => question.display());
//
// [q5, q6, q7, q8].forEach(question => question.displaySA());



//Fetch Api Request!! Multiple Choice
fetch("https://opentdb.com/api.php?amount=5&category=28&difficulty=medium&type=multiple")
  .then(response => response.json())
  //.then(jsonData => console.log(jsonData));
  .then(object => object.results)
  //.then(apiDataOnPage)
  .then(apiArr => apiArr.map(apiForMultiDataOnPage))
  .then(apiArr => apiArr.forEach(question => question.display()))
  //.then(jsonData => console.log(jsonData));

//Fetch Api Request!! True/False
  fetch("https://opentdb.com/api.php?amount=5&category=28&difficulty=medium&type=boolean")
    .then(response => response.json())
    //.then(jsonData => console.log(jsonData));
    .then(object => object.results)
    //.then(apiDataOnPage)
    .then(apiArr => apiArr.map(apiForMultiDataOnPage))
    .then(apiArr => apiArr.forEach(question => question.display()))


function apiForMultiDataOnPage(object) {
  //console.log(object)
  return new MultiChoiceQuestion(object.question,object.correct_answer, object.incorrect_answers)
  //console.log(question);
}





 let url = "https://putsreq.com/XqRHNf3c4y7yObA0IajW";
 // let url = "https://putsreq.com/SXnq1fNMxSmav1gQLDAY";

function fetchInit (data) {
  return {
    method:'POST',
    body: JSON.stringify(data),
    headers: {
      'Accept' : 'application/json',
      'Content-Type' : 'application/json'
    }
  }


let form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  let order = {
    userName: form.querySelector('input[name=firstName]').value,
    score: form.querySelector('em').innerHTML,
    questionsAsked: questionsAnsweredCorrect
  }
  fetch(url, fetchInit(order)).then(response => response.json()).then(jsonData => console.log(jsonData))
})
}
