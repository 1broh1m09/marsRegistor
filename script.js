const inputId = document.querySelector(".put1");
const inputPass = document.querySelector(".put2");
const btn = document.querySelector(".accept");
const eye = document.querySelector('.eye')

function checkInputs() {
    if (inputId.value.trim() !== "" && inputPass.value.trim() !== "") {
        btn.style.backgroundColor = "#FF4500";
    } else {
        btn.style.backgroundColor = "#F69E86";
    }
}

inputId.addEventListener("input", checkInputs);
inputPass.addEventListener("input", checkInputs);

btn.addEventListener("click", () => {
    if (inputId.value === "Ibrohim" && inputPass.value === "2009") {

        const userData = {
            ism: "Ibrohim",
            coin: 542,
            hp: 1000,
            guruh: "NF-2200"
        };
        localStorage.setItem("userdata", JSON.stringify(userData));


        renderUserPage(userData);
    } else {
        alert("Id yoki Password xato");
    }
});

window.addEventListener("load", () => {
    const saved = localStorage.getItem("userdata");
    if (saved) {
        const userData = JSON.parse(saved);
        renderUserPage(userData);
    }
});

function renderUserPage(userData) {
    document.body.innerHTML = `
    <button id="homeBtn" style="
      position: absolute; 
      top: 20px; 
      left: 20px; 
      padding: 10px 20px; 
      font-size: 18px; 
      background-color: #FF4500; 
      color: white; 
      border: none; 
      border-radius: 10px;
      cursor: pointer;
    ">Home Page</button>

    <div style="text-align:center; margin-top:200px; font-size:24px; font-weight:600">
      <p>Ism: ${userData.ism}</p>
      <p>Coin: ${userData.coin}</p>
      <p>HP: ${userData.hp}</p>
      <p>Guruh: ${userData.guruh}</p>
    </div>
  `;


    document.getElementById("homeBtn").addEventListener("click", () => {
        localStorage.removeItem("userdata");
        location.reload();
    });
}

eye.addEventListener("click", () => {
    if (inputPass.type === "password") {
        inputPass.type = "text";
    } else {
        inputPass.type = "password";
    }
});
