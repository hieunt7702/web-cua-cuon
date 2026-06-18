export type Product = {
  id: string;
  name: string;
  category: string;
  categoryLabel: string;
  image: string;
  shortDesc: string;
  specs: string[];
};

export const productsData: Product[] = [
  // ===== LÁ CỬA CUỐN =====
  {
    id: "la-cua-cuon-1",
    name: "Lá cửa cuốn 1",
    category: "la-nan",
    categoryLabel: "Lá Nan Cửa Cuốn",
    image: "/assets/images/lacuacuon1.png",
    shortDesc: "Lá nan cửa cuốn chuẩn, độ dày 0.4mm, chịu lực tốt, chống oxy hóa.",
    specs: ["Độ dày: 0.4mm", "Chất liệu: Thép mạ kẽm", "Màu sắc: Đa dạng"],
  },
  {
    id: "la-cua-cuon-2",
    name: "Lá cửa cuốn 2",
    category: "la-nan",
    categoryLabel: "Lá Nan Cửa Cuốn",
    image: "/assets/images/lacuacuon2.png",
    shortDesc: "Lá nan nhôm cao cấp, bề mặt sơn tĩnh điện, chống phai màu theo thời gian.",
    specs: ["Độ dày: 0.6mm", "Chất liệu: Nhôm hợp kim", "Sơn tĩnh điện bền màu"],
  },
  {
    id: "la-cua-cuon-3",
    name: "Lá cửa cuốn 3",
    category: "la-nan",
    categoryLabel: "Lá Nan Cửa Cuốn",
    image: "/assets/images/lacuacuon3.png",
    shortDesc: "Lá nan thép mạ kẽm nhúng nóng, độ bền cao, phù hợp môi trường ẩm.",
    specs: ["Mạ kẽm nhúng nóng", "Chống ăn mòn cao", "Phù hợp ngoài trời"],
  },
  {
    id: "la-cua-cuon-4",
    name: "Lá cửa cuốn 4",
    category: "la-nan",
    categoryLabel: "Lá Nan Cửa Cuốn",
    image: "/assets/images/lacuacuon4.png",
    shortDesc: "Lá nan thép cường lực, tiết diện đặc biệt tăng khả năng chịu lực.",
    specs: ["Thép cường lực", "Tiết diện đặc biệt", "Chống biến dạng"],
  },

  // ===== CỬA CUỐN TẤM LIỀN =====
  {
    id: "cua-cuon-tam-lien-01",
    name: "Cửa Cuốn Tấm Liền 01",
    category: "tam-lien",
    categoryLabel: "Cửa Cuốn Tấm Liền",
    image: "/assets/images/cuacuon5.png",
    shortDesc: "Cửa cuốn tấm liền công nghệ Úc, bề mặt phẳng mịn, thẩm mỹ cao cấp.",
    specs: ["Công nghệ Úc", "Độ dày: 0.42mm", "Bề mặt phẳng mịn"],
  },
  {
    id: "cua-cuon-tam-lien-02",
    name: "Cửa Cuốn Tấm Liền 02",
    category: "tam-lien",
    categoryLabel: "Cửa Cuốn Tấm Liền",
    image: "/assets/images/cuacuon6.png",
    shortDesc: "Cửa cuốn tấm liền thép sơn tĩnh điện, đa dạng màu sắc theo yêu cầu.",
    specs: ["Sơn tĩnh điện", "20+ màu sắc", "Đặt theo yêu cầu"],
  },
  {
    id: "cua-cuon-tam-lien-03",
    name: "Cửa Cuốn Tấm Liền 03",
    category: "tam-lien",
    categoryLabel: "Cửa Cuốn Tấm Liền",
    image: "/assets/images/cuacuon7.png",
    shortDesc: "Cửa cuốn tấm liền cách âm cách nhiệt, phù hợp nhà phố và showroom.",
    specs: ["Cách âm, cách nhiệt", "Phù hợp nhà phố", "Độ bền cao"],
  },
  {
    id: "cua-cuon-tam-lien-04",
    name: "Cửa Cuốn Tấm Liền 04",
    category: "tam-lien",
    categoryLabel: "Cửa Cuốn Tấm Liền",
    image: "/assets/images/cuacuon8.png",
    shortDesc: "Cửa cuốn tấm liền công nghệ Đức, chịu lực vượt trội, bảo hành dài hạn.",
    specs: ["Công nghệ Đức", "Tải trọng cao", "Bảo hành 5 năm"],
  },

  // ===== CỬA CUỐN NHÔM KHE THOÁNG =====
  {
    id: "cua-cuon-khe-thoang-1",
    name: "Cửa cuốn khe thoáng 1",
    category: "khe-thoang",
    categoryLabel: "Cửa Cuốn Nhôm Khe Thoáng",
    image: "/assets/images/cuacuonkhethoang1.png",
    shortDesc: "Tư vấn miễn phí tận nơi. Bảo hành lâu dài. Giá cả cạnh tranh.",
    specs: ["Nhôm hợp kim cao cấp", "Khe thoáng thông gió", "Lắp đặt nhanh"],
  },
  {
    id: "cua-cuon-khe-thoang-2",
    name: "Cửa cuốn khe thoáng 2",
    category: "khe-thoang",
    categoryLabel: "Cửa Cuốn Nhôm Khe Thoáng",
    image: "/assets/images/cuacuonkhethoang2.png",
    shortDesc: "Tư vấn miễn phí tận nơi. Bảo hành lâu dài. Giá cả cạnh tranh.",
    specs: ["Khe thoáng rộng 20mm", "Chống tia UV", "Màu sắc đa dạng"],
  },
  {
    id: "cua-cuon-khe-thoang-3",
    name: "Cửa cuốn khe thoáng 3",
    category: "khe-thoang",
    categoryLabel: "Cửa Cuốn Nhôm Khe Thoáng",
    image: "/assets/images/cuacuongkhethoang3.png",
    shortDesc: "Tư vấn miễn phí tận nơi. Bảo hành lâu dài. Giá cả cạnh tranh.",
    specs: ["Hợp kim nhôm 6063", "Anodize bền màu", "Phù hợp garage, showroom"],
  },
  {
    id: "cua-cuon-khe-thoang-4",
    name: "Cửa cuốn khe thoáng 4",
    category: "khe-thoang",
    categoryLabel: "Cửa Cuốn Nhôm Khe Thoáng",
    image: "/assets/images/cuacuonkhethoang4.png",
    shortDesc: "Tư vấn miễn phí tận nơi. Bảo hành lâu dài. Giá cả cạnh tranh.",
    specs: ["Khe thoáng 30mm", "Nhôm đùn cao cấp", "Chống trộm tốt"],
  },

  // ===== CỬA CUỐN MẮC VÕNG =====
  {
    id: "mac-vong-1",
    name: "Mắc võng 1",
    category: "mac-vong",
    categoryLabel: "Cửa Cuốn Mắc Võng",
    image: "/assets/images/macvong1.png",
    shortDesc: "Tư vấn miễn phí tận nơi. Bảo hành lâu dài. Giá cả cạnh tranh.",
    specs: ["Lá nan dạng mắc võng", "Thông thoáng tối đa", "Nhôm hợp kim"],
  },
  {
    id: "mac-vong-2",
    name: "Mắc võng 2",
    category: "mac-vong",
    categoryLabel: "Cửa Cuốn Mắc Võng",
    image: "/assets/images/macvong2.png",
    shortDesc: "Tư vấn miễn phí tận nơi. Bảo hành lâu dài. Giá cả cạnh tranh.",
    specs: ["Thiết kế mắc võng độc đáo", "Thẩm mỹ cao", "Vận hành êm ái"],
  },
  {
    id: "mac-vong-3",
    name: "Mắc võng 3",
    category: "mac-vong",
    categoryLabel: "Cửa Cuốn Mắc Võng",
    image: "/assets/images/macvong3.png",
    shortDesc: "Tư vấn miễn phí tận nơi. Bảo hành lâu dài. Giá cả cạnh tranh.",
    specs: ["Vật liệu nhôm nguyên khối", "Thẩm mỹ cao", "Bảo hành 5 năm"],
  },

  // ===== CỬA CUỐN SONG NGANG =====
  {
    id: "song-ngang-1",
    name: "Song ngang 1",
    category: "song-ngang",
    categoryLabel: "Cửa Cuốn Song Ngang",
    image: "/assets/images/songngang1.png",
    shortDesc: "Tư vấn miễn phí tận nơi. Bảo hành lâu dài. Giá cả cạnh tranh.",
    specs: ["Thanh ngang inox 304", "Chống gỉ bền bỉ", "Thiết kế sang trọng"],
  },
  {
    id: "song-ngang-2",
    name: "Song ngang 2",
    category: "song-ngang",
    categoryLabel: "Cửa Cuốn Song Ngang",
    image: "/assets/images/songngang2.png",
    shortDesc: "Tư vấn miễn phí tận nơi. Bảo hành lâu dài. Giá cả cạnh tranh.",
    specs: ["Song ngang phi 20", "Sơn tĩnh điện cao cấp", "Phù hợp cổng villa"],
  },
  {
    id: "cua-cuon-song-ngang",
    name: "Cửa cuốn song ngang",
    category: "song-ngang",
    categoryLabel: "Cửa Cuốn Song Ngang",
    image: "/assets/images/cuacuonsongngang.png",
    shortDesc: "Tư vấn miễn phí tận nơi. Bảo hành lâu dài. Giá cả cạnh tranh.",
    specs: ["Thiết kế song ngang tiêu chuẩn", "Cứng cáp, an toàn", "Bảo hành 3 năm"],
  },

  // ===== INOX =====
  {
    id: "cua-cuon-mac-vong-song-ngang-inox",
    name: "Cửa Cuốn Mắc Võng & Song Ngang Inox",
    category: "inox",
    categoryLabel: "Cửa Cuốn Inox",
    image: "/assets/images/macvong3.png",
    shortDesc: "Làm từ Inox 304 siêu bền, thiết kế sang trọng, chống ăn mòn tuyệt đối.",
    specs: ["Inox 304 siêu bền", "Chống ăn mòn 100%", "Bảo hành 10 năm"],
  },

  // ===== CÔNG NGHỆ ÚC =====
  {
    id: "cua-cuon-cong-nghe-uc-tam-lien",
    name: "Cửa Cuốn Công Nghệ Úc Tấm Liền",
    category: "tam-lien",
    categoryLabel: "Cửa Cuốn Tấm Liền",
    image: "/assets/images/cuacuon18.png",
    shortDesc: "Mã sản phẩm: Tấm liền công nghệ Úc. Độ dày từ 0.42mm, bề mặt phẳng, thẩm mỹ cực cao.",
    specs: ["Độ dày từ 0.42mm", "Công nghệ cán nguội Úc", "Bề mặt siêu phẳng", "Chống ồn tốt"],
  },
];

export const productCategories = [
  { id: "all", label: "Tất Cả" },
  { id: "tam-lien", label: "Cửa Cuốn Tấm Liền" },
  { id: "khe-thoang", label: "Nhôm Khe Thoáng" },
  { id: "mac-vong", label: "Cửa Mắc Võng" },
  { id: "song-ngang", label: "Song Ngang" },
  { id: "inox", label: "Inox" },
  { id: "la-nan", label: "Lá Nan" },
];
