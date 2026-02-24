const sports = [
  {
    name: "Football",
    description: "Book football grounds, matches & coaching",
    image: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6"
  },
  {
    name: "Cricket",
    description: "Cricket nets, turf & tournaments",
    image: "https://images.unsplash.com/photo-1593766827228-8737b4534aa6"
  },
  {
    name: "Badminton",
    description: "Indoor badminton courts & coaching",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea"
  },
  {
    name: "Basketball",
    description: "Outdoor & indoor basketball courts",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b"
  },
  {
    name: "Tennis",
    description: "Professional tennis courts",
    image: "https://images.unsplash.com/photo-1542144582-1ba00456b5e3"
  },
  {
    name: "Gym & Fitness",
    description: "Gym memberships & personal training",
    image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1"
  },
  {
    name: "Swimming",
    description: "Swimming pool access & coaching",
    image: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e"
  }
];

const grid = document.getElementById("sportsGrid");

sports.forEach((sport) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${sport.image}" alt="${sport.name}">
    <h3>${sport.name}</h3>
    <p>${sport.description}</p>
    <button onclick="bookSport('${sport.name}')">Book Now</button>
  `;

  grid.appendChild(card);
});

function bookSport(name) {
  alert(`🏆 Booking started for ${name}!`);
  // Future: connect with Rust backend API
}
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const otpForm = document.getElementById("otpForm");
const forgotForm = document.getElementById("forgotForm");
const title = document.getElementById("formTitle");

function hideAll() {
  loginForm.classList.add("hidden");
  signupForm.classList.add("hidden");
  otpForm.classList.add("hidden");
  forgotForm.classList.add("hidden");
}

function showLogin() {
  hideAll();
  loginForm.classList.remove("hidden");
  title.textContent = "Login";
}

function showSignup() {
  hideAll();
  signupForm.classList.remove("hidden");
  title.textContent = "Sign Up";
}

function showOTP() {
  hideAll();
  otpForm.classList.remove("hidden");
  title.textContent = "Verify OTP";
}

function showForgot() {
  hideAll();
  forgotForm.classList.remove("hidden");
  title.textContent = "Forgot Password";
}

/* LOGIN */
loginForm.addEventListener("submit", e => {
  e.preventDefault();
  localStorage.setItem("loggedIn", "true");
  alert("Login successful!");
});

/* SIGNUP → OTP */
signupForm.addEventListener("submit", e => {
  e.preventDefault();
  alert("OTP sent to your email");
  showOTP();
});

/* OTP VERIFY */
otpForm.addEventListener("submit", e => {
  e.preventDefault();
  alert("OTP verified successfully!");
  showLogin();
});

/* FORGOT PASSWORD */
forgotForm.addEventListener("submit", e => {
  e.preventDefault();
  alert("Password reset link sent to your email");
  showLogin();
});

fetch("http://127.0.0.1:5000/send-otp", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email })
})
.then(res => res.json())
.then(data => alert(data.message));

