const quizData = [
    {
        question: "What is the largest marine mammal?",
        options: ["Blue Whale", "Shark", "Dolphin", "Sea Lion"],
        correctAnswer: 0,
        explanation: "The Blue Whale is the largest known marine mammal, growing up to 100 feet in length."
    },
    {
        question: "What causes most shipwrecks?",
        options: ["Storms", "Pirates", "Sharks", "Fire"],
        correctAnswer: 0,
        explanation: "Storms are responsible for the majority of shipwrecks due to the violent weather conditions."
    },
    {
        question: "What is the deepest ocean?",
        options: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
        correctAnswer: 3,
        explanation: "The Pacific Ocean holds the Mariana Trench, the deepest part of the world's oceans."
    },
    {
        question: "Where can you find the Great Barrier Reef?",
        options: ["Australia", "Brazil", "South Africa", "India"],
        correctAnswer: 0,
        explanation: "The Great Barrier Reef is located off the coast of Queensland, Australia."
    },
    {
        question: "What is a famous underwater volcano?",
        options: ["Mount Vesuvius", "Kilauea", "Mauna Loa", "Surtsey"],
        correctAnswer: 3,
        explanation: "Surtsey is a volcanic island that emerged off the coast of Iceland in 1963."
    },
    {
        question: "Which animal is known for its deep-sea bioluminescence?",
        options: ["Jellyfish", "Anglerfish", "Shark", "Whale"],
        correctAnswer: 1,
        explanation: "The Anglerfish is known for its bioluminescent lure to attract prey in the deep ocean."
    },
    {
        question: "What is the name of the ship that sank in 1912 after hitting an iceberg?",
        options: ["Titanic", "Lusitania", "Olympic", "Andrea Doria"],
        correctAnswer: 0,
        explanation: "The Titanic sank after hitting an iceberg during its maiden voyage in 1912."
    },
    {
        question: "What is the largest volcano in the world?",
        options: ["Mount Fuji", "Krakatoa", "Mauna Loa", "Mount St. Helens"],
        correctAnswer: 2,
        explanation: "Mauna Loa in Hawaii is the largest active volcano on Earth."
    },
    {
        question: "Which ocean is known for the Bermuda Triangle?",
        options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Southern Ocean"],
        correctAnswer: 0,
        explanation: "The Bermuda Triangle is located in the Atlantic Ocean, infamous for unexplained disappearances."
    },
    {
        question: "Which creature is famous for living inside shipwrecks?",
        options: ["Octopus", "Sharks", "Coral", "Crabs"],
        correctAnswer: 2,
        explanation: "Corals often grow on shipwrecks, creating habitats for marine life."
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let countdown;
const audio = document.getElementById("background-music");

function startQuiz() {
  // Start the music
  audio.play();
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");
    countdownTimer(3); 
}

function countdownTimer(seconds) {
    document.getElementById("quiz-screen").classList.add("hidden");
    countdown = seconds;
    let countdownElement = document.getElementById("countdown");
    countdownElement.innerText = countdown;
    
    let countdownInterval = setInterval(() => {
        countdown--;
        countdownElement.innerText = countdown;
        if (countdown === 0) {
            clearInterval(countdownInterval);
            document.getElementById("quiz-screen").classList.remove("hidden");
            startQuestionTimer(); // Start timer after countdown
            loadQuestion();

        }
    }, 500);
}

function startQuestionTimer() {
    let timeLeft = 30;
    let timerElement = document.getElementById("timer");
    timerElement.innerText = `Time: ${timeLeft}s`;

    timer = setInterval(() => {
        timeLeft--;
        timerElement.innerText = `Time: ${timeLeft}s`;
        if (timeLeft === 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 2000);
}

function loadQuestion() {
    document.getElementById("countdown").classList.add("hidden");
    const currentQuestion = quizData[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;
    document.getElementById("explanation-card").innerText ="";
    const options = document.querySelectorAll(".option-btn");
    currentQuestion.options.forEach((option, index) => {
        options[index].innerText = option;
        options[index].disabled = false;
        options[index].classList.remove("correct", "incorrect");
    });
}

function checkAnswer(index) {
    const currentQuestion = quizData[currentQuestionIndex];
    const options = document.querySelectorAll(".option-btn");

    if (index === currentQuestion.correctAnswer) {
        score++;
        options[index].classList.add("correct");
    } else {
        options[index].classList.add("incorrect");
        document.getElementById("explanation-card").innerText = currentQuestion.explanation;
        const explanationDiv = document.createElement("div");
        explanationDiv.classList.add("explanation-card");
        explanationDiv.innerText = currentQuestion.explanation;
        document.getElementById("explanations").appendChild(explanationDiv);
    
    }
    updateScore();
    currentQuestionIndex++;
    



    if (currentQuestionIndex < quizData.length) {
        setTimeout(loadQuestion, 2000); 
    } else {
        setTimeout(endQuiz, 2000); 
}

function updateScore() {
    document.getElementById("score").innerText = `Score: ${score}/10`;
}
function endQuiz() {
    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("result-screen").classList.remove("hidden");
    document.getElementById("final-score").innerText = `Your Score: ${score}/10`;
    audio.pause();

    let existingButton = document.getElementById("back-to-main");
    if (existingButton) {
        existingButton.remove();
    }

   
    const backButton = document.createElement("button");
    backButton.id = "back-to-main";
    backButton.innerText = "Back to Home";
    backButton.onclick = backToMainSite;
    document.getElementById("result-screen").appendChild(backButton);
}

function backToMainSite() {
    window.location.href = "index.html";
}}





const fish = document.getElementById('fish');

// Follow the cursor
document.addEventListener('mousemove', (event) => {
  const x = event.pageX;
  const y = event.pageY;
  fish.style.left = x + 'px';
  fish.style.top = y + 'px';
});