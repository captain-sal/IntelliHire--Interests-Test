// JavaScript code for questions and logic
const questions = [
  {
    category: "Realistic",
    question:
      "Would you enjoy a job that requires you to operate machinery or equipment?",
    options: [
      { text: "Dislike", value: 0 },
      { text: "Neutral", value: 5 },
      { text: "Enjoy", value: 10 },
    ],
  },
  {
    category: "Artistic",
    question:
      "Do you enjoy exploring unconventional or unique ways of thinking?",
    options: [
      { text: "Dislike", value: 0 },
      { text: "Neutral", value: 5 },
      { text: "Enjoy", value: 10 },
    ],
  },
  {
    category: "Investigative",
    question:
      "Do you find satisfaction in solving complex puzzles and riddles?",
    options: [
      { text: "Dislike", value: 0 },
      { text: "Neutral", value: 5 },
      { text: "Enjoy", value: 10 },
    ],
  },
  {
    category: "Social",
    question:
      "Do you enjoy volunteering or participating in community activities?",
    options: [
      { text: "Dislike", value: 0 },
      { text: "Neutral", value: 5 },
      { text: "Enjoy", value: 10 },
    ],
  },
  {
    category: "Enterprising",
    question: "Are you comfortable taking calculated risks in your decisions?",
    options: [
      { text: "Dislike", value: 0 },
      { text: "Neutral", value: 5 },
      { text: "Enjoy", value: 10 },
    ],
  },
  {
    category: "Conventional",
    question:
      "Are you comfortable working in structured environments with clear expectations?",
    options: [
      { text: "Dislike", value: 0 },
      { text: "Neutral", value: 5 },
      { text: "Enjoy", value: 10 },
    ],
  },
  {
    category: "Realistic",
    question: "Do you prefer practical tasks over theoretical ones?",
    options: [
      { text: "Dislike", value: 0 },
      { text: "Neutral", value: 5 },
      { text: "Enjoy", value: 10 },
    ],
  },
  {
    category: "Artistic",
    question: "Do you find beauty in everyday things?",
    options: [
      { text: "Dislike", value: 0 },
      { text: "Neutral", value: 5 },
      { text: "Enjoy", value: 10 },
    ],
  },
  {
    category: "Investigative",
    question:
      "Would you be interested in a career that involves conducting experiments?",
    options: [
      { text: "Dislike", value: 0 },
      { text: "Neutral", value: 5 },
      { text: "Enjoy", value: 10 },
    ],
  },
  {
    category: "Social",
    question:
      "Do you often find yourself offering advice and support to friends and family?",
    options: [
      { text: "Dislike", value: 0 },
      { text: "Neutral", value: 5 },
      { text: "Enjoy", value: 10 },
    ],
  },
  {
    category: "Enterprising",
    question:
      "Do you find satisfaction in networking and building relationships with others?",
    options: [
      { text: "Dislike", value: 0 },
      { text: "Neutral", value: 5 },
      { text: "Enjoy", value: 10 },
    ],
  },
  {
    category: "Conventional",
    question:
      "Do you find joy in maintaining order and ensuring everything is in its proper place?",
    options: [
      { text: "Dislike", value: 0 },
      { text: "Neutral", value: 5 },
      { text: "Enjoy", value: 10 },
    ],
  },
  {
    category: "Realistic",
    question:
      "Do you find satisfaction in completing tasks that have immediate, visible outcomes?",
    options: [
      { text: "Dislike", value: 0 },
      { text: "Neutral", value: 5 },
      { text: "Enjoy", value: 10 },
    ],
  },
  {
    category: "Artistic",
    question:
      "Are you drawn to careers that allow you to challenge traditional norms?",
    options: [
      { text: "Dislike", value: 0 },
      { text: "Neutral", value: 5 },
      { text: "Enjoy", value: 10 },
    ],
  },
  // Add more questions in respective categories
  {
    category: "Investigative",
    question:
      "Do you feel satisfaction when you successfully solve a challenging problem?",
    options: [
      { text: "Dislike", value: 0 },
      { text: "Neutral", value: 5 },
      { text: "Enjoy", value: 10 },
    ],
  },
  {
    category: "Social",
    question:
      "Do you find joy in facilitating group discussions and workshops?",
    options: [
      { text: "Dislike", value: 0 },
      { text: "Neutral", value: 5 },
      { text: "Enjoy", value: 10 },
    ],
  },
  {
    category: "Enterprising",
    question:
      "Do you enjoy organizing events and projects to bring people together?",
    options: [
      { text: "Dislike", value: 0 },
      { text: "Neutral", value: 5 },
      { text: "Enjoy", value: 10 },
    ],
  },
  {
    category: "Conventional",
    question:
      "Do you find satisfaction in following rules and established protocols?",
    options: [
      { text: "Dislike", value: 0 },
      { text: "Neutral", value: 5 },
      { text: "Enjoy", value: 10 },
    ],
  },
];

