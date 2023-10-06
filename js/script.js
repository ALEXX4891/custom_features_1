const element = document.querySelector(".select__form");
const choices = new Choices(element, {
  itemSelectText: "",
  searchEnabled: false,
  shouldSort: false,
});

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.

ymaps.ready(init);
function init() {
  // Создание карты.
  let myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [48.872185073737896, 2.354223999999991],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 15,
  });

  // Создание геообъекта с типом точка (метка).
  let myMark = new ymaps.Placemark(
    [48.872185073737896, 2.354223999999991],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "image/pin.svg",
      iconImageSize: [28, 40],
      iconImageOffset: [-14, -40],
    }
  );
  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myMark);
}

new SimpleBar(document.querySelector(".scrol__container"), {
  scrollbarMaxSize: 74,
  autoHide: false,
});

let selector = document.querySelector("input[type='tel']");
let im = new Inputmask("+7(999) 999-99-99");
im.mask(selector);
const validation = new JustValidate(".form", {
  errorLabelStyle: {
    color: "#FF5C00",
  },
});
console.log(validation);

validation
  .addField(".name", [
    {
      rule: "minLength",
      value: 3,
      errorMessage: "Не достаточное количество символов",
    },
    {
      rule: "maxLength",
      value: 30,
      errorMessage: "Вы ввели больше чем положено",
    },
    {
      rule: "required",
      errorMessage: "Вы не ввели имя",
    },
  ])
  .addField(".email", [
    {
      rule: "required",
      errorMessage: "Вы не ввели e-mail",
    },
    {
      rule: "email",
      errorMessage: "E-mail не корректный!",
    },
  ])
  .addField(".tel", [
    {
      rule: "required",
      errorMessage: "Вы не ввели телефон",
    },
    {
      rule: "function",
      validator: function (name, value) {
        const phone = selector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: "Номер телефона не корректный!",
    },
  ]);

tippy(".tooltip__marker", {
  content: "Глава 2, страница 176",
  theme: "tomato",
  maxWidth: 163,
  arrow: '<svg width="8" height="10" xmlns="http://www.w3.org/2000/svg"> <!-- Created with SVG Editor - http://github.com/mzalive/SVG Editor/ --> <defs>  <filter id="svg_3_blur">   <feGaussianBlur stdDeviation="0" in="SourceGraphic"/></filter> </defs>  <g>  <title>Layer 1</title>  <path stroke="#666666" filter="url(#svg_3_blur)" id="svg_3" d="m0.070375,0.048991l3.9372,6.278242l3.937205,-6.278242l-7.874405,0z" stroke-width="0.1" fill="#666666"/> </g></svg>',
});
