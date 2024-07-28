// document.addEventListener("DOMContentLoaded", () => {
//   const languageDiv = document.querySelector(".language");
//   const burgerMenu = document.getElementById("burgerMenu");

//   languageDiv.addEventListener("click", () => {
//     burgerMenu.classList.toggle("show");
//   });

//   // Hide the menu when clicking outside
//   document.addEventListener("click", (event) => {
//     if (
//       !languageDiv.contains(event.target) &&
//       !burgerMenu.contains(event.target)
//     ) {
//       burgerMenu.classList.remove("show");
//     }
//   });

//   const toggleMenu = document.getElementById("toggleMenu");
//   const toggleMenuContent = document.getElementById("toggleMenuContent");

//   const categories = document.querySelectorAll(".category");

//   categories.forEach((category) => {
//     category.addEventListener("click", () => {
//       const categoryData = category.dataset.category;
//       toggleMenuContent.innerHTML = `<h2>${category.textContent}</h2><p>Content for ${categoryData}</p>`;
//       toggleMenu.classList.add("show");
//     });
//   });

//   toggleMenu.addEventListener("click", () => {
//     toggleMenu.classList.remove("show");
//   });

//   toggleMenuContent.addEventListener("click", (event) => {
//     event.stopPropagation();
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const languageDiv = document.querySelector(".language");
  const languageFooter = document.getElementById("languageburgerMenu");
  const burgerMenu = document.getElementById("burgerMenu");
  const toggleMenu = document.getElementById("toggleMenu");
  const toggleMenuContent = document.getElementById("toggleMenuContent");
  const toggleMenuRow1 = document.getElementById("toggleMenuRow1");
  const toggleMenuRow2 = document.getElementById("toggleMenuRow2");

  // Load JSON data
  fetch("./assets/data.json")
    .then((response) => response.json())
    .then((data) => {
      const categories = data.categories;
      console.log(categories);

      document.querySelectorAll(".category").forEach((categoryLink) => {
        categoryLink.addEventListener("click", (event) => {
          const categoryId = event.target.getAttribute("data-category");
          const categoryData = categories.find((cat) => cat.id === categoryId);

          if (categoryData) {
            toggleMenuRow1.innerHTML = `
                <div class="image-container">
                  <img src="${categoryData.image}" alt="${categoryData.title}" />
                </div>
                <div class="info-container">
                  <h2>${categoryData.title}</h2>
                  <p>${categoryData.description}</p>
                </div>
              `;

            toggleMenuRow2.innerHTML = `
                <ul class="category-list">
                  ${categoryData.items
                    .map((item) => `<li>${item}</li>`)
                    .join("")}
                </ul>
              `;

            toggleMenu.classList.add("show");
          }
        });
      });
    });

  languageDiv.addEventListener("click", () => {
    burgerMenu.classList.toggle("show");
    languageFooter.classList.toggle("show");
  });

  // Hide the menu when clicking outside
  document.addEventListener("click", (event) => {
    if (
      !languageDiv.contains(event.target) &&
      !burgerMenu.contains(event.target)
    ) {
      burgerMenu.classList.remove("show");
      languageFooter.classList.remove("show");
    }
  });

  document.addEventListener("click", (event) => {
    if (
      !toggleMenuContent.contains(event.target) &&
      !event.target.classList.contains("category")
    ) {
      toggleMenu.classList.remove("show");
    }
  });
});
// document.addEventListener("DOMContentLoaded", () => {
//   const swiperContainer = document.querySelector(".swiperContainer");
//   const rewardContainers = document.querySelectorAll(".rewardContainer");
//   const leftArrow = document.querySelector(".leftArrow");
//   const rightArrow = document.querySelector(".rightArrow");
//   const swiper = document.querySelector(".swiper");
//   let currentIndex = 0;

//   const updateSwiperPosition = () => {
//     const visibleCount = 3;
//     const containerWidth = swiperContainer.offsetWidth;
//     const itemWidth = containerWidth / visibleCount;
//     const maxIndex = rewardContainers.length - visibleCount;

//     if (currentIndex < 0) currentIndex = 0;
//     if (currentIndex > maxIndex) currentIndex = maxIndex;

//     const newLeft = -currentIndex * itemWidth;
//     swiperContainer.style.transform = `translateX(${newLeft}px)`;

//     const swiperMaxLeft = 300 - swiper.offsetWidth;
//     const swiperLeft = (swiperMaxLeft / maxIndex) * currentIndex;
//     swiper.style.left = `${swiperLeft}px`;
//   };

//   leftArrow.addEventListener("click", () => {
//     currentIndex--;
//     updateSwiperPosition();
//   });

//   rightArrow.addEventListener("click", () => {
//     currentIndex++;
//     updateSwiperPosition();
//   });

