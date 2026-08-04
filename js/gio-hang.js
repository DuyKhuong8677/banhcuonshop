const KHOA_GIO_HANG = "gioHangBanhCuon";
const SO_DIEN_THOAI_ZALO = "0986822041";

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

function taoNoiDungDonHang(thongTinNhanHang) {
  const gioHang = docGioHang();
  let noiDung = "ĐƠN HÀNG - Quỳnh Chi Bánh Cuốn Tây Sơn\n\n";
  let tongTien = 0;

  gioHang.forEach((mon) => {
    const thanhTien = mon.gia * mon.soLuong;
    tongTien += thanhTien;
    noiDung += `- ${mon.ten} x${mon.soLuong}: ${dinhDangTien(thanhTien)}\n`;
  });

  noiDung += `Tổng cộng: ${dinhDangTien(tongTien)}`;

  if (thongTinNhanHang) {
    noiDung += `\n\n${thongTinNhanHang}`;
  }

  return noiDung;
}

function guiDonHangQuaZalo(thongTinNhanHang) {
  const noiDung = taoNoiDungDonHang(thongTinNhanHang);

  navigator.clipboard.writeText(noiDung).then(() => {
    window.open(`https://zalo.me/${SO_DIEN_THOAI_ZALO}`, "_blank");
    alert("Đã copy đơn hàng và mở Zalo. Bạn dán (Ctrl+V) vào khung chat để gửi cho quán nhé.");
  });
}

function moModalDatHang() {
  const gioHang = docGioHang();

  if (gioHang.length === 0) {
    alert("Giỏ hàng đang trống, chưa có gì để đặt.");
    return;
  }

  document.getElementById("modal-dat-hang").classList.add("mo");
}

function dongModalDatHang() {
  document.getElementById("modal-dat-hang").classList.remove("mo");
}

function capNhatHienThiFormDatHang() {
  const loaiNhan = document.querySelector('input[name="loai-nhan"]:checked').value;
  const khungQuan = document.getElementById("truong-nhan-quan");
  const khungGiao = document.getElementById("truong-giao-hang");
  const laNhanTaiQuan = loaiNhan === "quan";

  khungQuan.hidden = !laNhanTaiQuan;
  khungGiao.hidden = laNhanTaiQuan;
  document.getElementById("ghi-chu-phi-ship").hidden = laNhanTaiQuan;
}

function xuLySubmitFormDatHang(su_kien) {
  su_kien.preventDefault();

  const loaiNhan = document.querySelector('input[name="loai-nhan"]:checked').value;
  const dong = [];

  if (loaiNhan === "quan") {
    dong.push("Hình thức: Nhận tại quán");
    const gioNhan = document.getElementById("gio-nhan-quan").value.trim();
    if (gioNhan) dong.push(`Thời gian nhận: ${gioNhan}`);
  } else {
    dong.push("Hình thức: Giao hàng");
    const ten = document.getElementById("ten-nguoi-nhan").value.trim();
    const sdt = document.getElementById("sdt-nguoi-nhan").value.trim();
    const diaChi = document.getElementById("dia-chi-giao").value.trim();
    const gioNhan = document.getElementById("gio-nhan-giao").value.trim();
    if (ten) dong.push(`Tên người nhận: ${ten}`);
    if (sdt) dong.push(`Số điện thoại: ${sdt}`);
    if (diaChi) dong.push(`Địa chỉ: ${diaChi}`);
    if (gioNhan) dong.push(`Thời gian nhận: ${gioNhan}`);
    dong.push("(Lưu ý: đơn giao hàng có thể tính thêm phí ship tuỳ khu vực)");
  }

  guiDonHangQuaZalo(dong.join("\n"));
  dongModalDatHang();
  document.getElementById("form-dat-hang").reset();
  capNhatHienThiFormDatHang();
}

function boQuaVaGuiNgay() {
  guiDonHangQuaZalo("");
  dongModalDatHang();
  document.getElementById("form-dat-hang").reset();
  capNhatHienThiFormDatHang();
}

function taoModalDatHang() {
  const modal = document.createElement("div");
  modal.id = "modal-dat-hang";
  modal.className = "modal-overlay";
  modal.innerHTML = `
    <div class="modal-hop">
      <div class="modal-dau">
        <h3>Thông tin nhận hàng</h3>
        <button type="button" id="nut-dong-modal">&times;</button>
      </div>
      <form id="form-dat-hang">
        <div class="modal-chon-loai">
          <label><input type="radio" name="loai-nhan" value="quan" checked> Nhận tại quán</label>
          <label><input type="radio" name="loai-nhan" value="giao"> Giao hàng</label>
        </div>
        <p id="ghi-chu-phi-ship" class="modal-ghi-chu-phi" hidden>Lưu ý: đơn giao hàng có thể tính thêm phí ship tuỳ khu vực.</p>

        <div id="truong-nhan-quan" class="modal-truong">
          <label for="gio-nhan-quan">Thời gian nhận</label>
          <input type="text" id="gio-nhan-quan" placeholder="VD: 11h30 hôm nay">
        </div>

        <div id="truong-giao-hang" class="modal-truong" hidden>
          <label for="ten-nguoi-nhan">Tên người nhận</label>
          <input type="text" id="ten-nguoi-nhan" placeholder="Tên của bạn">

          <label for="sdt-nguoi-nhan">Số điện thoại</label>
          <input type="tel" id="sdt-nguoi-nhan" placeholder="VD: 0909123456">

          <label for="dia-chi-giao">Địa chỉ giao hàng</label>
          <input type="text" id="dia-chi-giao" placeholder="Số nhà, đường, phường/xã...">

          <label for="gio-nhan-giao">Thời gian nhận</label>
          <input type="text" id="gio-nhan-giao" placeholder="VD: 11h30 hôm nay">
        </div>

        <div class="modal-nhom-nut">
          <button type="submit" class="modal-nut-xac-nhan">Xác nhận &amp; gửi qua Zalo</button>
          <button type="button" id="nut-bo-qua-form" class="modal-nut-bo-qua">Bỏ qua, gửi ngay</button>
        </div>
      </form>
    </div>
  `;
  document.body.appendChild(modal);

  modal.addEventListener("click", (su_kien) => {
    if (su_kien.target === modal) {
      dongModalDatHang();
    }
  });

  document.getElementById("nut-dong-modal").addEventListener("click", dongModalDatHang);

  document.querySelectorAll('input[name="loai-nhan"]').forEach((radio) => {
    radio.addEventListener("change", capNhatHienThiFormDatHang);
  });

  document.getElementById("form-dat-hang").addEventListener("submit", xuLySubmitFormDatHang);
  document.getElementById("nut-bo-qua-form").addEventListener("click", boQuaVaGuiNgay);

  capNhatHienThiFormDatHang();
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
      <button type="button" id="nut-copy-don-hang">Đặt đơn qua Zalo</button>
    </div>
  `;
  document.body.appendChild(khungGio);

  nutMoGio.addEventListener("click", () => khungGio.classList.toggle("mo"));
  document.getElementById("nut-dong-gio-hang").addEventListener("click", () => khungGio.classList.remove("mo"));
  document.getElementById("nut-in-bill").addEventListener("click", () => window.print());
  document.getElementById("nut-copy-don-hang").addEventListener("click", moModalDatHang);
}

document.addEventListener("DOMContentLoaded", () => {
  taoKhungGioHang();
  taoModalDatHang();
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
