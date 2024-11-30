// nút đăng xuất
let isAdmin = Boolean(parseInt(localStorage.getItem("isAdmin")));
let login = document.querySelector(".login");

console.log(isAdmin);
function logQL() {
  window.location.assign("./HTML/quanLi.html");
}
function loginPage() {
  window.location.assign("./HTML/login.html");
}
function checkTimeLogin() {
  let currentTime = new Date();
  let lastTimeLogin = new Date(JSON.parse(localStorage.getItem("timeLogin")));
  let thoiGian = currentTime - lastTimeLogin;
  if (thoiGian >= 10800000) {
    // 10800000 ba tiếng, hai phút 120000
    isAdmin = 0;
  } else {
    isAdmin = 1;
  }
  localStorage.setItem("isAdmin", isAdmin);
}
if (isAdmin) {
  login.textContent = "Admin";
  login.style.color = "white";
  login.addEventListener("click", logQL);
  checkTimeLogin();
} else {
  login.textContent = "Login";
  login.style.color = "white";
  login.addEventListener("click", loginPage);
}
