const QUESTIONS = [
  {
    "question": "What does CPU stand for?",
    "options": [
      "A. Central Processing Unit",
      "B. Computer Personal Unit",
      "C. Central Program Utility",
      "D. Control Processing User"
    ],
    "answer": "A"
  },
  {
    "question": "Which device is used to enter text into a computer?",
    "options": [
      "A. Monitor",
      "B. Keyboard",
      "C. Speaker",
      "D. Projector"
    ],
    "answer": "B"
  },
  {
    "question": "Which of these is an output device?",
    "options": [
      "A. Mouse",
      "B. Scanner",
      "C. Monitor",
      "D. Keyboard"
    ],
    "answer": "C"
  },
  {
    "question": "What does RAM stand for?",
    "options": [
      "A. Read Access Memory",
      "B. Random Access Memory",
      "C. Run Active Machine",
      "D. Rapid Application Module"
    ],
    "answer": "B"
  },
  {
    "question": "Which component is commonly called the brain of a computer?",
    "options": [
      "A. Hard drive",
      "B. Monitor",
      "C. CPU",
      "D. Keyboard"
    ],
    "answer": "C"
  },
  {
    "question": "Which of these is an operating system?",
    "options": [
      "A. Windows",
      "B. Microsoft Word",
      "C. Google Chrome",
      "D. Adobe Photoshop"
    ],
    "answer": "A"
  },
  {
    "question": "Which device is mainly used to point and click?",
    "options": [
      "A. Printer",
      "B. Mouse",
      "C. Speaker",
      "D. Microphone"
    ],
    "answer": "B"
  },
  {
    "question": "What does ROM stand for?",
    "options": [
      "A. Read Only Memory",
      "B. Random Output Machine",
      "C. Run Only Module",
      "D. Read Open Memory"
    ],
    "answer": "A"
  },
  {
    "question": "Which of these is a storage device?",
    "options": [
      "A. Monitor",
      "B. SSD",
      "C. Keyboard",
      "D. Microphone"
    ],
    "answer": "B"
  },
  {
    "question": "Which software is used to browse websites?",
    "options": [
      "A. Calculator",
      "B. Notepad",
      "C. Web browser",
      "D. File manager"
    ],
    "answer": "C"
  },
  {
    "question": "What does URL stand for?",
    "options": [
      "A. Uniform Resource Locator",
      "B. Universal Reading Link",
      "C. Unified Record Language",
      "D. User Reference Location"
    ],
    "answer": "A"
  },
  {
    "question": "Which of these is an example of application software?",
    "options": [
      "A. Windows kernel",
      "B. Microsoft Excel",
      "C. Device firmware",
      "D. BIOS"
    ],
    "answer": "B"
  },
  {
    "question": "What is the main function of a computer network?",
    "options": [
      "A. To connect devices and share resources",
      "B. To increase monitor brightness",
      "C. To clean the keyboard",
      "D. To replace the CPU"
    ],
    "answer": "A"
  },
  {
    "question": "What does LAN stand for?",
    "options": [
      "A. Large Access Network",
      "B. Local Area Network",
      "C. Linked Application Node",
      "D. Long Area Number"
    ],
    "answer": "B"
  },
  {
    "question": "Which device connects different networks and directs traffic between them?",
    "options": [
      "A. Keyboard",
      "B. Scanner",
      "C. Router",
      "D. Webcam"
    ],
    "answer": "C"
  },
  {
    "question": "Which number system uses only 0 and 1?",
    "options": [
      "A. Decimal",
      "B. Binary",
      "C. Octal",
      "D. Roman"
    ],
    "answer": "B"
  },
  {
    "question": "How many bits make up one byte in the standard modern definition?",
    "options": [
      "A. 2",
      "B. 4",
      "C. 8",
      "D. 16"
    ],
    "answer": "C"
  },
  {
    "question": "Which of these is an example of malware?",
    "options": [
      "A. Spreadsheet",
      "B. Computer virus",
      "C. Web browser",
      "D. Text editor"
    ],
    "answer": "B"
  },
  {
    "question": "What is the purpose of antivirus software?",
    "options": [
      "A. To design websites",
      "B. To detect and help remove malicious software",
      "C. To increase screen size",
      "D. To create computer hardware"
    ],
    "answer": "B"
  },
  {
    "question": "Which key is commonly used to create a space between words?",
    "options": [
      "A. Shift",
      "B. Tab",
      "C. Spacebar",
      "D. Escape"
    ],
    "answer": "C"
  },
  {
    "question": "What does HTML stand for?",
    "options": [
      "A. HyperText Markup Language",
      "B. HighText Machine Language",
      "C. Hyper Transfer Management Link",
      "D. Home Tool Markup Language"
    ],
    "answer": "A"
  },
  {
    "question": "Which programming language are we using to build this CBT?",
    "options": [
      "A. Java",
      "B. Python",
      "C. HTML",
      "D. SQL"
    ],
    "answer": "B"
  },
  {
    "question": "What is cloud computing?",
    "options": [
      "A. Repairing a computer fan",
      "B. Using computing services over a network, often the internet",
      "C. Typing without a keyboard",
      "D. Printing documents wirelessly only"
    ],
    "answer": "B"
  },
  {
    "question": "Which protocol is commonly used to access secure websites?",
    "options": [
      "A. HTTPS",
      "B. FTP only",
      "C. SMTP only",
      "D. USB"
    ],
    "answer": "A"
  },
  {
    "question": "Which component temporarily stores data currently being used by programs?",
    "options": [
      "A. RAM",
      "B. Printer",
      "C. Monitor",
      "D. Power cable"
    ],
    "answer": "A"
  }
];

