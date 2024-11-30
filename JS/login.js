// Tạo Admin gốc
const rootAdmin = {
  taiKhoan: "admin",
  matKhau: "123456",
};
let isAdmin = 0; // false
let saiMK_TK = 0;
localStorage.setItem("isAdmin", isAdmin);
let indexFrame = 1;
function chuyenTrang() {
  window.location.assign("../HTML/quanLi.html");
}
// Hàm tạo animation
function animation() {
  const Frame = document.querySelector(".animationFrame");
  if (indexFrame > 3) {
    indexFrame = 1;
  }
  if (indexFrame <= 3) {
    Frame.style.background = `url(../image/capy${indexFrame}.png)`;
    Frame.style.backgroundSize = "cover";
    indexFrame += 1;
  }
}
// Kiểm tra tài khoản
function checkAccount(taiKhoan, matKhau) {
  let loginFalse = true;
  const thongBao = document.querySelector("#thong-bao");
  const aniCapy = document.querySelector(".thongBaoChuyenTrang");
  const listAD = localStorage.getItem("listAdmin");
  if (listAD) {
    let layListAD = JSON.parse(localStorage.getItem("listAdmin"));
    for (let ele of layListAD) {
      if (taiKhoan === ele.taiKhoan && matKhau == ele.matKhau) {
        isAdmin = 1;
        loginFalse = false;
        localStorage.setItem("isAdmin", isAdmin);
        const timeLogin = new Date();
        localStorage.setItem("timeLogin", JSON.stringify(timeLogin));
        thongBao.textContent = "Đăng nhập thành công";
        thongBao.style.color = "green";
        aniCapy.style.display = "block";
        setInterval(animation, 100);
        setTimeout(chuyenTrang, 3000);
      }
    }
  }
  if (taiKhoan === rootAdmin.taiKhoan && matKhau === rootAdmin.matKhau) {
    isAdmin = 1;
    loginFalse = false;
    localStorage.setItem("isAdmin", isAdmin);
    const timeLogin = new Date();
    localStorage.setItem("timeLogin", JSON.stringify(timeLogin));
    thongBao.textContent = "Đăng nhập thành công";
    thongBao.style.color = "green";
    aniCapy.style.display = "block";
    setInterval(animation, 100);
    setTimeout(chuyenTrang, 3000);
  }
  if (loginFalse) {
    saiMK_TK += 1;
    thongBao.textContent = `Đăng nhập không thành công (${saiMK_TK})`;
    thongBao.style.color = "red";
  }
}
const dangNhap = document.querySelector("#dang-nhap");
dangNhap.addEventListener("click", function () {
  const taiKhoan = document.querySelector("#input-tk");
  const matKhau = document.querySelector("#input-mk");
  checkAccount(taiKhoan.value, matKhau.value);
  taiKhoan.value = "";
  matKhau.value = "";
});
// quay lại
const backTrangChu = document.querySelector(".Back");
backTrangChu.addEventListener("click", function () {
  window.history.back();
});
