const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".site-header__menu-button");
const navigation = document.querySelector(".site-header__nav");

if (header && menuButton && navigation) {
    const closeMenu = () => {
        header.classList.remove("is-menu-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open menu");
        document.body.classList.remove("menu-open");
    };

    const openMenu = () => {
        header.classList.add("is-menu-open");
        menuButton.setAttribute("aria-expanded", "true");
        menuButton.setAttribute("aria-label", "Close menu");
        document.body.classList.add("menu-open");
    };

    menuButton.addEventListener("click", () => {
        const isOpen = menuButton.getAttribute("aria-expanded") === "true";

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    navigation.addEventListener("click", (event) => {
        if (event.target instanceof HTMLAnchorElement) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 1230) {
            closeMenu();
        }
    });

    window.addEventListener("pageshow", closeMenu);
}
