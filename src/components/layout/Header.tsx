"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

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
      <div className="flex items-center gap-3">
        <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary-container to-yellow-600 shadow-md border border-white/20 shrink-0">
          <span className="material-symbols-outlined text-white text-2xl md:text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>roofing</span>
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface leading-none" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Việt <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-yellow-600">Đức</span>
          </span>
          <span className="text-xs font-medium tracking-wide text-on-surface-variant mt-1 leading-none">Hệ Thống Cửa Cuốn</span>
        </div>
      </div>
      
      <ul className="hidden md:flex lg:flex gap-4 lg:gap-8 xl:gap-12">
        <li><Link className={getLinkClasses("/")} href="/">Trang Chủ</Link></li>
        <li><Link className={getLinkClasses("/gioi-thieu")} href="/gioi-thieu">Giới Thiệu</Link></li>
        <li><Link className={getLinkClasses("/dich-vu")} href="/dich-vu">Dịch Vụ</Link></li>
        <li><Link className={getLinkClasses("/san-pham")} href="/san-pham">Sản Phẩm</Link></li>
        <li><Link className={getLinkClasses("/bai-viet")} href="/bai-viet">Bài Viết</Link></li>
        <li><Link className={getLinkClasses("/lien-he")} href="/lien-he">Liên Hệ</Link></li>
      </ul>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <a className="hidden sm:flex items-center gap-2 bg-primary-container text-on-primary px-4 py-2 md:px-6 md:py-3 rounded-full font-label-md text-label-md hover:bg-primary transition-colors whitespace-nowrap" href="tel:0982674327">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
          Hotline
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
