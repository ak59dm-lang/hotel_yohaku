/**
 * フッターデザイン制御スクリプト
 */

document.addEventListener("DOMContentLoaded", () => {
    const sticky = document.getElementById("footerSticky");
    const starField = document.getElementById("starField");
    const content = document.getElementById("footerContent");

    if (!sticky || !starField || !content) return;

    // 1. 星々の自動生成
    function createStars() {
        starField.innerHTML = "";
        const starCount = 30; // フッター用に少し控えめに調整
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement("div");
            const size = Math.random() * 2 + 1;

            star.style.position = "absolute";
            star.style.top = `${Math.random() * 60}%`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.backgroundColor = "#FFFFFF";
            star.style.borderRadius = "50%";
            star.style.opacity = Math.random() * 0.7 + 0.3;
            star.style.boxShadow = "0 0 4px rgba(255,255,255,0.8)";
            star.style.animation = `starBlink ${Math.random() * 3 + 2}s infinite ease-in-out`;

            starField.appendChild(star);
        }
    }
    createStars();

    // 2. ページ全体のスクロール量に応じた状態更新（統一カラー設定）
    function updateFooterState() {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const currentScroll = window.scrollY;

        let progress = 0;
        if (scrollHeight > 0) {
            progress = Math.min(Math.max(currentScroll / scrollHeight, 0), 1);
        }

        // 朝 (0〜0.35) -> 夕 (0.35〜0.7) -> 夜 (0.7〜1.0)
        // CSS変数に頼らずカラーコードを統一して全ページの挙動を揃えます
        if (progress < 0.35) {
            // 朝：ベースカラー背景 & ダークテキスト
            sticky.style.backgroundColor = "#f4f1ea";
            content.style.color = "#31312f";
            starField.style.opacity = "0";
        } else if (progress >= 0.35 && progress < 0.7) {
            // 夕方：青銀色アクセント背景 & ホワイトテキスト
            sticky.style.backgroundColor = "#647986";
            content.style.color = "#ffffff";
            starField.style.opacity = "0.2";
        } else {
            // 夜：落ち着いたメイングレー背景 & アイボリーテキスト
            sticky.style.backgroundColor = "#31312f";
            content.style.color = "#f4f1ea";
            starField.style.opacity = "1";
        }
    }

    window.addEventListener("scroll", updateFooterState, { passive: true });
    window.addEventListener("resize", updateFooterState);
    updateFooterState();
});
