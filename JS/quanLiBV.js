const btnThemBV = document.querySelector(".btn-themBai"); // nút thêm
const btnSuaBV = document.querySelector(".btn-suaBai"); // nút sửa
const btnXoaBV = document.querySelector(".btn-xoaBai"); // nút xóa
const selectSuaBai = document.querySelector("#suabai");
const selectBaiCanSua = document.querySelector("#baicansua");
const selectXoaBai = document.querySelector("#xoabai");
const selectBaiCanXoa = document.querySelector("#baicanxoa");
// Hàm kiểm tra có trùng tên bài viết khi thêm vào không
function checkTrungTenBV(inpTieuDe) {
  let layListBV = JSON.parse(localStorage.getItem("listThongBao"));
  for (let ele of layListBV) {
    console.log(ele.tieuDe === inpTieuDe);
    if (ele.tieuDe === inpTieuDe) {
      return true;
    }
  }
  return false;
}
// Chức năng thêm bài viết
btnThemBV.addEventListener("click", function () {
  const inpTieuDe = document.querySelector("#tieude");
  const textAreaND = document.querySelector("#noiDungBV");
  const selectThem = document.querySelector("#thembai");
  const ngayThem = new Date();
  const newBV = {
    tieuDe: inpTieuDe.value,
    noiDung: textAreaND.value,
    ngayDang: ngayThem,
  };
  if (inpTieuDe.value === "" || textAreaND.value === "") {
    alert("Tiêu đề hoặc nội dung đang rỗng, vui lòng thêm vào !! ");
    return;
  }
  if (selectThem.value === "huong-dan") {
    alert("Vui lòng chọn loại bài viết cần thêm");
  } else if (selectThem.value === "ThongBao") {
    const layListTB = localStorage.getItem("listThongBao");
    if (layListTB) {
      if (checkTrungTenBV(inpTieuDe.value) === false) {
        let layListBV = JSON.parse(localStorage.getItem("listThongBao"));
        layListBV.push(newBV);
        localStorage.setItem("listThongBao", JSON.stringify(layListBV));
        alert("Thêm bài viết thông báo thành công");
        selectThem.value = "huong-dan";
        inpTieuDe.value = "";
        textAreaND.value = "";
        selectSuaBai.value = "huong-dan";
        selectBaiCanSua.style.display = "none";
      } else {
        alert("Tên bài viết bị trùng, vui lòng dùng tên khác");
      }
    } else {
      localStorage.setItem("listThongBao", JSON.stringify([newBV]));
      alert("Thêm bài viết thông báo thành công");
      selectThem.value = "huong-dan";
      inpTieuDe.value = "";
      textAreaND.value = "";
    }
  }
});
// chức năng sửa bài viết
selectSuaBai.addEventListener("input", function () {
  selectBaiCanSua.innerHTML = "";
  let newOption = document.createElement("option");
  newOption.textContent = "CHỌN BÀI VIẾT CẦN SỬA";
  newOption.value = "huong-dan";
  selectBaiCanSua.appendChild(newOption);
  if (selectSuaBai.value === "ThongBao") {
    const layListTB = localStorage.getItem("listThongBao");
    if (layListTB) {
      let layListBV = JSON.parse(localStorage.getItem("listThongBao"));
      for (let ele of layListBV) {
        let newOption = document.createElement("option");
        newOption.textContent = ele.tieuDe;
        newOption.value = ele.tieuDe;
        selectBaiCanSua.appendChild(newOption);
      }
      selectBaiCanSua.style.display = "inline-block";
    } else {
      selectSuaBai.value = "huong-dan";
      alert("Chưa có bài viết thông báo nào cả");
    }
  }
  if (selectSuaBai.value === "huong-dan") {
    selectBaiCanSua.style.display = "none";
  }
});

