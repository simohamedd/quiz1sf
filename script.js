const quizData = [
  {
    question: "Northern Trail Outfitters is using one profile for all of its marketing users, providing read-only access to the Campaign object. A few marketing users now require comprehensive edit access on Campaigns. How should an administrator fulfill this request?",
    options: ["Permission sets", "Organization-wide defaults", "Marketing user checkbox", "Field-level security"],
    answer: "A",
    type: "single"
  },
  {
    question: "The support manager at Cloud Kicks wants to respond to customers as quickly as possible. They have requested that the response include the top five troubleshooting tips that could help solve the customer's issue. What should the administrator suggest to meet these requirements?",
    options: ["Auto-Response Rules", "Email Alerts", "Knowledge Articles", "Assignment Rules"],
    answer: "A",
    type: "single"
  },
  {
    question: "Sales and Customer Care at Ursa Major Solar need to see different fields on the Case related list from the Account record. Sales users want to see Case created date and status while Customer Care would like to see owner, status, and contact. What should the administrator use to achieve this?",
    options: ["Related Lookup Filters", "Compact Layout Editor", "Page Layout editor", "Search Layout Editor"],
    answer: "C",
    type: "single"
  },
  {
    question: "Northern Trail Outfitters has requested that when the Referral Date field is updated on the custom object Referral Source, the parent object Referral also needs to be updated. Which automation solution should an administrator use to meet this request?",
    options: ["Lightning Web Component", "Approval Process", "Workflow Field Update", "Process Builder"],
    answer: "D",
    type: "single"
  },
  {
    question: "Which two solutions could an administrator find on the AppExchange to enhance their organization? Choose 2 answers",
    options: ["Communities", "Consultants", "Components", "Customers"],
    answer: "BC",
    type: "multiple",
    count: 2
  },
  {
    question: "When users log in to Salesforce via the user interface, which two settings does the system check for authentication? Choose 2 answers",
    options: ["The user's Two-Factor Authentication for API Logins permission", "The role IP address restrictions", "The user's profile login hours restrictions", "The user's Two-Factor Authentication for User Interface Logins permission"],
    answer: "CD",
    type: "multiple",
    count: 2
  },
  {
    question: "AW Computing has six sales teams in a region. These teams always consist of the same account manager, engineer, and assistant. What should the administrator configure to make it easier for teams to collaborate with the same customer?",
    options: ["Enable and configure standard opportunity teams with splits.", "Enable account teams and show the users how to set up a default account team.", "Create a queue for each team and assign account ownership to the queue.", "Propose the users manually share all their accounts with their teammates."],
    answer: "B",
    type: "single"
  },
  {
    question: "Cloud Kicks has decided to delete a custom field. What will happen to the data in the field when it is deleted?",
    options: ["The data in the field is stored for 20 days.", "The data is permanently deleted.", "The data associated with the field is required.", "The data is restorable from the recycle bin"],
    answer: "B",
    type: "single"
  },
  {
    question: "Executives at Cloud Kicks have reported that their dashboards are showing inaccurate data. The administrator has discovered been changing the source reports. Which two actions should the administrator take to preserve the integrity of the source reports? Choose 2 answers",
    options: ["Create a new report folder with viewer access.", "Move the dashboard to the user's private folder.", "Move the dashboard reports to the view-only folder.", "Change the dashboard to be a dynamic dashboard."],
    answer: "AC",
    type: "multiple",
    count: 2
  },
  {
    question: "At universal Containers, users would like to be able to share Salesforce records with other members of their team, while collaborating around general topics as well. Which are two considerations for enabling this functionality? Choose 2 answers",
    options: ["Collaboration groups are created automatically for every department.", "Object layouts should be configured to include the groups related list.", "The Add Record action must be configured in the group publisher.", "An administrator needs to create a group to enable record sharing."],
    answer: "CD",
    type: "multiple",
    count: 2
  },
  {
    question: "Cloud Kicks needs to be able to show different picklist values for sales and marketing users. Which two options will meet this requirement? Choose 2 answers",
    options: ["One page layout, two record types, one picklist", "Two page layouts, one record type, two picklists", "Two permission sets, one record type, one picklist", "One record type, two profiles, one picklist"],
    answer: "AB",
    type: "multiple",
    count: 2
  },
  {
    question: "An administrator has assigned a permission set group with the two-factor authentication for User Interface Logins permissions and the two-factor authentication for API Logins permission to a group of users. Which two prompts will happen when one of the users attempts to log in to Data Loader? Choose 2 answers",
    options: ["Users need to download and install an authenticator app on their mobile device.", "Users need to enter a verification code from email or SMS, whichever has higher priority.", "Users need to connect an authenticator app to their Salesforce account.", "Users need to get a security token from a trusted network using Reset My Security Token."],
    answer: "AC",
    type: "multiple",
    count: 2
  },
  {
    question: "Cloud Kicks (CK) is partnering with a used shoe store and second-hand bicycle emporium. CK has an automated business process it wants to run once a week to count the number of open cases related to an account. How should the administrator recommend automating this business process?",
    options: ["Create a workflow rule with an outbound message.", "Set up a scheduled process in Process Builder.", "Configure a scheduled flow in Flow Builder.", "Use a process to update the account when it is edited."],
    answer: "C",
    type: "single"
  },
  {
    question: "Cloud Kicks wants a report to categorize accounts into small, medium, and large based on the dollar value found in the Contract Value Field. What feature should an administrator use to meet this request?",
    options: ["Detail Column", "Bucket Column", "Group Rows", "Filter Logic"],
    answer: "B",
    type: "single"
  },
  {
    question: "Universal Containers requires that when an Opportunity is closed won, all other open opportunities on the same account must be marked as closed lost. Which automation solution should an administrator use to implement this request?",
    options: ["Quick Action", "Workflow Rule", "Flow Builder", "Outbound Message"],
    answer: "C",
    type: "single"
  },
  {
    question: "Which two capabilities are considerations when marking a field as required in Object Manager? Choose 2 answers",
    options: ["The field is not required to save records via the API on that object", "The field is universally required to save a record on that object.", "The field is added to every page layout on that object.", "The field is optional when saving records via web-to-lead and web-to-case"],
    answer: "BC",
    type: "multiple",
    count: 2
  },
  {
    question: "The administrator at Cloud Kicks has created an approval process for time off requests. Which two automated actions are available to be added as part of the approval process? Choose 2 answers",
    options: ["Field Update", "Chatter Post", "Auto launched Flow", "Email Alert"],
    answer: "AD",
    type: "multiple",
    count: 2
  },
  {
    question: "An administrator at Universal Containers has been asked to prevent users from accessing Salesforce from outside of their network. What are two considerations for this configuration? Choose 2 answers",
    options: ["IP address restrictions are set on the profile or globally for the org.", "Users can change their password to avoid login IP restrictions.", "Enforce Login IP Ranges on Every Request must be selected to enforce IP restrictions.", "Single sign-on will allow users to log in from anywhere."],
    answer: "AC",
    type: "multiple",
    count: 2
  },
  {
    question: "What are three characteristics of a master-detail relationship? Choose 3 answers",
    options: ["The master object can be a standard or custom object.", "Permissions for the detail record are set independently of the master.", "Each object can have up to five master-detail relationships.", "Roll-up summaries are supported in master-detail relationships.", "The owner field on the detail records is the owner of the master record"],
    answer: "ADE",
    type: "multiple",
    count: 3
  },
  {
    question: "The sales manager at Cloud Kicks wants to set up a business process where opportunity discounts over 30% need to be approved by the VP of sales. Any discounts above 10% need to be approved by the user's manager. The administrator has been tasked with creating an approval process. Which are two considerations the administrator needs to review before setting up this approval process? Choose 2 answers",
    options: ["Create a custom Discount field on the opportunity to capture the discount amount", "Populate the Manager standard field on the sales users' User Detail page.", "Configure two separate approval processes", "Allow the submitter choose the approver manually."],
    answer: "AB",
    type: "multiple",
    count: 2
  }
];

