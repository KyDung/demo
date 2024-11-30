document.addEventListener('DOMContentLoaded', function() {
    // Lấy tất cả các links trong menu và overview
    const menuLinks = document.querySelectorAll('.menu-item a, .section-link');
    const sections = document.querySelectorAll('section');
    // Ẩn tất cả sections ban đầu, trừ GioiThieu
    sections.forEach(section => {
        if (section.id !== 'GioiThieu') {
            section.style.display = 'none';
        }
    });
    // Click cho tất cả links
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // Kiểm tra nếu là liên kết đến trang khác
            if (href && !href.startsWith('#')) {
                return true;
            }
            // Ngăn chặn hành vi mặc định của link
            e.preventDefault();
            // Xử lý hiển thị section
            if (href && href.startsWith('#')) {
                const targetId = href.replace('#', '');
                // Ẩn tất cả sections
                sections.forEach(section => {
                    section.style.display = 'none';
                });
                // Hiển thị section được chọn
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.style.display = 'block';
                    // Cuộn đến section được chọn
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            } else if (this.textContent === 'GIỚI THIỆU') {
                // Hiển thị section GioiThieu
                sections.forEach(section => {
                    section.style.display = 'none';
                });
                document.getElementById('GioiThieu').style.display = 'block';
            }
        });
    });
    // Điều hướng hash trong URL khi load trang
    if (window.location.hash) {
        const targetId = window.location.hash.replace('#', '');
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            sections.forEach(section => {
                section.style.display = 'none';
            });
            targetSection.style.display = 'block';
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});