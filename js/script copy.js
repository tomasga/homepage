console.log("Cześć! Cieszę się że tu zajrzałeś/łaś. To moje pierwsze kroki, ale myślę, że niebawem będzie lepiej:)");

let chLangBtnPl = document.querySelector(".chLangBtnPl");
let chLangBtnEn = document.querySelector(".chLangBtnEn");
let langPl = document.querySelector(".langPl");
let langEn = document.querySelector(".langEn");
let agePl = document.querySelector(".agePl");
let ageEn = document.querySelector(".ageEn");

chLangBtnPl.addEventListener("click", () => {
    langPl.classList.toggle("hide");
    langEn.classList.toggle("hide");
    chLangBtnPl.classList.toggle("en-pl");
    chLangBtnEn.classList.toggle("en-pl");
})
chLangBtnEn.addEventListener("click", () => {
    langPl.classList.toggle("hide");
    langEn.classList.toggle("hide");
    chLangBtnEn.classList.toggle("en-pl");
   chLangBtnPl.classList.toggle("en-pl");
})

let birthday = new Date(new Date().getFullYear(), 8, 10)
let years = (+birthday > +new Date() ? birthday.getFullYear() - 1974 - 1 : birthday.getFullYear() - 1974)
agePl.innerText = years
ageEn.innerText = years