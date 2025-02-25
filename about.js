// JavaScript function to toggle the visibility of the About section
function toggleAbout() {
    var aboutContent = document.getElementById('about-content');
    // Toggle the display property between 'none' and 'block'
    if (aboutContent.style.display === 'none' || aboutContent.style.display === '') {
        aboutContent.style.display = 'block';
    } else {
        aboutContent.style.display = 'none';
    }
}
