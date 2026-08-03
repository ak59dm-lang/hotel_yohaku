/* ==========================================
   01. ハンバーガーボタン & ドロワーメニュー制御
   ========================================== */
function initHamburgerMenu() {
    const menuBtn =
        document.querySelector(".header__menu-btn") || document.querySelector(".js-menu-btn");
    const drawer =
        document.querySelector(".header__drawer") || document.querySelector(".js-drawer");

    // デバッグ用ログ（DevToolsのConsoleで確認）
    console.log("menuBtn:", menuBtn);
    console.log("drawer:", drawer);

    if (menuBtn && drawer) {
        // 念のため既存のイベントを消して再登録
        menuBtn.onclick = function () {
            console.log("ボタンがクリックされました！");
            menuBtn.classList.toggle("is-active");
            drawer.classList.toggle("is-active");
        };

        const drawerLinks = drawer.querySelectorAll("a");
        drawerLinks.forEach((link) => {
            link.addEventListener("click", () => {
                menuBtn.classList.remove("is-active");
                drawer.classList.remove("is-active");
            });
        });
    }
}

// ページの読み込み状態に合わせて実行
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initHamburgerMenu);
} else {
    initHamburgerMenu();
}

/* ==========================================
   02. Image Popover (Rooms モーダル拡大表示)
   ========================================== */
document.addEventListener("DOMContentLoaded", () => {
    const popoverTriggers = document.querySelectorAll(".popover-trigger");
    const popoverDialog = document.getElementById("image-popover");
    const popoverImg = document.getElementById("js-popover-img");
    const popoverClose = document.getElementById("js-popover-close");

    if (popoverDialog && popoverTriggers.length > 0) {
        // トリガーボタン（画像）をクリックした時
        popoverTriggers.forEach((trigger) => {
            trigger.addEventListener("click", () => {
                const targetImg = trigger.querySelector("img");
                if (targetImg) {
                    popoverImg.src = targetImg.src;
                    popoverImg.alt = targetImg.alt;
                    popoverDialog.showModal(); // <dialog>を開く
                }
            });
        });

        // 閉じるボタンをクリックした時
        popoverClose?.addEventListener("click", () => {
            popoverDialog.close();
        });

        // 背景（バックドロップ）をクリックした時に閉じる
        popoverDialog.addEventListener("click", (e) => {
            if (e.target === popoverDialog) {
                popoverDialog.close();
            }
        });
    }
});

/* ==========================================
   03. 水辺と自然 スライダー自動切替 (Experience)
   ========================================== */
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".lake-slide");

    if (slides.length > 0) {
        let currentIndex = 0;
        const intervalTime = 4000; // 4秒ごとに切り替え

        setInterval(() => {
            slides[currentIndex].classList.remove("is-active");
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].classList.add("is-active");
        }, intervalTime);
    }
});

/* ==========================================
   04. タブ切り替え (Dining)
   ========================================== */
document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabPanels = document.querySelectorAll(".tab-panel");

    if (tabButtons.length > 0) {
        tabButtons.forEach((button) => {
            button.addEventListener("click", () => {
                const targetTab = button.getAttribute("data-tab");

                // 全タブのactiveクラスを解除
                tabButtons.forEach((btn) => btn.classList.remove("active"));
                tabPanels.forEach((panel) => panel.classList.remove("active"));

                // 選択したタブとパネルをアクティブ化
                button.classList.add("active");
                const targetPanel = document.getElementById(targetTab);
                if (targetPanel) {
                    targetPanel.classList.add("active");
                }
            });
        });
    }
});

/* ==========================================
   05. TOPへ戻るボタン
   ========================================== */
// TOPへ戻るボタンの制御
const pageTopBtn = document.getElementById("js-pagetop");

if (pageTopBtn) {
    // スクロール位置に応じて表示/非表示を切替
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            pageTopBtn.classList.add("is-show");
        } else {
            pageTopBtn.classList.remove("is-show");
        }
    });

    // クリックしたら一番上までスムーズにスクロール
    pageTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
}
