const DUONG_DAN_GOC = document.currentScript.src.replace(/js\/du-lieu-san-pham\.js.*$/, "");

const DANH_MUC_SAN_PHAM = [
  {
    id: "banh-cuon",
    ten: "Bánh cuốn",
    sanPham: [
      {
        ten: "Bánh cuốn Tây Sơn",
        anh: "banh-cuon-tay-son.jpg",
        moTa: "Cuốn gồm có: rau sống, thịt nướng, trứng, ram giòn ăn kèm nước mắm đậu phụng thơm béo (kèm ớt xiêm xanh và tỏi). Mắm đậu quán bảo quản ngăn mát để khỏi bị thiêu và mắm có độ sệt ăn ngon hơn khi giao đến khách nếu còn lạnh thì khách vui lòng cho vào.",
        moTaNgan: "Cuốn gồm có: rau sống, thịt nướng, trứng, ram giòn ăn kèm nước mắm đậu phụng thơm béo.",
        gia: 15000,
        noiBat: true,
      },
      {
        ten: "Bánh cuốn đặc biệt",
        anh: "banh-cuon-dăc-biet.jpg",
        moTa: "Cuốn gồm có: Thịt nướng, trứng vịt, chả bò, rau sống, ram giòn ăn kèm nước mắm đậu phụng thơm béo (kèm ớt xiêm xanh và tỏi). Mắm đậu quán bảo quản ngăn mát để khỏi bị thiêu và mắm có độ sệt ăn ngon hơn khi giao đến khách nếu còn lạnh thì khách vui lòng.",
        moTaNgan: "Cuốn gồm có: Thịt nướng, trứng vịt, chả bò, rau sống, ram giòn ăn kèm nước mắm đậu phụng thơm béo.",
        gia: 20000,
        noiBat: true,
      },
    ],
  },
  {
    id: "bun-kho",
    ten: "Bún khô Tây Sơn",
    sanPham: [
      {
        ten: "Bún thịt nướng",
        anh: "banh-cuon-thit.jpg",
        moTa: "Bún, rau, dưa leo, đồ chua, thịt nướng, chả bò, ram giòn, đậu phụng ăn kèm mắm chua ngọt và mắm đậu phụng.",
        moTaNgan: "Bún, rau, dưa leo, đồ chua, thịt nướng, chả bò, ram giòn, đậu phụng ăn kèm mắm chua ngọt.",
        gia: 25000,
        noiBat: true,
      },
    ],
  },
  {
    id: "dac-san",
    ten: "Đặc sản Bình Định",
    sanPham: [
      {
        ten: "Chả cá cuốn rau răm chiên sẵn",
        anh: "Cha-ca-cuon-rau-ram.jpg",
        moTa: "Chả cá mỏng cuốn rau răm chấm ớt tương.",
        gia: 35000,
      },
      {
        ten: "Chả ram tôm đất chiên sẵn (10 cuốn)",
        anh: "cha-ram-tom-dat-chien-san.jpg",
        moTa: "Chả ram tôm đất đã chiên sẵn nóng hổi vừa thổi vừa ăn (10 cuốn) chấm kèm tương ớt.",
        gia: 45000,
      },
      {
        ten: "Nem chiếc (5 cái)",
        anh: "5-nem-chiec.jpg",
        gia: 25000,
      },
      {
        ten: "Chả ram tôm đất Quy Nhơn (500gr)",
        anh: "cha-ram-tom-dat-chua-chien.jpg",
        moTa: "Chả ram cấp đông chưa sơ chế.",
        gia: 80000,
      },
      {
        ten: "Chả da ớt xiêm xanh (500g)",
        anh: "cha-da-ot-xiem.jpg",
        moTa: "1 cây 500gram không chất bảo quản, chả nhà làm đảm bảo an toàn, hoàn toàn từ thịt nạc heo và da heo thơm ngon bao ăn ạ. Vì chả không chất bảo quản nên cần cấp đông để ăn được lâu, vì vậy khách đặt vui lòng rã đông ngoài tầm 1 tiếng trước khi ăn.",
        gia: 90000,
      },
      {
        ten: "Chả bò (500g)",
        anh: "cha-bo.jpg",
        moTa: "1 cây 500gram không chất bảo quản, chả nhà làm đảm bảo an toàn, hoàn toàn từ thịt bò thơm ngon bao ăn ạ. Vì chả không chất bảo quản nên cần cấp đông để ăn được lâu, vì vậy khách đặt vui lòng rã đông ngoài tầm 1 tiếng trước khi ăn.",
        gia: 140000,
      },
      {
        ten: "Chả cá mỏng cấp đông (500gr)",
        moTa: "Chả cá mỏng chiên cần cấp đông để bảo quản được lâu, có thể ăn mì tôm, bún, chiên cuốn rau răm... kèm tương ớt.",
        gia: 75000,
      },
      {
        ten: "Chả tai heo (500g)",
        anh: "cha-tai-heo.jpg",
        moTa: "1 cây 500gram không chất bảo quản, chả nhà làm đảm bảo an toàn, hoàn toàn từ thịt nạc heo và tai heo thơm ngon bao ăn ạ. Vì chả không chất bảo quản nên cần cấp đông để ăn được lâu, vì vậy khách đặt vui lòng rã đông ngoài tầm 1 tiếng trước khi ăn.",
        gia: 95000,
      },
      {
        ten: "Chả lụa heo (500g)",
        anh: "cha-lua.jpg",
        moTa: "1 cây 500gram không chất bảo quản, chả nhà làm đảm bảo an toàn, hoàn toàn từ thịt nạc heo thơm ngon bao ăn ạ. Vì chả không chất bảo quản nên cần cấp đông để ăn được lâu, vì vậy khách đặt vui lòng rã đông ngoài tầm 1 tiếng trước khi ăn.",
        gia: 85000,
      },
    ],
  },
  {
    id: "mon-them",
    ten: "Món thêm",
    sanPham: [
      { ten: "Thịt nướng", gia: 7000 },
      { ten: "Trứng vịt luộc", gia: 5000 },
      { ten: "Mắm đậu phụng (100ml)", gia: 5000 },
    ],
  },
  {
    id: "nuoc-giai-khat",
    ten: "Nước giải khát",
    sanPham: [
      {
        ten: "Trà tắc trân châu trắng ly 700ml",
        anh: "tra-tac.jpg",
        moTa: "Trà tắc ly 700ml (trà túi Cozy, đường, tắc, trân châu trắng, đá).",
        gia: 10000,
      },
      {
        ten: "Trà chanh trân châu trắng ly 700ml",
        anh: "tra-chanh.jpg",
        moTa: "Trà chanh ly 700ml (trà túi Cozy, đường, trân châu trắng, chanh giấy, đá).",
        gia: 10000,
      },
      { ten: "Sting", anh: "sting.jpg", ghiChu: "Tặng tẩy đá", gia: 15000 },
      { ten: "Pepsi", anh: "pepsi.jpg", ghiChu: "Tặng tẩy đá", gia: 15000 },
      {
        ten: "Sâm dứa sữa ly 700ml",
        anh: "sam-dua-sua.jpg",
        ghiChu: "Ly 700ml - Sâm dứa, sữa tươi, sữa đặc",
        gia: 15000,
      },
      { ten: "RedBull", anh: "redbull.jpg", ghiChu: "Tặng tẩy đá", gia: 15000 },
      {
        ten: "Đá me ly 700ml",
        anh: "Da-me.jpg",
        ghiChu: "Me dầm, đậu phụng, trân châu trắng",
        gia: 15000,
      },
      {
        ten: "Sữa chua đánh đá trân châu trắng 700ml",
        anh: "sua-chua-bình thường.jpg",
        ghiChu: "Sữa chua Vinamilk, tắc sữa tươi, sữa đặc, trân châu trắng",
        gia: 15000,
      },
      { ten: "7 Up", anh: "7Up.jpg", ghiChu: "Tặng tẩy đá", gia: 15000 },
      { ten: "Coca Cola", anh: "CoCaCoLa.jpg", ghiChu: "Tặng tẩy đá", gia: 15000 },
      {
        ten: "Sữa chua dâu trân châu trắng ly 700ml",
        anh: "Sua-chua-Dau.jpg",
        ghiChu: "Đẹp da đẹp dáng, giải khát ngày hè",
        gia: 17000,
      },
      {
        ten: "Trà dâu trân châu trắng 700ml",
        anh: "Tra-Dau.jpg",
        ghiChu: "Giải khát ngày hè nóng bức",
        gia: 15000,
      },
    ],
  },
];
