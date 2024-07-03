// date.js

// Hàm chuyển đổi ngày tháng sang định dạng Mỹ (MM/DD/YYYY)
function formatDateUS(date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
}

// Hàm chuyển đổi ngày tháng sang định dạng Anh (DD/MM/YYYY)
function formatDateUK(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

// Hàm chuyển đổi ngày tháng sang định dạng Nhật Bản (YYYY年MM月DD日)
function formatDateJapanese(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}年${month}月${day}日`;
}

// Hàm chuyển đổi ngày tháng sang định dạng Việt Nam (DD/MM/YYYY)
function formatDateVietnamese(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

export {
    formatDateUS,
    formatDateUK,
    formatDateJapanese,
    formatDateVietnamese
}

