const menuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

function calculateGPA() {
    const course1 = parseFloat(document.getElementById('course1').value);
    const course2 = parseFloat(document.getElementById('course2').value);
    const course3 = parseFloat(document.getElementById('course3').value);
    const resultEl = document.getElementById('gpa-result');

    // Validate inputs
    if (isNaN(course1) || isNaN(course2) || isNaN(course3)) {
        resultEl.textContent = " Please enter valid numbers for all courses.";
        resultEl.style.color = "red";
        return;
    }

    if (course1 < 0 || course1 > 100 || course2 < 0 || course2 > 100 || course3 < 0 || course3 > 100) {
        resultEl.textContent = " Marks must be between 0 and 100.";
        resultEl.style.color = "red";
        return;
    }

    // GPA calculation: average / 25 => 0–4 scale
    const average = (course1 + course2 + course3) / 3;
    let gpa = (average / 25).toFixed(2);

    // Classification
    let classification = "";
    if (gpa >= 3.5) classification = "Excellent";
    else if (gpa >= 3.0) classification = "Very Good";
    else if (gpa >= 2.0) classification = "Good";
    else if (gpa >= 1.0) classification = "Fair";
    else classification = "Poor";

    // Display result
    resultEl.textContent = `GPA: ${gpa} — ${classification}`;
    resultEl.style.color = "var(--primary)";
}
