const toast = (text, backgroundcolor, textColor) => {
  Toastify({
    text: text,
    duration: 2000,
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

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/;

let detailsArray = JSON.parse(localStorage.getItem("savedata")) || [];

const signUp = () => {
    submit.innerHTML = `<section class="dots-container">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</section>`;
  let detailsobj = {
    fullName: fullName.value,
    userName: userName.value,
    Email: email.value,
    Password: password.value,
  };

  if (
    fullName.value == "" ||
    userName.value == "" ||
    email.value == "" ||
    password.value == ""
  ) {
      toast("Please complete the form", "red", "white");
      
    loading();

  } else if (!emailRegex.test(email.value)) {
      toast("Please enter a valid email address", "red", "white");
    loading();
      
  } else if (!passwordRegex.test(password.value)) {
    toast(
      "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character",
      "red",
      "white"
      );
    loading();
      
  } else {
    let foundAcc = detailsArray.find(
      (eachuser) => eachuser.Email == email.value
    );
    // console.log(foundAcc);

      if (foundAcc == undefined) {
    loading();
        
      detailsArray.push(detailsobj);
      localStorage.setItem("savedata", JSON.stringify(detailsArray));
      toast("Sign up successful", "green", "white");
      // fullName.value = '';
      // userName.value = '';
      // email.value = '';
      // password.value = '';

      setTimeout(() => {
        window.location.href = "../login/login.html";
      }, 2000);
    } else {
      setTimeout(() => {
        window.location.href = "../login/login.html";
      }, 1000);
          toast("Account already exist, proceed to log in", "grey", "white");
    loading();
          
    }
  }
};
const loading = () => {
    setTimeout(() => {
        
        submit.innerHTML = `<span>Create Account</span>`;
    }, 1000);
};
// loading();
// console.log(detailsArray.find('O8fcjhkdbvijh2.  '));
//