let currentQuestion = 0;
let score = 0;
let userAnswers = [];

function loadQuestion() {
  const q = quizData[currentQuestion];
  document.getElementById("question-text").innerText = q.question;
  
  // Show instruction for multiple choice questions
  const instruction = document.getElementById("question-instruction");
  if (q.type === "multiple") {
    instruction.innerHTML = <strong>Select ${q.count} answers</strong>;
    instruction.style.display = "block";
  } else {
    instruction.style.display = "none";
  }

  const form = document.getElementById("options-form");
  form.innerHTML = "";

  const inputType = q.type === "multiple" ? "checkbox" : "radio";

  q.options.forEach((option, i) => {
    const label = document.createElement("label");
    label.className = "option";
    label.innerHTML = <input type="${inputType}" name="answer" value="${String.fromCharCode(65 + i)}"> <span class="option-letter">${String.fromCharCode(65 + i)}.</span> ${option};
    
    // Add click handler for visual feedback
    label.addEventListener("click", function() {
      setTimeout(() => updateOptionStyles(), 10);
    });
    
    form.appendChild(label);
  });

  document.getElementById("current").innerText = currentQuestion + 1;
  document.getElementById("total").innerText = quizData.length;
  
  // Reset button state
  document.querySelector('.btn').disabled = false;
  document.querySelector('.btn').innerText = currentQuestion === quizData.length - 1 ? "Finish Quiz" : "Next";
}

function updateOptionStyles() {
  const labels = document.querySelectorAll("#options-form label");
  labels.forEach(label => {
    const input = label.querySelector("input");
    if (input.checked) {
      label.classList.add("selected");
    } else {
      label.classList.remove("selected");
    }
  });
}

