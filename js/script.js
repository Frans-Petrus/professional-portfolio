const semesters = {

    "semester-2026-1": [

        {
            module: "Artificial Intelligence",
            code: "CMPG313",
            mark: 75
        },

        {
            module: "Computer Networks",
            code: "CMPG315",
            mark: 68
        },

        {
            module: "Databases",
            code: "CMPG311",
            mark: 75
        },

        {
            module: "Decision Support Systems I",
            code: "CMPG312",
            mark: 65
        }

    ]

};

function createSemester(containerId, modules) {

    const container = document.getElementById(containerId);

    let html = "";

    modules.forEach(module => {

        const badge =
            module.mark >= 75
            ? '<span class="badge distinction">Distinction</span>'
            : '<span class="badge pass">Pass</span>';

        html += `

            <div class="module-row">

                <div class="module-name">

                    <strong>${module.module}</strong><br>

                    ${module.code}

                </div>

                <div class="module-mark">

                    ${module.mark}%

                </div>

                <div>

                    ${badge}

                </div>

            </div>

        `;

    });

    container.innerHTML = html;

}

for (const semester in semesters) {

    createSemester(

        semester,

        semesters[semester]

    );

}