// 1. Khởi tạo cái lịch (Flatpickr)
// Biến 'flatpickr' tự động có sẵn nhờ cái thẻ <script> ở file HTML
flatpickr("#birthdate", {
    dateFormat: "d/m/Y",
    maxDate: "today", // Không cho chọn ngày tương lai
});

const calculateBtn = document.getElementById('calculate-btn');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click', function() {
    const dateValue = document.getElementById('birthdate').value;

    if (!dateValue) {
        alert("Vui lòng chọn ngày sinh!");
        return;
    }

    // 2. Sử dụng Luxon để tính tuổi
    // Khi nhúng CDN, ta dùng thông qua đối tượng 'luxon'
    const DateTime = luxon.DateTime;

    // Chuyển chuỗi "dd/mm/yyyy" thành đối tượng thời gian
    const birthDate = DateTime.fromFormat(dateValue, "dd/MM/yyyy");
    const today = DateTime.now();

    // Tính toán sự khác biệt theo năm và tháng
    const diff = today.diff(birthDate, ['years', 'months']).toObject();

    // 3. Hiển thị kết quả
    const years = Math.floor(diff.years);
    const months = Math.floor(diff.months);

    resultDiv.innerHTML = `You are <strong>${years} years ${months} months</strong> old`;
});