const welcome = document.getElementById("welcome");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");
const startBtn = document.getElementById("startBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const optionsBox = document.getElementById("options");
const questionText = document.getElementById("questionText");
const currentNumber = document.getElementById("currentNumber");
const totalNumber = document.getElementById("totalNumber");
const progressBar = document.getElementById("progressBar");
const questionLabel = document.getElementById("questionLabel");
const answeredLabel = document.getElementById("answeredLabel");

let selectedQuestions = [];
let answers = {};
let currentIndex = 0;

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function startQuiz() {
  selectedQuestions = shuffle(QUESTIONS).slice(0, Math.min(20, QUESTIONS.length));
  answers = {};
  currentIndex = 0;
  welcome.classList.add("hidden");
  result.classList.add("hidden");
  quiz.classList.remove("hidden");
  totalNumber.textContent = String(selectedQuestions.length).padStart(2, "0");
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  const item = selectedQuestions[currentIndex];
  const number = currentIndex + 1;
  currentNumber.textContent = String(number).padStart(2, "0");
  questionLabel.textContent = `QUESTION ${String(number).padStart(2, "0")}`;
  answeredLabel.textContent = `${Object.keys(answers).length} OF ${selectedQuestions.length} ANSWERED`;
  progressBar.style.width = `${(number / selectedQuestions.length) * 100}%`;
  questionText.textContent = item.question;
  optionsBox.innerHTML = "";

  item.options.forEach((option) => {
    const value = option.trim().charAt(0).toUpperCase();
    const label = option.replace(/^[A-D]\.\s*/, "");
    const button = document.createElement("button");
    button.type = "button";
    button.className = `option ${answers[currentIndex] === value ? "selected" : ""}`;
    button.setAttribute("aria-pressed", answers[currentIndex] === value ? "true" : "false");

    const key = document.createElement("span");
    key.className = "option-key";
    key.textContent = value;
    const text = document.createElement("span");
    text.className = "option-text";
    text.textContent = label;
    button.append(key, text);
    button.addEventListener("click", () => {
      answers[currentIndex] = value;
      renderQuestion();
    });
    optionsBox.appendChild(button);
  });

  prevBtn.disabled = currentIndex === 0;
  const lastQuestion = currentIndex === selectedQuestions.length - 1;
  nextBtn.classList.toggle("hidden", lastQuestion);
  submitBtn.classList.toggle("hidden", !lastQuestion);
}

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
});
nextBtn.addEventListener("click", () => {
  if (currentIndex < selectedQuestions.length - 1) {
    currentIndex++;
    renderQuestion();
  }
});
submitBtn.addEventListener("click", () => {
  const unanswered = selectedQuestions.length - Object.keys(answers).length;
  if (unanswered > 0 && !window.confirm(`You have ${unanswered} unanswered question(s). Submit anyway?`)) return;
  showResults();
});
startBtn.addEventListener("click", startQuiz);
document.getElementById("retryBtn").addEventListener("click", startQuiz);

function showResults() {
  const score = selectedQuestions.reduce((total, item, index) => total + (answers[index] === item.answer ? 1 : 0), 0);
  const percent = Math.round((score / selectedQuestions.length) * 100);
  quiz.classList.add("hidden");
  result.classList.remove("hidden");
  document.getElementById("scoreValue").textContent = score;
  document.querySelector(".score-line span").textContent = `/ ${selectedQuestions.length}`;
  document.getElementById("scoreBar").style.width = `${percent}%`;

  let title = "Keep practising.";
  let message = "Every attempt is a chance to learn. Review your answers and try again.";
  if (percent >= 80) {
    title = "Excellent performance!";
    message = "Strong work. You have a good grasp of these computer studies topics.";
  } else if (percent >= 50) {
    title = "Good effort!";
    message = "You're making progress. Review the questions you missed and have another go.";
  }
  document.getElementById("resultTitle").textContent = title;
  document.getElementById("resultMessage").textContent = `You scored ${percent}%. ${message}`;
  renderReview();
  document.getElementById("review").classList.add("hidden");
  document.getElementById("reviewBtn").textContent = "Review answers";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderReview() {
  const review = document.getElementById("review");
  review.innerHTML = "";
  selectedQuestions.forEach((item, index) => {
    const userAnswer = answers[index];
    const correctOption = item.options.find((option) => option.trim().charAt(0).toUpperCase() === item.answer);
    const chosenOption = item.options.find((option) => option.trim().charAt(0).toUpperCase() === userAnswer);
    const row = document.createElement("div");
    row.className = "review-item";
    const title = document.createElement("strong");
    title.textContent = `${index + 1}. ${item.question}`;
    const yours = document.createElement("p");
    yours.className = userAnswer === item.answer ? "correct" : "wrong";
    yours.textContent = `Your answer: ${chosenOption ? chosenOption : "Not answered"}`;
    const correct = document.createElement("p");
    correct.className = "correct";
    correct.textContent = `Correct answer: ${correctOption}`;
    row.append(title, yours, correct);
    review.appendChild(row);
  });
}
document.getElementById("reviewBtn").addEventListener("click", () => {
  const review = document.getElementById("review");
  const isHidden = review.classList.toggle("hidden");
  document.getElementById("reviewBtn").textContent = isHidden ? "Review answers" : "Hide review";
});
