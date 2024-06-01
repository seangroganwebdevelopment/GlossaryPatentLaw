function toggleNav() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
}

function toggleLetter(letter) {
    const entries = document.getElementById('letter' + letter);
    if (entries.style.display === 'block') {
        entries.style.display = 'none';
    } else {
        entries.style.display = 'block';
    }
} 
