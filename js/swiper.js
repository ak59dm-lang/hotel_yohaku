document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // Hero Swiper の初期化
    // ==========================================
    const swiper = new Swiper(".heroSwiper", {
        // 基本設定
        direction: "horizontal",
        loop: true,
        speed: 1200, // ★ 2000 (2秒) から 1200 (1.2秒) に変更（フェード切替を少し速く）

        // 自動再生（Autoplay)
        autoplay: {
            delay: 3000, // ★ 4000 (4秒) から 3000 (3秒) に変更（表示時間を少し短縮）
            disableOnInteraction: false, // ユーザーが操作しても自動再生を継続
        },

        // 切り替えエフェクト（ふんわり切り替わるフェード）
        effect: "fade",
        fadeEffect: {
            crossFade: true, // 前の画像を綺麗に透かしながら切り替え
        },
    });
});