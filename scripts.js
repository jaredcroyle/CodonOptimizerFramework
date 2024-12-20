/* GENERAL */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  background-color: #003262; /* Berkeley Blue */
  color: white; /* Text contrast */
}

html {
  scroll-behavior: smooth;
}

p {
  color: #f5f5f5; /* Slightly off-white for softer readability */
}

h1, h2, h3, h4, h5, h6 {
  color: white;
}

/* TRANSITION */
a, .btn {
  transition: all 300ms ease;
}

/* DESKTOP NAV */
nav, .nav-links {
  display: flex;
}

nav {
  justify-content: space-around;
  align-items: center;
  height: 17vh;
  background-color: #00274c; /* Slightly darker Berkeley blue for contrast */
}

.nav-links {
  gap: 2rem;
  list-style: none;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  color: #ffb81c; /* Berkeley gold for emphasis */
  text-decoration: underline;
  text-underline-offset: 1rem;
  text-decoration-color: #f5f5f5;
}

.logo {
  font-size: 2.5em;
  font-weight: bold;
}

.logo:hover {
  cursor: default;
}

.fa-linkedin-in:hover, .fa-github:hover {
  color: #ffb81c;
  cursor: pointer;
}

#btn-cv:link {
  color: white;
  text-decoration: none;
}

/* SECTIONS */
section {
  padding-top: 4vh;
  margin: 0 10rem;
  min-height: fit-content;
}

.section-container {
  display: flex;
}

.section__text {
  align-self: center;
  text-align: center;
}

.section__text p {
  font-weight: 600;
}

.title {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #ffb81c; /* Highlight section titles in gold */
}

/* ICONS */
.icon {
  cursor: pointer;
  height: 2rem;
}

/* BUTTONS */
.btn-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.btn {
  font-weight: 600;
  padding: 1rem;
  width: 8rem;
  border-radius: 2rem;
  text-align: center;
}

.btn-color-1, .btn-color-2 {
  border: white 0.1rem solid;
}

.btn-color-1:hover, .btn-color-2:hover {
  cursor: pointer;
  background: #ffb81c;
  color: #003262; /* Contrast text for buttons */
}

.btn-color-2 {
  background: none;
}

/* ABOUT SECTION */
.about-containers {
  gap: 2rem;
  margin: 2rem 0;
}

.details-container {
  padding: 1.5rem;
  flex: 1;
  background: #00274c; /* Slightly darker blue */
  border-radius: 2rem;
  border: white 0.1rem solid;
  text-align: center;
  color: #f5f5f5;
}

/* CONTACT */
.contact-info-upper-container {
  background: #00274c;
  border: white 0.1rem solid;
  border-radius: 2rem;
  padding: 1rem;
  color: #f5f5f5;
}

.contact-info-container p {
  font-size: larger;
}

/* FOOTER SECTION */
footer {
  background: #00274c;
  color: #f5f5f5;
  padding: 2rem 0;
}

footer p {
  text-align: center;
}

textarea {
    width: 100%; /* Makes the textarea span the full width of its container */
    max-width: 800px; /* Limits the maximum width for larger screens */
    border-radius: 0.5rem; /* Adds rounded corners for aesthetic appeal */
    padding: 1rem; /* Adds some padding inside the textarea for better readability */
    font-family: "Poppins", sans-serif; /* Matches the font with the rest of the site */
    font-size: 1rem; /* Ensures text is readable */
    border: 1px solid #f5f5f5; /* Adds a subtle border to align with the site's design */
    background-color: #00274c; /* Matches the slightly darker blue background */
    color: white; /* Ensures text contrast */
  }
  
/* Centering the input section */
#input {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

/* Styling the form */
.input-form {
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.input-form input[type="email"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    color: #333;
}

.input-form input[type="email"]:focus {
    outline: none;
    border-color: #147efb;
    box-shadow: 0 0 5px rgba(20, 126, 251, 0.3);
}

/* Center the dropdown and button below the textarea */
.form-bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
}

/* Adjusting the select dropdown */
#target-organism {
    width: 100%;
    max-width: 300px;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid #f5f5f5;
    background-color: #00274c;
    color: white;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
}

/* Ensure the button is centered */
.btn-color-1 {
    width: auto;
    padding: 0.5rem 2rem;
}

#about {
    margin-bottom: 4rem; /* Adjust the bottom margin to add more space */
  }

#header {
    margin: 0 10rem; /* Same as the sections */
    padding-top: 4vh; /* Optional: Add some space at the top if needed */
}
