const submitBtn = document.getElementById("submitBtn");
const ratingContainer = document.getElementById("ratingContainer");
const thankYouContainer = document.getElementById("thankYouContainer");
const ratingEvaluations = document.getElementById("ratingEvaluations");

let selectedRating = null;

const ratingButtons = document.querySelectorAll(".rating-evaluations button");

ratingButtons.forEach((btn) => { 
    btn.addEventListener('click', () => {
        selectedRating = btn.textContent;
    });
});


submitBtn.addEventListener('click', function () {
    if (selectedRating !== null) {
        ratingContainer.style.display = 'none';
        thankYouContainer.style.display = 'block';
        thankYouContainer.style.display = 'flex';
        const text = document.getElementById("text");
        text.textContent = selectedRating;
    }
    
});