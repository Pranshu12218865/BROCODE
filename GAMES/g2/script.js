let currentPage = 1;
const totalPages = 5;

document.querySelectorAll('.draggable').forEach(draggable => {
    draggable.addEventListener('dragstart', e => {
        e.dataTransfer.setData('text/plain', e.target.id);
    });
});

document.querySelectorAll('.blank').forEach(blank => {
    blank.addEventListener('dragover', e => {
        e.preventDefault();
    });

    blank.addEventListener('drop', e => {
        e.preventDefault();
        const data = e.dataTransfer.getData('text/plain');
        const draggedElement = document.getElementById(data);
        if (!blank.textContent) { // Ensure a blank is empty before placing new content
            blank.textContent = draggedElement.textContent;
        }
    });
});

function nextPage(pageNumber) {
    document.getElementById(`page${currentPage}`).style.display = 'none';
    document.getElementById(`page${pageNumber}`).style.display = 'block';
    currentPage = pageNumber;
}

function previousPage(pageNumber) {
    document.getElementById(`page${currentPage}`).style.display = 'none';
    document.getElementById(`page${pageNumber}`).style.display = 'block';
    currentPage = pageNumber;
}

function submitAnswer(pageNumber) {
    const answers = {
        1: {
            blank1: 'to', blank2: 'in', blank3: 'by', blank4: 'through', blank5: 'of',
            blank6: 'up', blank7: 'to', blank8: 'from', blank9: 'with', blank10: 'at',
            blank11: 'on'
        },
        2: {
            blank12: 'but', blank13: 'or', blank14: 'because', blank15: 'so',
            blank16: 'although'
        },
        3: {
            blank17: 'book', blank18: 'toy', blank19: 'picture', blank20: 'story',
            blank21: 'object'
        },
        4: {
            blank22: 'went', blank23: 'had', blank24: 'left', blank25: 'were',
            blank26: 'am_telling', blank27: 'took'
        },
        5: {
            blank28: 'wakes', blank29: 'prepares', blank30: 'eats', blank31: 'goes',
            blank32: 'meets', blank33: 'handles', blank34: 'returns', blank35: 'spends'
        }
    };

    let score = 0;
    Object.keys(answers[pageNumber]).forEach(blankId => {
        const blank = document.getElementById(blankId);
        if (blank.textContent.trim() === answers[pageNumber][blankId]) {
            score++;
            blank.classList.add('correct');
        } else {
            blank.classList.add('incorrect');
        }
    });

    document.getElementById(`score${pageNumber}`).textContent = `Score: ${score}/${Object.keys(answers[pageNumber]).length}`;

    if (pageNumber < totalPages) {
        document.getElementById(`page${pageNumber}`).style.display = 'none';
        document.getElementById(`page${pageNumber + 1}`).style.display = 'block';
        currentPage = pageNumber + 1;
    } else {
        document.getElementById(`page${pageNumber}`).style.display = 'none';
        document.getElementById('evaluation').style.display = 'block';
        showFinalScore();
    }
}

function showFinalScore() {
    let totalScore = 0;
    let totalQuestions = 0;

    for (let i = 1; i <= totalPages; i++) {
        const scoreElement = document.getElementById(`score${i}`);
        if (scoreElement) {
            totalScore += parseInt(scoreElement.textContent.split(': ')[1].split('/')[0], 10);
            totalQuestions += parseInt(scoreElement.textContent.split('/')[1], 10);
        }
    }

    document.getElementById('final-result').textContent = `Your final score: ${totalScore}/${totalQuestions}`;
}

function restart() {
    document.querySelectorAll('.blank').forEach(blank => {
        blank.textContent = '';
        blank.classList.remove('correct', 'incorrect');
    });

    document.getElementById('evaluation').style.display = 'none';
    nextPage(1);
}
