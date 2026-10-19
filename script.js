
const destinations = [
  {
    id: 1, region: "asia",
    name: { fa: "جزیره سوکوترا", en: "Socotra Island" },
    country: { fa: "یمن", en: "Yemen" },
    description: {
      fa: "جزیره‌ای شگفت‌انگیز با درختان خون اژدها، سواحل دورافتاده و طبیعتی کم‌نظیر.",
      en: "A remarkable island of dragon blood trees, remote beaches and extraordinary biodiversity."
    },
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80",
    lat: 12.4634, lon: 53.8237
  },
  {
    id: 2, region: "asia",
    name: { fa: "جزایر راجا آمپات", en: "Raja Ampat" },
    country: { fa: "اندونزی", en: "Indonesia" },
    description: {
      fa: "آب‌های شفاف، جزایر آهکی و یکی از غنی‌ترین زیست‌بوم‌های دریایی جهان.",
      en: "Crystal-clear waters, limestone islands and exceptionally rich marine life."
    },
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=900&q=80",
    lat: -0.2333, lon: 130.5167
  },
  {
    id: 3, region: "asia",
    name: { fa: "جنگل‌های بورنئو", en: "Borneo Rainforest" },
    country: { fa: "مالزی", en: "Malaysia" },
    description: {
      fa: "جنگل‌های استوایی، رودخانه‌های پیچ‌درپیچ و حیات‌وحش منحصربه‌فرد.",
      en: "Tropical rainforests, winding rivers and unique wildlife."
    },
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80",
    lat: 4.5, lon: 114.0
  },
  {
    id: 4, region: "asia",
    name: { fa: "دره هونزا", en: "Hunza Valley" },
    country: { fa: "پاکستان", en: "Pakistan" },
    description: {
      fa: "قله‌های بلند، روستاهای کوهستانی و چشم‌اندازهای باشکوه هیمالیا و قراقروم.",
      en: "High peaks, mountain villages and spectacular Karakoram landscapes."
    },
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
    lat: 36.3167, lon: 74.65
  },
  {
    id: 5, region: "europe",
    name: { fa: "فیوردهای نروژ", en: "Norwegian Fjords" },
    country: { fa: "نروژ", en: "Norway" },
    description: {
      fa: "دریاهای باریک میان صخره‌های عظیم، آبشارها و کوهستان‌های سبز.",
      en: "Deep blue inlets surrounded by dramatic cliffs, waterfalls and green mountains."
    },
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=900&q=80",
    lat: 61.0, lon: 6.5
  },
  {
    id: 6, region: "europe",
    name: { fa: "جزایر فارو", en: "Faroe Islands" },
    country: { fa: "قلمرو دانمارک", en: "Kingdom of Denmark" },
    description: {
      fa: "صخره‌های ساحلی، آبشارهای مرتفع و روستاهایی میان اقیانوس و مه.",
      en: "Ocean cliffs, dramatic waterfalls and tiny villages wrapped in mist."
    },
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80",
    lat: 61.8926, lon: -6.9118
  },
  {
    id: 7, region: "africa",
    name: { fa: "صحرای نامیب", en: "Namib Desert" },
    country: { fa: "نامیبیا", en: "Namibia" },
    description: {
      fa: "تپه‌های شنی سرخ، درختان خشکیده و منظره‌ای شبیه سیاره‌ای دیگر.",
      en: "Rust-red dunes, ancient dead trees and otherworldly desert scenery."
    },
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=900&q=80",
    lat: -24.5, lon: 15.5
  },
  {
    id: 8, region: "africa",
    name: { fa: "کوه‌های اطلس", en: "Atlas Mountains" },
    country: { fa: "مراکش", en: "Morocco" },
    description: {
      fa: "مسیرهای کوهستانی، روستاهای سنتی و چشم‌اندازهایی میان کوه و صحرا.",
      en: "Mountain trails, traditional villages and landscapes between peaks and desert."
    },
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
    lat: 31.05, lon: -7.92
  },
  {
    id: 9, region: "north",
    name: { fa: "یوکان وحشی", en: "Wild Yukon" },
    country: { fa: "کانادا", en: "Canada" },
    description: {
      fa: "جنگل‌های شمالی، دریاچه‌های دورافتاده و کوهستان‌های پوشیده از برف.",
      en: "Northern wilderness, remote lakes and snow-covered mountain ranges."
    },
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=900&q=80",
    lat: 63.0, lon: -135.0
  },
  {
    id: 10, region: "north",
    name: { fa: "جزیره ونکوور", en: "Vancouver Island" },
    country: { fa: "کانادا", en: "Canada" },
    description: {
      fa: "جنگل‌های بارانی معتدل، سواحل آرام و مسیرهای طبیعت‌گردی.",
      en: "Temperate rainforests, peaceful beaches and scenic hiking trails."
    },
    image: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=900&q=80",
    lat: 49.65, lon: -125.45
  },
  {
    id: 11, region: "south",
    name: { fa: "پاتاگونیا", en: "Patagonia" },
    country: { fa: "آرژانتین و شیلی", en: "Argentina & Chile" },
    description: {
      fa: "یخچال‌های طبیعی، دریاچه‌های آبی و قله‌های گرانیتی باشکوه.",
      en: "Glaciers, blue lakes and monumental granite peaks at the edge of the world."
    },
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
    lat: -50.9423, lon: -73.4068
  },
  {
    id: 12, region: "oceania",
    name: { fa: "فیوردلند", en: "Fiordland" },
    country: { fa: "نیوزیلند", en: "New Zealand" },
    description: {
      fa: "دریاچه‌های عمیق، جنگل‌های بارانی و آبشارهایی میان کوهستان‌های مه‌آلود.",
      en: "Deep fjords, rainforest and waterfalls beneath misty mountain peaks."
    },
    image: "https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&w=900&q=80",
    lat: -45.4167, lon: 167.7167
  }
];

