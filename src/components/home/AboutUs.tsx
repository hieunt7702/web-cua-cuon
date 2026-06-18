import Link from "next/link";

export function AboutUs() {
  return (
    <section className="py-20 bg-[#000000] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-5/12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Cửa cuốn Việt Đức</h2>
            
            <div className="space-y-6 text-gray-300 text-sm lg:text-base leading-relaxed text-justify">
              <p>
                Chúng tôi tự hào sở hữu đội ngũ nòng cốt bao gồm các kỹ sư xây dựng giàu kinh nghiệm cùng lực lượng thợ kỹ thuật lành nghề, được tuyển chọn và đào tạo bài bản, am hiểu sâu sắc về mọi loại cửa cuốn. Với bề dày hoạt động tích lũy qua hơn một thập kỷ (hơn 10 năm), Cửa Cuốn Việt Đức đã vững vàng khẳng định năng lực vượt trội trong lĩnh vực cung cấp dịch vụ sửa chữa chuyên sâu, khắc phục mọi sự cố kỹ thuật phức tạp, đồng thời chuyên nghiệp trong việc tư vấn và lắp đặt các hệ thống cửa cuốn mới hiện đại, luôn đảm bảo đạt tiêu chuẩn chất lượng và an toàn cao nhất.
              </p>
              <p>
                Tại Cửa Cuốn Việt Đức, chúng tôi không chỉ đơn thuần là nhà cung cấp dịch vụ; chúng tôi mang đến những giải pháp toàn diện, tối ưu và hiệu quả nhất cho mọi vấn đề về cửa cuốn của bạn. Đội ngũ của chúng tôi không chỉ chuyên nghiệp trong phong cách làm việc mà còn sở hữu tay nghề đã được kiểm chứng qua thời gian dài thực tế. Chúng tôi luôn sẵn sàng tiếp nhận và cam kết đáp ứng mọi yêu cầu khắt khe từ quý khách hàng, bất kể quy mô công việc, từ những công trình nhà ở dân dụng nhỏ lẻ cho đến các dự án công nghiệp, thương mại đòi hỏi kỹ thuật lắp đặt và xử lý phức tạp. Mục tiêu cuối cùng và xuyên suốt của chúng tôi là mang lại sự an tâm tuyệt đối, tiện lợi tối đa và sự hài lòng trọn vẹn cho mọi khách hàng đã tin tưởng lựa chọn dịch vụ của Cửa Cuốn Việt Đức.
              </p>
            </div>

            <div className="mt-8">
              <a href="tel:0961685345" className="inline-flex items-center gap-2 bg-[#00d65a] hover:bg-[#00c853] text-white font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-[#00d65a]/20">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                GỌI THỢ NGAY
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="w-full lg:w-7/12 relative mt-4 lg:mt-0">
             {/* Decorative shapes behind image */}
             <div className="absolute -top-6 -left-6 lg:-top-10 lg:-left-10 bg-[#a7f3d0] w-2/3 h-20 -z-10 rounded-sm"></div>
             <div className="absolute -top-6 -right-6 lg:-top-10 lg:-right-4 bg-[#00d65a] w-32 h-24 transform skew-x-12 -z-10 rounded-sm"></div>
             
             {/* Main Image Container */}
             <div className="relative z-10 bg-transparent rounded shadow-2xl overflow-hidden scale-100 lg:scale-110 origin-right lg:origin-center transition-transform">
               <img 
                 src="/assets/images/about-us.png" 
                 alt="Cửa Cuốn Việt Đức" 
                 className="w-full h-auto object-cover"
               />
               
               {/* Decorative dots */}
               <div className="absolute bottom-4 right-4 grid grid-cols-4 gap-2">
                 {[...Array(16)].map((_, i) => (
                   <div key={i} className="w-1.5 h-1.5 bg-white/80 rounded-full"></div>
                 ))}
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
