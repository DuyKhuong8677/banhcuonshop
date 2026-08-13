# 🥢 Banh Cuon Shop

> Website giới thiệu các sản phẩm có trong Quỳnh Chi - Bánh cuốn Tây Sơn

## 📁 Cấu trúc thư mục

```text
📦 banhcuonshop
├── 📄 index.html              # Trang chủ
├── 📄 README.md
├── 📂 css
│   └── 🎨 style.css
├── 📂 js
│   ├── ⚙️ script.js           # Nút đặt hàng qua Zalo (trang sản phẩm)
│   ├── ⚙️ gio-hang.js         # Giỏ hàng, form đặt hàng, gửi đơn qua Zalo
│   └── ⚙️ mo-ta.js            # Thu gọn / mở rộng mô tả sản phẩm
├── 📂 images                  # Logo, ảnh sản phẩm, icon các app đặt món...
└── 📂 pages
    ├── 📄 san-pham.html       # Danh sách sản phẩm / menu
    ├── 📄 gioi-thieu.html     # Giới thiệu
    └── 📄 lien-he.html        # Liên hệ
```

## 🚀 Cách chạy

Đây là website tĩnh (HTML/CSS/JS thuần), không cần cài đặt hay build gì cả.

**Cách 1 — Mở trực tiếp:**
Mở file `index.html` bằng trình duyệt.

**Cách 2 — Dùng local server (khuyến khích, tránh lỗi CORS/đường dẫn):**

```bash
# Dùng Python
python -m http.server 8000

# Hoặc dùng Node (npx serve)
npx serve .
```

Sau đó truy cập `http://localhost:8000` (hoặc cổng tương ứng).

Nếu dùng VS Code, có thể cài extension **Live Server** rồi bấm "Go Live" trên `index.html`.