//   updateSwiperPosition();
// });
// document.addEventListener("DOMContentLoaded", () => {
//   const swiperContainer = document.querySelector(".swiperContainer");
//   const rewardContainers = document.querySelectorAll(".rewardContainer");
//   const leftArrow = document.querySelector(".leftArrow");
//   const rightArrow = document.querySelector(".rightArrow");
//   const swiper = document.querySelector(".swiper");
//   let currentIndex = 0;

//   let startX = 0;
//   let currentTranslateX = 0;
//   let prevTranslateX = 0;

//   const updateSwiperPosition = () => {
//     const visibleCount = 3;
//     const containerWidth = swiperContainer.offsetWidth;
//     const itemWidth = containerWidth / visibleCount;
//     const maxIndex = rewardContainers.length - visibleCount;

//     if (currentIndex < 0) currentIndex = 0;
//     if (currentIndex > maxIndex) currentIndex = maxIndex;

//     const newLeft = -currentIndex * itemWidth;
//     swiperContainer.style.transform = `translateX(${newLeft}px)`;

//     const swiperMaxLeft = 110 - swiper.offsetWidth;
//     const swiperLeft = (swiperMaxLeft / maxIndex) * currentIndex;
//     swiper.style.left = `${swiperLeft}px`;
//   };

//   const startSwipe = (event) => {
//     startX =
//       event.type === "touchstart" ? event.touches[0].clientX : event.clientX;
//     prevTranslateX = currentTranslateX;
//   };

//   const moveSwipe = (event) => {
//     const currentX =
//       event.type === "touchmove" ? event.touches[0].clientX : event.clientX;
//     const diffX = currentX - startX;
//     currentTranslateX = prevTranslateX + diffX;
//     swiperContainer.style.transform = `translateX(${currentTranslateX}px)`;
//   };

//   const endSwipe = (event) => {
//     const visibleCount = 3;
//     const containerWidth = swiperContainer.offsetWidth;
//     const itemWidth = containerWidth / visibleCount;
//     const diffX = currentTranslateX - prevTranslateX;

//     if (Math.abs(diffX) > itemWidth / 2) {
//       currentIndex = diffX > 0 ? currentIndex - 1 : currentIndex + 1;
//     }

//     updateSwiperPosition();
//   };

//   leftArrow.addEventListener("click", () => {
//     currentIndex--;
//     updateSwiperPosition();
//   });

//   rightArrow.addEventListener("click", () => {
//     currentIndex++;
//     updateSwiperPosition();
//   });

//   swiperContainer.addEventListener("touchstart", startSwipe);
//   swiperContainer.addEventListener("touchmove", moveSwipe);
//   swiperContainer.addEventListener("touchend", endSwipe);

//   // swiperContainer.addEventListener("mousedown", startSwipe);
//   // swiperContainer.addEventListener("mousemove", moveSwipe);
//   // swiperContainer.addEventListener("mouseup", endSwipe);
//   // swiperContainer.addEventListener("mouseleave", endSwipe);

//   updateSwiperPosition();
// });
// slider offers
document.addEventListener("DOMContentLoaded", () => {
  fetch("./data/data.json")
    .then((response) => response.json())
    .then((data) => {
      populateOffers(data.cards);
      updateSwiper();
    });

  let currentIndex = 0;
  const slidesToShow = 3;
  const slidesToScroll = 1;
  const sliderTrack = document.getElementById("sliderTrack");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  function populateOffers(cards) {
    sliderTrack.innerHTML = cards
      .map(
        (card) => `
      <div class="slide">
        <div class="relativeWrapper">
          <img src="${card.mainPhoto}" alt="${card.title}">
          <img src="${card.relativePhoto}" alt="Relative" class="relativePhoto">
        </div>
        <div class="title">${card.title}</div>
        <div class="description">${card.description
          .map((paragraph) => `<p>${paragraph}</p>`)
          .join("")}</div>
      </div>
    `
      )
      .join("");
  }

  function updateSliderPosition() {
    const slideWidth = sliderTrack.querySelector(".slide").clientWidth + 20; // including margin-right
    sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  function updateSwiper() {
    const totalSlides = sliderTrack.children.length;
    const visibleSlides = Math.min(slidesToShow, totalSlides);
    const trackWidth = sliderTrack.clientWidth;
    const swiperWidth = (visibleSlides / totalSlides) * trackWidth;
    document.querySelector(".swiper").style.width = `${swiperWidth}px`;
  }

  function moveToNextSlide() {
    const totalSlides = sliderTrack.children.length;
    if (currentIndex < totalSlides - slidesToShow) {
      currentIndex += slidesToScroll;
      updateSliderPosition();
      updateSwiper();
    }
  }

  function moveToPrevSlide() {
    if (currentIndex > 0) {
      currentIndex -= slidesToScroll;
      updateSliderPosition();
      updateSwiper();
    }
  }

  nextButton.addEventListener("click", moveToNextSlide);
  prevButton.addEventListener("click", moveToPrevSlide);

  window.addEventListener("resize", updateSwiper);
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".footerDropdownToggle");
  const footerRows = document.querySelectorAll(".footerMainRow");

  toggleButtons.forEach((toggleButton, index) => {
    toggleButton.addEventListener("click", function () {
      const dropdownList = this.nextElementSibling;
      const footerRow = footerRows[index];
      const isDropdownVisible = dropdownList.style.display === "block";
      const icon = this.querySelector(".footerDropdownArrow img");

      // Hide all dropdown lists and reset all icons
      document
        .querySelectorAll(".footerDropDown .dropdownList")
        .forEach((list) => {
          list.style.display = "none";
        });
      footerRows.forEach((row) => {
        row.classList.remove("expanded");
      });
      document.querySelectorAll(".footerDropdownArrow img").forEach((icon) => {
        icon.classList.remove("rotated");
      });

      // Show the clicked dropdown list and rotate the icon if not visible
      if (!isDropdownVisible) {
        dropdownList.style.display = "block";
        footerRow.classList.add("expanded");
        icon.classList.add("rotated");
      }
    });
  });
});

