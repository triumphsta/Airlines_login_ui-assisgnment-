document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const togglePasswordBtn = document.getElementById("togglePassword");
  const googleBtn = document.getElementById("googleSignIn");
  const githubBtn = document.getElementById("githubSignIn");

  // Toggle Password Visibility
  // (button has a fixed width in CSS so this no longer shifts the input)
  togglePasswordBtn.addEventListener("click", () => {
    const isPassword = passwordInput.getAttribute("type") === "password";
    passwordInput.setAttribute("type", isPassword ? "text" : "password");
    togglePasswordBtn.textContent = isPassword ? "Hide" : "Show";
  });

  // Client-Side Validation
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    emailError.textContent = "";
    passwordError.textContent = "";

    if (!emailInput.value.trim()) {
      emailError.textContent = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    }

    if (!passwordInput.value) {
      passwordError.textContent = "Password is required.";
      isValid = false;
    } else if (passwordInput.value.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters.";
      isValid = false;
    }

    if (isValid) {
      alert("Welcome Back to sky Airline.");
      loginForm.reset();
    }
  });

  googleBtn.addEventListener("click", () => {
    alert("Redirecting to Google .");
  });

});
