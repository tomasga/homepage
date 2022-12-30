const welcome = () => {
    console.log("Cześć! Cieszę się że tu zajrzałeś/łaś. To moje pierwsze kroki, ale myślę, że niebawem będzie lepiej:)");
}

const ageCalculation = () => {
    const age = document.querySelector(".age");
    const birthday = new Date(new Date().getFullYear(), 8, 10);
    const years = (+birthday > +new Date() ? birthday.getFullYear() - 1974 - 1 : birthday.getFullYear() - 1974);
    age.innerText = years;
}

const sectionsHideToggle = () => {
    const chLangBtnPl = document.querySelector(".header__button--pl");
    const chLangBtnEn = document.querySelector(".header__button--en");
    const langPlEn = document.querySelectorAll(".js-langPlEn");

    chLangBtnPl.addEventListener('click', () => {
        langPlEn.forEach(p => p.classList.toggle('hide'));
    });

    chLangBtnEn.addEventListener('click', () => {
        langPlEn.forEach(p => p.classList.toggle('hide'));
    });
}

const init = () => {
    welcome();
    ageCalculation();
    sectionsHideToggle();
}

init();