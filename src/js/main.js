
document.addEventListener("DOMContentLoaded", () => {
  class ItcTabs {
    constructor(target, config) {
      const defaultConfig = {};
      this._config = Object.assign(defaultConfig, config);
      this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
      this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
      this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
      this._eventShow = new Event('tab.itc.change');
      this._init();
      this._events();
    }
    _init() {
      this._elTabs.setAttribute('role', 'tablist');
      this._elButtons.forEach((el, index) => {
        el.dataset.index = index;
        el.setAttribute('role', 'tab');
        this._elPanes[index].setAttribute('role', 'tabpanel');
      });
    }
    show(elLinkTarget) {
      const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
      const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
      const elPaneShow = this._elTabs.querySelector('.tabs__pane_show');
      if (elLinkTarget === elLinkActive) {
        return;
      }
      elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
      elPaneShow ? elPaneShow.classList.remove('tabs__pane_show') : null;
      elLinkTarget.classList.add('tabs__btn_active');
      elPaneTarget.classList.add('tabs__pane_show');
      this._elTabs.dispatchEvent(this._eventShow);
      elLinkTarget.focus();
    }
    showByIndex(index) {
      const elLinkTarget = this._elButtons[index];
      elLinkTarget ? this.show(elLinkTarget) : null;
    };
    _events() {
      this._elTabs.addEventListener('click', (e) => {
        const target = e.target.closest('.tabs__btn');
        if (target) {
          e.preventDefault();
          this.show(target);
        }
      });
    }
  }

  // инициализация .tabs как табов
  new ItcTabs('.tabs');
});