selectBaiCanSua.addEventListener("input", function () {
  const inpTieuDe = document.querySelector("#tieude");
  const textAreaND = document.querySelector("#noiDungBV");
  let layListBV = JSON.parse(localStorage.getItem("listThongBao"));
  for (let ele of layListBV) {
    if (ele.tieuDe === selectBaiCanSua.value) {
      inpTieuDe.value = ele.tieuDe;
      textAreaND.value = ele.noiDung;
      break;
    }
  }
});
// hàm kiểm tra trùng tên cho sửa => trừ bài viết đang sửa đó ra
function checkTrungTenBV(inpTieuDe) {
  let layListBV = JSON.parse(localStorage.getItem("listThongBao"));
  for (let ele of layListBV) {
    if (ele.tieuDe === selectBaiCanSua.value) {
      continue;
    }
    if (ele.tieuDe === inpTieuDe) {
      return true;
    }
  }
  return false;
}
btnSuaBV.addEventListener("click", function () {
  const inpTieuDe = document.querySelector("#tieude");
  const textAreaND = document.querySelector("#noiDungBV");
  if (inpTieuDe.value === "" || textAreaND.value === "") {
    alert("Tiêu đề và nội dung không được để trống");
    return;
  }
  if (inpTieuDe != selectBaiCanSua.value && checkTrungTenBV(inpTieuDe.value)) {
    alert("Tên bài viết đã tồn tại, vui lòng sửa lại!!");
    return;
  }
  if (selectBaiCanSua.value === "huong-dan" || selectSuaBai === "huong-dan") {
    alert("Loại bài viết hoặc bài viết cần sửa chưa được chọn !!");
  } else {
    let layListBV = JSON.parse(localStorage.getItem("listThongBao"));
    for (let ele of layListBV) {
      if (ele.tieuDe === selectBaiCanSua.value) {
        ele.tieuDe = inpTieuDe.value;
        ele.noiDung = textAreaND.value;
        alert("Bài viết đã được sửa");
        selectSuaBai.value = "huong-dan";
        selectBaiCanSua.style.display = "none";
        localStorage.setItem("listThongBao", JSON.stringify(layListBV));
        inpTieuDe.value = "";
        textAreaND.value = "";
        break;
      }
    }
  }
});

// chức năng xóa bài viết
selectXoaBai.addEventListener("input", function () {
  selectBaiCanXoa.innerHTML = "";
  let newOption = document.createElement("option");
  newOption.textContent = "CHỌN BÀI VIẾT CẦN XÓA";
  newOption.value = "huong-dan";
  selectBaiCanXoa.appendChild(newOption);
  if (selectXoaBai.value === "ThongBao") {
    const layListTB = localStorage.getItem("listThongBao");
    if (layListTB) {
      let layListBV = JSON.parse(localStorage.getItem("listThongBao"));
      for (let ele of layListBV) {
        let newOption = document.createElement("option");
        newOption.textContent = ele.tieuDe;
        newOption.value = ele.tieuDe;
        selectBaiCanXoa.appendChild(newOption);
      }
      selectBaiCanXoa.style.display = "inline-block";
    } else {
      selectXoaBai.value = "huong-dan";
      alert("Chưa có bài viết thông báo nào cả");
    }
  }
  if (selectXoaBai.value === "huong-dan") {
    selectBaiCanXoa.style.display = "none";
  }
});
btnXoaBV.addEventListener("click", function () {
  let layListBV = JSON.parse(localStorage.getItem("listThongBao"));
  let dodai = layListBV.length;
  if (dodai === 0) {
    alert("Không có bài viết để xóa!!");
    return;
  }
  if (dodai > 1) {
    console.log(layListBV.length);
    for (let i = layListBV.length - 1; i > -1; i--) {
      if (selectBaiCanXoa.value == layListBV[i].tieuDe) {
        alert("Xóa thành công");
        layListBV.splice(i, 1);
        selectXoaBai.value = "huong-dan";
        selectBaiCanXoa.value = "huong-dan";
        localStorage.setItem("listThongBao", JSON.stringify(layListBV));
        break;
      }
    }
  } else if (dodai === 1) {
    if (selectBaiCanXoa.value === layListBV[0].tieuDe) {
      alert("Xóa thành công");
      localStorage.removeItem("listThongBao");
      selectXoaBai.value = "huong-dan";
      selectBaiCanXoa.value = "huong-dan";
    }
  }
});
// nút đăng xuất
const btnDangXuat = document.querySelector(".dangXuat");
btnDangXuat.addEventListener("click", function () {
  let isAdmin = parseInt(localStorage.getItem("isAdmin"));
  alert("Đăng xuất thành công");
  isAdmin = 0;
  window.location.assign("../index.html");
  localStorage.setItem("isAdmin", isAdmin);
});
