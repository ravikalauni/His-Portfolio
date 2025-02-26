// Questions data
const lifeQuestions = [
    { question: "Which district he was born?", answer: "bBaitadi" },
    { question: "Where do Ravi go to College?", answer: "bBrixton College"},
    { question: "What local language he speaks?", answer: "dDotyali" }
];

const mathQuestions = [
    { question: "What will be derivatives of f(x)=(x³−3x)/(x²+1)", answer: "x = 2" },
    { question: "Let A = {1,2,3,4,5}, B={3,4,5,6,7} and C={1,5,7}. Find the number of elements in the set (A∪B)∩(B∪C).", answer: "6" },
    { question: "The ratio of the ages of A and B is 4:5, and the ratio of the ages of B and C is 3:4. If the sum of the ages of A, B, and C is 96 years, what is the ratio of the ages of A and C?", answer: "3:5" }
];

// CCTV Toggle
const cctvBtn = document.getElementById('cctvBtn');
let isCctvOn = true;

cctvBtn.addEventListener('click', () => {
    isCctvOn = !isCctvOn;
    cctvBtn.className = `btn cctv-btn ${isCctvOn ? 'on' : 'off'}`;
    const powerIndicator = cctvBtn.querySelector('.power-indicator');
    powerIndicator.style.backgroundColor = isCctvOn ? '#22c55e' : '#ef4444';
});

// Description Toggle
function toggleDescription() {
    const desc = document.getElementById('description');
    desc.style.display = desc.style.display === 'none' ? 'block' : 'none';
}

// Modal Functions
function showModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function hideModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Daily Diary Verification
function openDailyDiary() {
    showModal('dailyDiaryModal');
}

function handleKnowRavi(knows) {
    if (!knows) {
        hideModal('dailyDiaryModal');
        return;
    }

    const form = document.getElementById('dailyDiaryForm');
    form.innerHTML = `
        <div class="form-group">
            <input type="text" id="raviName" placeholder="Enter Ravi's full name">
            <button class="btn" onclick="checkName()">Submit</button>
        </div>
    `;
}

function checkName() {
    const name = document.getElementById('raviName').value;
    if (name.toLowerCase() === 'ravi prasad kalauni') {
        const form = document.getElementById('dailyDiaryForm');
        form.innerHTML = `
            <div class="form-group">
                <input type="number" id="raviAge" placeholder="Enter Ravi's current age">
                <button class="btn" onclick="checkAge()">Submit</button>
            </div>
        `;
    } else {
        alert('Incorrect name. Please try again.');
    }
}

function checkAge() {
    const age = parseInt(document.getElementById('raviAge').value);
    if (age >= 18 && age <= 22) {
        alert('Congratulation, You can access his diaries!');
        location.href = '../experiences/experience0.html';
    } else {
        alert('Incorrect age. Please try again.');
    }
}

// Life Notes Verification
function openLifeNotes() {
    const questions = document.getElementById('lifeQuestions');
    questions.innerHTML = lifeQuestions
        .map((q, i) => `<div class="question">${q.question}</div>`)
        .join('');
    showModal('lifeNotesModal');
}

function verifyLifeAnswer() {
    const answer = document.getElementById('lifeAnswer').value;
    if (lifeQuestions.some(q => q.answer.toLowerCase() === answer.toLowerCase())) {
        alert('Congratulations!');
        location.href = 'lifenotes.html';
    } else {
        alert('Incorrect answer. Please try again.');
    }
}

// Sacrosanct I Verification
function openSacrosanctI() {
    const questions = document.getElementById('mathQuestions');
    questions.innerHTML = mathQuestions
        .map((q, i) => `<div class="question">${q.question}</div>`)
        .join('');
    showModal('sacrosanctIModal');
}

function verifyMathAnswer() {
    const answer = document.getElementById('mathAnswer').value;
    if (mathQuestions.some(q => q.answer.toLowerCase() === answer.toLowerCase())) {
        alert('Congratulations! You have unlocked the book!');
        location.href = 'sacrosanct1.html';
    } else {
        alert('Incorrect answer. Please try again.');
    }
}

// Sacrosanct II Verification
function openSacrosanctII() {
    showModal('sacrosanctIIModal');
}

function verifySacrosanctPassword() {
    const password = document.getElementById('sacrosanctPassword').value;
    // In a real application, this would be properly hashed and verified
    if (password === 'demo123') {
        alert('Congratulations! You\'ve unlocked the book!');
        location.href = 'sacrosanct2.html';
    } else {
        alert('Incorrect password. Please try again.');
    }
}

// Privacy Modal
function showPrivacyModal() {
    showModal('privacyModal');
}

function closePrivacyModal() {
    hideModal('privacyModal');
}

// Show Interest Modal
function showInterestModal() {
    showModal('interestModal');
}

function submitInterest() {
    const name = document.getElementById('interestName').value;
    if (name.trim()) {
        alert('Thanks for being honest, you\'ll have to wait for some time to get a response from Ravi.');
        hideModal('interestModal');
    } else {
        alert('Please enter your full name.');
    }
}

// Close modals when clicking outside
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let modal of modals) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
};

// Enhanced tooltip handling
const cctvHelp = document.getElementById('cctvHelp');
const cctvTooltip = document.getElementById('cctvTooltip');

cctvHelp.addEventListener('click', (e) => {
    e.stopPropagation();
    cctvTooltip.classList.toggle('show');

    if(cctvTooltip.classList.contains('show')) {
        // Reset animation
        cctvTooltip.style.animation = 'none';
        cctvTooltip.offsetHeight; // Trigger reflow
        cctvTooltip.style.animation = null;
    }
});

// Close tooltip when clicking outside
document.addEventListener('click', (event) => {
    if (!cctvHelp.contains(event.target) && !cctvTooltip.contains(event.target)) {
        if(cctvTooltip.classList.contains('show')) {
            cctvTooltip.style.opacity = '0';
            cctvTooltip.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                cctvTooltip.classList.remove('show');
                cctvTooltip.style.opacity = '';
                cctvTooltip.style.transform = '';
            }, 300);
        }
    }
});
