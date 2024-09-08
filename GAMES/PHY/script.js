// const physicsQuestions = {
//     easy: [
//         { question: "What is the formula for velocity?", answers: ["v = d/t", "v = m/a", "v = F/m", "v = E/q"], correct: "v = d/t" },
//         { question: "What does Newton's first law state?", answers: ["An object in motion stays in motion.", "Force equals mass times acceleration.", "For every action, there is an equal and opposite reaction.", "Energy cannot be created or destroyed."], correct: "An object in motion stays in motion." }
//     ],
//     medium: [
//         { question: "Calculate the kinetic energy of an object with mass 5 kg moving at 10 m/s.", answers: ["250 J", "500 J", "100 J", "200 J"], correct: "250 J" },
//         { question: "What is the potential energy of a 10 kg object raised to a height of 5 meters? (g = 9.8 m/s²)", answers: ["490 J", "980 J", "245 J", "735 J"], correct: "490 J" }
//     ],
//     hard: [
//         { question: "What is the force between two charges of 1 C each separated by a distance of 1 m in a vacuum? (k = 9 x 10^9 Nm²/C²)", answers: ["9 x 10^9 N", "9 N", "1 x 10^-9 N", "9 x 10^-9 N"], correct: "9 x 10^9 N" },
//         { question: "A convex lens has a focal length of 10 cm. What is the magnification of an object placed 30 cm away from it?", answers: ["-1/3", "1/3", "-2/3", "2/3"], correct: "-1/3" }
//     ]
// };

// let currentLevel = 'easy';
// let score = 0;
// let timeLeft = 120;
// let timer;

// function initializeGame() {
//     currentLevel = document.getElementById('difficulty').value;
//     score = 0;
//     timeLeft = 120;
//     document.getElementById('score').textContent = `Score: ${score}`;
//     document.getElementById('timer').textContent = `Time Left: ${timeLeft}s`;
//     document.getElementById('status').textContent = 'Answer the questions correctly to score points!';
    
//     clearInterval(timer);
//     timer = setInterval(countdown, 1000);

//     loadQuestion();
// }

// function countdown() {
//     timeLeft--;
//     document.getElementById('timer').textContent = `Time Left: ${timeLeft}s`;
//     if (timeLeft <= 0) {
//         clearInterval(timer);
//         document.getElementById('status').textContent = 'Time is up! Game Over!';
//         document.querySelectorAll('.answer-option').forEach(option => option.onclick = null);
//     }
// }

// function loadQuestion() {
//     const questionSet = physicsQuestions[currentLevel];
//     const randomIndex = Math.floor(Math.random() * questionSet.length);
//     const currentQuestion = questionSet[randomIndex];
    
//     const questionContainer = document.querySelector('.question-container');
//     questionContainer.innerHTML = `
//         <div class="question">${currentQuestion.question}</div>
//         <div class="answer-options">
//             ${currentQuestion.answers.map(answer => `<div class="answer-option" onclick="checkAnswer('${answer}', '${currentQuestion.correct}')">${answer}</div>`).join('')}
//         </div>
//     `;
// }

// function checkAnswer(selected, correct) {
//     if (selected === correct) {
//         document.querySelector(`.answer-option:contains('${selected}')`).classList.add('correct');
//         score += 10;
//     } else {
//         document.querySelector(`.answer-option:contains('${selected}')`).classList.add('incorrect');
//         score -= 5;
//     }
//     document.getElementById('score').textContent = `Score: ${score}`;
//     setTimeout(loadQuestion, 1000);
// }
const physicsQuestions = {
    easy: [
        { question: "What is the formula for velocity?", answers: ["v = d/t", "v = m/a", "v = F/m", "v = E/q"], correct: "v = d/t" },
        { question: "What does Newton's first law state?", answers: ["An object in motion stays in motion.", "Force equals mass times acceleration.", "For every action, there is an equal and opposite reaction.", "Energy cannot be created or destroyed."], correct: "An object in motion stays in motion." }
    ],
    medium: [
        { question: "Calculate the kinetic energy of an object with mass 5 kg moving at 10 m/s.", answers: ["250 J", "500 J", "100 J", "200 J"], correct: "250 J" },
        { question: "What is the potential energy of a 10 kg object raised to a height of 5 meters? (g = 9.8 m/s²)", answers: ["490 J", "980 J", "245 J", "735 J"], correct: "490 J" }
    ],
    hard: [
        { question: "What is the force between two charges of 1 C each separated by a distance of 1 m in a vacuum? (k = 9 x 10^9 Nm²/C²)", answers: ["9 x 10^9 N", "9 N", "1 x 10^-9 N", "9 x 10^-9 N"], correct: "9 x 10^9 N" },
        { question: "A convex lens has a focal length of 10 cm. What is the magnification of an object placed 30 cm away from it?", answers: ["-1/3", "1/3", "-2/3", "2/3"], correct: "-1/3" }
    ]
};

let currentLevel = 'easy';
let score = 0;
let timeLeft = 120;
let timer;

function initializeGame() {
    currentLevel = document.getElementById('difficulty').value;
    score = 0;
    timeLeft = 120;
    document.getElementById('score').textContent = `Score: ${score}`;
    document.getElementById('timer').textContent = `Time Left: ${timeLeft}s`;
    document.getElementById('status').textContent = 'Answer the questions correctly to score points!';
    
    clearInterval(timer);
    timer = setInterval(countdown, 1000);

    loadQuestion();
}

function countdown() {
    timeLeft--;
    document.getElementById('timer').textContent = `Time Left: ${timeLeft}s`;
    if (timeLeft <= 0) {
        clearInterval(timer);
        document.getElementById('status').textContent = 'Time is up! Game Over!';
        document.querySelectorAll('.answer-option').forEach(option => option.onclick = null);
    }
}

function loadQuestion() {
    const questionSet = physicsQuestions[currentLevel];
    const randomIndex = Math.floor(Math.random() * questionSet.length);
    const currentQuestion = questionSet[randomIndex];
    
    const questionContainer = document.querySelector('.question-container');
    questionContainer.innerHTML = `
        <div class="question">${currentQuestion.question}</div>
        <div class="answer-options">
            ${currentQuestion.answers.map(answer => `<div class="answer-option" onclick="checkAnswer(this, '${answer}', '${currentQuestion.correct}')">${answer}</div>`).join('')}
        </div>
    `;
}

function checkAnswer(selectedElement, selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        selectedElement.classList.add('correct');
        score += 10;
    } else {
        selectedElement.classList.add('incorrect');
        document.querySelectorAll('.answer-option').forEach(option => {
            if (option.textContent === correctAnswer) {
                option.classList.add('correct');
            }
        });
        score -= 5;
    }
    document.getElementById('score').textContent = `Score: ${score}`;
    
    // Disable all options after selecting an answer
    document.querySelectorAll('.answer-option').forEach(option => option.onclick = null);
    
    setTimeout(loadQuestion, 2000); // Load next question after 2 seconds
}
