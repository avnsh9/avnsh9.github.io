function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.full-viewport-container');
    sections.forEach(section => section.classList.add('hidden'));

    // Show the selected section
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.classList.remove('hidden');
    }

    // Scroll to top when switching sections
    window.scrollTo(0, 0);
}

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('#nav-links a'); // Select all anchor elements inside the nav

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active'); // Hide the menu after a link is clicked
    });
});