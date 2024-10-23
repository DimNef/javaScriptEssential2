
const submitButton = document.getElementById('submitBtn');
    submitButton.onclick = submitFeedback;

function submitFeedback() {

    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;

    alert('Thank you for your feedback');

    document.getElementById('name').innerHTML = username;
    document.getElementById('age').innerHTML = age;
    document.getElementById('email').innerHTML = email;
    document.getElementById('job').innerHTML = job;
    document.getElementById('designation').innerHTML = designation;
    document.getElementById('productType').innerHTML = productType;
    document.getElementById('feedbackText').innerHTML = feedback;


  //  document.getElementById('userInfo').style.display = 'block';
    document.getElementById('userInfo').style.display = 'block';
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitFeedback();
    }
  });