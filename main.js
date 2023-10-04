document.addEventListener("DOMContentLoaded", () => {
    const switchLangElements = document.querySelectorAll(".switch-language__item")
    switchLangElements.forEach(langEl => {
        langEl.addEventListener("click", () => {       
            if (!langEl.classList.contains("active")) {
                const currentLang = document.querySelector(".switch-language__item.active")
                currentLang.classList.remove("active")
                langEl.classList.add("active")

                const langBlockRus = document.querySelector(".main-content--rus")
                const langBlockEng = document.querySelector(".main-content--eng")
                const logoImage = document.querySelector(".logo img")
                if (langEl.dataset.lang == "rus") {
                    langBlockRus.style.display = "block"
                    langBlockEng.style.display = "none"
                    logoImage.src = "img/logo.svg"
                    logoImage.alt = "Логотип ДГУ"
                } else {
                    langBlockEng.style.display = "block"
                    langBlockRus.style.display = "none"
                    logoImage.src = "img/logo-eng.svg"
                    logoImage.alt = "DSU logo"
                }
            }
        })
    })

    const accordeons = document.querySelectorAll(".accordeon__item")
    accordeons.forEach(accordeonEl => {
        accordeonEl.addEventListener("click", function(evt) {
            if (evt.target.closest(".accordeon__control")) {
                accordeonEl.classList.toggle("active")

                const accordeonContent = accordeonEl.querySelector(".accordeon__content")
                if (accordeonEl.classList.contains("active")) {
                    accordeonContent.style.maxHeight = accordeonContent.scrollHeight + 'px';
                } else {
                    accordeonContent.style.maxHeight = null;
                }
            }
        })
    })
})