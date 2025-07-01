const questions = [
  {
    question: "1. What is 2 + 2 ?",
    option: [2, 5, 4, 8],
    answer: "4",
  },
  {
    question: "2. What is the capital of India?",
    option: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Delhi",
  },
  {
    question: "3. Which language runs in a web browser?",
    option: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript",
  },
  {
    question: "4. Which planet is known as the Red Planet?",
    option: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "5. Who is the founder of Microsoft?",
    option: ["Steve Jobs", "Elon Musk", "Bill Gates", "Mark Zuckerberg"],
    answer: "Bill Gates",
  },
  {
    question: "6. Which gas do plants absorb from the atmosphere?",
    option: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: "Carbon Dioxide",
  },
  {
    question: "7. How many days are there in a leap year?",
    option: ["365", "366", "364", "367"],
    answer: "366",
  },
  {
    question: "8. What does HTML stand for?",
    option: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "Hyperloop Machine Language",
      "None of the above",
    ],
    answer: "HyperText Markup Language",
  },
  {
    question: "9. What is the square root of 144?",
    option: ["10", "11", "12", "13"],
    answer: "12",
  },
  {
    question: "10. Who was the first Prime Minister of India?",
    option: [
      "Mahatma Gandhi",
      "Jawaharlal Nehru",
      "Rajendra Prasad",
      "Subhas Chandra Bose",
    ],
    answer: "Jawaharlal Nehru",
  },
];

let current = 0;
let score = 0;

const questionEl = document.querySelector(".question");
const buttons = document.querySelectorAll(".option-btn");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const resetBtn = document.getElementById("reset");
const counter = document.getElementById("count");

// Load question
function loadquestion() {
  const q = questions[current];
  questionEl.innerText = q.question;
  counter.innerText = `${current + 1} of ${questions.length} questions`;

  buttons.forEach((btn, index) => {
    btn.innerText = q.option[index];
    btn.classList.remove("correct", "wrong");
    btn.disabled = false;

    btn.style.backgroundColor = "#fff";
    btn.style.color = "#222";
    btn.style.cursor = "pointer";
  });

  resultEl.innerText = "";
}

// Handle answer selection
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.innerText;
    const correct = questions[current].answer;

    if (selected === correct) {
      button.classList.add("correct");
      button.style.backgroundColor = "green";
      button.style.color = "white";
      score++;
    } else {
      button.classList.add("wrong");
      button.style.backgroundColor = "red";
      button.style.color = "white";

      buttons.forEach((btn) => {
        if (btn.innerText === correct) {
          btn.classList.add("correct");
          btn.style.backgroundColor = "green";
          btn.style.color = "white";
        }
      });
    }

    buttons.forEach((b) => (b.disabled = true));
  });
});

// Next question
nextBtn.addEventListener("click", () => {
  current++;
  if (current < questions.length) {
    loadquestion();
  } else {
    questionEl.innerText = "";
    resultEl.style.display = "block";
    resultEl.innerText = `Your Score: ${score} / ${questions.length}`;
    counter.innerText = "";

    buttons.forEach((button) => {
      button.style.display = "none";
    });
    nextBtn.style.display = "none";
    resetBtn.style.display = "inline-block";
  }
});

// Reset game
resetBtn.addEventListener("click", () => {
  current = 0;
  score = 0;

  buttons.forEach((button) => {
    button.style.display = "block";
  });

  nextBtn.style.display = "inline-block";
  resetBtn.style.display = "none";
  resultEl.style.display = "none";
  loadquestion();
});

loadquestion();
