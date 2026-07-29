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
        const starCount = 30; // フッターがコンパクトになったため少し控えめに調整
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

    // 2. ページ全体のスクロール量に応じた状態更新
    function updateFooterState() {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const currentScroll = window.scrollY;

        let progress = 0;
        if (scrollHeight > 0) {
            progress = Math.min(Math.max(currentScroll / scrollHeight, 0), 1);
        }

        // 朝 (0〜0.35) -> 夕 (0.35〜0.7) -> 夜 (0.7〜1.0)
        if (progress < 0.35) {
            sticky.style.backgroundColor = "var(--color-base)";
            content.style.color = "var(--color-text)";
            starField.style.opacity = "0";
        } else if (progress >= 0.35 && progress < 0.7) {
            sticky.style.backgroundColor = "var(--color-accent)";
            content.style.color = "var(--color-text)";
            starField.style.opacity = "0.2";
        } else {
            sticky.style.backgroundColor = "var(--color-sub)";
            content.style.color = "var(--color-base)";
            starField.style.opacity = "1";
        }
    }

    window.addEventListener("scroll", updateFooterState, { passive: true });
    window.addEventListener("resize", updateFooterState);
    updateFooterState();
});