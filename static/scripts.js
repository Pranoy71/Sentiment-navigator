document.getElementById('predict-btn').addEventListener('click', function() {
    this.classList.add('clicked');
    setTimeout(() => {
        this.classList.remove('clicked');
    }, 300);
});

document.addEventListener('DOMContentLoaded', function() {
    const result = document.getElementById('result');
    if (result) {
        result.style.animation = 'fadeIn 1s ease-in-out';
    }

    const clearBtn = document.getElementById('clear-btn');
    const textarea = document.getElementById('text');
    clearBtn.addEventListener('click', function() {
        textarea.value = '';
    });

    // Ensure text area is cleared on page load
    textarea.value = '';
});

// Add bounce animation to the predict button
document.getElementById('predict-btn').addEventListener('animationend', function() {
    this.classList.remove('bounce');
});
document.getElementById('predict-btn').classList.add('bounce');

// Add shake animation to the text area on form submission
document.getElementById('prediction-form').addEventListener('submit', function() {
    document.getElementById('text').classList.add('shake');
    setTimeout(() => {
        document.getElementById('text').classList.remove('shake');
    }, 500);
});
