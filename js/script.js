// ======================================
// Professional Portfolio
// Main JavaScript
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    loadAcademicSummary();

});

function loadAcademicSummary() {

    const container = document.getElementById("academic-summary");

    // Only run on the Academics page
    if (!container) return;

    container.innerHTML = `

        <div class="stats-grid">

            <div class="stat-card">
                <h2>${academicSummary.distinctions}</h2>
                <p>Distinctions Earned</p>
            </div>

            <div class="stat-card">
                <h2>${academicSummary.completedModules}</h2>
                <p>Modules Completed</p>
            </div>

            <div class="stat-card">
                <h2>${academicSummary.expectedGraduation}</h2>
                <p>Expected Graduation</p>
            </div>

            <div class="stat-card">
                <h2>${academicSummary.matricAverage}%</h2>
                <p>National Senior Certificate Average</p>
            </div>

        </div>

    `;

}