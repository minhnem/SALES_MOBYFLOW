import React, { useEffect, useRef, useState } from 'react';

/**
 * Hiệu ứng chữ "rise + blur" từng ký tự (mô phỏng cách dabilux.com reveal tiêu đề):
 * mỗi chữ cái trượt lên 0.72em, từ mờ (blur 14px) về nét, lệch nhau 32ms.
 * Chạy khi tiêu đề xuất hiện trong khung nhìn (hoặc ngay lập tức nếu `immediate`).
 *
 * Lưu ý: không dùng bên trong phần tử có `bg-clip-text` (gradient text) vì transform/filter
 * trên từng ký tự sẽ làm gradient bị mất; hãy dùng màu đặc cho phần nhấn.
 *
 * Props:
 *  - text: chuỗi cần hiệu ứng
 *  - startDelay: giây, trì hoãn trước khi bắt đầu
 *  - flash: true để mỗi ký tự "nháy" màu nhấn (amber) lúc xuất hiện
 *  - immediate: chạy ngay khi mount thay vì chờ cuộn tới
 */
const RevealText = ({ text, startDelay = 0, className = '', flash = false, immediate = false }) => {
  const ref = useRef(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (immediate || typeof IntersectionObserver === 'undefined') {
      setPlay(true);
      return undefined;
    }
    const el = ref.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlay(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [immediate]);

  let index = 0;
  const words = text.normalize('NFC').split(' ');

  return (
    <span
      ref={ref}
      aria-label={text}
      className={`rl ${play ? 'rl-play' : ''} ${flash ? 'rl-flash' : ''} ${className}`}
      style={{ '--d': `${startDelay}s` }}
    >
      {words.map((word, wi) => (
        <React.Fragment key={`${word}-${wi}`}>
          <span aria-hidden="true" className="rl-word">
            {Array.from(word).map((ch, ci) => (
              <span key={ci} className="rl-letter" style={{ '--i': index++ }}>
                {ch}
              </span>
            ))}
          </span>
          {wi < words.length - 1 ? ' ' : ''}
        </React.Fragment>
      ))}
    </span>
  );
};

export default RevealText;
