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

    ],

    "semester-2025-1": [

        {
            module: "Apps and Advanced User Interface Programming",
            code: "CMPG212",
            mark: 87
        },

        {
            module: "Communication Skills",
            code: "CMPG214",
            mark: 82
        },

        {
            module: "Information Security",
            code: "CMPG215",
            mark: 81
        },

        {
            module: "Object-Oriented Programming",
            code: "CMPG211",
            mark: 76
        },

        {
            module: "System Analysis and Design I",
            code: "CMPG213",
            mark: 67
        },

        {
            module: "Understanding the Natural World",
            code: "WVNS211",
            mark: 77
        }

    ],

    "semester-2025-2": [

        {
            module: "Data Analytics II",
            code: "CMPG222",
            mark: 70
        },

        {
            module: "Data Structures and Algorithms",
            code: "CMPG221",
            mark: 60
        },

        {
            module: "Discrete Mathematics",
            code: "MTHS225",
            mark: 86
        },

        {
            module: "Problem Solving for Managers",
            code: "BMAN223",
            mark: 81
        },

        {
            module: "System Analysis and Design II",
            code: "CMPG223",
            mark: 68
        },

        {
            module: "Understanding the Natural World",
            code: "WVNS221",
            mark: 83
        }

    ],

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

            <div class="module-row ${module.mark >= 75 ? 'distinction' : ''}">

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