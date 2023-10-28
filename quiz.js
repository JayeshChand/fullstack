const quizData = [{
    Question: "Which is your favroute computer language?",
    a: "java",
    b: "phython",
    c: "javscript",
    d: "html",
    correct: "d",
},
{
    Question: "Which is your unfoveroute computer language?",
    a: "java",
    b: "phython",
    c: "javscript",
    d: "html",
    correct: "c",
},
{
    Question: "Which is your computer language?",
    a: "java",
    b: "phython",
    c: "javscript",
    d: "html",
    correct: "b",
},
{
    Question: "css stands for?",
    a: "java",
    b: "phython",
    c: "javscript",
    d: "html",
    correct: "a"
}
]
let index = 0;
let correct = 0, 
incorrect = 0,
 total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input");
const loadQuestion = () => {
    const data = quizData[index]
    questionBox.innerHTML = data.Question
    allInputs[0].nextElementSibling.innerHTML = data.a;
    allInputs[1].nextElementSibling.innerHTML = data.b;
    allInputs[2].nextElementSibling.innerHTML = data.c;
    allInputs[3].nextElementSibling.innerHTML = data.d;
}
const sumbitQuiz = () => {
    const data = quizData[index]
    const ans = getAnswer();
    if (ans == data.correct) {
        console.log("correct answer")
        correct++;
        console.log("correct")
    } else {
        console.log("wrong answer")
        index++
        loadQuestion()
    }
}
const getAnswer = () => {
    let answer;
    allInputs.forEach(
        (input) => {
            if (input.checked) {
                console.log("Yes")
            }
            else {
                console.log("No")
            }
        }
    ); return answer;

}

const endQuiz=()=>{
    document.querySelector(".container").innerHTML=`<h3>thank you for playing the quiz</h3>
    <h2>${correct}/${total} are correct</h2>`
    
}
loadQuestion()