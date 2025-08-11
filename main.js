// تعويض النصوص بناءً على المفتاح في JSON
function translatePage(translations) {
  // نصوص داخل العناصر (textContent)
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const text = getValueByKey(translations, key);
    if (text) el.textContent = text;
  });

  // تعويض alt للصور
  document.querySelectorAll("[data-i18n-alt]").forEach(el => {
    const key = el.getAttribute("data-i18n-alt");
    const text = getValueByKey(translations, key);
    if (text) el.alt = text;
  });

  // تعويض placeholder في الـ inputs
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    const text = getValueByKey(translations, key);
    if (text) el.placeholder = text;
  });
}

// دالة مساعدة للحصول على قيمة من كائن JSON باستخدام مفتاح بنقطة
function getValueByKey(obj, key) {
  return key.split('.').reduce((res, part) => (res ? res[part] : null), obj);
}

// تحميل ملف الترجمة وتطبيقها
async function loadLanguage(langCode) {
  try {
    const response = await fetch(`./lang/${langCode}.json`);
    const translations = await response.json();
    translatePage(translations);
    // تخزين اللغة المختارة
    localStorage.setItem('selectedLang', langCode);
  } catch (error) {
    console.error("Error loading translation file:", error);
  }
}



// تغيير اللغة عند اختيار المستخدم
document.getElementById("langIcon").addEventListener("click", () => {
  const list = document.getElementById("languageList");
  list.style.display = list.style.display === "block" ? "none" : "block";
});

document.querySelectorAll("#languageList li").forEach(li => {
  li.addEventListener("click", () => {
    const selectedLang = li.getAttribute("data-lang");
    loadLanguage(selectedLang);
    document.getElementById("languageList").style.display = "none";
  });
});

// تحميل اللغة المحفوظة أو اللغة الافتراضية عند تحميل الصفحة
window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem('selectedLang') || 'tr';
  loadLanguage(savedLang);
});





//for main countin numbers
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded");

  const counters = document.querySelectorAll(".tecrube span");
  let hasAnimated = false;

  if (!counters.length) {
    console.log("No counters found");
  } else {
    console.log(counters.length + " counters found");
  }

  function animateCounters() {
    console.log("Animating counters...");
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      console.log(`Target for counter: ${target}`);
      counter.innerText = "0";

      const updateCount = () => {
        let current = +counter.innerText;
        const increment = Math.ceil(target / 100);

        if (current < target) {
          counter.innerText = Math.min(current + increment, target);
          setTimeout(updateCount, 10);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  }

  const targetSection = document.querySelector(".rakamlar");
  if (!targetSection) {
    console.log("Section .rakamlar not found");
    return;
  }

  console.log("Observing .rakamlar section");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      console.log(`IntersectionObserver entry: isIntersecting=${entry.isIntersecting}`);
      if (entry.isIntersecting && !hasAnimated) {
        animateCounters();
        hasAnimated = true;
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });

  observer.observe(targetSection);
});





//for likes in blog commetns
document.querySelectorAll(".like").forEach(function(likeDiv) {
  likeDiv.addEventListener("click", function() {
    let heartIcon = this.querySelector("i");
    heartIcon.classList.toggle("red-heart");
  });
});




//for side bar in mobile version
window.showNavList = function () {
  let sidebar = document.getElementById("sideBar");
  if (sidebar) sidebar.classList.toggle("active");
};

window.hideBar = function () {
  let sidebar = document.getElementById("sideBar");
  if (sidebar) sidebar.classList.remove("active");
};