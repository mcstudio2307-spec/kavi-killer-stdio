/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    const menu = document.getElementById("navMenu");

    menu.classList.toggle("active");
}


/* =========================
   CONTACT
========================= */

function openContact() {

    document.getElementById("contactModal").style.display = "flex";

}

function closeContact() {

    document.getElementById("contactModal").style.display = "none";

}


/* Close contact when clicking outside */

document.getElementById("contactModal").addEventListener("click", function(event) {

    if (event.target === this) {

        closeContact();

    }

});


/* =========================
   IMAGE GALLERY
========================= */

function openImage(src) {

    document.getElementById("largeImage").src = src;

    document.getElementById("imageViewer").style.display = "flex";

}

function closeImage() {

    document.getElementById("imageViewer").style.display = "none";

}


/* =========================
   HORROR PARTICLES
========================= */

const particleContainer =
    document.getElementById("particles");

for (let i = 0; i < 80; i++) {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        (5 + Math.random() * 10) + "s";

    particle.style.animationDelay =
        Math.random() * 10 + "s";

    particle.style.opacity =
        Math.random();

    particleContainer.appendChild(particle);
}


/* =========================
   HORROR MUSIC
========================= */

const music = document.getElementById("horrorMusic");
const musicButton = document.getElementById("musicButton");

function toggleMusic() {

    if (music.paused) {

        music.play()
            .then(() => {
                musicButton.innerHTML = "🔊 MUSIC";
            })
            .catch((error) => {
                console.log("Music could not start:", error);
            });

    } else {

        music.pause();
        musicButton.innerHTML = "🔇 MUSIC";

    }
}

randomLightning();

/* =========================
   ESC KEY
========================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeContact();

        closeImage();

    }

const stars = document.querySelectorAll(".star");

const ratingText = document.getElementById("ratingText");
const submitRating = document.getElementById("submitRating");
const averageRating = document.getElementById("averageRating");
const ratingCount = document.getElementById("ratingCount");

let selectedRating = 0;

const ratingNames = {
    1: "Very Bad 😞",
    2: "Bad 😕",
    3: "Good 🙂",
    4: "Very Good 😎",
    5: "Excellent 🔥"
};

stars.forEach(star => {
    star.addEventListener("click", () => {

        selectedRating = Number(star.dataset.rating);

        stars.forEach(s => {
            s.classList.remove("active");
        });

        stars.forEach(s => {
            if (Number(s.dataset.rating) <= selectedRating) {
                s.classList.add("active");
            }
        });

        ratingText.textContent = ratingNames[selectedRating];
    });
});

function loadRatings() {

    const ratings =
        JSON.parse(localStorage.getItem("mcStudioRatings")) || [];

    if (ratings.length === 0) {
        averageRating.textContent = "0.0";
        ratingCount.textContent = "0";
        return;
    }

    const total =
        ratings.reduce((sum, rating) => sum + rating, 0);

    const average = total / ratings.length;

    averageRating.textContent = average.toFixed(1);
    ratingCount.textContent = ratings.length;
}

submitRating.addEventListener("click", () => {

    if (selectedRating === 0) {
        alert("Please select a star rating first!");
        return;
    }

    let ratings =
        JSON.parse(localStorage.getItem("mcStudioRatings")) || [];

    ratings.push(selectedRating);

    localStorage.setItem(
        "mcStudioRatings",
        JSON.stringify(ratings)
    );

    loadRatings();

    ratingText.textContent =
        "Thank you for rating MC Studio! ❤️";

    stars.forEach(star => {
        star.classList.remove("active");
    });

    selectedRating = 0;
});

loadRatings();
});