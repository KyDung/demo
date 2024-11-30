document.querySelectorAll(".download-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
    // Tạo liên kết tải file
    const fileUrl = event.target.getAttribute("href");
    const downloadLink = document.createElement("a");
    downloadLink.href = fileUrl;
    downloadLink.download = "";
    downloadLink.click();
  });
});
