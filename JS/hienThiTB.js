const tieuDe = document.querySelector(".Title-ThongBao");
const noiDung = document.querySelector(".Content-ThongBao");
function themBR(noidung) {
  for (let i = 0; i < noidung.length; i++) {
    return noidung.split("\n").join("<br>");
  }
  return noidung;
}
if (localStorage.getItem("tieuDeTB")) {
  let layTieuDe = localStorage.getItem("tieuDeTB");
  if (layTieuDe === "baiViet0") {
    tieuDe.textContent = "Thông báo tuyển sinh lớp 10 năm học 2024-2025";
    noiDung.innerHTML = `Trường THPT Yên Hoà trân trọng thông báo kế hoạch tuyển sinh lớp 10 năm học 2024-2025. Với truyền thống học tập lâu đời và uy tín trong giáo dục, chúng tôi tự hào là điểm đến lý tưởng cho các em học sinh đang tìm kiếm một môi trường học tập thân thiện, sáng tạo và chất lượng. Năm nay, nhà trường chào đón thế hệ học sinh K65-YH, hay còn gọi là "những chú trâu vàng" 2K9, với tổng chỉ tiêu tuyển sinh là 675 học sinh. Số lượng này sẽ được phân bổ vào 15 lớp học, bao gồm 7 lớp thuộc nhóm Khoa học Tự nhiên và 8 lớp thuộc nhóm Khoa học Xã hội. Các lớp học được thiết kế linh hoạt theo từng mô hình học tập nhằm phát huy tối đa năng lực của học sinh, bao gồm các môn Vật lí, Hoá học, Sinh học, Tin học, Công nghệ và các môn thuộc nhóm Khoa học Xã hội như Địa lí, Giáo dục Kinh tế và Pháp luật. Chúng tôi cũng mở rộng cơ hội học tập với chương trình Tiếng Anh IELTS dành cho các học sinh có nguyện vọng nâng cao khả năng ngoại ngữ. <br><br> 
    Lịch tuyển sinh chính thức bắt đầu từ ngày 4/7/2024 với các hoạt động quan trọng như tư vấn tuyển sinh chung, công bố danh sách trúng tuyển tại bảng tin nhà trường và trên hệ thống trực tuyến. Phụ huynh và học sinh có thể thực hiện xác nhận nhập học bằng hai hình thức: trực tuyến hoặc trực tiếp tại trường THPT Yên Hoà. Đợt nhận hồ sơ đầu tiên sẽ diễn ra từ 13h30 ngày 5/7 đến 16h00 ngày 7/7/2024. Trong trường hợp còn chỉ tiêu, đợt nhận hồ sơ bổ sung sẽ được tổ chức từ ngày 12/7 đến ngày 15/7/2024. Chúng tôi khuyến khích phụ huynh và học sinh chuẩn bị đầy đủ hồ sơ trước để quá trình nhập học diễn ra thuận lợi. Hồ sơ bao gồm các giấy tờ cần thiết như giấy xác nhận nhập học, học bạ THCS bản chính, giấy khai sinh, giấy chứng nhận tốt nghiệp tạm thời, thẻ căn cước công dân và các giấy tờ chứng nhận ưu tiên (nếu có). <br><br>
    Ngoài ra, để tạo điều kiện thuận lợi cho học sinh và phụ huynh, nhà trường có đội ngũ hỗ trợ tại các phòng tư vấn tuyển sinh, nơi phụ huynh có thể nhận được hướng dẫn chi tiết về cách hoàn thiện hồ sơ và mua đồng phục học sinh. Chúng tôi cũng lưu ý rằng phụ huynh nên mang theo điện thoại thông minh đã cài đặt ứng dụng VNeID để dễ dàng tra cứu thông tin nơi cư trú nếu cần thiết.
    Trường THPT Yên Hoà luôn nỗ lực để đảm bảo quá trình nhập học diễn ra thuận lợi và minh bạch. Chúng tôi cam kết mang lại một môi trường học tập hiện đại, giúp học sinh phát triển toàn diện về kiến thức, kỹ năng và phẩm chất. Tại ngôi trường thân yêu này, các em không chỉ được học tập mà còn được tham gia vào nhiều hoạt động ngoại khoá bổ ích, phát triển kỹ năng mềm và xây dựng các mối quan hệ gắn bó với bạn bè, thầy cô.<br><br>
    Chúng tôi rất hân hoan chào đón thế hệ K65-YH đến với ngôi nhà Yên Hoà! Với sự đồng hành của đội ngũ giáo viên tận tâm và giàu kinh nghiệm, cùng cơ sở vật chất hiện đại, chúng tôi tin rằng các em sẽ có một hành trình học tập tuyệt vời và đầy ý nghĩa tại đây. Kính chúc các em học sinh và quý phụ huynh sức khỏe, hạnh phúc và một năm học mới đầy thành công.`;
  }
  if (layTieuDe === "baiViet1") {
    tieuDe.textContent = "Thông báo nhập học năm học 2024-2025";
    noiDung.innerHTML = `
    Trường THPT Yên Hoà trân trọng thông báo kế hoạch nhập học dành cho các học sinh đã trúng tuyển vào lớp 10 năm học 2024-2025. Chúng tôi vô cùng hân hoan chào đón các em học sinh, với niềm tin rằng các em sẽ cùng nhau viết tiếp truyền thống vẻ vang của ngôi trường thân yêu này. Năm nay, nhà trường đã sẵn sàng chuẩn bị các điều kiện tốt nhất để chào đón hơn 675 học sinh, được phân bổ vào 15 lớp học với nhiều mô hình giáo dục phong phú. 
    <br><br>Quá trình nhập học sẽ được thực hiện qua hai đợt chính. Đợt đầu tiên diễn ra từ ngày 5/7 đến ngày 7/7/2024, trong khi đợt bổ sung (nếu còn chỉ tiêu) sẽ diễn ra từ ngày 12/7 đến ngày 15/7/2024. Phụ huynh và học sinh có thể lựa chọn giữa việc xác nhận nhập học trực tuyến trên hệ thống hoặc đến trực tiếp trường để nộp hồ sơ.
    Hồ sơ nhập học bao gồm các giấy tờ quan trọng như giấy xác nhận nhập học, học bạ THCS bản chính, giấy khai sinh, giấy chứng nhận tốt nghiệp tạm thời, thẻ căn cước công dân, và các giấy tờ chứng nhận ưu tiên (nếu có). <br><br>Nhà trường cũng bố trí đội ngũ tư vấn tại các phòng hỗ trợ để giải đáp mọi thắc mắc của phụ huynh và học sinh trong suốt quá trình này.
    Chúng tôi cũng lưu ý rằng, sau khi hoàn tất thủ tục nhập học, học sinh cần chuẩn bị đồng phục và các vật dụng cần thiết để sẵn sàng cho một năm học mới đầy năng lượng và thành công. Đây là dịp để các em bắt đầu hành trình chinh phục những đỉnh cao mới, không chỉ trong học tập mà còn ở các hoạt động ngoại khóa phong phú tại trường.
    Trường THPT Yên Hoà cam kết mang đến cho các em học sinh một môi trường giáo dục toàn diện, hiện đại và thân thiện, nơi các em không chỉ được học tập mà còn phát triển nhân cách và kỹ năng sống. <br><br> Chúng tôi xin gửi lời chúc tốt đẹp nhất đến các em học sinh và quý phụ huynh, mong rằng năm học 2024-2025 sẽ là một hành trình đầy thành công và ý nghĩa.
    `;
  }
  if (localStorage.getItem("listThongBao")) {
    let layListBV = JSON.parse(localStorage.getItem("listThongBao"));
    for (let ele of layListBV) {
      if (ele.tieuDe === layTieuDe) {
        tieuDe.textContent = ele.tieuDe;
        noiDung.innerHTML = themBR(ele.noiDung);
        break;
      }
    }
  }
}
