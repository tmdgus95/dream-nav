const bar = document.querySelector(".toggle__btn");
const gnb = document.querySelector(".navbar__gnb");
const sns = document.querySelector(".navbar__sns");

bar.addEventListener("click", () => {
    gnb.classList.toggle("active");
    sns.classList.toggle("active");
});
