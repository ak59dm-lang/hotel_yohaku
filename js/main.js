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
/* ==========================================
   06. 予約完了モーダル制御
   ========================================== */
document.addEventListener("DOMContentLoaded", () => {
    const reservationForm = document.getElementById("js-reservation-form");
    const modal = document.getElementById("js-complete-modal");
    const modalSummary = document.getElementById("js-modal-summary");
    const modalCloseBtn = document.getElementById("js-modal-close");

    // 予約フォームが存在するページでのみ実行
    if (reservationForm && modal && modalSummary) {
        reservationForm.addEventListener("submit", (e) => {
            e.preventDefault(); // フォームの通常送信をキャンセル

            // 1. 各要素から値を取得
            const nameInput = document.getElementById("js-form-name");
            const roomRadio = document.querySelector('input[name="room"]:checked');
            const totalPriceEl = document.getElementById("js-total-price");

            // 値の安全な取得（値がない場合のフォールバック）
            const name = nameInput ? nameInput.value : "ゲスト";

            // 選択された部屋のラベル名を取得
            let roomName = "未選択";
            if (roomRadio) {
                const roomCard = roomRadio.closest(".room-card");
                const roomNameEl = roomCard ? roomCard.querySelector(".room-card__name") : null;
                if (roomNameEl) {
                    roomName = roomNameEl.textContent;
                }
            }

            const totalPrice = totalPriceEl ? totalPriceEl.textContent : "¥0";

            // 2. モーダル内に表示テキストを注入
            modalSummary.innerHTML = `
                <dl class="modal__summary-list">
                    <div class="modal__summary-item">
                        <dt>お名前</dt>
                        <dd>${name} 様</dd>
                    </div>
                    <div class="modal__summary-item">
                        <dt>お部屋</dt>
                        <dd>${roomName}</dd>
                    </div>
                    <div class="modal__summary-item">
                        <dt>お支払い金額</dt>
                        <dd class="modal__summary-price">${totalPrice}</dd>
                    </div>
                </dl>
            `;

            // 3. モーダルを表示
            if (typeof modal.showModal === "function") {
                modal.showModal();
            }
        });

        // 閉じるボタンのイベント
        modalCloseBtn?.addEventListener("click", () => {
            modal.close();
        });
    }
});

// 選択されたお部屋カードのクラス切替（CSSの :has 非対応環境のフォールバック）
document.addEventListener("DOMContentLoaded", () => {
    const roomRadios = document.querySelectorAll('input[name="room"]');
    
    if (roomRadios.length > 0) {
        roomRadios.forEach((radio) => {
            radio.addEventListener("change", () => {
                // すべてのカードから is-selected クラスを外す
                document.querySelectorAll(".room-card").forEach((card) => {
                    card.classList.remove("is-selected");
                });
                // 選択されたラジオボタンの親カードに is-selected クラスを付与
                const parentCard = radio.closest(".room-card");
                if (parentCard) {
                    parentCard.classList.add("is-selected");
                }
            });
        });
    }
});