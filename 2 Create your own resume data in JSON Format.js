//Create your own resume data in JSON Format

const resume = {
    name : 'Yogesh Kumar J R',
    ph_No : '9361159691',
    email : 'jryogesh1121@gmail.com',
    careerObjective : [
        'To work in a learning and challenging environment, utilizing my skill and knowledge to give the best of my abilities and contribute positively for the growth of the organization.'
    ],
    academics : [SSLC = {
        schoolName : 'Sivakasi Nadar',
        boardOfStudy : 'State Board',
        yearOfPassing : 2017,
        percentage : 87
    }, HSC = {
        schoolName : 'V.H.N',
        boardOfStudy : 'State Board',
        yearOfPassing : 2019,
        percentage : 72
    }, B_E_ECE = {
        collegeName : 'K.L.N. College',
        boardOfStudy : 'Anna University',
        yearOfPassing : 2023,
        cgpa : 8.35
    }],
    areaOfInterest : [
        'Mobile App Development',
        'Problem Solving'
    ],
    skill_set : [
        programmingLanguages = [
            'C', 'HTML', 'CSS', 'Kotlin', 'Java(Beginner)'
        ],
        tools = [
            'Android Studio', 'Figma',
            'Microsoft D365 BC'
        ]
    ],
    projects : [
        mini_projects = [
            'Simple CGPA Calculator Application',
            'Smart Waste Management System',
            'Speed Breaker Avoidance',
        ],
        main_project = [
            'Crime Analysis and Prediction using Data Mining and Machine Learning'
        ]
    ],
    certificates : [
        'C and JAVA - Certification of Merit from Spoken Tutorial Project, IIT Bombay.',
        'Training - Certificate from Great Innovus Solutions Inc. for completing a training on Microsoft Dynamics 365 Business Central from 27.02.2023 to 24.03.2023.',
        'Developed the project and got certificate a course on ICT Academymy.skillsnetwork.site powered by IBM developer skills network.',
        'Crime Analysis and Prediction using Data Mining and Machine Learning - Our Project Paper got nominated and Paper Presented in INTERNATIONAL CONFERENCE conducted by JP College of Engineering.'
    ],
    coCurricularActivities : [
        'Participated in Technical Paper Presentation 2021 on the topic of LIFI organized by Industry Institute Partnership Cell.',
        'An Industrial Visit to Indian Space Research Organization at ISRO Propulsion Complex (IPRC) Mahendragiri on 11 May 2022.',
        'An Industrial Visit to Kodaikanal Solar Observatory Museum at Kodaikanal on 21 March 2023.'

    ],
    organizationalAbilities : [
        'Organized an event in IETE sponsored Intra College Symposium conducted by Department of ECE, K.L.N. College of Engineering on 23 October 2021.',
        'Organized an Inter College Symposium as a Secretary conducted by Department of ECE, K.L.N. College of Engineering on 3 May 2023.'
    ],
    interPersonalSkills : [
        'Adaptability', 'Quick learner', 'Time Management', 'Good Communication Skill'
    ],
    personalInformation : {
        permanentAddress : '12/29, Anhoniyar Kovil Street, Old Kuyavar Palayam Road, Madurai - 625009.',
        dateOfBirth : '11.01.2002',
        languageKnown : [
            'English', 'Tamil', 'Sourashtra'
        ],
        hobbies : 'Playing Chess and Badminton'
    },
    declaration : [
        'I hereby declare that the all information in this resume is true and is correct to the best of my knowledge and belief.'
    ]
};
console.log(resume);