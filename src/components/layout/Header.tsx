"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const getLinkClasses = (path: string) => {
    const isActive = pathname === path;
    if (isActive) {
      return "text-label-md font-label-md text-primary-container border-b-2 border-primary-container pb-1 opacity-80 transition-opacity";
    }
    return "text-label-md font-label-md text-on-surface-variant hover:text-primary-container transition-colors duration-200";
  };

  const getMobileLinkClasses = (path: string) => {
    const isActive = pathname === path;
    if (isActive) {
      return "text-headline-md font-bold text-primary flex items-center gap-4 w-full px-8 py-4 bg-primary-container/10 rounded-2xl";
    }
    return "text-headline-md font-medium text-on-surface-variant flex items-center gap-4 w-full px-8 py-4 hover:bg-surface-container-high rounded-2xl transition-colors duration-200";
  };

  return (
    <nav className="bg-surface shadow-sm fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 border-b border-surface-variant">
      <Link href="/" className="flex items-center w-48 md:w-64 shrink-0">
        <img src="/assets/images/logo.png" alt="Cửa cuốn Việt Đức Logo" className="h-14 md:h-16 w-auto object-contain scale-[2.5] origin-left -ml-10 md:-ml-16" />
      </Link>

      <ul className="hidden md:flex lg:flex gap-4 lg:gap-8 xl:gap-12">
        <li><Link className={getLinkClasses("/")} href="/">Trang Chủ</Link></li>
        <li><Link className={getLinkClasses("/gioi-thieu")} href="/gioi-thieu">Giới Thiệu</Link></li>
        <li><Link className={getLinkClasses("/dich-vu")} href="/dich-vu">Dịch Vụ</Link></li>
        <li><Link className={getLinkClasses("/san-pham")} href="/san-pham">Sản Phẩm</Link></li>
        <li><Link className={getLinkClasses("/bai-viet")} href="/bai-viet">Bài Viết</Link></li>
        <li><Link className={getLinkClasses("/lien-he")} href="/lien-he">Liên Hệ</Link></li>
      </ul>

      <div className="flex items-center gap-4">
        <a className="hidden sm:flex items-center gap-2 bg-primary-container text-on-primary px-4 py-1.5 md:px-5 md:py-2 rounded-[12px] font-label-md text-label-md hover:bg-primary transition-colors whitespace-nowrap" href="tel:0982674327">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
          098.267.4327
        </a>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-primary-container p-2 -mr-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined text-4xl">{isMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full h-[calc(100vh-80px)] bg-surface border-t border-surface-variant shadow-2xl md:hidden flex flex-col py-8 z-40 overflow-y-auto px-6">
          <div className="flex flex-col gap-2 w-full">
            <Link onClick={() => setIsMenuOpen(false)} className={getMobileLinkClasses("/")} href="/">
              <span className="material-symbols-outlined text-3xl">home</span> Trang Chủ
            </Link>
            <Link onClick={() => setIsMenuOpen(false)} className={getMobileLinkClasses("/gioi-thieu")} href="/gioi-thieu">
              <span className="material-symbols-outlined text-3xl">info</span> Giới Thiệu
            </Link>
            <Link onClick={() => setIsMenuOpen(false)} className={getMobileLinkClasses("/dich-vu")} href="/dich-vu">
              <span className="material-symbols-outlined text-3xl">handyman</span> Dịch Vụ
            </Link>
            <Link onClick={() => setIsMenuOpen(false)} className={getMobileLinkClasses("/san-pham")} href="/san-pham">
              <span className="material-symbols-outlined text-3xl">inventory_2</span> Sản Phẩm
            </Link>
            <Link onClick={() => setIsMenuOpen(false)} className={getMobileLinkClasses("/bai-viet")} href="/bai-viet">
              <span className="material-symbols-outlined text-3xl">article</span> Bài Viết
            </Link>
            <Link onClick={() => setIsMenuOpen(false)} className={getMobileLinkClasses("/lien-he")} href="/lien-he">
              <span className="material-symbols-outlined text-3xl">contact_support</span> Liên Hệ
            </Link>
          </div>

          <div className="mt-12 flex flex-col w-full gap-4 pb-12">
            <a className="flex items-center justify-center gap-3 bg-primary-container text-on-primary px-6 py-5 rounded-2xl font-bold text-headline-sm hover:bg-primary transition-colors shadow-lg" href="tel:0982674327">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
              098.267.4327
            </a>
            <a href="https://zalo.me/0982674327" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-surface-container-high text-on-surface border border-surface-container-highest px-6 py-5 rounded-2xl font-bold text-headline-sm shadow-sm">
              <span className="material-symbols-outlined text-3xl text-blue-500">chat</span>
              Nhắn Tin Zalo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
