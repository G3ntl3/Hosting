const toast = (text, backgroundcolor, textColor) => {
  Toastify({
    text: text,
    duration: 1700,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: backgroundcolor,
      color: textColor,
    },
    onClick: function () {}, // Callback after click
  }).showToast();
};

var savedData = JSON.parse(localStorage.getItem("savedata")) || [];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/;

let isUserExist;
// const userwelcome = document.getElementById("userwelcome");

const logIn = () => {
    // console.log(savedData.fullName)

  login.innerHTML = `
<section class="dots-container">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</section>


`;

  isUserExist = savedData.find(
    (data) =>
      data.Password == loginPassword.value && data.Email == loginEmail.value
  );
  // console.log(isUserExist);
  // send to localStorage as person after user logs in
  localStorage.person = JSON.stringify(isUserExist);

  let registered = savedData.find(
    (registered) => registered.Email == loginEmail.value
  );

  if (loginEmail.value == "" || loginPassword.value == "") {
    setTimeout(() => {
      login.innerHTML = "Log in";
      toast("Please complete the form", "red", "white");
    }, 1000);
  } else if (!registered) {
    toast("Account does not exist, proceed to sign up", "red", "white");
    setTimeout(() => {
      login.innerHTML = "Log in";
    window.location.href = "/signup/signup.html";
    }, 2000)
      
      ;
  } else if (!emailRegex.test(loginEmail.value)) {
    toast("Please enter a valid email address", "red", "white");
    login.innerHTML = "Log in";
  } else if (!passwordRegex.test(loginPassword.value)) {
    toast(
      "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character",
      "red",
      "white"
    );
    login.innerHTML = "Log in";
  } else if (isUserExist) {
    toast("Log in successful", "green", "white");
    setTimeout(() => {
      window.location.href = "../temu.html";
      // console.log(savedData.fullName);
    }, 1000);

  } else {
    // var    usersuccessful= JSON.parse(localStorage.setItem('usersuccess',))
  }
};
