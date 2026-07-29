/* ==========================================
Drawer Menu
========================================== */

const menuBtn = document.querySelector(".js-menu-btn");
const drawer = document.querySelector(".js-drawer");

// 要素が存在するときだけ実行する
if (menuBtn && drawer) {
    menuBtn.addEventListener("click", () => {
        drawer.classList.toggle("is-open");
    });
}

/* ==========================================
Image Popover (Rooms モーダル拡大表示)
========================================== */
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

/* ==========================================
スライダーの画像切替
========================================== */

document.addEventListener("DOMContentLoaded", () => {
    /* ========================================
     01. 水辺と自然 スライダー自動切替
  ======================================== */
    const slides = document.querySelectorAll(".lake-slide");

    if (slides.length > 0) {
        let currentIndex = 0;
        const intervalTime = 4000; // 4秒ごとに切り替え

        setInterval(() => {
            // 現在の slide から active クラスを外す
            slides[currentIndex].classList.remove("is-active");

            // 次の slide インデックスへ
            currentIndex = (currentIndex + 1) % slides.length;

            // 次の slide に active クラスを付与
            slides[currentIndex].classList.add("is-active");
        }, intervalTime);
    }
});
