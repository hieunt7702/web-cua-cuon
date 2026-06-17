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
    id: "la-cua-cuon-01",
    name: "Lá Cửa Cuốn 01",
    category: "la-nan",
    categoryLabel: "Lá Nan Cửa Cuốn",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    shortDesc: "Lá nan cửa cuốn chuẩn, độ dày 0.4mm, chịu lực tốt, chống oxy hóa.",
    specs: ["Độ dày: 0.4mm", "Chất liệu: Thép mạ kẽm", "Màu sắc: Đa dạng"],
  },
  {
    id: "la-cua-cuon-02",
    name: "Lá Cửa Cuốn 02",
    category: "la-nan",
    categoryLabel: "Lá Nan Cửa Cuốn",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    shortDesc: "Lá nan nhôm cao cấp, bề mặt sơn tĩnh điện, chống phai màu theo thời gian.",
    specs: ["Độ dày: 0.6mm", "Chất liệu: Nhôm hợp kim", "Sơn tĩnh điện bền màu"],
  },
  {
    id: "la-cua-cuon-03",
    name: "Lá Cửa Cuốn 03",
    category: "la-nan",
    categoryLabel: "Lá Nan Cửa Cuốn",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
    shortDesc: "Lá nan thép mạ kẽm nhúng nóng, độ bền cao, phù hợp môi trường ẩm.",
    specs: ["Mạ kẽm nhúng nóng", "Chống ăn mòn cao", "Phù hợp ngoài trời"],
  },
  {
    id: "la-cua-cuon-04",
    name: "Lá Cửa Cuốn 04",
    category: "la-nan",
    categoryLabel: "Lá Nan Cửa Cuốn",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    shortDesc: "Lá nan thép cường lực, tiết diện đặc biệt tăng khả năng chịu lực và chống uốn cong.",
    specs: ["Thép cường lực", "Tiết diện đặc biệt", "Chống biến dạng"],
  },

  // ===== CỬA CUỐN TẤM LIỀN =====
  {
    id: "cua-cuon-tam-lien-01",
    name: "Cửa Cuốn Tấm Liền 01",
    category: "tam-lien",
    categoryLabel: "Cửa Cuốn Tấm Liền",
    image: "https://images.unsplash.com/photo-1564540583246-934409427776?w=600&q=80",
    shortDesc: "Cửa cuốn tấm liền công nghệ Úc, bề mặt phẳng mịn, thẩm mỹ cao cấp.",
    specs: ["Công nghệ Úc", "Độ dày: 0.42mm", "Bề mặt phẳng mịn"],
  },
  {
    id: "cua-cuon-tam-lien-02",
    name: "Cửa Cuốn Tấm Liền 02",
    category: "tam-lien",
    categoryLabel: "Cửa Cuốn Tấm Liền",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80",
    shortDesc: "Cửa cuốn tấm liền thép sơn tĩnh điện, đa dạng màu sắc theo yêu cầu.",
    specs: ["Sơn tĩnh điện", "20+ màu sắc", "Đặt theo yêu cầu"],
  },
  {
    id: "cua-cuon-tam-lien-03",
    name: "Cửa Cuốn Tấm Liền 03",
    category: "tam-lien",
    categoryLabel: "Cửa Cuốn Tấm Liền",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    shortDesc: "Cửa cuốn tấm liền cách âm cách nhiệt, phù hợp nhà phố và showroom.",
    specs: ["Cách âm, cách nhiệt", "Phù hợp nhà phố", "Độ bền cao"],
  },
  {
    id: "cua-cuon-tam-lien-04",
    name: "Cửa Cuốn Tấm Liền 04",
    category: "tam-lien",
    categoryLabel: "Cửa Cuốn Tấm Liền",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
    shortDesc: "Cửa cuốn tấm liền công nghệ Đức, chịu lực vượt trội, bảo hành dài hạn.",
    specs: ["Công nghệ Đức", "Tải trọng cao", "Bảo hành 5 năm"],
  },

  // ===== CỬA CUỐN NHÔM KHE THOÁNG =====
  {
    id: "cua-cuon-nhom-khe-thoang-01",
    name: "Cửa Cuốn Nhôm Khe Thoáng 01",
    category: "khe-thoang",
    categoryLabel: "Cửa Cuốn Nhôm Khe Thoáng",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    shortDesc: "Tư vấn miễn phí tận nơi. Bảo hành lâu dài. Giá cả cạnh tranh. Thợ chuyên nghiệp.",
    specs: ["Nhôm hợp kim cao cấp", "Khe thoáng thông gió", "Lắp đặt nhanh"],
  },
  {
    id: "cua-cuon-nhom-khe-thoang-02",
    name: "Cửa Cuốn Nhôm Khe Thoáng 02",
    category: "khe-thoang",
    categoryLabel: "Cửa Cuốn Nhôm Khe Thoáng",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&q=80",
    shortDesc: "Tư vấn miễn phí tận nơi. Bảo hành lâu dài. Giá cả cạnh tranh. Thợ chuyên nghiệp.",
    specs: ["Khe thoáng rộng 20mm", "Chống tia UV", "Màu sắc đa dạng"],
  },
  {
    id: "cua-cuon-nhom-khe-thoang-03",
    name: "Cửa Cuốn Nhôm Khe Thoáng 03",
    category: "khe-thoang",
    categoryLabel: "Cửa Cuốn Nhôm Khe Thoáng",
    image: "https://images.unsplash.com/photo-1564540583246-934409427776?w=600&q=80",
    shortDesc: "Tư vấn miễn phí tận nơi. Bảo hành lâu dài. Giá cả cạnh tranh. Thợ chuyên nghiệp.",
    specs: ["Hợp kim nhôm 6063", "Anodize bền màu", "Phù hợp garage, showroom"],
  },
  {
    id: "cua-cuon-nhom-khe-thoang-04",
    name: "Cửa Cuốn Nhôm Khe Thoáng 04",
    category: "khe-thoang",
    categoryLabel: "Cửa Cuốn Nhôm Khe Thoáng",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    shortDesc: "Tư vấn miễn phí tận nơi. Bảo hành lâu dài. Giá cả cạnh tranh. Thợ chuyên nghiệp.",
    specs: ["Khe thoáng 30mm", "Nhôm đùn cao cấp", "Chống trộm tốt"],
  },

  // ===== CỬA CUỐN MẮC VÕNG =====
  {
    id: "cua-cuon-mac-vong-01",
    name: "Cửa Cuốn Mắc Võng 01",
    category: "mac-vong",
    categoryLabel: "Cửa Cuốn Mắc Võng",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    shortDesc: "Tư vấn miễn phí tận nơi. Bảo hành lâu dài. Giá cả cạnh tranh. Thợ chuyên nghiệp.",
    specs: ["Lá nan dạng mắc võng", "Thông thoáng tối đa", "Nhôm hợp kim"],
  },
  {
    id: "cua-cuon-mac-vong-02",
    name: "Cửa Cuốn Mắc Võng 02",
    category: "mac-vong",
    categoryLabel: "Cửa Cuốn Mắc Võng",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    shortDesc: "Tư vấn miễn phí tận nơi. Bảo hành lâu dài. Giá cả cạnh tranh. Thợ chuyên nghiệp.",
    specs: ["Thiết kế mắc võng độc đáo", "Thẩm mỹ cao", "Vận hành êm ái"],
  },

  // ===== CỬA CUỐN SONG NGANG =====
  {
    id: "cua-cuon-song-ngang-1",
    name: "Cửa Cuốn Song Ngang 1",
    category: "song-ngang",
    categoryLabel: "Cửa Cuốn Song Ngang",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
    shortDesc: "Tư vấn miễn phí tận nơi. Bảo hành lâu dài. Giá cả cạnh tranh. Thợ chuyên nghiệp.",
    specs: ["Thanh ngang inox 304", "Chống gỉ bền bỉ", "Thiết kế sang trọng"],
  },
  {
    id: "cua-cuon-song-ngang-2",
    name: "Cửa Cuốn Song Ngang 2",
    category: "song-ngang",
    categoryLabel: "Cửa Cuốn Song Ngang",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80",
    shortDesc: "Tư vấn miễn phí tận nơi. Bảo hành lâu dài. Giá cả cạnh tranh. Thợ chuyên nghiệp.",
    specs: ["Song ngang phi 20", "Sơn tĩnh điện cao cấp", "Phù hợp cổng villa"],
  },

  // ===== INOX =====
  {
    id: "cua-cuon-mac-vong-song-ngang-inox",
    name: "Cửa Cuốn Mắc Võng & Song Ngang Inox",
    category: "inox",
    categoryLabel: "Cửa Cuốn Inox",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    shortDesc: "Làm từ Inox 304 siêu bền, thiết kế sang trọng, chống ăn mòn tuyệt đối.",
    specs: ["Inox 304 siêu bền", "Chống ăn mòn 100%", "Bảo hành 10 năm"],
  },

  // ===== CÔNG NGHỆ ÚC =====
  {
    id: "cua-cuon-cong-nghe-uc-tam-lien",
    name: "Cửa Cuốn Công Nghệ Úc Tấm Liền",
    category: "tam-lien",
    categoryLabel: "Cửa Cuốn Tấm Liền",
    image: "https://images.unsplash.com/photo-1564540583246-934409427776?w=600&q=80",
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
