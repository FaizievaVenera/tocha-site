const popupLinks = document.querySelectorAll(".popup-link");
const body = document.querySelector("body");
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;
const timeout = 800;

/*Условие открытия popup*/
if (popupLinks.length > 0) {
  for (let i = 0; i < popupLinks.length; i++) {
    const currentPopupLink = popupLinks[i];
    currentPopupLink.addEventListener("click", function (e) {
      const popupName = currentPopupLink.getAttribute("href").replace("#", "");
      const currentPopupName = document.getElementById(popupName);
      popupOpen(currentPopupName);
      e.preventDefault();
    });
  }
}

/*Условие закрытия popup*/
const popupCloseIcon = document.querySelectorAll(".close-popup");
if (popupCloseIcon.length > 0) {
  for (let i = 0; i < popupCloseIcon.length; i++) {
    let currentCloseIcon = popupCloseIcon[i];
    currentCloseIcon.addEventListener("click", function (e) {
      popupClose(currentCloseIcon.closest(".popup"));
      e.preventDefault;
    });
  }
}

function popupOpen(currentPopupName) {
  if (currentPopupName && unlock) {
    const popupActive = document.querySelector(".popup.open");
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    currentPopupName.classList.add("open");
    currentPopupName.addEventListener("click", function (e) {
      if (!e.target.closest(".popup__content")) {
        popupClose(e.target.closest(".popup"));
      }
    });
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove("open");
    if (doUnlock) {
      bodyUnLock();
    }
  }
}

function bodyLock() {
  const lockPaddingValue = 0 + "px";
  if (lockPadding.length > 0) {
    for (let i = 0; i < lockPadding.length; i++) {
      const el = lockPadding[i];
      el.style.paddingRight = lockPaddingValue;
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add("lock");
  }
  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnLock() {
  setTimeout(function () {
    for (let i = 0; i < lockPadding.length; i++) {
      const el = lockPadding[i];
    }
  });
}
