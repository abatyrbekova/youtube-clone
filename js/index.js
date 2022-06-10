const theme = () => {
    const checkbox = document.querySelector("#light-dark").checked;

    const body = document.querySelector("body");
    const topbar = document.querySelector(".topbar");
    const searchContainerInput = document.querySelector(".search-container form input");
    const leftSidebar = document.querySelector(".left-sidebar");
    const leftAnchors = document.querySelectorAll(".left-anchors");
    const channel = document.querySelector(".channel");
    const mainNav = document.querySelector(".main-nav");
    const content = document.querySelector(".content");

    console.log(checkbox);
    if (checkbox) {
        body.classList.add("dark");
        topbar.classList.add("dark");
        searchContainerInput.classList.add("dark");
        leftSidebar.classList.add("dark2");
        leftAnchors.forEach(item => item.classList.add('dark2'));
        channel.classList.add("darkgray1");
        mainNav.classList.add("darkgray1");
        content.classList.add("darkgray2");

        body.classList.remove("light");
        topbar.classList.remove("light");
        searchContainerInput.classList.remove("light");
        leftSidebar.classList.remove("light");
        leftAnchors.forEach(item => item.classList.remove('light'));
        channel.classList.remove("lightgray1");
        mainNav.classList.remove("lightgray1");
        content.classList.remove("lightgray2");
    } else {
        body.classList.add("light");
        topbar.classList.add("light");
        searchContainerInput.classList.add("light");
        leftSidebar.classList.add("light");
        leftAnchors.forEach(item => item.classList.add('light'));
        channel.classList.add("lightgray1");
        mainNav.classList.add("lightgray1");
        content.classList.add("lightgray2");

        body.classList.remove("dark");
        topbar.classList.remove("dark");
        searchContainerInput.classList.remove("dark");
        leftSidebar.classList.remove("dark2");
        leftAnchors.forEach(item => item.classList.remove('dark2'));
        channel.classList.remove("darkgray1");
        mainNav.classList.remove("darkgray1");
        content.classList.remove("darkgray2");
    }
};