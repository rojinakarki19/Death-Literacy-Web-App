
$(document).ready(function () {
    var currentQuestionIndex = 0;
    var totalSections = 6; // Total sections (6 domains)
    var currentSectionIndex = 0;
    var answers = [];
    var averageScores={};
    var overallScore=0;
    var feedback = '';
    var questions = [
      {
        title: "🗣️ Talking-Support",
        subtitle:
          "This reflects your grace in having conversations around death, dying, and grief.",
        scale: "(1 = Not at all able, 5 = Very able)",
        questions: [
          "Talking about death, dying or grief to a close friend",
          "Talking about death, dying or grieving with a child",
          "Talking to a grieving person about their loss",
          "Talking to a health professional about getting support for a dying person where they live",
        ],
      },
      {
        title: "👐 Providing Hands-On Care",
        subtitle:
          "This indicates how prepared you feel to provide direct care to someone nearing end-of-life.",
        scale: "(1 = Not at all able, 5 = Very able)",
        questions: [
          "Feed or help a person to eat",
          "Wash a person",
          "Lifting a person or helping them move",
          "Administer injections",
        ],
      },
      {
        title: "🌱 Experiential Knowledge",
        subtitle:
          "Your life experiences appear to have significantly contributed to your emotional preparedness and understanding.",
        scale: "(1 = Do not agree at all, 5 = Strongly agree)",
        questions: [
          "Made me more emotionally prepared to support others with death, dying and bereavement",
          "Made me think about what is important and not important in life",
          "Developed my wisdom and understanding",
          "Made me more compassionate toward myself",
          "Made me better prepared to face similar challenges in the future",
        ],
      },
      {
        title: "📘 Factual Knowledge",
        subtitle:
          "You show strong knowledge of legal, medical, and procedural aspects related to dying and death.",
        scale: "(1 = Do not agree at all, 5 = Strongly agree)",
        questions: [
          "I know the rules and regulations when a person dies at home",
          "I know what documents are needed when planning for death",
          "I know enough about the healthcare system to find the support that a dying person needs",
          "I know enough to make decisions about funeral services and options",
          "I know how to access palliative care in my area",
          "I know enough about how illnesses progress to make decisions about medical treatments at end of life",
          "I know about the ways that cemetery staff can be of help around funerals",
        ],
      },
      {
        title: "🌏 Community Knowledge",
        subtitle:
          "You have some awareness of community resources, though there may be areas for growth or exploration.",
        scale: "(1 = Strongly disagree, 5 = Strongly agree)",
        questions: [
          "To get support in the area where I live (e.g. from clubs, associations or volunteer groups)",
          "To get help with providing day-to-day care for a person at the end of life",
          "To get equipment that is required for care",
          "To get support that is culturally appropriate for a person",
          "To get emotional support for myself",
        ],
      },
      {
        title: "🤝 Community Support",
        subtitle:
          "You believe your community offers support for those affected by death, dying, and grief.",
        scale: "(1 = Do not agree at all, 5 = Strongly agree)",
        questions: [
          "People with life threatening illnesses",
          "People who are nearing the end of their lives",
          "People who are caring for a dying person",
          "People who are grieving",
        ],
      },
    ];
  
    // Load the first section
    function loadSection() {
      var currentSection = questions[currentSectionIndex];
      var questionHtml = `<h3 class="section-title">${currentSection.title}</h3>
      <p class="mb-1 fw-bold">${currentSection.subtitle}</p>
      <p class="small fw-bold mb-3 text-end">${currentSection.scale}</p>`;
  
      currentSection.questions.forEach(function (question, idx) {
        questionHtml += `
                <div class="mb-4">
                  <label>${question}</label>
                  <div class="rating-container">
                    <label class="form-check-label" for="q${currentSectionIndex}_${idx}_1">1</label>
                    <input type="radio" name="q${currentSectionIndex}_${idx}" id="q${currentSectionIndex}_${idx}_1" value="1" class="form-check-input">
                    <label class="form-check-label" for="q${currentSectionIndex}_${idx}_2">2</label>
                    <input type="radio" name="q${currentSectionIndex}_${idx}" id="q${currentSectionIndex}_${idx}_2" value="2" class="form-check-input">
                    <label class="form-check-label" for="q${currentSectionIndex}_${idx}_3">3</label>
                    <input type="radio" name="q${currentSectionIndex}_${idx}" id="q${currentSectionIndex}_${idx}_3" value="3" class="form-check-input">
                    <label class="form-check-label" for="q${currentSectionIndex}_${idx}_4">4</label>
                    <input type="radio" name="q${currentSectionIndex}_${idx}" id="q${currentSectionIndex}_${idx}_4" value="4" class="form-check-input">
                    <label class="form-check-label" for="q${currentSectionIndex}_${idx}_5">5</label>
                    <input type="radio" name="q${currentSectionIndex}_${idx}" id="q${currentSectionIndex}_${idx}_5" value="5" class="form-check-input">
                  </div>
                </div>
              `;
      });
  
      $("#questionsContainer").html(questionHtml);
  
      // Update progress bar
      var progress = ((currentSectionIndex + 1) / totalSections) * 100;
      $("#progressBar").css("width", progress + "%");
      $("#progressBar").attr("aria-valuenow", progress);
  
      // Show submit button when last section is displayed
      if (currentSectionIndex === totalSections - 1) {
        $("#nextBtn").hide();
        $("#submitBtn").show();
      }
    }
  
    // Handle next question
    $("#nextBtn").on("click", function () {
      // Collect answers from the current section
      var scores = [];
      $(`input[name^="q${currentSectionIndex}"]:checked`).each(function () {
        scores.push(Number($(this).val()));
      });
      answers.push(scores);
  
      currentSectionIndex++;
      if (currentSectionIndex < totalSections) {
        loadSection();
      }
      $("html, body").animate({ scrollTop: 0 }, "smooth");
    });
  
  
    // Handle form submission
    $('#quizForm').on('submit', function(e) {
          e.preventDefault();
          var scores = [];
  
    // Collect answers from all sections
    $('input[type="radio"]:checked').each(function() {
          scores.push(Number($(this).val()));
    });
    
    
    // Calculate average scores for each domain
  averageScores = {
      "Talking-Support": scores.slice(0, 4).reduce((a, b) => a + b, 0) / 4,
      "Providing Hands-On Care": scores.slice(0, 4).reduce((a, b) => a + b, 0) / 4,
      "Experiential Knowledge": scores.slice(0, 5).reduce((a, b) => a + b, 0) / 5,
      "Factual Knowledge": scores.slice(0, 7).reduce((a, b) => a + b, 0) / 7,
      "Community Knowledge": scores.slice(0, 5).reduce((a, b) => a + b, 0) / 5,
      "Community Support": scores.slice(0, 4).reduce((a, b) => a + b, 0) / 4
  };
  
  // Calculate overall Score
  overallScore = Object.values(averageScores).reduce((sum, score) => sum + score, 0) / Object.values(averageScores).length;
  
 // Send the scores to the server
fetch('/save-scores', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    overallScore: overallScore,
    averageScores: averageScores
  })
})
.then(response => response.json())
.then(data => {
  console.log(data.message);  // Handle the response
})
.catch(error => {
  console.error('Error:', error);
});






  // Insert the overall score into the HTML
  $(`#overallScore`).text(overallScore.toFixed(2));

  
     // Display results
  var resultHtml = '<h4>Results Summary</h4>';
          resultHtml+=`<div><b>Overall Score:</b> ${(overallScore).toFixed(2)}</div>`;
          for (const [section, score] of Object.entries(averageScores)) {
          resultHtml += `
               <div class="result-item">
               <b>${section}:</b> ${score.toFixed(2)} 
               </div>`;
              }
    // Update the results section
  
          $('#resultsSummary').html(resultHtml);
          $('#results').show();
          $('#quizForm').hide();
    });
  
    // This code should go after the form submission logic
    $("#submitBtn").click(function () {
        // Determine feedback based on the overall score
      if (overallScore >= 4.5) {
        feedback = "Excellent! You have a great understanding and preparedness.";
      }else if (overallScore >= 3.5) {
        feedback = "Good job! You have a solid understanding but there may be some areas for improvement.";
      } else if (overallScore >= 2.5) {
        feedback = "You have an average level of understanding. Consider focusing on areas where you can improve.";
      } else {
        feedback = "It seems like there are several areas where you can improve your understanding and preparedness.";
       }

// Insert the feedback message into the HTML
    $('#overallScorecontainer .feedback').text(feedback);
  
  
      // Display results with detailed explanations
      var resultHtml = "";
      for (const [section, score] of Object.entries(averageScores)) {
        var description = "";
  
        switch (section) {
          case "🗣️ Talking-Support":
            description =
              "This reflects your grace in having conversations around death, dying, and grief.";
            break;
          case "👐 Providing Hands-On Care":
            description =
              "This indicates how prepared you feel to provide direct care to someone nearing end-of-life.";
            break;
          case "🌱 Experiential Knowledge":
            description =
              "Your life experiences appear to have significantly contributed to your emotional preparedness and understanding.";
            break;
          case "📘 Factual Knowledge":
            description =
              "You show strong knowledge of legal, medical, and procedural aspects related to dying and death.";
            break;
          case "🌏 Community Knowledge":
            description =
              "You have some awareness of community resources, though there may be areas for growth or exploration.";
            break;
          case "🤝 Community Support":
            description =
              "You believe your community offers support for those affected by death, dying, and grief.";
            break;
        }
  
        resultHtml += `
          <div class="result-item">
            <b>${section}:</b> ${score.toFixed(2)} 
            <p>${description}</p>
          </div>
        `;
      }



// Add the overall score
                    
// Insert the overall score into the HTML
                    
           
           // Update the results section
           $("#resultsSummary").html(resultHtml);
 
           // Show the results section, hide the quiz form
           $("#results").show();
           $("#quizForm").hide();
 
           $("html, body").animate(
             {
               scrollTop: $("#results").offset().top,
             },
             "slow"
           );
         });
         // Initial load
         loadSection();
    });
 