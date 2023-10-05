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
                let logoImageText = document.querySelector(".logo__text")
                if (langEl.dataset.lang == "rus") {
                    langBlockRus.style.display = "block"
                    langBlockEng.style.display = "none"
                    logoImageText.textContent = "Дагестанский государственный университет"
                } else {
                    langBlockEng.style.display = "block"
                    langBlockRus.style.display = "none"
                    logoImageText.textContent = "Dagestan State University"
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