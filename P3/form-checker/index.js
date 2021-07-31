const form = document.querySelector("form");

const inputs = document.querySelectorAll(
  "input[type='text'], input[type='password']"
);

const progressBar = document.getElementById("progress-bar");
let pseudo, email, password, confirmPass;

const errorDisplay = (tag, message, valid) => {
  const container = document.querySelector("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container > span");

  if (!valid) {
    container.classList.add("error");
    span.textContent = message;
  } else {
    container.classList.remove("error");
    span.textContent = message;
  }
};

const pseudoChecker = (value) => {
  const tag = "pseudo";

  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDisplay(tag, "Le pseudo doit faire entre 3 et 20 caractères");
    pseudo = null;
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplay(tag, "Le pseudo ne doit pas contenir de caratères spéciaux");
    pseudo = null;
  } else {
    errorDisplay(tag, "", true);
    pseudo = value;
  }
};

const emailChecker = (value) => {
  const tag = "email";

  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    errorDisplay(tag, "Le mail n'est pas valide");
    email = null;
  } else {
    errorDisplay(tag, "", true);
    email = value;
  }
};

const passwordChecker = (value) => {
  progressBar.classList = "";

  const tag = "password";
  if (
    !value.match(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
    )
  ) {
    errorDisplay(
      tag,
      "Minimum de 8 caractère, une majuscule, un chiffre et un caractère spécial"
    );
    progressBar.classList.add("progressRed");
    password = null;
  } else if (value.length < 12) {
    progressBar.classList.add("progressBlue");
    errorDisplay(tag, "", true);
    password = value;
  } else {
    progressBar.classList.add("progressGreen");
    errorDisplay(tag, "", true);
    password = value;
  }

  if (confirmPass) confirmChecker(confirmPass);
};

const confirmChecker = (value) => {
  tag = "confirm";

  if (password !== value) {
    errorDisplay(tag, "Les mots de passe ne correspondent pas");
    confirmPass = false;
  } else {
    errorDisplay(tag, "", true);
    confirmPass = true;
  }
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "pseudo":
        pseudoChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "password":
        passwordChecker(e.target.value);
        break;
      case "confirm":
        confirmChecker(e.target.value);
        break;
      default:
        null;
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (pseudo && email && password && confirmPass) {
    const data = {
      pseudo,
      email,
      password,
    };
    console.log(data);

    inputs.forEach((input) => (input.value = ""));
    progressBar.classList = "";

    pseudo = null;
    email = null;
    password = null;
    confirmPass = false;
    alert("Inscription validée !");
  } else {
    alert("Veuillez remplir correctement les champs");
  }
});
