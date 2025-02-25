document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Clear all previous error messages
    document
      .querySelectorAll(".error-message")
      .forEach((el) => (el.style.display = "none"));

   
    const email = document.getElementById("useremail").value.trim();
    const password = document.getElementById("password").value.trim();
    
    let valid = true;

    if (!validateEmail(email)) {
        valid = false;
        document.getElementById("emailError").style.display = "block";
    }
      if (!validatePassword(password)) {
        valid = false;
        document.getElementById("passwordError").style.display = "block";
      }
      if (valid) {
        handleBeforeRedirect();
        alert(" Login Form submitted successfully!");
          // Redirect to the login page after a short delay (optional)
          setTimeout(function () {
              window.location.href = 'home.html';  // Redirect to home page after successful registration
          }, 2000); // Delay for 2 seconds, you can adjust the delay time as needed
        
      }
    });
  
      function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
      }
      function validatePassword(password) {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return re.test(password);
      }

      function handleBeforeRedirect() {
        // Your custom logic before redirecting (e.g., logging, or triggering events)
        console.log("Handling pre-redirect actions...");
        // You can trigger other actions here like logging or showing messages
    }

      // function validateLogin(){
      //   const email = document.getElementById('useremail').value;  
      //   const password = document.getElementById('password').value;
      //   if (!validateEmail(email)) {
      //       return "Invalid email address.";
      //   }
      //   if (!validatePassword(password)) {
      //       return "Password does not meet the required criteria.";
      //   }
      //   return "Login successful.";
      // }