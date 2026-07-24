const swiper = new Swiper(".swiper", {
    // 基本設定
    direction: "horizontal", // 水平スライダー
    loop: true, // ループ有効化
    autoplay: {
        delay: 3000, // 自動再生の間隔
    },
    // ページネーション
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true, // ページネーションのクリック有効化
    },
    // ナビゲーション
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // アニメーション
    // effect: "fade",
});


// 自動再生（Autoplay)
// autoplay: {
//  delay: 3000, // 次のスライドに切り替わるまでの時間（ミリ秒）
//  stopOnLastSlide: false, // 最後のスライドで自動再生を止めるか
//  disableOnInteraction: true // ユーザーが操作（ドラッグ等）した後に自動再生を止めるか
// }

// ページネーション
// pagination: {
//  el: '.swiper-pagination', // 要素のクラス名
//  type: 'bullets', // 見た目のタイプ（'bullets' | 'fraction' | 'progressbar'）
//  clickable: true // クリックしてスライドを切り替えられるか
// }
// ナビゲーション
// navigation: {
//  nextEl: ".swiper-button-next",// 次のスライドへのボタンのクラス名
//  prevEl: ".swiper-button-prev",,// 前のスライドへのボタンのクラス名
// },
// スクロールバー
// scrollbar: {
//  el: '.swiper-scrollbar', // HTML のクラス名と紐付け
//  draggable: true, // マウスや指でドラッグ操作できるようにする（強く推奨）
//  hide: false, // 操作が終わってもバーを非表示にせず、常に表示しておくか
// }

// エフェクト（スライドが切り替わる際のアニメーション） effect:値で設定
// 値 アニメーション
// 'slide' 通常の横・縦スライド（初期値）
// 'fade' フェードイン・アウト
// 'cube' 立方体が回転するような立体的なエフェクト
// 'coverflow' 中央が前に飛び出し、両端に角度がつく立体エフェクト
// 'flip' パタパタとカードが裏返るようなエフェクト

// レスポンシブ
// breakpoints: {
//  // ユーザーの画面幅が 768px 以上の場合
//  768: {
//  slidesPerView: 2,
//  spaceBetween: 20
//  },
//  // ユーザーの画面幅が 1024px 以上の場合
//  1024: {
//  slidesPerView: 3,
//  spaceBetween: 30
//  }
// }