const regionNames = {
  asia: { fa: "آسیا", en: "ASIA" },
  europe: { fa: "اروپا", en: "EUROPE" },
  africa: { fa: "آفریقا", en: "AFRICA" },
  north: { fa: "آمریکای شمالی", en: "NORTH AMERICA" },
  south: { fa: "آمریکای جنوبی", en: "SOUTH AMERICA" },
  oceania: { fa: "اقیانوسیه", en: "OCEANIA" }
};

let currentLanguage = "fa";
let currentRegion = "all";

const grid = document.getElementById("destinationGrid");
const count = document.getElementById("destinationCount");
const modal = document.getElementById("destinationModal");

function renderDestinations() {
  const visible = destinations.filter(item =>
    currentRegion === "all" || item.region === currentRegion
  );

  grid.innerHTML = "";

  visible.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "destination-card";
    card.style.animationDelay = `${index * 70}ms`;
    card.tabIndex = 0;
    card.setAttribute("role", "button");

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name[currentLanguage];
    img.loading = "lazy";

    const info = document.createElement("div");
    info.className = "card-info";

    const region = document.createElement("div");
    region.className = "card-region";
    region.textContent = regionNames[item.region][currentLanguage];

    const title = document.createElement("h3");
    title.textContent = item.name[currentLanguage];

    const country = document.createElement("p");
    country.textContent = item.country[currentLanguage];

    const description = document.createElement("p");
    description.textContent = item.description[currentLanguage];

    const arrow = document.createElement("span");
    arrow.className = "card-arrow";
    arrow.textContent = currentLanguage === "fa"
      ? "کشف این مقصد ←"
      : "Discover this place →";

    info.append(region, title, country, description, arrow);
    card.append(img, info);

    card.addEventListener("click", () => openDestination(item));
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openDestination(item);
      }
    });

    grid.appendChild(card);
  });

  count.textContent = currentLanguage === "fa"
    ? `${visible.length} مقصد`
    : `${visible.length} destinations`;
}

function changeLanguage() {
  currentLanguage = currentLanguage === "fa" ? "en" : "fa";

  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === "fa" ? "rtl" : "ltr";
  document.body.dir = document.documentElement.dir;

  document.querySelectorAll("[data-fa][data-en]").forEach(element => {
    element.innerHTML = element.dataset[currentLanguage];
  });

  document.getElementById("languageBtn").textContent =
    currentLanguage === "fa" ? "EN | فارسی" : "فارسی | EN";

  document.querySelectorAll(".filter").forEach(button => {
    button.classList.toggle("active", button.dataset.region === currentRegion);
  });

  renderDestinations();
}

function openDestination(item) {
  document.getElementById("modalImage").src = item.image;
  document.getElementById("modalImage").alt = item.name[currentLanguage];
  document.getElementById("modalRegion").textContent =
    regionNames[item.region][currentLanguage] + " · " + item.country[currentLanguage];
  document.getElementById("modalTitle").textContent = item.name[currentLanguage];
  document.getElementById("modalDescription").textContent = item.description[currentLanguage];

  const mapLink = document.getElementById("mapLink");
  mapLink.href = `https://www.openstreetmap.org/?mlat=${item.lat}&mlon=${item.lon}#map=8/${item.lat}/${item.lon}`;
  mapLink.textContent = currentLanguage === "fa"
    ? "مشاهده روی نقشه ↗"
    : "View on map ↗";

  const weatherBox = document.getElementById("weatherBox");
  weatherBox.textContent = currentLanguage === "fa"
    ? "در حال دریافت آب‌وهوای مقصد..."
    : "Loading destination weather...";

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  loadWeather(item);
}

async function loadWeather(item) {
  const weatherBox = document.getElementById("weatherBox");

  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${item.lat}&longitude=${item.lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=auto`;

    const response = await fetch(url);
    if (!response.ok) throw new Error("Weather request failed");

    const data = await response.json();
    const weather = data.current;

    if (!weather) throw new Error("No current weather data");

    if (currentLanguage === "fa") {
      weatherBox.textContent =
        `🌡 دما: ${weather.temperature_2m}°C | 💧 رطوبت: ${weather.relative_humidity_2m}% | 💨 سرعت باد: ${weather.wind_speed_10m} km/h`;
    } else {
      weatherBox.textContent =
        `🌡 Temperature: ${weather.temperature_2m}°C | 💧 Humidity: ${weather.relative_humidity_2m}% | 💨 Wind: ${weather.wind_speed_10m} km/h`;
    }
  } catch (error) {
    weatherBox.textContent = currentLanguage === "fa"
      ? "اطلاعات آب‌وهوا در دسترس نیست؛ اتصال اینترنت را بررسی کن."
      : "Weather data is unavailable. Please check your internet connection.";
  }
}

document.getElementById("languageBtn").addEventListener("click", changeLanguage);

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    currentRegion = button.dataset.region;

    document.querySelectorAll(".filter").forEach(filter => {
      filter.classList.toggle("active", filter === button);
    });

    renderDestinations();
  });
});

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.getElementById("modalClose").addEventListener("click", closeModal);

modal.addEventListener("click", event => {
  if (event.target === modal) closeModal();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModal();
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(element => {
  revealObserver.observe(element);
});

renderDestinations();