document.addEventListener("DOMContentLoaded", () => {
  class ItcTabs {
    constructor(target, config) {
      const defaultConfig = {};
      this._config = Object.assign(defaultConfig, config);
      this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
      this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
      this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
      this._eventShow = new Event('tab.itc.change');
      this._init();
      this._events();
    }
    _init() {
      this._elTabs.setAttribute('role', 'tablist');
      this._elButtons.forEach((el, index) => {
        el.dataset.index = index;
        el.setAttribute('role', 'tab');
        this._elPanes[index].setAttribute('role', 'tabpanel');
      });
    }
    show(elLinkTarget) {
      const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
      const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
      const elPaneShow = this._elTabs.querySelector('.tabs__pane_show');
      if (elLinkTarget === elLinkActive) {
        return;
      }
      elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
      elPaneShow ? elPaneShow.classList.remove('tabs__pane_show') : null;
      elLinkTarget.classList.add('tabs__btn_active');
      elPaneTarget.classList.add('tabs__pane_show');
      this._elTabs.dispatchEvent(this._eventShow);
      elLinkTarget.focus();
    }
    showByIndex(index) {
      const elLinkTarget = this._elButtons[index];
      elLinkTarget ? this.show(elLinkTarget) : null;
    };
    _events() {
      this._elTabs.addEventListener('click', (e) => {
        const target = e.target.closest('.tabs__btn');
        if (target) {
          e.preventDefault();
          this.show(target);
        }
      });
    }
  }

  // инициализация .tabs как табов
  new ItcTabs('.tabs2');
});
document.addEventListener("DOMContentLoaded", () => {
  $('.information4__open').click(function (event) {
    $(this).css('display', 'none');
    $('.information4__see').slideToggle();
    return false;
  });
});
document.addEventListener("DOMContentLoaded", () => {
  $('.about-main__open1').click(function (event) {
    $(this).css('display', 'none');
    $('.about-main__see1').slideToggle();
    return false;
  });
});
document.addEventListener("DOMContentLoaded", () => {
  $('.about-main__open2').click(function (event) {
    $(this).css('display', 'none');
    $('.about-main__see2').slideToggle();
    return false;
  });
});
document.addEventListener("DOMContentLoaded", () => {
  $('.about-main__open3').click(function (event) {
    $(this).css('display', 'none');
    $('.about-main__see3').slideToggle();
    return false;
  });
});
document.addEventListener("DOMContentLoaded", () => {
  $('.about-main__open4').click(function (event) {
    $(this).css('display', 'none');
    $('.about-main__see4').slideToggle();
    return false;
  });
});
document.addEventListener('DOMContentLoaded', function () {
  $(document).ready(function () {
    $("#up").on('click', function () {
      $("#incdec input").val(parseInt($("#incdec input").val()) + 1);
    });

    $("#down").on('click', function () {
      $("#incdec input").val(parseInt($("#incdec input").val()) - 1);
    });

  });
});
document.addEventListener("DOMContentLoaded", () => {
  function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#E0E5EB', '#2BB062', controlSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = to;
    } else {
      fromSlider.value = from;
    }
  }

  function controlToInput(toSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#E0E5EB', '#2BB062', controlSlider);
    setToggleAccessible(toInput);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = to;
    } else {
      toInput.value = from;
    }
  }

  function controlFromSlider(fromSlider, toSlider, fromInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#E0E5EB', '#2BB062', toSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = to;
    } else {
      fromInput.value = from;
    }
  }

  function controlToSlider(fromSlider, toSlider, toInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#E0E5EB', '#2BB062', toSlider);
    setToggleAccessible(toSlider);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = to;
    } else {
      toInput.value = from;
      toSlider.value = from;
    }
  }

  function getParsed(currentFrom, currentTo) {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
  }

  function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max - to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition) / (rangeDistance) * 100}%,
      ${rangeColor} ${((fromPosition) / (rangeDistance)) * 100}%,
      ${rangeColor} ${(toPosition) / (rangeDistance) * 100}%, 
      ${sliderColor} ${(toPosition) / (rangeDistance) * 100}%, 
      ${sliderColor} 100%)`;
  }

  function setToggleAccessible(currentTarget) {
    const toSlider = document.querySelector('#toSlider');
    if (Number(currentTarget.value) <= 0) {
      toSlider.style.zIndex = 2;
    } else {
      toSlider.style.zIndex = 0;
    }
  }

  const fromSlider = document.querySelector('#fromSlider');
  const toSlider = document.querySelector('#toSlider');
  const fromInput = document.querySelector('#fromInput');
  const toInput = document.querySelector('#toInput');
  fillSlider(fromSlider, toSlider, '#E0E5EB', '#2BB062', toSlider);
  setToggleAccessible(toSlider);

  fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
  toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
  fromInput.oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
  toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);

});
document.addEventListener("DOMContentLoaded", () => {
  function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#E0E5EB', '#2BB062', controlSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = to;
    } else {
      fromSlider.value = from;
    }
  }

  function controlToInput(toSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#E0E5EB', '#2BB062', controlSlider);
    setToggleAccessible(toInput);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = to;
    } else {
      toInput.value = from;
    }
  }

  function controlFromSlider(fromSlider, toSlider, fromInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#E0E5EB', '#2BB062', toSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = to;
    } else {
      fromInput.value = from;
    }
  }

  function controlToSlider(fromSlider, toSlider, toInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#E0E5EB', '#2BB062', toSlider);
    setToggleAccessible(toSlider);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = to;
    } else {
      toInput.value = from;
      toSlider.value = from;
    }
  }

  function getParsed(currentFrom, currentTo) {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
  }

  function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max - to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition) / (rangeDistance) * 100}%,
      ${rangeColor} ${((fromPosition) / (rangeDistance)) * 100}%,
      ${rangeColor} ${(toPosition) / (rangeDistance) * 100}%, 
      ${sliderColor} ${(toPosition) / (rangeDistance) * 100}%, 
      ${sliderColor} 100%)`;
  }

  function setToggleAccessible(currentTarget) {
    const toSlider = document.querySelector('#toSlider2');
    if (Number(currentTarget.value) <= 0) {
      toSlider.style.zIndex = 2;
    } else {
      toSlider.style.zIndex = 0;
    }
  }

  const fromSlider = document.querySelector('#fromSlider2');
  const toSlider = document.querySelector('#toSlider2');
  const fromInput = document.querySelector('#fromInput2');
  const toInput = document.querySelector('#toInput2');
  fillSlider(fromSlider, toSlider, '#E0E5EB', '#2BB062', toSlider);
  setToggleAccessible(toSlider);

  fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
  toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
  fromInput.oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
  toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);

});
document.addEventListener("DOMContentLoaded", () => {
  function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#E0E5EB', '#2BB062', controlSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = to;
    } else {
      fromSlider.value = from;
    }
  }

  function controlToInput(toSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#E0E5EB', '#2BB062', controlSlider);
    setToggleAccessible(toInput);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = to;
    } else {
      toInput.value = from;
    }
  }

  function controlFromSlider(fromSlider, toSlider, fromInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#E0E5EB', '#2BB062', toSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = to;
    } else {
      fromInput.value = from;
    }
  }

  function controlToSlider(fromSlider, toSlider, toInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#E0E5EB', '#2BB062', toSlider);
    setToggleAccessible(toSlider);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = to;
    } else {
      toInput.value = from;
      toSlider.value = from;
    }
  }

  function getParsed(currentFrom, currentTo) {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
  }

  function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max - to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition) / (rangeDistance) * 100}%,
      ${rangeColor} ${((fromPosition) / (rangeDistance)) * 100}%,
      ${rangeColor} ${(toPosition) / (rangeDistance) * 100}%, 
      ${sliderColor} ${(toPosition) / (rangeDistance) * 100}%, 
      ${sliderColor} 100%)`;
  }

  function setToggleAccessible(currentTarget) {
    const toSlider = document.querySelector('#toSlider2');
    if (Number(currentTarget.value) <= 0) {
      toSlider.style.zIndex = 2;
    } else {
      toSlider.style.zIndex = 0;
    }
  }

  const fromSlider = document.querySelector('#fromSlider3');
  const toSlider = document.querySelector('#toSlider3');
  const fromInput = document.querySelector('#fromInput3');
  const toInput = document.querySelector('#toInput3');
  fillSlider(fromSlider, toSlider, '#E0E5EB', '#2BB062', toSlider);
  setToggleAccessible(toSlider);

  fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
  toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
  fromInput.oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
  toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);

});
document.addEventListener("DOMContentLoaded", () => {
  function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#E0E5EB', '#2BB062', controlSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = to;
    } else {
      fromSlider.value = from;
    }
  }

  function controlToInput(toSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#E0E5EB', '#2BB062', controlSlider);
    setToggleAccessible(toInput);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = to;
    } else {
      toInput.value = from;
    }
  }

  function controlFromSlider(fromSlider, toSlider, fromInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#E0E5EB', '#2BB062', toSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = to;
    } else {
      fromInput.value = from;
    }
  }

  function controlToSlider(fromSlider, toSlider, toInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#E0E5EB', '#2BB062', toSlider);
    setToggleAccessible(toSlider);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = to;
    } else {
      toInput.value = from;
      toSlider.value = from;
    }
  }

  function getParsed(currentFrom, currentTo) {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
  }

  function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max - to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition) / (rangeDistance) * 100}%,
      ${rangeColor} ${((fromPosition) / (rangeDistance)) * 100}%,
      ${rangeColor} ${(toPosition) / (rangeDistance) * 100}%, 
      ${sliderColor} ${(toPosition) / (rangeDistance) * 100}%, 
      ${sliderColor} 100%)`;
  }

  function setToggleAccessible(currentTarget) {
    const toSlider = document.querySelector('#toSlider4');
    if (Number(currentTarget.value) <= 0) {
      toSlider.style.zIndex = 2;
    } else {
      toSlider.style.zIndex = 0;
    }
  }

  const fromSlider = document.querySelector('#fromSlider4');
  const toSlider = document.querySelector('#toSlider4');
  const fromInput = document.querySelector('#fromInput4');
  const toInput = document.querySelector('#toInput4');
  fillSlider(fromSlider, toSlider, '#E0E5EB', '#2BB062', toSlider);
  setToggleAccessible(toSlider);

  fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
  toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
  fromInput.oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
  toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);

});
document.addEventListener("DOMContentLoaded", () => {
  (function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "09/30/",
      birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end

    const countDown = new Date(birthday).getTime(),
      x = setInterval(function () {

        const now = new Date().getTime(),
          distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline").innerText = "It's my birthday!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
        //seconds
      }, 0)
  }());
});
document.addEventListener("DOMContentLoaded", () => {
  $('.my').change(function () {
    if ($(this).val() != '') $(this).prev().text('Выбрано файлов: ' + $(this)[0].files.length);
    else $(this).prev().text('Выберите файлы');
  });
});
document.addEventListener("DOMContentLoaded", () => {
  $(document).ready(function () {
    $('[data-submit]').on('click', function (e) {
      e.preventDefault();
      $(this).parents('form').submit();
    })
    $.validator.addMethod(
      "regex",
      function (value, element, regexp) {
        var re = new RegExp(regexp);
        return this.optional(element) || re.test(value);
      },
      "Please check your input."
    );
    function valEl(el) {

      el.validate({
        rules: {
          tel: {
            required: true,
            regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
          },
          name: {
            required: true
          },
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          tel: {
            required: 'Заполните поле',
            regex: 'Телефон может содержать символы + - ()'
          },
          name: {
            required: 'Заполните поле',
          },
          text: {
            required: 'Заполните поле',
          },
          email: {
            required: 'Заполните поле',
            email: 'Неверный формат E-mail'
          }
        },
        submitHandler: function (form) {
          $('#loader').fadeIn();
          var $form = $(form);
          var $formId = $(form).attr('id');
          switch ($formId) {
            case 'popupResult':
              $.ajax({
                type: 'POST',
                url: $form.attr('action'),
                data: $form.serialize(),
              })
                .always(function (response) {
                  setTimeout(function () {
                    $('#loader').fadeOut();
                  }, 800);
                  setTimeout(function () {
                    $.arcticmodal('close');
                    $('#popup-thank').arcticmodal({});
                    $form.trigger('reset');
                    //строки для остлеживания целей в Я.Метрике и Google Analytics
                  }, 1100);

                });
              break;
          }
          return false;
        }
      })
    }

    $('.js-form').each(function () {
      valEl($(this));
    });
    $('[data-scroll]').on('click', function () {
      $('html, body').animate({
        scrollTop: $($.attr(this, 'data-scroll')).offset().top
      }, 2000);
      event.preventDefault();
    })
  });
});
document.addEventListener('DOMContentLoaded', function () {
  $('.articmodal-close').click(function (e) {
    $.arcticmodal('close');

  });
  $('.a1').click(function (e) {
    e.preventDefault();
    $('#popup-call').arcticmodal({
    });
  });
});
window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll('.tel'), function (input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function (a) {
          return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });
});
document.addEventListener("DOMContentLoaded", () => {
  var accordeonButtons = document.getElementsByClassName("accordeon__button");

  //пишем событие при клике на кнопки - вызов функции toggle
  for (var i = 0; i < accordeonButtons.length; i++) {
    var accordeonButton = accordeonButtons[i];

    accordeonButton.addEventListener("click", toggleItems, false);
  }

  //пишем функцию
  function toggleItems() {

    // переменная кнопки(актульная) с классом
    var itemClass = this.className;

    // добавляем всем кнопкам класс close
    for (var i = 0; i < accordeonButtons.length; i++) {
      accordeonButtons[i].className = "accordeon__button closed";
    }

    // закрываем все открытые панели с текстом
    var pannels = document.getElementsByClassName("accordeon__panel");
    for (var z = 0; z < pannels.length; z++) {
      pannels[z].style.maxHeight = 0;
    }

    // проверка. если кнопка имеет класс close при нажатии
    // к актуальной(нажатой) кнопке добававляем активный класс
    // а панели - которая находится рядом задаем высоту
    if (itemClass == "accordeon__button closed") {
      this.className = "accordeon__button active";
      var panel = this.nextElementSibling;
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

  }
});
document.addEventListener("DOMContentLoaded", () => {
  var accordeonButtons2 = document.getElementsByClassName("accordeon__button2");

  //пишем событие при клике на кнопки - вызов функции toggle
  for (var i = 0; i < accordeonButtons2.length; i++) {
    var accordeonButton2 = accordeonButtons2[i];

    accordeonButton2.addEventListener("click", toggleItems, false);
  }

  //пишем функцию
  function toggleItems() {

    // переменная кнопки(актульная) с классом
    var itemClass2 = this.className;

    // добавляем всем кнопкам класс close
    for (var i = 0; i < accordeonButtons2.length; i++) {
      accordeonButtons2[i].className = "accordeon__button2 closed";
    }

    // закрываем все открытые панели с текстом
    var pannels2 = document.getElementsByClassName("accordeon__panel2");
    for (var z = 0; z < pannels2.length; z++) {
      pannels2[z].style.maxHeight = 0;
    }

    // проверка. если кнопка имеет класс close при нажатии
    // к актуальной(нажатой) кнопке добававляем активный класс
    // а панели - которая находится рядом задаем высоту
    if (itemClass2 == "accordeon__button2 closed") {
      this.className = "accordeon__button2 active";
      var panel2 = this.nextElementSibling;
      panel2.style.maxHeight = panel2.scrollHeight + "px";
    }

  }

});
document.addEventListener("DOMContentLoaded", () => {
  var accordeonButtons3 = document.getElementsByClassName("accordeon__button3");

  //пишем событие при клике на кнопки - вызов функции toggle
  for (var i = 0; i < accordeonButtons3.length; i++) {
    var accordeonButton3 = accordeonButtons3[i];

    accordeonButton3.addEventListener("click", toggleItems, false);
  }

  //пишем функцию
  function toggleItems() {

    // переменная кнопки(актульная) с классом
    var itemClass3 = this.className;

    // добавляем всем кнопкам класс close
    for (var i = 0; i < accordeonButtons3.length; i++) {
      accordeonButtons3[i].className = "accordeon__button3 closed";
    }

    // закрываем все открытые панели с текстом
    var pannels3 = document.getElementsByClassName("accordeon__panel3");
    for (var z = 0; z < pannels3.length; z++) {
      pannels3[z].style.maxHeight = 0;
    }

    // проверка. если кнопка имеет класс close при нажатии
    // к актуальной(нажатой) кнопке добававляем активный класс
    // а панели - которая находится рядом задаем высоту
    if (itemClass3 == "accordeon__button3 closed") {
      this.className = "accordeon__button3 active";
      var panel3 = this.nextElementSibling;
      panel3.style.maxHeight = panel3.scrollHeight + "px";
    }

  }

});
document.addEventListener("DOMContentLoaded", () => {
  var accordeonButtons4 = document.getElementsByClassName("accordeon__button4");

  //пишем событие при клике на кнопки - вызов функции toggle
  for (var i = 0; i < accordeonButtons4.length; i++) {
    var accordeonButton4 = accordeonButtons4[i];

    accordeonButton4.addEventListener("click", toggleItems, false);
  }

  //пишем функцию
  function toggleItems() {

    // переменная кнопки(актульная) с классом
    var itemClass4 = this.className;

    // добавляем всем кнопкам класс close
    for (var i = 0; i < accordeonButtons4.length; i++) {
      accordeonButtons4[i].className = "accordeon__button4 closed";
    }

    // закрываем все открытые панели с текстом
    var pannels4 = document.getElementsByClassName("accordeon__panel4");
    for (var z = 0; z < pannels4.length; z++) {
      pannels4[z].style.maxHeight = 0;
    }

    // проверка. если кнопка имеет класс close при нажатии
    // к актуальной(нажатой) кнопке добававляем активный класс
    // а панели - которая находится рядом задаем высоту
    if (itemClass4 == "accordeon__button4 closed") {
      this.className = "accordeon__button4 active";
      var panel4 = this.nextElementSibling;
      panel4.style.maxHeight = panel4.scrollHeight + "px";
    }

  }

});
document.addEventListener("DOMContentLoaded", () => {
  var accordeonButtons5 = document.getElementsByClassName("accordeon__button5");

  //пишем событие при клике на кнопки - вызов функции toggle
  for (var i = 0; i < accordeonButtons5.length; i++) {
    var accordeonButton5 = accordeonButtons5[i];

    accordeonButton5.addEventListener("click", toggleItems, false);
  }

  //пишем функцию
  function toggleItems() {

    // переменная кнопки(актульная) с классом
    var itemClass5 = this.className;

    // добавляем всем кнопкам класс close
    for (var i = 0; i < accordeonButtons5.length; i++) {
      accordeonButtons5[i].className = "accordeon__button5 closed";
    }

    // закрываем все открытые панели с текстом
    var pannels5 = document.getElementsByClassName("accordeon__panel5");
    for (var z = 0; z < pannels5.length; z++) {
      pannels5[z].style.maxHeight = 0;
    }

    // проверка. если кнопка имеет класс close при нажатии
    // к актуальной(нажатой) кнопке добававляем активный класс
    // а панели - которая находится рядом задаем высоту
    if (itemClass5 == "accordeon__button5 closed") {
      this.className = "accordeon__button5 active";
      var panel5 = this.nextElementSibling;
      panel5.style.maxHeight = panel5.scrollHeight + "px";
    }

  }

});
document.addEventListener("DOMContentLoaded", () => {
  var accordeonButtons6 = document.getElementsByClassName("accordeon__button6");

  //пишем событие при клике на кнопки - вызов функции toggle
  for (var i = 0; i < accordeonButtons6.length; i++) {
    var accordeonButton6 = accordeonButtons6[i];

    accordeonButton6.addEventListener("click", toggleItems, false);
  }

  //пишем функцию
  function toggleItems() {

    // переменная кнопки(актульная) с классом
    var itemClass6 = this.className;

    // добавляем всем кнопкам класс close
    for (var i = 0; i < accordeonButtons6.length; i++) {
      accordeonButtons6[i].className = "accordeon__button6 closed";
    }

    // закрываем все открытые панели с текстом
    var pannels6 = document.getElementsByClassName("accordeon__panel6");
    for (var z = 0; z < pannels6.length; z++) {
      pannels6[z].style.maxHeight = 0;
    }

    // проверка. если кнопка имеет класс close при нажатии
    // к актуальной(нажатой) кнопке добававляем активный класс
    // а панели - которая находится рядом задаем высоту
    if (itemClass6 == "accordeon__button6 closed") {
      this.className = "accordeon__button6 active";
      var panel6 = this.nextElementSibling;
      panel6.style.maxHeight = panel6.scrollHeight + "px";
    }

  }

});
document.addEventListener("DOMContentLoaded", () => {
  var accordeonButtons7 = document.getElementsByClassName("accordeon__button7");

  //пишем событие при клике на кнопки - вызов функции toggle
  for (var i = 0; i < accordeonButtons7.length; i++) {
    var accordeonButton7 = accordeonButtons7[i];

    accordeonButton7.addEventListener("click", toggleItems, false);
  }

  //пишем функцию
  function toggleItems() {

    // переменная кнопки(актульная) с классом
    var itemClass7 = this.className;

    // добавляем всем кнопкам класс close
    for (var i = 0; i < accordeonButtons7.length; i++) {
      accordeonButtons7[i].className = "accordeon__button7 closed";
    }

    // закрываем все открытые панели с текстом
    var pannels7 = document.getElementsByClassName("accordeon__panel7");
    for (var z = 0; z < pannels7.length; z++) {
      pannels7[z].style.maxHeight = 0;
    }

    // проверка. если кнопка имеет класс close при нажатии
    // к актуальной(нажатой) кнопке добававляем активный класс
    // а панели - которая находится рядом задаем высоту
    if (itemClass7 == "accordeon__button7 closed") {
      this.className = "accordeon__button7 active";
      var panel7 = this.nextElementSibling;
      panel7.style.maxHeight = panel7.scrollHeight + "px";
    }

  }

});
document.addEventListener("DOMContentLoaded", () => {
  var accordeonButtons8 = document.getElementsByClassName("accordeon__button8");

  //пишем событие при клике на кнопки - вызов функции toggle
  for (var i = 0; i < accordeonButtons8.length; i++) {
    var accordeonButton8 = accordeonButtons8[i];

    accordeonButton8.addEventListener("click", toggleItems, false);
  }

  //пишем функцию
  function toggleItems() {

    // переменная кнопки(актульная) с классом
    var itemClass8 = this.className;

    // добавляем всем кнопкам класс close
    for (var i = 0; i < accordeonButtons8.length; i++) {
      accordeonButtons8[i].className = "accordeon__button8 closed";
    }

    // закрываем все открытые панели с текстом
    var pannels8 = document.getElementsByClassName("accordeon__panel8");
    for (var z = 0; z < pannels8.length; z++) {
      pannels8[z].style.maxHeight = 0;
    }

    // проверка. если кнопка имеет класс close при нажатии
    // к актуальной(нажатой) кнопке добававляем активный класс
    // а панели - которая находится рядом задаем высоту
    if (itemClass8 == "accordeon__button8 closed") {
      this.className = "accordeon__button8 active";
      var panel8 = this.nextElementSibling;
      panel8.style.maxHeight = panel8.scrollHeight + "px";
    }

  }

});
document.addEventListener("DOMContentLoaded", () => {
  var accordeonButtons9 = document.getElementsByClassName("accordeon__button9");

  //пишем событие при клике на кнопки - вызов функции toggle
  for (var i = 0; i < accordeonButtons9.length; i++) {
    var accordeonButton9 = accordeonButtons9[i];

    accordeonButton9.addEventListener("click", toggleItems, false);
  }

  //пишем функцию
  function toggleItems() {

    // переменная кнопки(актульная) с классом
    var itemClass9 = this.className;

    // добавляем всем кнопкам класс close
    for (var i = 0; i < accordeonButtons9.length; i++) {
      accordeonButtons9[i].className = "accordeon__button9 closed";
    }

    // закрываем все открытые панели с текстом
    var pannels9 = document.getElementsByClassName("accordeon__panel9");
    for (var z = 0; z < pannels9.length; z++) {
      pannels9[z].style.maxHeight = 0;
    }

    // проверка. если кнопка имеет класс close при нажатии
    // к актуальной(нажатой) кнопке добававляем активный класс
    // а панели - которая находится рядом задаем высоту
    if (itemClass9 == "accordeon__button9 closed") {
      this.className = "accordeon__button9 active";
      var panel9 = this.nextElementSibling;
      panel9.style.maxHeight = panel9.scrollHeight + "px";
    }

  }

});
document.addEventListener("DOMContentLoaded", () => {
  (function ($) {
    var elActive = '';
    $.fn.selectCF = function (options) {

      // option
      var settings = $.extend({
        color: "#888888", // color
        backgroundColor: "#FFFFFF", // background
        change: function () { }, // event change
      }, options);

      return this.each(function () {

        var selectParent = $(this);
        list = [],
          html = '';

        //parameter CSS
        var width = $(selectParent).width();

        $(selectParent).hide();
        if ($(selectParent).children('option').length == 0) { return; }
        $(selectParent).children('option').each(function () {
          if ($(this).is(':selected')) { s = 1; title = $(this).text(); } else { s = 0; }
          list.push({
            value: $(this).attr('value'),
            text: $(this).text(),
            selected: s,
          })
        })

        // style
        var style = " background: " + settings.backgroundColor + "; color: " + settings.color + " ";

        html += "<ul class='selectCF'>";
        html += "<li>";
        html += "<span class='arrowCF ion-chevron-right' style='" + style + "'></span>";
        html += "<span class='titleCF' style='" + style + "; width:" + width + "px'>" + title + "</span>";
        html += "<span class='searchCF' style='" + style + "; width:" + width + "px'><input style='color:" + settings.color + "' /></span>";
        html += "<ul>";
        $.each(list, function (k, v) {
          s = (v.selected == 1) ? "selected" : "";
          html += "<li value=" + v.value + " class='" + s + "'>" + v.text + "</li>";
        })
        html += "</ul>";
        html += "</li>";
        html += "</ul>";
        $(selectParent).after(html);
        var customSelect = $(this).next('ul.selectCF'); // add Html
        var seachEl = $(this).next('ul.selectCF').children('li').children('.searchCF');
        var seachElOption = $(this).next('ul.selectCF').children('li').children('ul').children('li');
        var seachElInput = $(this).next('ul.selectCF').children('li').children('.searchCF').children('input');

        // handle active select
        $(customSelect).unbind('click').bind('click', function (e) {
          e.stopPropagation();
          if ($(this).hasClass('onCF')) {
            elActive = '';
            $(this).removeClass('onCF');
            $(this).removeClass('searchActive'); $(seachElInput).val('');
            $(seachElOption).show();
          } else {
            if (elActive != '') {
              $(elActive).removeClass('onCF');
              $(elActive).removeClass('searchActive'); $(seachElInput).val('');
              $(seachElOption).show();
            }
            elActive = $(this);
            $(this).addClass('onCF');
            $(seachEl).children('input').focus();
          }
        })

        // handle choose option
        var optionSelect = $(customSelect).children('li').children('ul').children('li');
        $(optionSelect).bind('click', function (e) {
          var value = $(this).attr('value');
          if ($(this).hasClass('selected')) {
            //
          } else {
            $(optionSelect).removeClass('selected');
            $(this).addClass('selected');
            $(customSelect).children('li').children('.titleCF').html($(this).html());
            $(selectParent).val(value);
            settings.change.call(selectParent); // call event change
          }
        })

        // handle search 
        $(seachEl).children('input').bind('keyup', function (e) {
          var value = $(this).val();
          if (value) {
            $(customSelect).addClass('searchActive');
            $(seachElOption).each(function () {
              if ($(this).text().search(new RegExp(value, "i")) < 0) {
                // not item
                $(this).fadeOut();
              } else {
                // have item
                $(this).fadeIn();
              }
            })
          } else {
            $(customSelect).removeClass('searchActive');
            $(seachElOption).fadeIn();
          }
        })

      });
    };
    $(document).click(function () {
      if (elActive != '') {
        $(elActive).removeClass('onCF');
        $(elActive).removeClass('searchActive');
      }
    })
  }(jQuery));

  $(function () {
    var event_change = $('#event-change');
    $(".select").selectCF({
      change: function () {
        var value = $(this).val();
        var text = $(this).children('option:selected').html();
        console.log(value + ' : ' + text);
        event_change.html(value + ' : ' + text);
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  $('.calc__btn_one').click(function (event) {
    $('.calc__one').css('display', 'none');
    $('.calc__two').fadeIn();
    return false;
  });
  $('.calc__btn_two').click(function (event) {
    $('.calc__two').css('display', 'none');
    $('.calc__three').fadeIn();
    return false;
  });
  $('.calc__btn_three').click(function (event) {
    $('.calc__three').css('display', 'none');
    $('.calc__four').fadeIn();
    return false;
  });
  $('.calc__btn_four').click(function (event) {
    $('.calc__four').css('display', 'none');
    $('.calc__five').fadeIn();
    return false;
  });
  $('.calc__btn_five').click(function (event) {
    $('.calc__five').css('display', 'none');
    $('.calc__six').fadeIn();
    return false;
  });
  $('.calc__btn_six').click(function (event) {
    $('.calc__six').css('display', 'none');
    $('.calc__seven').fadeIn();
    return false;
  });
  $('.calc__btn_seven').click(function (event) {
    $('.calc__seven').css('display', 'none');
    $('.calc__eight').fadeIn();
    return false;
  });

  $('.calc__two .calc__prev').click(function (event) {
    $('.calc__two').css('display', 'none');
    $('.calc__one').fadeIn();
    return false;
  });

  $('.calc__three .calc__prev').click(function (event) {
    $('.calc__three').css('display', 'none');
    $('.calc__two').fadeIn();
    return false;
  });

  $('.calc__four .calc__prev').click(function (event) {
    $('.calc__four').css('display', 'none');
    $('.calc__three').fadeIn();
    return false;
  });

  $('.calc__five .calc__prev').click(function (event) {
    $('.calc__five').css('display', 'none');
    $('.calc__four').fadeIn();
    return false;
  });

  $('.calc__six .calc__prev').click(function (event) {
    $('.calc__six').css('display', 'none');
    $('.calc__five').fadeIn();
    return false;
  });

  $('.calc__seven .calc__prev').click(function (event) {
    $('.calc__seven').css('display', 'none');
    $('.calc__six').fadeIn();
    return false;
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");
  var swiper = new Swiper(".swiper1", {
    spaceBetween: 0,
    loop: true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination1",
    },
    autoplay: {
      delay: 8450,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1"
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      }
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const progressCircle = document.querySelector(".autoplay-progress2 svg");
  const progressContent = document.querySelector(".autoplay-progress2 span");
  var swiper11 = new Swiper(".swiper11", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    centeredSlides: false,
    // loop: true,
    autoplay: {
      delay: 8450,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".swiper-button-next11",
      prevEl: ".swiper-button-prev11"
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      }
    },
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const progressCircle = document.querySelector(".autoplay-progress3 svg");
  const progressContent = document.querySelector(".autoplay-progress3 span");
  var swiper22 = new Swiper(".swiper22", {
    slidesPerView: 6,
    spaceBetween: 40,
    loop: true,
    centeredSlides: false,
    loop: true,
    autoplay: {
      delay: 8450,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".swiper-button-next22",
      prevEl: ".swiper-button-prev22"
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      }
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        loop: true,
        grid: {
          rows: 2,
        },
        spaceBetween: 8,
        slidesPerView: 3,
      },
      767: {
        loop: true,
        grid: {
          rows: 2,
        },
        spaceBetween: 8,
        slidesPerView: 3,
      },
      992: {
        loop: true,
        grid: {
          rows: 2,
        },
        spaceBetween: 8,
        slidesPerView: 3,
      },
      1200: {
        loop: true,
        spaceBetween: 8,
        slidesPerView: 6
      }
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const progressCircle = document.querySelector(".autoplay-progress3 svg");
  const progressContent = document.querySelector(".autoplay-progress3 span");
  var swiper23 = new Swiper(".swiper23", {
    slidesPerView: 4,
    spaceBetween: 48,
    loop: true,
    centeredSlides: false,
    loop: true,
    autoplay: {
      delay: 8450,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".swiper-button-next23",
      prevEl: ".swiper-button-prev23"
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      }
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 1
      },
      576: {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 2
      },
      767: {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 2
      },
      992: {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 3
      },
      1200: {
        loop: true,
        spaceBetween: 48,
        slidesPerView: 4
      }
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const progressCircle = document.querySelector(".autoplay-progress3 svg");
  const progressContent = document.querySelector(".autoplay-progress3 span");
  var swiper9 = new Swiper(".swiper9", {
    spaceBetween: 20,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper90 = new Swiper(".swiper90", {
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 8450,
      disableOnInteraction: false
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      }
    },
    navigation: {
      nextEl: ".swiper-button-next9",
      prevEl: ".swiper-button-prev9",
    },
    thumbs: {
      swiper: swiper9,
    },
  });
});
document.addEventListener("DOMContentLoaded", () => {
  var swiper92 = new Swiper(".swiper92", {
    spaceBetween: 0,
    slidesPerView: 2,
    freeMode: true,
    direction: "vertical",
  });
  var swiper91 = new Swiper(".swiper91", {
    spaceBetween: 0,
    loop: true,
    thumbs: {
      swiper: swiper92,
    },
  });
});
document.addEventListener("DOMContentLoaded", () => {
  let menuBtn = document.querySelector('.menu-btn');
  let menu = document.querySelector('.menu');
  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
  });
});
document.addEventListener("DOMContentLoaded", () => {
  let menuBtn2 = document.querySelector('.menu-btn2');
  let menu2 = document.querySelector('.menu2');
  menuBtn2.addEventListener('click', function () {
    menuBtn2.classList.toggle('active');
    menu2.classList.toggle('active');
  });
});
document.addEventListener("DOMContentLoaded", () => {
  let menuBtn3 = document.querySelector('.menu-btn3');
  let menu3 = document.querySelector('.menu3');
  menuBtn3.addEventListener('click', function () {
    menuBtn3.classList.toggle('active');
    menu3.classList.toggle('active');
  });
});
// svg
$(function () {
  jQuery('img.svg').each(function () {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function (data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');

      // Add replaced image's ID to the new SVG
      if (typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');

      // Check if the viewport is set, else we gonna set it if we can.
      if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }

      // Replace image with new SVG
      $img.replaceWith($svg);

    }, 'xml');

  });
});
