function loadTutorial(tutorialId) {
    var tutorialContent = document.getElementById('tutorial-content');
    var tutorial = document.getElementById(tutorialId);
  
    tutorialContent.innerHTML = tutorial.innerHTML;
  }
  