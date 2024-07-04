const questions = [
  {
    question:"Which river is considered the lifeline of India?",
    answers:[
       { text:"Brahmaputra" , correct:false},
        {text:"Yamuna" , correct:false},
        {text:"Ganges" , correct:true},
        {text:"Godavari" , correct:false},
    ]
  },
  {
    question:"Who was the first Prime Minister of India?",
    answers:[
      { text:"Jawaharlal Nehru" , correct:true},
      {text: "Indira Gandhi" , correct:false},
     { text:"Mahatma Gandhi" , correct:false},
      {text:"Rajendra Prasad" , correct:false},
    ]
  },
  {
    question:"What is the national flower of India?",
    answers:[
      { text:"Rose" , correct:false},
      {text:"Lotus" , correct:true},
      {text:"Sunflower" , correct:false},
    { text:" Jasmine" , correct:false},
    ]
  },
  {
    question:"Who is known as the “Father of the Indian Constitution”?",
    answers:[
      { text:"Mahatma Gandhi" , correct:false},
       { text:" Jawaharlal Nehru" , correct:false},
       { text:" Sardar Vallabhbhai Patel",correct:false},
       { text:"B. R. Ambedkar" , correct:true},
    ]
  },
  {
    question:"Which Indian city is also known as the “Pink City”?",
    answers:[
      { text:"Jaipur" , correct:true},
      {text:"Jodhpur" , correct:false},
      {text:" Udaipur" , correct:false},
      {text:"Bikaner" , correct:false},
    ]
  },
  {
    question:"What caste is Rama born into?",
    answers:[
      { text:"Kshatriya" , correct:true},
      {text: "vaisya" , correct:false},
     { text:"Brahmin" , correct:false},
      {text:"shudra" , correct:false},
    ]
  },
  {
    question:"How is Lakshmana's appearance described?",
    answers:[
      { text:"purple as the sunset" , correct:false},
      {text: "dark blue as a lotus" , correct:false},
     { text:"fair as a moonbeam" , correct:true},
      {text:"brown as the sacred earth" , correct:false},
    ]
  },
  {
    question:"Who was the eldest of the Pandavas?",
    answers:[
      { text:"yudhishthira" , correct:true},
      {text: "bhima" , correct:false},
     { text:"arjuna" , correct:false},
      {text:"nakula" , correct:false},
    ]
  },
  {
    question:"who was the author of Mahabharat?",
    answers:[
      { text:"valmiki" , correct:false},
      {text: "kalidas" , correct:false},
     { text:"tulsidas" , correct:false},
      {text:"ved vyasa" , correct:true},
    ]
  },
  {
    question:"How many chapters (slokas) are there in  the Mahabharata Mahabharata?",
    answers:[
      { text:"12 chapters and 50,000 slokas" , correct:false},
      {text: "18 chapters and 100,000 slokas" , correct:true},
     { text:"15 chapters and 75,000 slokas" , correct:false},
      {text:"20 chapters and 125,000 slokas" , correct:false},
    ]
  },
];


const questionElement = document.getElementById('question');
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  let currentQuestionIndex = 0;
  let score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question ;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
   if(answer.correct){
    button.dataset.correct = answer.correct;
   }
   button.addEventListener("click", selectAnswer);
});
  
}

function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);

  }
}

function selectAnswer(e){
       const selectedBtn = e.target;
       const isCorrect = selectedBtn.dataset.correct === "true";
       if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
       }
       else{
        selectedBtn.classList.add("incorrect");
       }
       Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
          button.classList.add("correct");
        }
        button.disabled = true;
       });
       nextButton.style.display = "block";
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
}

function showScore(){
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}
nextButton.addEventListener("click",()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }
  else{
    startQuiz();
  }
});
startQuiz();
