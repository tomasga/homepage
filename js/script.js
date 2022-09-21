console.log("Cześć! Cieszę się że tu zajrzałeś/łaś. To moje pierwsze kroki, ale myślę, że niebawem będzie lepiej:)");

let chLangBtnPl = document.querySelector(".header__button--pl");
let chLangBtnEn = document.querySelector(".header__button--en");
let langPlEn = document.querySelectorAll(".js-langPlEn");
let age = document.querySelector(".age");
let ageEn = document.querySelector(".ageEn");

chLangBtnPl.addEventListener('click', () => {
    langPlEn.forEach(p => p.classList.toggle('hide'));
});

chLangBtnEn.addEventListener('click', () => {
    langPlEn.forEach(p => p.classList.toggle('hide'));
});



let birthday = new Date(new Date().getFullYear(), 8, 10);
let years = (+birthday > +new Date() ? birthday.getFullYear() - 1974 - 1 : birthday.getFullYear() - 1974);
age.innerText = years;
ageEn.innerText = years;
