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

const cart = [];

const addItem = () => {
  if (item.value === "") {
    // alert('Haba now, fill in the inputs joor')
    errorMsg.style.display = "block";
  } else {
    errorMsg.style.display = "none";
    cart.push(item.value);
    document.getElementById("item").value = "";
    console.log(cart);
    if (cart.length >= 1) {
      btnDelete.style.display = "block";
      deletelast.style.display = "block";
      deleteAll.style.display = "block";
      deletefirst.style.display = "block";
    }
    displayItem();
  }
};

const deletefirstItem = () => {
  cart.shift();
  displayItem();
};
const deleteLastItem = () => {
  cart.pop();
  displayItem();
};

const deleteAllItem = () => {
  cart.splice(0);
  displayItem();
};

const deleteAnyItem = () => {
  if (cart.length >= 1) {
    const userValue = Number(prompt("Enter the number you want to delete"));
    // console.log(userValue);
    if (userValue < 1) {
      console.log("Numbering starts from 1");
    } else if (userValue <= cart.length) {
      cart.splice(userValue - 1, 1);
      displayItem();
      if (cart.length < 1) {
        btnDelete.style.display = "none";
      }
    } else {
      alert("Invalid number entered");
    }
    // cart.splice(index,1)
  }
};

const displayItem = () => {
  show.innerHTML = "";
  // for(let i=0;i < cart.length;i++) {
  //     show.innerHTML += `
  //         <p>${i+1}. ${cart[i]}</p>
  //     `
  // }
  cart.map((data, index) => {
    console.log(data);
    show.innerHTML += `
            <p>${index + 1}. ${data}</p>
        `;
  });
};

// let allStudents = ['Mary', 'Sultan', 'Ayanfe', 'Taiwo']
// allStudents.splice(1,3)
// console.log(allStudents);

// displaying username in the dashboard

// const userwelcome = document.getElementById("userwelcome");

if (localStorage.person) {
  const userdataafterlogin = JSON.parse(localStorage.getItem("person"));
  userwelcome.innerHTML = `Welcome ${userdataafterlogin.userName} !! `;
  //   console.log(userdataafterlogin);
} else {
  hidebody.innerHTML = `<h4 class="my-3 text-center">You are not signed in, redirecting you to sign in...</h4>`;
  setTimeout(() => {
    window.location.href = "/signup/signup.html";
  }, 2000);
}

const signOut = () => {
  localStorage.removeItem("person");
  toast("Logging you out, bye", "red", "white");
  setTimeout(() => {
    window.location.href = "index.html";
  }, 2000);
};
