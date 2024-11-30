document.addEventListener("DOMContentLoaded", function () {
  const banner = document.querySelector(".sc-img");
  const menuLinks = document.querySelectorAll(".menu-item a");
  const sections = document.querySelectorAll("#content1 section");

  // Function để hiển thị trang chủ
  function showHomePage() {
    //banner.style.display = 'block';
    sections.forEach((section) => {
      section.style.display = section.id === "TrangChu" ? "block" : "none";
    });
  }
  // Hiển thị trang chủ khi tải trang
  showHomePage();
  // Click cho tất cả links
  menuLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      // Cho phép chuyển trang với các link không có #
      if (href && !href.startsWith("#")) {
        return true;
      }
      e.preventDefault();
      // Hiển thị nội dung
      if (href === "#TrangChu") {
        showHomePage();
      } else if (href && href.startsWith("#")) {
        const targetId = href.replace("#", "");
        // Ẩn banner và các section khác
        banner.style.display = "none";
        sections.forEach((section) => {
          section.style.display = "none";
        });
        // Hiển thị section được chọn
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.style.display = "block";
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
});
