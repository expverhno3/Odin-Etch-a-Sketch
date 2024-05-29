document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.container');

    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
    }
    container.addEventListener('mouseover', function(e) {
        if (e.target.classList.contains('square')) {
            e.target.style.backgroundColor = '#3498db'; // Change this color to whatever you want
        }
    });
});

