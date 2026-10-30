/**
 * Cấu hình các "điểm chạm" liên hệ của MobyFlow.
 * Có thể ghi đè bằng biến môi trường trong client/.env.local:
 *   NEXT_PUBLIC_HOTLINE=0941234116
 *   NEXT_PUBLIC_ZALO_URL=https://zalo.me/xxxxxxxxxx   (link Zalo OA / Zalo cá nhân)
 *   NEXT_PUBLIC_MESSENGER_URL=https://m.me/ten-fanpage
 */
const HOTLINE_RAW = process.env.NEXT_PUBLIC_HOTLINE || '0941234116';

export const CONTACT = {
  hotline: HOTLINE_RAW,
  hotlineDisplay: HOTLINE_RAW.replace(/^(\d{3})(\d{4})(\d{3,4})$/, '$1 $2 $3'),
  hotlineHref: `tel:${HOTLINE_RAW}`,
  zaloUrl: process.env.NEXT_PUBLIC_ZALO_URL || `https://zalo.me/${HOTLINE_RAW}`,
  messengerUrl: process.env.NEXT_PUBLIC_MESSENGER_URL || '',
};

