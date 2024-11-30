const thongBao = document.querySelector(".thongBao");

if (localStorage.getItem("listThongBao")) {
  let layListTB = JSON.parse(localStorage.getItem("listThongBao"));
  let i = layListTB.length - 1;
  dem = 0;
  while (i > -1) {
    let ngayDang = new Date(layListTB[i].ngayDang);
    let ngay = `${ngayDang.getDate()}/${
      ngayDang.getMonth() + 1
    }/${ngayDang.getFullYear()}`;
    let newNgay = document.createElement("h2");
    let newTieuDe = document.createElement("h3");
    let newThongBao1 = document.createElement("div");
    newThongBao1.className = "thongbao1";
    newTieuDe.className = "tieude";
    newTieuDe.textContent = layListTB[i].tieuDe;
    newNgay.className = "ngay";
    newNgay.textContent = ngay;
    newThongBao1.appendChild(newNgay);
    newThongBao1.appendChild(newTieuDe);
    thongBao.appendChild(newThongBao1);
    dem += 1;
    i--;
  }
}
const listBtnTB = document.querySelectorAll(".thongbao1");
for (let i = 0; i < 2; i++) {
  listBtnTB[i].addEventListener("click", function () {
    let tieuDeTB = `baiViet${i}`;
    localStorage.setItem("tieuDeTB", tieuDeTB);
    window.location.assign("./HTML/Thongbao.html");
  });
}
if (listBtnTB.length > 2) {
  for (let i = 2; i < listBtnTB.length; i++) {
    listBtnTB[i].addEventListener("click", function () {
      let tieuDeTB = listBtnTB[i].lastChild.textContent;
      localStorage.setItem("tieuDeTB", tieuDeTB);
      window.location.assign("./HTML/Thongbao.html");
    });
  }
}
