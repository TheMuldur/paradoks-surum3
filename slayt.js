var models = [
  {
    name: "Çamlıca Kulesi",
    image: "img/camlicakulesi.jpg",
    link: "http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe",
  },
  {
    name: "Galata Köprüsü",
    image: "img/galatakopru.jpg",
    link: "http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion",
  },
  {
    name: "Galata Kulesi",
    image: "img/galatakulesi.jpg",
    link: "http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance",
  },
  {
    name: "Kız Kulesi",
    image: "img/kizkulesi.jpg",
    link: "http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active",
  },
  {
    name: "Gülhane Parkı",
    image: "img/gulhanepark.jpg",
    link: "https://cdn.motor1.com/images/mgl/8wQR2/s1/2021-rolls-royce-ghost-details.jpg",
  },
  {
    name: "İstiklal Caddesi",
    image: "img/istiklalcaddesi.jpg",
    link: "https://cdn.motor1.com/images/mgl/8wQR2/s1/2021-rolls-royce-ghost-details.jpg",
  },
  {
    name: "Mısır Çarşısı",
    image: "img/misircarsi.jpg",
    link: "https://cdn.motor1.com/images/mgl/8wQR2/s1/2021-rolls-royce-ghost-details.jpg",
  },
  {
    name: "Sirkeci Tren Garı",
    image: "img/sirkecitren.jpg",
    link: "https://cdn.motor1.com/images/mgl/8wQR2/s1/2021-rolls-royce-ghost-details.jpg",
  },
  {
    name: "Taksim Meydan",
    image: "img/taksimmeydan.jpg",
    link: "https://cdn.motor1.com/images/mgl/8wQR2/s1/2021-rolls-royce-ghost-details.jpg",
  },
];

var index = 0;
var slaytCount = models.length;
var interval;

var settings = {
  duration: "2000",
  random: false,
};

init(settings);

document
  .querySelector(".fa-arrow-circle-left")
  .addEventListener("click", function () {
    index--;
    showSlide(index);
    console.log(index);
  });

document
  .querySelector(".fa-arrow-circle-right")
  .addEventListener("click", function () {
    index++;
    showSlide(index);
    console.log(index);
  });

document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    clearInterval(interval);
  });
});

document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseleave", function () {
    init(settings);
  });
});

function init(settings) {
  var prev;
  interval = setInterval(function () {
    if (settings.random) {
      // random index
      do {
        index = Math.floor(Math.random() * slaytCount);
      } while (index == prev);
      prev = index;
    } else {
      // artan index
      if (slaytCount == index + 1) {
        index = -1;
      }
      showSlide(index);
      console.log(index);
      index++;
    }
    showSlide(index);
  }, settings.duration);
}

function showSlide(i) {
  index = i;

  if (i < 0) {
    index = slaytCount - 1;
  }
  if (i >= slaytCount) {
    index = 0;
  }

  document.querySelector(".card-title").textContent = models[index].name;

  document
    .querySelector(".card-img-top")
    .setAttribute("src", models[index].image);

  document.querySelector(".card-link").setAttribute("href", models[index].link);
}

//setintorvel slaytı durdurmadan devam edeer
//seltimeout ise tek seferliğine devam ettririr

grup = document.querySelectorAll("#card");
grup.forEach(function (item) {
  item.style.background = "orange";
});

let doc = document.querySelector("h5");
doc.style.color = "white";

let etiket = document.getElementById("etiket");
etiket.style.color = "black";
arkaplan = document.querySelectorAll("body");
arkaplan.forEach(function (item) {
  item.style.background = "orange";
});
ikon = document.getElementById("ikon");
ikon.style.color = "white";

ikon2 = document.getElementById("ikon2");
ikon2.style.color = "white";
