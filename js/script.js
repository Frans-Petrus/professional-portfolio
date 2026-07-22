const semesters = {

    // =====================================================
    // 2026
    // =====================================================

    "semester-2026-1": [

        {
            module: "Artificial Intelligence",
            code: "CMPG313",
            mark: 75,
            distinction: true
        },

        {
            module: "Computer Networks",
            code: "CMPG315",
            mark: 68,
            distinction: false
        },

        {
            module: "Databases",
            code: "CMPG311",
            mark: 75,
            distinction: true
        },

        {
            module: "Decision Support Systems I",
            code: "CMPG312",
            mark: 65,
            distinction: false
        }

    ],

    // =====================================================
    // 2025 First Semester
    // =====================================================

    "semester-2025-1": [

        {
            module: "Apps and Advanced User Interface Programming",
            code: "CMPG212",
            mark: 87,
            distinction: true
        },

        {
            module: "Communication Skills",
            code: "CMPG214",
            mark: 82,
            distinction: true
        },

        {
            module: "Information Security",
            code: "CMPG215",
            mark: 81,
            distinction: true
        },

        {
            module: "Object-Oriented Programming",
            code: "CMPG211",
            mark: 76,
            distinction: true
        },

        {
            module: "System Analysis and Design I",
            code: "CMPG213",
            mark: 67,
            distinction: false
        },

        {
            module: "Understanding the Natural World",
            code: "WVNS211",
            mark: 77,
            distinction: true
        }

    ],

    // =====================================================
    // 2025 Second Semester
    // =====================================================

    "semester-2025-2": [

        {
            module: "Data Analytics II",
            code: "CMPG222",
            mark: 70,
            distinction: false
        },

        {
            module: "Data Structures and Algorithms",
            code: "CMPG221",
            mark: 60,
            distinction: false
        },

        {
            module: "Discrete Mathematics",
            code: "MTHS225",
            mark: 86,
            distinction: true
        },

        {
            module: "Problem Solving for Managers",
            code: "BMAN223",
            mark: 81,
            distinction: true
        },

        {
            module: "System Analysis and Design II",
            code: "CMPG223",
            mark: 68,
            distinction: false
        },

        {
            module: "Understanding the Natural World",
            code: "WVNS221",
            mark: 83,
            distinction: true
        }

    ],

    // =====================================================
    // 2024 First Semester
    // =====================================================

    "semester-2024-1": [

        {
            module: "Academic Literacy Development I",
            code: "ALDE111",
            mark: null,
            result: "Recognised",
            distinction: false
        },

        {
            module: "Introduction to Business Management",
            code: "BMAN111",
            mark: 79,
            distinction: true
        },

        {
            module: "Financial Accountancy (Special)",
            code: "ACCS111",
            mark: 82,
            distinction: true
        },

        {
            module: "Descriptive Statistics",
            code: "STTN111",
            mark: 80,
            distinction: true
        },

        {
            module: "Introduction to Computing and Programming",
            code: "CMPG111",
            mark: 82,
            distinction: true
        },

        {
            module: "Basic Mathematical Techniques",
            code: "MTHS113",
            mark: 88,
            distinction: true
        }

    ],

    // =====================================================
    // 2024 Second Semester
    // =====================================================

    "semester-2024-2": [

        {
            module: "Academic Literacy Development II",
            code: "ALDE122",
            mark: 77,
            distinction: true
        },

        {
            module: "Introductory Statistical Inference I",
            code: "STTN121",
            mark: 75,
            distinction: true
        },

        {
            module: "Structured Programming",
            code: "CMPG121",
            mark: 58,
            distinction: false
        },

        {
            module: "Financial Accounting (Special)",
            code: "ACCS121",
            mark: 69,
            distinction: false
        },

        {
            module: "User Interface Programming I",
            code: "CMPG122",
            mark: 96,
            distinction: true
        }

    ],

    // =====================================================
    // 2023 National Senior Certificate
    // =====================================================

    "semester-2023": [

        {
            module: "Life Orientation",
            code: "Achievement Level 7",
            mark: 88,
            distinction: true
        },

        {
            module: "Mathematics",
            code: "Achievement Level 7",
            mark: 87,
            distinction: true
        },

        {
            module: "Life Sciences",
            code: "Achievement Level 7",
            mark: 86,
            distinction: true
        },

        {
            module: "Agricultural Technology",
            code: "Achievement Level 7",
            mark: 82,
            distinction: true
        },

        {
            module: "English",
            code: "Achievement Level 7",
            mark: 81,
            distinction: true
        },

        {
            module: "Afrikaans",
            code: "Achievement Level 7",
            mark: 80,
            distinction: true
        },

        {
            module: "Physical Sciences",
            code: "Achievement Level 6",
            mark: 78,
            distinction: false
        }

    ]

};


// =====================================================
// Render Semester
// =====================================================

function createSemester(containerId, modules) {

    const container = document.getElementById(containerId);

    if (!container) return;

    let html = "";

    modules.forEach(module => {

        let badge = "";
        let markDisplay = "";

        if (module.mark === null) {

            markDisplay = "N/A";
            badge = `<span class="badge pass">${module.result}</span>`;

        } else {

            markDisplay = `${module.mark}%`;

            badge = module.distinction
                ? '<span class="badge distinction">Distinction</span>'
                : '<span class="badge pass">Pass</span>';

        }

        html += `

            <div class="module-row ${module.distinction ? 'distinction' : ''}">

                <div class="module-name">

                    <strong>${module.module}</strong>

                    <div class="module-code">

                        ${module.code}

                    </div>

                </div>

                <div class="module-mark">

                    ${markDisplay}

                </div>

                <div>

                    ${badge}

                </div>

            </div>

        `;

    });

    container.innerHTML = html;

}


// =====================================================
// Render All Semesters
// =====================================================

for (const semester in semesters) {

    createSemester(

        semester,

        semesters[semester]

    );

}