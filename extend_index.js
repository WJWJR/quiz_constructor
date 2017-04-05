function Question (text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;

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
let q1 = new Question('What syntax is used in JavaScript', ['let', 'hambugers', 'phone', 'merchant'], 'let');
let q2 = new Question('What syntax is used in html', ['article', 'hambugers','phone', 'merchant'], 'article');
let q3 = new Question('What is foo used for in JavaScript', ['variable', 'hambugers','phone', 'merchant'], 'variable');
let q4 = new Question('What does Handlebars used for in JavaScript', ['templating', 'hambugers','phone', 'merchant'], 'templating');
[q1, q2, q3, q4].forEach(question => question.display());
