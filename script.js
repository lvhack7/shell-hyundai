function toggleMenu() {
    const menu = document.getElementById("mobile-menu")
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden")
    } else {
        menu.classList.add("hidden")
    }
}

function openConditions() {
    const conditions = document.getElementById("conditions")
    conditions.scrollIntoView()
}

function openActivation() {
    const activation = document.getElementById("activation")
    activation.scrollIntoView()
}