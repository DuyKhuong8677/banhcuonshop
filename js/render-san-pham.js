function taoTheSanPham(sanPham, moTaGhiDe) {
  const bai = document.createElement("article");
  bai.className = "san-pham-item";

  if (sanPham.anh) {
    const anh = document.createElement("img");
    anh.src = `${DUONG_DAN_GOC}images/${sanPham.anh}`;
    anh.alt = sanPham.ten;
    bai.appendChild(anh);
  }

  const tieuDe = document.createElement("h4");
  tieuDe.textContent = sanPham.ten;
  bai.appendChild(tieuDe);

  const moTa = moTaGhiDe ?? sanPham.moTa;
  if (moTa) {
    const doanMoTa = document.createElement("p");
    doanMoTa.textContent = moTa;
    bai.appendChild(doanMoTa);
  }

  if (sanPham.ghiChu) {
    const ghiChu = document.createElement("p");
    ghiChu.className = "ghi-chu";
    ghiChu.textContent = sanPham.ghiChu;
    bai.appendChild(ghiChu);
  }

  const gia = document.createElement("p");
  gia.className = "gia";
  gia.textContent = `${sanPham.gia.toLocaleString("vi-VN")}đ`;
  bai.appendChild(gia);

  return bai;
}

function renderMenuDayDu(khungMenu) {
  DANH_MUC_SAN_PHAM.forEach((danhMuc, chiSo) => {
    const khungDanhMuc = document.createElement("div");
    khungDanhMuc.className = "danh-muc";
    khungDanhMuc.id = danhMuc.id;

    const tieuDeDanhMuc = document.createElement("h3");
    tieuDeDanhMuc.className = "ten-danh-muc";
    tieuDeDanhMuc.textContent = `${chiSo + 1}. ${danhMuc.ten}`;
    khungDanhMuc.appendChild(tieuDeDanhMuc);

    const luoi = document.createElement("div");
    luoi.className = "san-pham-luoi";
    danhMuc.sanPham.forEach((sanPham) => luoi.appendChild(taoTheSanPham(sanPham)));
    khungDanhMuc.appendChild(luoi);

    khungMenu.appendChild(khungDanhMuc);
  });
}

function renderSanPhamNoiBat(khungNoiBat) {
  DANH_MUC_SAN_PHAM.forEach((danhMuc) => {
    danhMuc.sanPham
      .filter((sanPham) => sanPham.noiBat)
      .forEach((sanPham) => khungNoiBat.appendChild(taoTheSanPham(sanPham, sanPham.moTaNgan)));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const khungMenu = document.getElementById("danh-sach-san-pham");
  if (khungMenu) {
    renderMenuDayDu(khungMenu);
  }

  const khungNoiBat = document.getElementById("san-pham-noi-bat");
  if (khungNoiBat) {
    renderSanPhamNoiBat(khungNoiBat);
  }
});