function burgerMenu() {
  const burgerMenu = document.querySelector(".burger-menu");
  const mainDiv = document.querySelector("main");
  const footerTop = document.querySelector(".footerTop");
  const footerMain = document.querySelector(".footerMain");

  function toggleMenu() {
    burgerMenu.classList.toggle("active");
    footerMain.classList.toggle("active");
    if (burgerMenu.classList.contains("active")) {
      mainDiv.style.display = "none";
      footerTop.style.display = "none";
    } else {
      mainDiv.style.display = "block";
      footerTop.style.display = "flex";
    }
    if (burgerMenu.classList.contains("active")) {
      mainDiv.style.display = "none";
      footerTop.style.display = "none";
      footerTopmain.style.display = "none";
    } else {
      mainDiv.style.display = "block";
      footerTop.style.display = "flex";
      footerTopmain.style.display = "block";
    }
  }

  burgerMenu.addEventListener("click", toggleMenu);
}

document.addEventListener("DOMContentLoaded", burgerMenu);

// creating cards
const createCard = (title, description, mainPhoto, relativePhoto) => {
  return `
    <div class="slide">
      <div class="card">
        <img src="${mainPhoto}" alt="${title}" class="mainPhoto">
        <img src="${relativePhoto}" alt="-" class="relativePhoto">
        <div class="cardContent">
          <div class="title">${title}</div>
          <div class="description">${description
            .map((desc) => `<p>${desc}</p>`)
            .join("")}</div>
        </div>
      </div>
    </div>
  `;
};

// Example usage
const cardData = {
  cards: [
    {
      mainPhoto: "./assets/1.png",
      relativePhoto: "./assets/44.png",
      title: "ჯაზ ფესტივალის შეთავაზებები ",
      description: ["IVERIA BEACH - დაიბრუნეთ 30%"],
    },
    {
      mainPhoto: "./assets/3.png",
      relativePhoto: "./assets/11.png",
      title: " ავტო    თეგეტა მოტორსი ",
      description: ["თეგეტა მოტორსი - 50% ფასდაკლება."],
    },
    {
      mainPhoto: "./assets/4.png",
      relativePhoto: "./assets/11.png",
      title: [
        " ავტო",
        "ჯაზ ფესტივალის შეთავაზებები  მოტორსი",
        "თეგეტა  მოტორსი",
      ],
      description: ["თეგეტა მოტორსი - ბათუმი"],
    },
    {
      mainPhoto: "./assets/5.png",
      relativePhoto: "./assets/55.png",
      title: [" ვიზა", "ჯაზ ფესტივალის შეთავაზებები  მოტორსი"],
      description: ["Le Meridien Batumi – 10%-იანი ფასდაკლება"],
    },
    {
      mainPhoto: "./assets/6.png",
      relativePhoto: "./assets/66.png",
      title: ["დასვენება  ", " ვიზა  ", " ჯაზ ფესტივალის   შეთავაზებები"],
      description: ["Colosseum Marina Hotel – 15%-იანი ფასდაკლება."],
    },
  ],
};

// Select the sliderTrack element
const sliderTrack = document.getElementById("sliderTrack");

// Generate and append all cards
cardData.cards.forEach((card) => {
  sliderTrack.innerHTML += createCard(
    card.title,
    card.description,
    card.mainPhoto,
    card.relativePhoto
  );
});
