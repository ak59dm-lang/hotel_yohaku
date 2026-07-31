document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // Hero Swiper の初期化
    // ==========================================
    const swiper = new Swiper(".heroSwiper", {
        // 基本設定
        direction: "horizontal",
        loop: true,
        speed: 2000, // 2秒かけてじんわり切り替わる

        // 自動再生（Autoplay)
        autoplay: {
            delay: 4000, // 4秒ごとに次の写真へ
            disableOnInteraction: false, // ユーザーが操作しても自動再生を継続
        },

        // 切り替えエフェクト（ふんわり切り替わるフェード）
        effect: "fade",
        fadeEffect: {
            crossFade: true, // 前の画像を綺麗に透かしながら切り替え
        },
    });
});
