document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Clear all previous error messages
    document
      .querySelectorAll(".error-message")
      .forEach((el) => (el.style.display = "none"));

   
    const email = document.getElementById("useremail").value.trim();
    const password = document.getElementById("password").value.trim();
    const phone=document.getElementById('phno').value.trim();
    const  name=document.getElementById('username');
    

    
    let valid = true;

    if (!name) {
        valid = false;
        document.getElementById("nameError").style.display = "block";
    }

    if (!validateEmail(email)) {
        valid = false;
        document.getElementById("emailError").style.display = "block";
    }

    if (!validatePassword(password)) {
        valid = false;
        document.getElementById("passwordError").style.display = "block";
    }

    if (!validatePhone(phone)) {
        valid = false;
        document.getElementById("phoneError").style.display = "block";
    }

    if (valid) {

        handleBeforeRedirect();
        alert("Register Form submitted successfully!");
        //this.submit();
          // Redirect to the login page after a short delay (optional)
          setTimeout(function () {
              window.location.href = 'login.html';  // Redirect to login page after successful registration
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

    function validatePhone(phone) {
        const re = /^\+?[1-9]\d{1,14}$/;
        return re.test(phone);
    }

    function handleBeforeRedirect() {
        // Your custom logic before redirecting (e.g., logging, or triggering events)
        console.log("Handling pre-redirect actions...");
        // You can trigger other actions here like logging or showing messages
    }




    // function validateRegister(){
    //     const email = document.getElementById('useremail').value.trim();  
    //     const password = document.getElementById('password').value.trim();
    //     const phone=document.getElementById('phno').value.trim();

    //     if (!validateEmail(email)) {
    //         return "Invalid email address.";
    //     }
    //     if (!validatePassword(password)) {
    //         return "Password does not meet the required criteria.";
    //     }
    //     if (!validatePhone(phone)) {
    //         return "Phone number does not match the required criteria.";
    //     }
    
    //     // Simulate successful registration process and redirect
    //      alert("Registration successful!");
    //      window.location.href = 'login.html';  // Redirect to login page after successful registration
    //      return false;  // Prevent form submission
    // }