# YOHAKU - 静けさと余白を愉しむホテル

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat-square&logo=greensock&logoColor=white)
![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=flat-square&logo=swiper&logoColor=white)

静寂と自分自身に向き合う「余白」の時間をテーマにした、架空のラグジュアリーホテルブランドのWebサイトです。

---

## サイトURL
- **GitHub Pages:** [https://ak59dm-lang.github.io/hotel_yohaku/]
- **リポジトリ:** [https://github.com/ak59dm-lang/hotel_yohaku]

---

## 企画・デザインコンセプト

### ターゲット層
- 毎日の情報過多や過密なスケジュールに疲れを感じている20〜40代の社会人
- 「体験価値」や「自分をリセットする時間」を重視する旅行者

### 解決したい課題・背景
情報があふれる現代において、宿泊施設を選ぶ段階から「視覚的な情報量（ノイズ）」が多いWebサイトが主流となっています。
本サイトでは、ユーザーがアクセスした瞬間から「静けさ」や「ゆとり」を感じられるよう、Webサイト自体がマインドフルネスな体験の一部となるデザインを目指しました。

### コアコンセプト
**「何もしない贅沢」を届けるためのシンプルなデザインと、心地よい操作性の両立**

---

## 主な機能・制作のこだわり

### 1. 空間を意識したWebデザイン
- **タイポグラフィ:** 和文に『Noto Serif JP』、欧文に『Cormorant Garamond』を採用。明朝体ベースの上質なフォントで静寂と気品を表現。
- **カラーパレット:** 余白を魅せるシームレスな配色と、視覚に負担をかけない配色バランスを徹底。

### 2. 世界観を引き立てるインタラクション
- **アニメーション（GSAP）:** スクロール量に応じた質感の変化や、要素の滑らかな出現効果により、静かなラグジュアリー感を演出。
- **直感的なUI（Swiper）:** スライド体験を直感的にし、写真の美しさを最大限に魅せるレイアウト。
- **レスポンシブ（ドロワーメニュー）:** モバイル端末でも世界観を損なわないスムーズなナビゲーション。

### 3. 実用性を考慮したフロントエンド実装
- **予約シミュレーション（モーダル表示）:** 簡易計算ロジックを組み込み、宿泊プランのシミュレーションを離脱なく行える直感的なUI。

---

## 使用技術

- **フロントエンド:** HTML5, CSS3 (Flexbox, Grid, CSS Variables), JavaScript (Vanilla JS)
- **ライブラリ:** GSAP, Swiper
- **開発環境・ツール:** VS Code, Prettier, Git / GitHub, GitHub Pages

---

## 工夫した点・技術的な学び

- **CSS Variablesを活用した一貫性:** カラーやフォントサイズを変数管理し、デザインシステムとしての保守性を高めました。
- **パフォーマンスと演出のバランス:** 大小さまざまな画像を表示する中で、GSAPによるスムーズな演出を維持しつつ、ユーザーの操作感を阻害しない軽量な動作を意識しました。