function nextQuestion() {
  const q = quizData[currentQuestion];
  const selected = document.querySelectorAll('input[name="answer"]:checked');
  
  if (selected.length === 0) {
    alert("Please select an option!");
    return;
  }
  
  if (q.type === "multiple" && selected.length !== q.count) {
    alert(Please select exactly ${q.count} answers!);
    return;
  }

  // Collect user answers
  let userAnswer = "";
  selected.forEach(input => {
    userAnswer += input.value;
  });
  
  // Store the user's answer
  userAnswers.push({
    questionIndex: currentQuestion,
    userAnswer: userAnswer,
    correctAnswer: q.answer,
    question: q.question,
    options: q.options,
    type: q.type
  });

  // Visual feedback
  const labels = document.querySelectorAll("#options-form label");
  const correctAnswers = q.answer.split('');
  const userAnswerArray = userAnswer.split('');
  
  labels.forEach(label => {
    const input = label.querySelector("input");
    const letter = input.value;
    
    // Reset classes
    label.classList.remove("correct", "incorrect", "correct-not-selected");
    
    if (correctAnswers.includes(letter)) {
      if (userAnswerArray.includes(letter)) {
        label.classList.add("correct");
      } else {
        label.classList.add("correct-not-selected");
      }
    } else if (userAnswerArray.includes(letter)) {
      label.classList.add("incorrect");
    }
    
    input.disabled = true;
  });

  // Check if answer is correct
  if (userAnswer.split('').sort().join('') === q.answer.split('').sort().join('')) {
    score++;
  }

  // Disable the button temporarily
  document.querySelector('.btn').disabled = true;

  if (currentQuestion < quizData.length - 1) {
    setTimeout(() => {
      currentQuestion++;
      loadQuestion();
    }, 2000);
  } else {
    setTimeout(showResults, 2000);
  }
}

function showResults() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("results").classList.remove("hidden");
  
  const percentage = Math.round((score / quizData.length) * 100);
  document.getElementById("score").innerText = score;
  document.getElementById("percentage").innerText = percentage;
  document.getElementById("correct-count").innerText = score;
  document.getElementById("incorrect-count").innerText = quizData.length - score;

  const detailedResults = document.getElementById("detailed-results");
  detailedResults.innerHTML = "";

  userAnswers.forEach((answer, index) => {
    const div = document.createElement("div");
    const isCorrect = answer.userAnswer.split('').sort().join('') === answer.correctAnswer.split('').sort().join('');
    
    div.className = question-result ${isCorrect ? 'correct' : 'incorrect'};
    
    let resultHTML = `
      <h4>Question ${index + 1}: ${isCorrect ? '✓ Correct' : '✗ Incorrect'}</h4>
      <p><strong>Question:</strong> ${answer.question}</p>
    `;
    
    if (!isCorrect) {
      resultHTML += `
        <div class="answer-comparison">
          <p class="user-answer">Your Answer: ${formatAnswer(answer.userAnswer, answer.options)}</p>
          <p class="correct-answer">Correct Answer: ${formatAnswer(answer.correctAnswer, answer.options)}</p>
        </div>
      `;
    } else {
      resultHTML += `
        <div class="answer-comparison">
          <p class="correct-answer">Your Answer: ${formatAnswer(answer.userAnswer, answer.options)} ✓</p>
        </div>
      `;
    }
    
    // Show all options with indicators
    resultHTML += '<div class="answer-options"><strong>All Options:</strong><br>';
    answer.options.forEach((option, i) => {
      const letter = String.fromCharCode(65 + i);
      const isCorrect = answer.correctAnswer.includes(letter);
      const wasSelected = answer.userAnswer.includes(letter);
      
      let optionClass = '';
      let indicator = '';
      
      if (isCorrect && wasSelected) {
        optionClass = 'correct-option';
        indicator = ' ✓ (Correct - You selected this)';
      } else if (isCorrect && !wasSelected) {
        optionClass = 'correct-option';
        indicator = ' ✓ (Correct - You should have selected this)';
      } else if (!isCorrect && wasSelected) {
        optionClass = 'selected-option';
        indicator = ' ✗ (You selected this incorrectly)';
      }
      
      resultHTML += <div class="${optionClass}"><span class="option-letter">${letter}.</span> ${option}${indicator}</div>;
    });
    resultHTML += '</div>';
    
    div.innerHTML = resultHTML;
    detailedResults.appendChild(div);
  });
}

function formatAnswer(answerString, options) {
  return answerString.split('').map(letter => {
    const index = letter.charCodeAt(0) - 65;
    return ${letter}. ${options[index]};
  }).join(', ');
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  userAnswers = [];
  
  document.getElementById("results").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  
  loadQuestion();
}

// Initialize quiz when page loads
window.onload = loadQuestion;