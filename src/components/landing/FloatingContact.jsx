import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  PhoneFilled,
  MessageFilled,
  ThunderboltFilled,
  UpOutlined,
  CloseOutlined,
  CustomerServiceFilled,
} from '@ant-design/icons';
import { CONTACT } from '@/utils/contact';

/**
 * Cụm nút liên hệ nổi (điểm chạm luôn hiện diện): Zalo, Hotline, Messenger, Đăng ký dùng thử.
 * Kèm bong bóng mời chat tự bật sau vài giây và nút lên đầu trang.
 */
const FloatingContact = ({ onOpenTrial }) => {
  const [open, setOpen] = useState(false);
  const [bubble, setBubble] = useState(false);
  const [bubbleDismissed, setBubbleDismissed] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Bong bóng mời tư vấn: hiện sau 6s, tự ẩn sau 12s
  useEffect(() => {
    if (bubbleDismissed) return undefined;
    const show = setTimeout(() => setBubble(true), 6000);
    const hide = setTimeout(() => setBubble(false), 18000);
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, [bubbleDismissed]);

  const actions = [
    {
      id: 'zalo',
      label: 'Chat Zalo tư vấn',
      href: CONTACT.zaloUrl,
      external: true,
      icon: <span className="font-black text-[13px] leading-none">Zalo</span>,
      color: 'bg-[#0068ff]',
    },
    {
      id: 'hotline',
      label: `Gọi ${CONTACT.hotlineDisplay}`,
      href: CONTACT.hotlineHref,
      icon: <PhoneFilled />,
      color: 'bg-emerald-500',
    },
    ...(CONTACT.messengerUrl
      ? [
          {
            id: 'messenger',
            label: 'Chat Messenger',
            href: CONTACT.messengerUrl,
            external: true,
            icon: <MessageFilled />,
            color: 'bg-gradient-to-tr from-[#0099ff] to-[#a033ff]',
          },
        ]
      : []),
    {
      id: 'trial',
      label: 'Đăng ký dùng thử 14 ngày',
      onClick: () => onOpenTrial && onOpenTrial(),
      icon: <ThunderboltFilled />,
      color: 'bg-amber-500',
    },
  ];

  const itemClass = (color) =>
    `w-12 h-12 rounded-full ${color} text-white text-xl flex items-center justify-center shadow-lg shadow-black/20 hover:scale-110 transition-transform cursor-pointer border-0 no-underline`;

  return (
    <div className="fixed right-4 bottom-24 lg:bottom-6 z-[60] flex flex-col items-end gap-3">
      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            key="top"
            id="btn-back-to-top"
            aria-label="Lên đầu trang"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded-full bg-white text-[#139091] border border-teal-100 shadow-md flex items-center justify-center cursor-pointer hover:bg-teal-50"
          >
            <UpOutlined />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat invitation bubble */}
      <AnimatePresence>
        {bubble && !open && (
          <motion.div
            key="bubble"
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            className="relative max-w-[230px] bg-white rounded-2xl rounded-br-sm shadow-xl border border-teal-100 px-4 py-3 text-sm text-gray-700"
          >
            <button
              aria-label="Đóng lời mời tư vấn"
              onClick={() => {
                setBubble(false);
                setBubbleDismissed(true);
              }}
              className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-gray-200 hover:bg-gray-300 text-[10px] text-gray-600 flex items-center justify-center border-0 cursor-pointer"
            >
              <CloseOutlined />
            </button>
            <strong className="block text-[#139091]">Chào chủ shop 👋</strong>
            Bạn muốn xem demo nhắc mua bỉm sữa tự động? Nhắn MobyFlow ngay nhé!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Speed-dial actions */}
      <AnimatePresence>
        {open &&
          actions.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 16, scale: 0.6 }}
              animate={{ opacity: 1, y: 0, scale: 1, transition: { delay: (actions.length - i) * 0.05 } }}
              exit={{ opacity: 0, y: 16, scale: 0.6 }}
              className="flex items-center gap-2"
            >
              <span className="hidden sm:inline-block bg-white text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-md whitespace-nowrap">
                {a.label}
              </span>
              {a.href ? (
                <a
                  id={`float-${a.id}`}
                  href={a.href}
                  aria-label={a.label}
                  {...(a.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className={itemClass(a.color)}
                >
                  {a.icon}
                </a>
              ) : (
                <button
                  id={`float-${a.id}`}
                  aria-label={a.label}
                  onClick={() => {
                    setOpen(false);
                    a.onClick();
                  }}
                  className={itemClass(a.color)}
                >
                  {a.icon}
                </button>
              )}
            </motion.div>
          ))}
      </AnimatePresence>

      {/* Main toggle with pulse ring */}
      <button
        id="btn-floating-contact"
        aria-label={open ? 'Đóng menu liên hệ' : 'Mở menu liên hệ'}
        aria-expanded={open}
        onClick={() => {
          setOpen((v) => !v);
          setBubble(false);
          setBubbleDismissed(true);
        }}
        className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-[#139091] to-teal-600 text-white text-2xl flex items-center justify-center shadow-xl shadow-teal-700/40 border-0 cursor-pointer"
      >
        {!open && <span className="absolute inset-0 rounded-full bg-[#139091] opacity-60 animate-ping" />}
        <span className="relative">{open ? <CloseOutlined /> : <CustomerServiceFilled />}</span>
      </button>
    </div>
  );
};

export default FloatingContact;