// Initialize variables and functions
let currentQuestion = 0;
const questionSection = document.getElementById("questions");
const resultsSection = document.getElementById("results");
const resultText = document.getElementById("result-text");
const submitButton = document.getElementById("submit-btn");
const careerOptionsSection = document.getElementById("career-options");
const careerList = document.getElementById("career-list");

// Object to track points for each category
const categoryPoints = {
  Realistic: 0,
  Artistic: 0,
  Investigative: 0,
  Social: 0,
  Enterprising: 0,
  Conventional: 0,
  // Initialize points for other categories here...
};

// Function to display the current question and button
function displayQuestion() {
  const questionData = questions[currentQuestion];
  const questionHTML = `
        <h3>${currentQuestion + 1}. ${questionData.question}</h3>
        ${questionData.options
          .map(
            (option) => `
            <input type="radio" name="q${currentQuestion}" value="${option.value}"> ${option.text}
        `
          )
          .join("<br>")}
        <br><br>
    `;

  questionSection.innerHTML = questionHTML;

  // Check if it's the last question to determine the button text
  if (currentQuestion === questions.length - 1) {
    submitButton.textContent = "Submit";
  } else {
    submitButton.textContent = "Next";
  }
}

// Event listener for the "Submit/Next" button
submitButton.addEventListener("click", () => {
  const selectedOption = document.querySelector(
    `input[name="q${currentQuestion}"]:checked`
  );

  if (selectedOption) {
    // Add points to the corresponding category
    const questionData = questions[currentQuestion];
    categoryPoints[questionData.category] += parseInt(selectedOption.value, 10);

    // Move to the next question or display results
    currentQuestion++;
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      // All questions answered, display results and career options
      displayResults();
      displayCareerOptions();

      // Hide the submit button on the result page
      submitButton.style.display = "none";
    }
  }
});

// Function to display results
function displayResults() {
  resultsSection.style.display = "block";
  questionSection.style.display = "none";

  // Calculate and display total points for each category
  const categoryResultsHTML = Object.keys(categoryPoints)
    .map(
      (category) => `
        <p>${category}: ${categoryPoints[category]} points</p>
    `
    )
    .join("");

  resultText.innerHTML = `<h2>Results:</h2>${categoryResultsHTML}`;
}

// Function to display career options based on top 2 highest points categories
function displayCareerOptions() {
  careerOptionsSection.style.display = "block";

  // Calculate the top 2 highest scoring categories
  const sortedCategories = Object.keys(categoryPoints).sort(
    (a, b) => categoryPoints[b] - categoryPoints[a]
  );
  const topCategories = sortedCategories.slice(0, 2);

  // Define career options based on categories
  const careers = {
    Realistic: [
      {
        title: "Carpenter",
        description:
          "Craftsmen who work with wood to create structures and furniture.",
      },
      {
        title: "Electrician",
        description:
          "Professionals who install and maintain electrical systems.",
      },
      // Add more career options...
    ],
    Artistic: [
      {
        title: "Graphic Designer",
        description: "Create visual concepts using computer software.",
      },
      {
        title: "Illustrator",
        description:
          "Produce illustrations for books, magazines, and digital media.",
      },
      // Add more career options...
    ],
    Investigative: [
      { title: "Dentist", description: "Doctor of teeth" },
      {
        title: "Forensic Scientist",
        description: "Analyze physical evidence in criminal investigations.",
      },
      // Add more career options...
    ],
    Social: [
      { title: "Lawyer", description: "Law related issues" },
      {
        title: "Social Worker",
        description: "Help individuals and families cope with life challenges.",
      },
      // Add more career options...
    ],
    Enterprising: [
      { title: "Banker", description: "Loan provider" },
      {
        title: "Entrepreneur",
        description: "Start and manage your own business ventures.",
      },
      // Add more career options...
    ],
    Conventional: [
      {
        title: "Accountant",
        description:
          "Manage financial records and transactions for individuals or businesses.",
      },
      { title: "Teacher", description: "The one who teaches" },
      // Add more career options...
    ],
    // Define careers for other categories...
  };

  // Display career options for the top categories
  const careerOptionsHTML = topCategories
    .map((category) => {
      const categoryCareers = careers[category];
      const careerHTML = categoryCareers
        .map(
          (career, index) => `
            <li key="${index}">
                <strong>${career.title}</strong>
                <p>${career.description}</p>
            </li>
        `
        )
        .join("");
      return `
            <h3>${category} Careers:</h3>
            <ul>${careerHTML}</ul>
        `;
    })
    .join("");

  careerList.innerHTML = careerOptionsHTML;
}

// Display the first question when the page loads
displayQuestion();
