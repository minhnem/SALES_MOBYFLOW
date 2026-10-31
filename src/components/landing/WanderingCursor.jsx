import React, { useEffect, useState, useRef } from 'react';

/**
 * 4 Nút tương tác chính trong Hero:
 * 1. Dùng thử miễn phí 14 ngày (bên trái)
 * 2. Xem cách thức hoạt động (bên trái)
 * 3. Đặt lại sữa ngay (trong Zalo ZNS bên phải)
 * 4. Chat trực tiếp với Dược sĩ tư vấn (trong Zalo ZNS bên phải)
 */
const BUTTON_TARGETS = [
  'btn-hero-trial',
  'btn-hero-demo',
  'hero-zns-action-btn',
  'hero-zns-secondary-btn',
];

const WanderingCursor = ({ containerRef }) => {
  const [cursor, setCursor] = useState({
    x: -100,
    y: -100,
    visible: false,
    clicking: false,
  });

  const currentIndexRef = useRef(0);
  const timerChainRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    let isMounted = true;

    // Hàm tính toạ độ nút mục tiêu
    const getTargetCoordinates = (targetId) => {
      if (!containerRef?.current) return null;
      const el = document.getElementById(targetId);
      if (!el) return null;

      const elRect = el.getBoundingClientRect();
      const parentRect = containerRef.current.getBoundingClientRect();

      return {
        x: elRect.left - parentRect.left + elRect.width * 0.48,
        y: elRect.top - parentRect.top + elRect.height * 0.52,
      };
    };

    // Hàm di chuyển và bấm vào 1 nút
    const moveToButton = (index) => {
      if (!isMounted) return;

      const targetId = BUTTON_TARGETS[index];
      const coords = getTargetCoordinates(targetId);

      // Nếu nút chưa render xong, đợi 200ms thử lại
      if (!coords) {
        timerChainRef.current = setTimeout(() => moveToButton(index), 200);
        return;
      }

      currentIndexRef.current = index;

      // 1. Cập nhật vị trí -> Con trỏ lướt mượt đến nút (mất 1.2s theo CSS)
      setCursor({
        x: coords.x,
        y: coords.y,
        visible: true,
        clicking: false,
      });

      // 2. Sau 1.25s (khi đã tới tâm nút): Kích hoạt hiệu ứng bấm
      timerChainRef.current = setTimeout(() => {
        if (!isMounted) return;

        // Bật animation con trỏ nhún + sóng click
        setCursor((prev) => ({ ...prev, clicking: true }));

        // Cho nút lún nhẹ xuống để thấy phản hồi
        const el = document.getElementById(targetId);
        if (el) {
          el.classList.add('btn-simulated-active');
          setTimeout(() => el?.classList.remove('btn-simulated-active'), 400);
        }

        // 3. Sau 450ms: Kết thúc cú bấm
        timerChainRef.current = setTimeout(() => {
          if (!isMounted) return;
          setCursor((prev) => ({ ...prev, clicking: false }));

          // 4. Giữ lại tại nút 1.2s để người dùng kịp nhìn, rồi mới sang nút kế tiếp
          timerChainRef.current = setTimeout(() => {
            if (!isMounted) return;
            const nextIndex = (index + 1) % BUTTON_TARGETS.length;
            moveToButton(nextIndex);
          }, 1200);
        }, 450);
      }, 1250);
    };

    // Khởi động sau 600ms
    const initialStart = setTimeout(() => {
      moveToButton(0);
    }, 600);

    // Xử lý khi resize màn hình mà không làm reset chuỗi bấm
    const handleResize = () => {
      const targetId = BUTTON_TARGETS[currentIndexRef.current];
      const coords = getTargetCoordinates(targetId);
      if (coords) {
        setCursor((prev) => ({ ...prev, x: coords.x, y: coords.y }));
      }
    };
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      isMounted = false;
      clearTimeout(initialStart);
      clearTimeout(timerChainRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [containerRef]);

  if (!cursor.visible) return null;

  return (
    <div
      aria-hidden="true"
      className="wandering-cursor hidden md:block"
      style={{
        left: `${cursor.x}px`,
        top: `${cursor.y}px`,
        opacity: cursor.visible ? 1 : 0,
      }}
    >
      <div className={`cursor-inner ${cursor.clicking ? 'clicking' : ''}`}>
        <span className="cursor-click-ring" />
        <svg
          className="cursor-icon"
          viewBox="0 0 24 24"
          width="28"
          height="28"
          style={{ transform: cursor.clicking ? 'scale(0.88) translate(-2px, -2px)' : 'none' }}
        >
          <path
            d="M4 2l16 9.2-7 1.8-3.6 6.6L4 2z"
            fill="#139091"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
        <span className="cursor-label">
          MobyFlow
        </span>
      </div>
    </div>
  );
};

export default WanderingCursor;
