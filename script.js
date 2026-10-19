document.addEventListener(
    "DOMContentLoaded",
    function () {

        // LOADING SCREEN
        const loadingScreen =
            document.getElementById(
                "loadingScreen"
            );


        setTimeout(
            function () {

                if (loadingScreen) {

                    loadingScreen.classList.add(
                        "hide"
                    );

                }

            },
            1600
        );


        // CURSOR GLOW
        const cursorGlow =
            document.getElementById(
                "cursorGlow"
            );


        let mouseX = 0;
        let mouseY = 0;

        let glowX = 0;
        let glowY = 0;


        document.addEventListener(
            "mousemove",
            function (event) {

                mouseX =
                    event.clientX;

                mouseY =
                    event.clientY;


                if (cursorGlow) {

                    cursorGlow.style.opacity =
                        "1";

                }

            }
        );


        document.addEventListener(
            "mouseleave",
            function () {

                if (cursorGlow) {

                    cursorGlow.style.opacity =
                        "0";

                }

            }
        );


        function animateGlow() {

            glowX +=
                (mouseX - glowX) * 0.12;

            glowY +=
                (mouseY - glowY) * 0.12;


            if (cursorGlow) {

                cursorGlow.style.left =
                    glowX + "px";

                cursorGlow.style.top =
                    glowY + "px";

            }


            requestAnimationFrame(
                animateGlow
            );

        }


        animateGlow();


        // THEME
        const themeToggle =
            document.getElementById(
                "themeToggle"
            );


        const savedTheme =
            localStorage.getItem(
                "luigeTheme"
            );


        if (
            savedTheme === "light"
        ) {

            document.body.classList.add(
                "light-mode"
            );


            if (themeToggle) {

                themeToggle.textContent =
                    "🌙";

            }

        }


        if (themeToggle) {

            themeToggle.addEventListener(
                "click",
                function () {

                    document.body.classList.toggle(
                        "light-mode"
                    );


                    const light =
                        document.body.classList.contains(
                            "light-mode"
                        );


                    themeToggle.textContent =
                        light
                            ? "🌙"
                            : "☀";


                    localStorage.setItem(
                        "luigeTheme",
                        light
                            ? "light"
                            : "dark"
                    );

                }
            );

        }


        // SMOOTH SCROLL
        document
            .querySelectorAll(
                'a[href^="#"]'
            )
            .forEach(
                function (link) {

                    link.addEventListener(
                        "click",
                        function (event) {

                            const href =
                                this.getAttribute(
                                    "href"
                                );


                            if (
                                !href ||
                                href === "#"
                            ) {
                                return;
                            }


                            const target =
                                document.querySelector(
                                    href
                                );


                            if (target) {

                                event.preventDefault();


                                target.scrollIntoView({
                                    behavior:
                                        "smooth"
                                });

                            }

                        }
                    );

                }
            );


        // ACTIVE NAV
        const sections =
            document.querySelectorAll(
                "section[id]"
            );


        const navLinks =
            document.querySelectorAll(
                ".nav-menu a"
            );


        function updateNav() {

            let current =
                "home";


            sections.forEach(
                function (section) {

                    if (
                        window.scrollY >=
                        section.offsetTop - 150
                    ) {

                        current =
                            section.id;

                    }

                }
            );


            navLinks.forEach(
                function (link) {

                    link.classList.remove(
                        "active"
                    );


                    if (
                        link.getAttribute(
                            "href"
                        ) ===
                        "#" + current
                    ) {

                        link.classList.add(
                            "active"
                        );

                    }

                }
            );

        }


        window.addEventListener(
            "scroll",
            updateNav
        );


        updateNav();


        // REVEAL
        const revealElements =
            document.querySelectorAll(
                ".reveal"
            );


        if (
            "IntersectionObserver"
            in window
        ) {

            const observer =
                new IntersectionObserver(

                    function (entries) {

                        entries.forEach(
                            function (entry) {

                                if (
                                    entry.isIntersecting
                                ) {

                                    entry.target.classList.add(
                                        "visible"
                                    );


                                    observer.unobserve(
                                        entry.target
                                    );

                                }

                            }
                        );

                    },

                    {
                        threshold:
                            0.1
                    }

                );


            revealElements.forEach(
                function (element) {

                    observer.observe(
                        element
                    );

                }
            );

        }

        else {

            revealElements.forEach(
                function (element) {

                    element.classList.add(
                        "visible"
                    );

                }
            );

        }


        // BACK TO TOP
        const backToTop =
            document.getElementById(
                "backToTop"
            );


        window.addEventListener(
            "scroll",
            function () {

                if (!backToTop) {
                    return;
                }


                backToTop.classList.toggle(
                    "show",
                    window.scrollY > 500
                );

            }
        );


        if (backToTop) {

            backToTop.addEventListener(
                "click",
                function () {

                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });

                }
            );

        }

    }
);