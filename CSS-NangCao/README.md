# CSS Nâng Cao — Lab 07: Advanced CSS – Layout

## 1. Thông tin
- Họ và tên: **Nguyễn Hiếu Minh Tuệ**
- MSSV: **31241024317**
- Lớp học phần: **26C1INF50902701**
- GitHub: https://github.com/mtuengh
- Trang GitHub Pages (nếu lưu trong repo JavaScript-Labs): https://mtuengh.github.io/JavaScript-Labs/CSS-NangCao/

## 2. Mục tiêu
Thực hành 19 chủ đề của Lab 07: document flow, positioning, z-index, float, multi-column, media queries, viewport, transforms, transitions, filters, animations và Bootstrap.

## 3. Cấu trúc mã nguồn
```
CSS-NangCao/
├── index.html                   # Trang chủ portfolio và liên kết 19 bài
├── README.md
├── assets/
│   ├── style.css               # CSS trang chủ
│   └── exercise.css            # CSS khung trang các bài
└── Lab07/
    ├── Exercise01/ ... Exercise12/  # index.html và style.css
    ├── Exercise12/desktop.css
    ├── Exercise12/mobile.css
    ├── Exercise13/README.md    # Thực hiện 7.13 trên 7.12
    ├── Exercise14/ ... Exercise19/
    ├── bootstrap/              # Bootstrap CSS/JS offline
    └── images/                 # Ảnh SVG dùng trong bài
```

## 4. Danh sách Exercise
- [7.01 — Document Flow](Lab07/Exercise01/index.html)
- [7.02 — Relative Positioning](Lab07/Exercise02/index.html)
- [7.03 — Absolute Positioning](Lab07/Exercise03/index.html)
- [7.04 — Stacking Using Z-Index](Lab07/Exercise04/index.html)
- [7.05 — Floating Elements](Lab07/Exercise05/index.html)
- [7.06 — Floating in a Container](Lab07/Exercise06/index.html)
- [7.07 — Floating Multiple Items](Lab07/Exercise07/index.html)
- [7.08 — Floating and Clearing](Lab07/Exercise08/index.html)
- [7.09 — Using Positioning](Lab07/Exercise09/index.html)
- [7.10 — Two-Column Layout](Lab07/Exercise10/index.html)
- [7.11 — Three-Column Layout](Lab07/Exercise11/index.html)
- [7.12 — Media Queries](Lab07/Exercise12/index.html)
- [7.13 — Setting the Viewport](Lab07/Exercise12/index.html#viewport-demo)
- [7.14 — Transforms](Lab07/Exercise14/index.html)
- [7.15 — Transitions](Lab07/Exercise15/index.html)
- [7.16 — More Transitions](Lab07/Exercise16/index.html)
- [7.17 — Filters](Lab07/Exercise17/index.html)
- [7.18 — Animations](Lab07/Exercise18/index.html)
- [7.19 — Using Bootstrap](Lab07/Exercise19/index.html)

## 5. Hướng dẫn chạy
1. Mở `CSS-NangCao/index.html` trong trình duyệt, hoặc mở bằng VS Code + Live Server.
2. Bấm **Xem bài** để mở từng Exercise.
3. Dùng Chrome DevTools (F12 → Toggle device toolbar) thử kích thước điện thoại / desktop ở 7.7, 7.10–7.13.
4. Di chuột qua các khối ở 7.14–7.16 và quan sát 7.17–7.18.
5. Bài 7.19 sử dụng Bootstrap 5 ở file local (`Lab07/bootstrap/`). Vì bản Bootstrap này đã bỏ panel/jumbotron, bản thực hành có thêm CSS hiển thị hai khối tương đương; các thành phần grid, navbar, button, list-group là của Bootstrap thật.

## 6. GitHub Pages
Dùng repository GitHub đã có, thêm thư mục `CSS-NangCao` vào **gốc repo**, không xóa các bài cũ. Đảm bảo Pages triển khai từ `main / (root)`.

- Ví dụ trang chủ: `https://mtuengh.github.io/JavaScript-Labs/CSS-NangCao/`
- Ví dụ Exercise 7.19: `https://mtuengh.github.io/JavaScript-Labs/CSS-NangCao/Lab07/Exercise19/`

## 7. Nộp bài
Nộp file Word báo cáo có ảnh chụp mã nguồn và kết quả thực tế, cùng liên kết Repository và GitHub Pages. Các ảnh chụp được tạo từ chính mã nguồn trong bộ này; nếu chỉnh sửa sau đó cần cập nhật ảnh để khớp kết quả cuối.

## 8. Đối chiếu nguồn tài liệu
Bộ thực hành được viết theo **danh sách 19 chủ đề trong `BaiTap_CaNhan_CSS_NangCao.pdf`**. Không có tài liệu gốc `Lab07.pdf` hoặc ZIP mẫu kèm theo, nên giao diện minh họa là bài thực hành tương đương, **không khẳng định trùng các bước mẫu** của tài liệu gốc.
