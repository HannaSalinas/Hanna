function showSection(sectionId) {
    // Oculta todas las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Muestra la sección seleccionada
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.classList.add('active');
}

function showPhoto() {
    document.getElementById('photo-modal').style.display = 'block';
}

function closePhoto() {
    document.getElementById('photo-modal').style.display = 'none';
}


