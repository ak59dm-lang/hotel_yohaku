document.addEventListener("DOMContentLoaded", () => {
    const footer = document.getElementById("footer");
    const stars = document.getElementById("footerStars");

    if (!footer || !stars) return;

    /* ========================================
    Star Generate
    ======================================== */

    function createStars() {
        stars.innerHTML = "";

        const count = 20;

        for (let i = 0; i < count; i++) {
            const star = document.createElement("span");

            const size = Math.random() * 2 + 1;

            star.style.position = "absolute";
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.borderRadius = "50%";
            star.style.background = "#ffffff";

            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 55}%`;

            star.style.opacity = Math.random() * .6 + .2;

            star.style.animation = `starBlink ${Math.random() * 6 + 6}s ease-in-out infinite`;

            stars.appendChild(star);
        }
    }

    createStars();

    /* ========================================
    Scroll Animation
    ======================================== */

    function updateFooter() {

        const rect = footer.getBoundingClientRect();

        const progress = Math.min(
            Math.max(
                (window.innerHeight - rect.top) /
                (window.innerHeight + rect.height),
                0
            ),
            1
        );

        if (progress < .25) {

            footer.style.background = "var(--dawn-bg)";
            stars.style.opacity = "0";

        } else if (progress < .5) {

            footer.style.background = "var(--dusk-bg)";
            stars.style.opacity = ".25";

        } else {

            footer.style.background = "var(--night-bg)";
            stars.style.opacity = "1";

        }

    }

    updateFooter();

    window.addEventListener("scroll", updateFooter);

    window.addEventListener("resize", updateFooter);

});