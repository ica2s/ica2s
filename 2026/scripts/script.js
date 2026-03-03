<script defer>
document.addEventListener("DOMContentLoaded", () => {

    /* =============================
       CACHE DOM ELEMENTS (ONLY ONCE)
    ============================== */

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const navbar = document.getElementById("navbar");
    const contactForm = document.getElementById("contactForm");

    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");
    const registerButtons = document.querySelectorAll(".register-button");
    const ctaButtons = document.querySelectorAll(".cta-button");

    /* =============================
       MOBILE MENU (EVENT DELEGATION)
    ============================== */

    menuToggle?.addEventListener("click", () => {
        menuToggle.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    navMenu?.addEventListener("click", (e) => {
        if (e.target.classList.contains("nav-link")) {
            menuToggle.classList.remove("active");
            navMenu.classList.remove("active");
        }
    });

    /* =============================
       THROTTLED SCROLL HANDLER
    ============================== */

    let ticking = false;

    function handleScroll() {
        const scrollY = window.scrollY;

        // Navbar style change
        navbar?.classList.toggle("scrolled", scrollY > 50);

        // Update active link
        const scrollPosition = scrollY + 100;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.id;

            if (scrollPosition >= top && scrollPosition < top + height) {
                navLinks.forEach(link => {
                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === `#${id}`
                    );
                });
            }
        });

        ticking = false;
    }

    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(handleScroll);
            ticking = true;
        }
    });

    /* =============================
       SMOOTH SCROLL (ONE LISTENER)
    ============================== */

    document.addEventListener("click", (e) => {
        const link = e.target.closest("a[href^='#']");
        if (!link) return;

        const target = document.querySelector(link.getAttribute("href"));
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    /* =============================
       CONTACT FORM
    ============================== */

    contactForm?.addEventListener("submit", (e) => {
        e.preventDefault();

        const { name, email, message } = contactForm.elements;

        if (name.value && email.value && message.value) {
            alert(`Thank you, ${name.value}! We'll contact you at ${email.value}.`);
            contactForm.reset();
        }
    });

    /* =============================
       INTERSECTION OBSERVER
    ============================== */

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                obs.unobserve(entry.target); // stop observing after animation
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    });

    document.querySelectorAll(
        ".theme-card, .committee-card, .registration-card, .stat-card, .timeline-item"
    ).forEach(el => observer.observe(el));

    /* =============================
       REGISTRATION BUTTON
    ============================== */

    registerButtons.forEach(button => {
        button.addEventListener("click", () => {
            const cardType = button
                .closest(".registration-card")
                ?.querySelector(".registration-type")?.textContent;

            alert(`Registration for ${cardType} selected.`);
        });
    });

});
</script>
