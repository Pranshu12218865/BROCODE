let questions = [
    {
        question: "What is the powerhouse of the cell?",
        answers: ["Mitochondria", "Nucleus", "Ribosomes", "Chloroplast"],
        correct: 0
    },
    {
        question: "Which gas is essential for photosynthesis?",
        answers: ["Oxygen", "Carbon Dioxide", "Hydrogen", "Nitrogen"],
        correct: 1
    },
    {
        question: "What is the basic unit of life?",
        answers: ["Tissue", "Organ", "Cell", "Atom"],
        correct: 2
    },
    {
        question: "How many bones are in the adult human body?",
        answers: ["206", "201", "220", "198"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    document.getElementById("question").textContent = questions[currentQuestion].question;
    let buttons = document.querySelectorAll("button");
    
    buttons[0].textContent = questions[currentQuestion].answers[0];
    buttons[1].textContent = questions[currentQuestion].answers[1];
    buttons[2].textContent = questions[currentQuestion].answers[2];
    buttons[3].textContent = questions[currentQuestion].answers[3];
}

function checkAnswer(selected) {
    if (selected === questions[currentQuestion].correct) {
        score += 1;
        alert("Correct!");
    } else {
        alert("Wrong! The correct answer is " + questions[currentQuestion].answers[questions[currentQuestion].correct]);
    }
    document.getElementById("score").textContent = "Score: " + score;
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        alert("Quiz Over! Your final score is " + score);
        currentQuestion = 0;
        score = 0;
        loadQuestion();
        document.getElementById("score").textContent = "Score: 0";
    }
}

window.onload = loadQuestion;
