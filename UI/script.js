const searchIcon = document.querySelector(".search-icon");
const searchInputWrapper = document.querySelector(".search-input");
const searchInput = searchInputWrapper.querySelector("input");

searchIcon.addEventListener("mouseover", () => {
    searchInputWrapper.classList.remove("on-hover");
    searchInput.focus();
});