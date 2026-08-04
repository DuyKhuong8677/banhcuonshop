const KHOA_GIO_HANG = "gioHangBanhCuon";

function docGioHang() {
  const duLieu = localStorage.getItem(KHOA_GIO_HANG);
  return duLieu ? JSON.parse(duLieu) : [];
}

function luuGioHang(gioHang) {
  localStorage.setItem(KHOA_GIO_HANG, JSON.stringify(gioHang));
}

function dinhDangTien(so) {
  return so.toLocaleString("vi-VN") + "đ";
}

function layGiaTuChuoi(chuoiGia) {
  return Number(chuoiGia.replace(/\D/g, ""));
}

function themVaoGio(ten, gia) {
  const gioHang = docGioHang();
  const monDaCo = gioHang.find((mon) => mon.ten === ten);

  if (monDaCo) {
    monDaCo.soLuong += 1;
  } else {
    gioHang.push({ ten, gia, soLuong: 1 });
  }

  luuGioHang(gioHang);
  capNhatGioHang();
}

function doiSoLuong(chiSo, delta) {
  const gioHang = docGioHang();
  gioHang[chiSo].soLuong += delta;

  if (gioHang[chiSo].soLuong <= 0) {
    gioHang.splice(chiSo, 1);
  }

  luuGioHang(gioHang);
  capNhatGioHang();
}

function xoaMon(chiSo) {
  const gioHang = docGioHang();
  gioHang.splice(chiSo, 1);
  luuGioHang(gioHang);
  capNhatGioHang();
}

function capNhatGioHang() {
  const gioHang = docGioHang();
  const danhSach = document.getElementById("danh-sach-gio-hang");
  const tongTienEl = document.getElementById("tong-tien-gio-hang");
  const soLuongEl = document.getElementById("so-luong-gio-hang");

  danhSach.innerHTML = "";

  if (gioHang.length === 0) {
    danhSach.innerHTML = '<p class="gio-hang-rong">Giỏ hàng đang trống.</p>';
  }

  let tongTien = 0;
  let tongSoLuong = 0;

  gioHang.forEach((mon, chiSo) => {
    const thanhTien = mon.gia * mon.soLuong;
    tongTien += thanhTien;
    tongSoLuong += mon.soLuong;

    const dong = document.createElement("div");
    dong.className = "gio-hang-dong";
    dong.innerHTML = `
      <div class="gio-hang-hang-tren">
        <span class="gio-hang-ten">${mon.ten}</span>
        <button type="button" class="nut-xoa-mon" data-chi-so="${chiSo}">Xoá</button>
      </div>
      <div class="gio-hang-hang-duoi">
        <div class="gio-hang-so-luong">
          <button type="button" class="nut-giam" data-chi-so="${chiSo}">−</button>
          <span>${mon.soLuong}</span>
          <button type="button" class="nut-tang" data-chi-so="${chiSo}">+</button>
        </div>
        <div class="gio-hang-gia">
          <span class="gio-hang-don-gia">${dinhDangTien(mon.gia)} / món</span>
          <span class="gio-hang-thanh-tien">${dinhDangTien(thanhTien)}</span>
        </div>
      </div>
    `;
    danhSach.appendChild(dong);
  });

  tongTienEl.textContent = dinhDangTien(tongTien);
  soLuongEl.textContent = tongSoLuong;

  danhSach.querySelectorAll(".nut-tang").forEach((nut) => {
    nut.addEventListener("click", () => doiSoLuong(Number(nut.dataset.chiSo), 1));
  });
  danhSach.querySelectorAll(".nut-giam").forEach((nut) => {
    nut.addEventListener("click", () => doiSoLuong(Number(nut.dataset.chiSo), -1));
  });
  danhSach.querySelectorAll(".nut-xoa-mon").forEach((nut) => {
    nut.addEventListener("click", () => xoaMon(Number(nut.dataset.chiSo)));
  });
}

function copyDonHang() {
  const gioHang = docGioHang();

  if (gioHang.length === 0) {
    alert("Giỏ hàng đang trống, chưa có gì để copy.");
    return;
  }

  let noiDung = "ĐƠN HÀNG - Quỳnh Chi Bánh Cuốn Tây Sơn\n";
  let tongTien = 0;

  gioHang.forEach((mon) => {
    const thanhTien = mon.gia * mon.soLuong;
    tongTien += thanhTien;
    noiDung += `- ${mon.ten} x${mon.soLuong}: ${dinhDangTien(thanhTien)}\n`;
  });

  noiDung += `Tổng cộng: ${dinhDangTien(tongTien)}`;

  navigator.clipboard.writeText(noiDung).then(() => {
    alert("Đã copy đơn hàng, bạn dán (Ctrl+V) vào Zalo để gửi cho quán nhé.");
  });
}

function taoKhungGioHang() {
  const nutMoGio = document.createElement("button");
  nutMoGio.type = "button";
  nutMoGio.id = "nut-mo-gio-hang";
  nutMoGio.innerHTML = '🛒 <span id="so-luong-gio-hang">0</span>';
  document.body.appendChild(nutMoGio);

  const khungGio = document.createElement("div");
  khungGio.id = "khung-gio-hang";
  khungGio.innerHTML = `
    <div class="gio-hang-dau">
      <h3>Giỏ hàng của bạn</h3>
      <button type="button" id="nut-dong-gio-hang">&times;</button>
    </div>
    <div id="danh-sach-gio-hang"></div>
    <div class="gio-hang-tong">
      <span>Tổng cộng:</span>
      <span id="tong-tien-gio-hang">0đ</span>
    </div>
    <div class="gio-hang-nut">
      <button type="button" id="nut-in-bill">In hoá đơn</button>
      <button type="button" id="nut-copy-don-hang">Copy đơn hàng</button>
    </div>
  `;
  document.body.appendChild(khungGio);

  nutMoGio.addEventListener("click", () => khungGio.classList.toggle("mo"));
  document.getElementById("nut-dong-gio-hang").addEventListener("click", () => khungGio.classList.remove("mo"));
  document.getElementById("nut-in-bill").addEventListener("click", () => window.print());
  document.getElementById("nut-copy-don-hang").addEventListener("click", copyDonHang);
}

document.addEventListener("DOMContentLoaded", () => {
  taoKhungGioHang();
  capNhatGioHang();

  document.querySelectorAll(".san-pham-item").forEach((sanPham) => {
    const ten = sanPham.querySelector("h4").textContent.trim();
    const gia = layGiaTuChuoi(sanPham.querySelector(".gia").textContent);

    const nutThem = document.createElement("button");
    nutThem.type = "button";
    nutThem.className = "btn-them-gio";
    nutThem.textContent = "Thêm vào giỏ";
    nutThem.addEventListener("click", () => themVaoGio(ten, gia));

    sanPham.appendChild(nutThem);
  });
});
