document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".san-pham-item > p:not(.gia):not(.ghi-chu)").forEach((moTa) => {
    moTa.classList.add("mo-ta");

    const nutMoRong = document.createElement("span");
    nutMoRong.className = "nut-mo-ta";
    nutMoRong.textContent = "Xem thêm";

    nutMoRong.addEventListener("click", () => {
      moTa.classList.toggle("mo-rong");
      nutMoRong.textContent = moTa.classList.contains("mo-rong") ? "Thu gọn" : "Xem thêm";
    });

    moTa.insertAdjacentElement("afterend", nutMoRong);
  });
});
