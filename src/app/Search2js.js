
  function nextStep(stepId) {
    document.querySelector('#' + stepId).classList.add('active');
    document.querySelector('#step1').classList.remove('active');
  }

  function prevStep(stepId) {
    document.querySelector('#' + stepId).classList.add('active');
    document.querySelector('#step3').classList.remove('active');
  }
