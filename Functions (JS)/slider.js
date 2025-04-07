let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0; // Volver al primer slide
    } else if (index < 0) {
        currentSlide = totalSlides - 1; // Ir al último slide
    } else {
        currentSlide = index;
    }

    // Ocultar todas las diapositivas
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Mostrar la diapositiva actual
    slides[currentSlide].classList.add('active');
}

// Función para cambiar de diapositiva
function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

// Inicializar el slider mostrando la primera diapositiva
showSlide(currentSlide);
