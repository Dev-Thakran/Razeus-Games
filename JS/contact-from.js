document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.needs-validation');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // stop normal submission

    // check built-in HTML validation
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    // if valid, redirect
    window.location.href = 'form-submitted.html'; // adjust path if needed
  });
});