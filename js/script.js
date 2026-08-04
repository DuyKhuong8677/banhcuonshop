document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".san-pham-item").forEach((sanPham) => {
    const tenSanPham = sanPham.querySelector("h4").textContent.trim();

    const nutZalo = document.createElement("button");
    nutZalo.type = "button";
    nutZalo.className = "btn-zalo";
    nutZalo.textContent = "Đặt hàng qua Zalo";
    nutZalo.addEventListener("click", () => datHangQuaZalo(tenSanPham));

    sanPham.appendChild(nutZalo);
  });
});

function datHangQuaZalo(tenSanPham) {
  const tinNhan = `Tôi muốn đặt hàng: ${tenSanPham}`;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(tinNhan).then(() => {
      alert("Đã copy sẵn tin nhắn đặt hàng, bạn dán (Ctrl+V) vào khung chat Zalo vừa mở nhé.");
    });
  }

  window.open(`https://zalo.me/${SO_DIEN_THOAI_ZALO}`, "_blank");
}
