const questionContainer = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const scoreSpan = document.getElementById('score');

let currentQuestionIndex = 0;
let score = 0;

const questions = [
    {
        question: 'What is the main function of the CPU?',
        answers: [
            { text: 'To store data permanently', correct: false },
            { text: 'To perform calculations and execute instructions', correct: true },
            { text: 'To provide internet connectivity', correct: false },
            { text: 'To manage power supply', correct: false }
        ]
    },
    {
        question: 'Which of the following is an input device?',
        answers: [
            { text: 'Monitor', correct: false },
            { text: 'Keyboard', correct: true },
            { text: 'Printer', correct: false },
            { text: 'Speaker', correct: false }
        ]
    },
    {
        question: 'What does RAM stand for?',
        answers: [
            { text: 'Random Access Memory', correct: true },
            { text: 'Read Access Memory', correct: false },
            { text: 'Remote Access Memory', correct: false },
            { text: 'Rapid Access Memory', correct: false }
        ]
    }
];

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    scoreSpan.textContent = score;
    nextButton.classList.add('hide');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionContainer.textContent = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
        scoreSpan.textContent = score;
    }
    nextButton.classList.remove('hide');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.classList.add('hide');
    } else {
        questionContainer.textContent = 'Quiz completed!';
        answerButtons.innerHTML = '';
        nextButton.classList.add('hide');
    }
}

startGame();
