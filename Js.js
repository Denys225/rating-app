const submitBtn = document.getElementById("submitBtn");
const ratingContainer = document.getElementById("ratingContainer");
const thankYouContainer = document.getElementById("thankYouContainer");
const ratingEvaluations = document.getElementById("ratingEvaluations");
const ratingContent = document.querySelector(".rating-content");

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
    } else {
        if (!document.getElementById("error-message")) {
            let erorText = document.createElement("erorText");
            erorText.id = "error-message";
            erorText.textContent = 'Make some choise';
            erorText.style.color = 'hsl(25, 97%, 53%)';
            erorText.style.fontSize = '20px'
            erorText.style.display = 'flex';
            erorText.style.justifyContent = 'center';
            erorText.style.margin = '15px 0px 0px 0px';
            ratingContent.appendChild(erorText)
        }
    }
    
});