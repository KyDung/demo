const quanTriTk = document.querySelector(".quanTri-TK");
const quanTriBV = document.querySelector(".quanTri-BV");
const optionQT = document.querySelector(".content");
const btnBack = document.querySelector(".Back");
const optionQTTK = document.querySelector(".Thanh-QLTK");
const btnTaoTK = document.querySelector(".btnTaoTK");
const btnListAD = document.querySelector(".btnListAD");
const danhSachTK = document.querySelector(".danhsachTK");
const arrowIcon = document.querySelector(".arrow-ico");
const soLuongTK = document.querySelector(".soLuongTK");
const childTK = document.querySelector(".childTK");
const btnDoiMK = document.querySelector(".btnDoiMK");
const btnXoaHet = document.querySelector(".btnXoaHet");
const btnXoaTK = document.querySelector(".btnXoaTK");
const optionQTBV = document.querySelector(".Thanh-QLBV");
function checkNewACC(taikhoan, matKhau) {
  if (taikhoan.length > 20 || taikhoan.length < 1) {
    console.log("sai 1");
    return false;
  }
  if (matKhau.length > 20 || matKhau.length < 1) {
    console.log("sai 2");
    return false;
  }
  for (let char of taikhoan) {
    if (char === " ") {
      console.log("sai 3");
      return false;
    }
  }
  for (let char of matKhau) {
    if (char === " ") {
      console.log("sai 4");
      return false;
    }
  }
  return true;
}
quanTriTk.addEventListener("click", function () {
  optionQT.style.display = "none";
  optionQTTK.style.display = "flex";
  btnBack.style.display = "flex";
});
quanTriBV.addEventListener("click", function () {
  optionQT.style.display = "none";
  optionQTBV.style.display = "flex";
  btnBack.style.display = "flex";
});
// nút back lại lựa chọn quản lí
btnBack.addEventListener("click", function () {
  optionQT.style.display = "flex";
  optionQTTK.style.display = "none";
  optionQTBV.style.display = "none";
  btnBack.style.display = "none";
});
// hàm ktra trùng tên
function ktra_trungTenTK(tenTK) {
  const listAD = localStorage.getItem("listAdmin");
  if (listAD) {
    let layListAD = JSON.parse(localStorage.getItem("listAdmin"));
    for (let ele of layListAD) {
      if (ele.taiKhoan === tenTK) {
        return true;
      }
    }
  }
  return false;
}
// chức năng tạo tài khoản
btnTaoTK.addEventListener("click", function () {
  let taoTK = document.querySelector(".input-taoTK");
  let taoMK = document.querySelector(".input-taoMK");
  if (
    checkNewACC(taoTK.value, taoMK.value) &&
    ktra_trungTenTK(taoTK.value) === false
  ) {
    const listAD = localStorage.getItem("listAdmin");
    const newAD = {
      taiKhoan: taoTK.value,
      matKhau: taoMK.value,
    };
    if (listAD) {
      let layListAD = JSON.parse(localStorage.getItem("listAdmin"));
      layListAD.push(newAD);
      localStorage.setItem("listAdmin", JSON.stringify(layListAD));
    } else {
      localStorage.setItem("listAdmin", JSON.stringify([newAD]));
    }
    alert("Tạo tài khoản thành công");
  } else {
    if (ktra_trungTenTK(taoTK.value) === false) {
      alert("Tạo tài khoản thất bại");
      alert(
        "Tài khoản, mật khẩu phải không quá 20 kí tự và không chứa khoảng trắng"
      );
    } else {
      alert("Đã có người tạo tài khoản này!!");
    }
  }
  taoTK.value = "";
  taoMK.value = "";
});
// Hàm reset ListAdmin
function updateListAD() {
  const listAD = localStorage.getItem("listAdmin");
  if (listAD) {
    let layListAD = JSON.parse(localStorage.getItem("listAdmin"));
    soLuongTK.textContent = `Hiện có ${layListAD.length} tài khoản`;
    let dem = 1;
    const listtk = document.querySelectorAll(".taikhoan");
    if (listtk.length > 0) {
      childTK.textContent = ""; // xóa hết để reset lại danh sách tk
    }
    for (let ele of layListAD) {
      let newText = document.createElement("h3");
      newText.className = "taikhoan";
      newText.textContent = `Tài khoản ${dem}: ${ele.taiKhoan}`;
      childTK.append(newText);
      dem += 1;
    }
  } else {
    soLuongTK.textContent = "Hiện chưa có tài khoản nào";
  }
}
// event nút list ad
btnListAD.addEventListener("click", function () {
  danhSachTK.style.display = "block";
  arrowIcon.style.display = "block";
  updateListAD();
});
// Nút mũi tên của list
arrowIcon.addEventListener("click", function () {
  danhSachTK.style.display = "none";
  arrowIcon.style.display = "none";
});
/*Chức năng xóa tất cả tài khoản */
btnXoaHet.addEventListener("click", function () {
  localStorage.removeItem("listAdmin");
  alert("Tất cả tài khoản đã được xóa");
  childTK.textContent = "";
  updateListAD(); // gọi ở đây để update hiện chưa có tk nào
});
/*Chức năng xóa một tài khoản*/
btnXoaTK.addEventListener("click", function () {
  const listAD = localStorage.getItem("listAdmin");
  const inpXoaTK = document.querySelector(".input-xoaTK");
  let layListAD = JSON.parse(localStorage.getItem("listAdmin"));
  let checkXoa = false;
  if (listAD) {
    i = layListAD.length - 1;
    while (i > -1) {
      if (layListAD[i].taiKhoan === inpXoaTK.value) {
        layListAD.splice(i, 1); // hàm này để xóa từ index i, xóa 1 phần tử
        checkXoa = true;
        break;
      }
      i -= 1;
    }
  } else {
    alert("Chưa có tài khoản nào được tạo");
  }
  if (checkXoa) {
    childTK.textContent = "";
    alert("Đã xóa thành công");
  } else {
    alert("Xóa không thành công");
  }
  if (layListAD.length > 0) {
    localStorage.setItem("listAdmin", JSON.stringify(layListAD));
    updateListAD();
  } else {
    localStorage.removeItem("listAdmin");
  }

  inpXoaTK.value = "";
});
/*chức năng đổi mật khẩu */
btnDoiMK.addEventListener("click", function () {
  let tk = document.querySelector(".input-tk-doimk");
  let mkht = document.querySelector(".input-mkht-doimk");
  let mkm = document.querySelector(".input-mkm-doimk");
  const listAD = localStorage.getItem("listAdmin");
  if (listAD) {
    let checkDoiMK = false;
    let layListAD = JSON.parse(localStorage.getItem("listAdmin"));
    for (let ele of layListAD) {
      if (ele.taiKhoan === tk.value && ele.matKhau === mkht.value) {
        ele.matKhau = mkm.value;
        localStorage.setItem("listAdmin", JSON.stringify(layListAD));
        checkDoiMK = true;
        break;
      }
    }
    if (checkDoiMK) {
      alert("Đổi mật khẩu thành công");
    } else {
      alert("Đổi mật khẩu không thành công");
    }
  }
  tk.value = "";
  mkht.value = "";
  mkm.value = "";
});
