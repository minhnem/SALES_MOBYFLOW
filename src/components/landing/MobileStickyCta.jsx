import React, { useEffect, useState } from 'react';
import { PhoneFilled, ThunderboltFilled } from '@ant-design/icons';
import { CONTACT } from '@/utils/contact';

/** Thanh CTA dính đáy màn hình trên mobile: Gọi / Zalo / Dùng thử. Hiện sau khi cuộn qua hero. */
const MobileStickyCta = ({ onOpenTrial }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`lg:hidden fixed inset-x-0 bottom-0 z-50 bg-white/95 backdrop-blur border-t border-gray-200 px-3 py-2.5 flex items-center gap-2 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <a
        id="sticky-call"
        href={CONTACT.hotlineHref}
        aria-label="Gọi hotline"
        className="w-11 h-11 shrink-0 rounded-xl bg-emerald-500 text-white flex items-center justify-center text-lg"
      >
        <PhoneFilled />
      </a>
      <a
        id="sticky-zalo"
        href={CONTACT.zaloUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Zalo"
        className="w-11 h-11 shrink-0 rounded-xl bg-[#0068ff] text-white flex items-center justify-center text-xs font-black"
      >
        Zalo
      </a>
      <button
        id="sticky-trial"
        onClick={() => onOpenTrial && onOpenTrial()}
        className="btn-shine flex-1 h-11 rounded-xl bg-gradient-to-r from-[#139091] to-teal-700 text-white font-bold text-sm border-0 cursor-pointer flex items-center justify-center gap-2"
      >
        <ThunderboltFilled /> Dùng thử miễn phí 14 ngày
      </button>
    </div>
  );
};

export default MobileStickyCta;

