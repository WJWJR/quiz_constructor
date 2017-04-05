function Question (text, answer) {
  this.text = text;
  this.answer = answer;
  //this.choices = choices;

this.isCorrect = function (event) {
  let li = event.target;
  let answerSpace = li.parentElement.nextElementSibling;
  if (li.textContent === this.answer) {
    answerSpace.textContent = "Yup";
  } else {
    answerSpace.textContent = "Nope";
  }
}

this.display = function() {
  let source = document.querySelector('#question').innerHTML;
  let template = Handlebars.compile(source);
  let html = template(this);
  document.querySelector('#quiz').insertAdjacentHTML('beforeend', html);
  document.querySelector('#quiz article:last-of-type ul').addEventListener('click', this.isCorrect.bind(this));
  }
}
//This is my MultiChoice Constructor
function MultiChoiceQuestion(text, answer, choices){
  Question.call(this, text, answer);
  this.choices = choices;
  console.log(MultiChoiceQuestion);
}
//Then I will need to create a prototype to add ** Ask Brian ** choices to ...
MultiChoiceQuestion.prototype.choices = function(){
  this.question = this.question + this.answer + this.choices;
}

let q1 = new MultiChoiceQuestion('What syntax is used in JavaScript', 'let', ['let', 'hambugers', 'phone', 'merchant'] );
let q2 = new MultiChoiceQuestion('What syntax is used in html', 'article', ['article', 'hambugers','phone', 'merchant']);
//console.log(q1);
let q3 = new MultiChoiceQuestion('What is foo used for in JavaScript', 'variable', ['variable', 'hambugers','phone', 'merchant']);
let q4 = new MultiChoiceQuestion('What does Handlebars used for in JavaScript', 'templating', ['templating', 'hambugers','phone', 'merchant']);

[q1, q2, q3, q4].forEach(question => question.display());
