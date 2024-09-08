let num1, num2, correctAnswer, operator, algebraicExpression;

function getRange() {
    const difficulty = document.getElementById('difficulty').value;
    switch (difficulty) {
        case 'easy':
            return { min: 1, max: 10 };
        case 'medium':
            return { min: 1, max: 20 };
        case 'hard':
            return { min: 1, max: 50 };
        default:
            return { min: 1, max: 20 };
    }
}

function generateQuestion() {
    const range = getRange();
    const questionType = Math.random(); // Randomly choose between algebraic or arithmetic

    if (questionType < 0.5) {
        // Arithmetic questions
        num1 = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
        num2 = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
        const operators = ['+', '-', '*'];
        operator = operators[Math.floor(Math.random() * operators.length)];
        correctAnswer = calculateAnswer(num1, num2, operator);
        algebraicExpression = `${num1} ${operator} ${num2}`;
        document.getElementById('question').textContent = `What is ${algebraicExpression}?`;
    } else {
        // Algebraic questions
        num1 = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
        num2 = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
        const variable = 'x';
        const result = num1 * num2;
        correctAnswer = result;
        algebraicExpression = `${num1} * ${variable} = ${result}`;
        document.getElementById('question').textContent = `Solve for ${variable}: ${num1} * ${variable} = ${result}`;
    }

    document.getElementById('result').textContent = '';
    document.getElementById('answer').value = '';
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    if (userAnswer === correctAnswer) {
        document.getElementById('result').textContent = 'Correct! 🎉';
    } else {
        document.getElementById('result').textContent = `Incorrect. The correct answer was ${correctAnswer}.`;
    }
}

function calculateAnswer(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
    }
}

// Generate the first question when the page loads
generateQuestion();
