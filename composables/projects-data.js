// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projectsData = [
	{
        id: 1,
		project_id: 1,
		projectImages: [
            {
                id: 1,
                title: 'Diesel Repair',
                img: require('@/assets/images/diesel-repair-1.png'),
            },
            {
                id: 2,
                title: 'Diesel Repair',
                img: require('@/assets/images/diesel-repair-2.png'),
            },
            {
                id: 3,
                title: 'Diesel Repair',
                img: require('@/assets/images/diesel-repair-3.png'),
            },
        ],
        projectInfo: {
            clientHeading: 'About Client',
            companyInfos: [
                {
                    id: 1,
                    title: 'Name',
                    details: 'Diesel Laptops',
                },
                {
                    id: 2,
                    title: 'Services',
                    details: 'Laravel / Vue js',
                },
                {
                    id: 3,
                    title: 'Website',
                    details: 'https://www.diesellaptops.com/',
                },
                {
                    id: 4,
                    title: 'Phone',
                    details: '555 8888 888',
                },
            ],
            projectCredentialsTitle:'Project Credentials',
            projectCredentialsInfo: [
                {
                    id: 1,
                    title: 'Link',
                    details: 'https://repair.dieselstaging.com',
                },
                {
                    id: 2,
                    title: 'Email',
                    details: 'aahmed@diesellaptops.com',
                },
                {
                    id: 3,
                    title: 'Password',
                    details: 'Diesel123!',
                },
                
            ],
            
            objectivesHeading: 'Objective',
            objectivesDetails:
                'Develope new modules and solve logical problems in the project.',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'HTML',
                        'CSS',
                        'JavaScript',
                        'Vue.js',
                        'Quasar Framework',
                        'Laravel Framework',
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: 1,
                    details:
                        'At Diesel Laptops, I had the opportunity to work for a leading provider of diagnostic solutions for commercial and industrial vehicles. As a developer, my main task was to build modules and fix bugs in various Vue js/Quasar frontend applications and Laravel, collaborating with multiple backend developers along the way.'
                },
                {
                    id: 2,
                    details:
                        'One of my most challenging yet rewarding projects at Diesel Laptops was the development of the Health Module. This module was responsible for collecting and displaying scans from vehicles in a user-friendly manner. I was tasked with ensuring that the scans were accurately collected and displayed, requiring a high level of technical expertise and attention to detail.',
                },
                     {
                    id: 3,
                    details:
                        'Through my work at Diesel Laptops, I developed strong problem-solving and collaboration skills. I learned how to work effectively in a team and communicate technical concepts to both technical and non-technical stakeholders. I also gained a deeper understanding of the commercial and industrial vehicle diagnostic industry and the importance of innovation and customer service.',
                },
                {
                    id: 4,
                    details:
                        'Overall, my experience at Diesel Laptops was a valuable one that helped me grow both personally and professionally. The technical and collaborative skills that I developed during my time there will undoubtedly serve me well in future roles.',
                },
               
            ],
            socialSharingsHeading: 'Share This',
            socialSharings: [
                {
                    id: 1,
                    name: 'Twitter',
                    icon: 'twitter',
                    url: 'https://twitter.com/',
                },
                {
                    id: 2,
                    name: 'Instagram',
                    icon: 'instagram',
                    url: 'https://instagram.com/',
                },
                {
                    id: 3,
                    name: 'Facebook',
                    icon: 'facebook',
                    url: 'https://facebook.com/',
                },
                {
                    id: 4,
                    name: 'LinkedIn',
                    icon: 'linkedin',
                    url: 'https://linkedin.com/',
                },
                {
                    id: 5,
                    name: 'Youtube',
                    icon: 'youtube',
                    url: 'https://www.youtube.com/',
                },
            ],
        },
	
	},
    {
        id: 2,
		project_id: 2,
		projectImages: [
            {
                id: 1,
                title: 'Diesel Parts',
                img: require('@/assets/images/diesel-parts-1.png'),
            },
            {
                id: 2,
                title: 'Diesel Parts',
                img: require('@/assets/images/diesel-parts-2.png'),
            },
            {
                id: 3,
                title: 'Diesel Parts',
                img: require('@/assets/images/diesel-parts-3.png'),
            },
        ],
        projectInfo: {
            clientHeading: 'About Client',
            companyInfos: [
                {
                    id: 1,
                    title: 'Name',
                    details: 'Diesel Laptops',
                },
                {
                    id: 2,
                    title: 'Services',
                    details: 'Laravel / Vue js',
                },
                {
                    id: 3,
                    title: 'Website',
                    details: 'https://www.diesellaptops.com/',
                },
                {
                    id: 4,
                    title: 'Phone',
                    details: '555 8888 888',
                },
            ],
            projectCredentialsTitle:'Project Credentials',
            projectCredentialsInfo: [
                {
                    id: 1,
                    title: 'Link',
                    details: 'https://parts.dieselstaging.com/',
                },
                {
                    id: 2,
                    title: 'Email',
                    details: 'aahmed@diesellaptops.com',
                },
                {
                    id: 3,
                    title: 'Password',
                    details: 'Diesel123!',
                },
                
            ],
            
            objectivesHeading: 'Objective',
            objectivesDetails:
                'Develope new modules and solve logical problems in the project.',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'HTML',
                        'CSS',
                        'JavaScript',
                        'Vue.js',
                        'Quasar Framework',
                        'Laravel Framework',
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: 1,
                    details:
                        'At Diesel Laptops, I had the opportunity to work for a leading provider of diagnostic solutions for commercial and industrial vehicles. As a developer, my main task was to build modules and fix bugs in various Vue js/Quasar frontend applications Laravel , collaborating with multiple backend developers along the way.'
                },
                {
                    id: 2,
                    details:
                        'One of my most challenging yet rewarding projects at Diesel Laptops was the development of the Health Module. This module was responsible for collecting and displaying scans from vehicles in a user-friendly manner. I was tasked with ensuring that the scans were accurately collected and displayed, requiring a high level of technical expertise and attention to detail.',
                },
                     {
                    id: 3,
                    details:
                        'Through my work at Diesel Laptops, I developed strong problem-solving and collaboration skills. I learned how to work effectively in a team and communicate technical concepts to both technical and non-technical stakeholders. I also gained a deeper understanding of the commercial and industrial vehicle diagnostic industry and the importance of innovation and customer service.',
                },
                {
                    id: 4,
                    details:
                        'Overall, my experience at Diesel Laptops was a valuable one that helped me grow both personally and professionally. The technical and collaborative skills that I developed during my time there will undoubtedly serve me well in future roles.',
                },
               
            ],
            socialSharingsHeading: 'Share This',
            socialSharings: [
                {
                    id: 1,
                    name: 'Twitter',
                    icon: 'twitter',
                    url: 'https://twitter.com/',
                },
                {
                    id: 2,
                    name: 'Instagram',
                    icon: 'instagram',
                    url: 'https://instagram.com/',
                },
                {
                    id: 3,
                    name: 'Facebook',
                    icon: 'facebook',
                    url: 'https://facebook.com/',
                },
                {
                    id: 4,
                    name: 'LinkedIn',
                    icon: 'linkedin',
                    url: 'https://linkedin.com/',
                },
                {
                    id: 5,
                    name: 'Youtube',
                    icon: 'youtube',
                    url: 'https://www.youtube.com/',
                },
            ],
        },
	
	},
    {
        id: 3,
		project_id: 3,
		projectImages: [
            {
                id: 1,
                title: 'Open Bazar',
                img: require('@/assets/images/open-bazar-1.png'),
            },
            {
                id: 2,
                title: 'Open Bazar',
                img: require('@/assets/images/open-bazar-2.png'),
            },
            {
                id: 3,
                title: 'Open Bazar',
                img: require('@/assets/images/open-bazar-3.png'),
            },
        ],
        projectInfo: {
            clientHeading: 'About Client',
            companyInfos: [
                {
                    id: 1,
                    title: 'Name',
                    details: 'Open Bazar',
                },
                {
                    id: 2,
                    title: 'Services',
                    details: 'Laravel / Vue js',
                },
                {
                    id: 3,
                    title: 'Website',
                    details: 'https://openbazar.nl/',
                },
               
            ],
            projectCredentialsTitle:'Project Credentials',
            projectCredentialsInfo: [
                {
                    id: 1,
                    title: 'Link',
                    details: 'https://openbazar.nl/',
                },
                
                
            ],
            
            objectivesHeading: 'Objective',
            objectivesDetails:
                'Develope new modules and solve logical problems in the project.',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'HTML',
                        'CSS',
                        'JavaScript',
                        'Vue.js',
                        'Api Development',
                        'Laravel Framework',
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: 1,
                    details:
                        'During my time at Open Bazar, I had the opportunity to work for an innovative online marketplace that is transforming the way people buy and sell goods and services. As a developer, my primary role was to develop and maintain the platforms backend infrastructure, ensuring that it was fast, reliable, and scalable.'
                },
                {
                    id: 2,
                    details:
                        'In addition to developing the platforms infrastructure, I was also responsible for collaborating with frontend developers to ensure that the platform was user-friendly and aesthetically pleasing. This required strong communication and collaboration skills, as well as a deep understanding of frontend technologies such as HTML, CSS, and Vue js and Laravel Backend.',
                },
                     {
                    id: 3,
                    details:
                        'Through my work at Open Bazar, I gained valuable experience in developing and maintaining large-scale web applications, as well as the importance of innovation and user experience in online marketplaces. I also developed strong problem-solving, analytical, and collaboration skills, which will undoubtedly serve me well in future roles.',
                },
                {
                    id: 4,
                    details:
                        'Overall, my experience at Open Bazar was a valuable one that helped me grow both personally and professionally. The technical and collaborative skills that I developed during my time there will undoubtedly serve me well in future roles in the tech industry.',
                },
               
            ],
            socialSharingsHeading: 'Share This',
            socialSharings: [
                {
                    id: 1,
                    name: 'Twitter',
                    icon: 'twitter',
                    url: 'https://twitter.com/',
                },
                {
                    id: 2,
                    name: 'Instagram',
                    icon: 'instagram',
                    url: 'https://instagram.com/',
                },
                {
                    id: 3,
                    name: 'Facebook',
                    icon: 'facebook',
                    url: 'https://facebook.com/',
                },
                {
                    id: 4,
                    name: 'LinkedIn',
                    icon: 'linkedin',
                    url: 'https://linkedin.com/',
                },
                {
                    id: 5,
                    name: 'Youtube',
                    icon: 'youtube',
                    url: 'https://www.youtube.com/',
                },
            ],
        },
	
	},
    {
        id: 4,
		project_id: 4,
		projectImages: [
            {
                id: 1,
                title: 'ASPCA',
                img: require('@/assets/images/aspca-1.png'),
            },
            {
                id: 2,
                title: 'ASPCA',
                img: require('@/assets/images/aspca-2.png'),
            },
            {
                id: 3,
                title: 'ASPCA',
                img: require('@/assets/images/aspca-3.png'),
            },
        ],
        projectInfo: {
            clientHeading: 'About Client',
            companyInfos: [
                {
                    id: 1,
                    title: 'Name',
                    details: 'ASPCA',
                },
                {
                    id: 2,
                    title: 'Services',
                    details: 'Laravel',
                },
                {
                    id: 3,
                    title: 'Website',
                    details: 'https://www.aspca.org/',
                },
               
            ],
            // projectCredentialsTitle:'Project Credentials',
            // projectCredentialsInfo: [
            //     {
            //         id: 1,
            //         title: 'Link',
            //         details: 'http://35.162.29.30/admin/login',
            //     },
            //     {
            //         id: 2,
            //         title: 'Email',
            //         details: 'muhammad.abdullah@ikonicsolution.com',
            //     },
            //     {
            //         id: 3,
            //         title: 'Password',
            //         details: 'doobert',
            //     }
                
                
            // ],
            
            objectivesHeading: 'Objective',
            objectivesDetails:
                'Develope this Project from scratch.',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'HTML',
                        'CSS',
                        'JavaScript',
                        'Bootstrap',
                        'Jquery',
                        'AWS',
                        'Api Development',
                        'Laravel Framework',
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: 1,
                    details:
                        'As a Laravel developer, I had the opportunity to work on an exciting project from scratch. The project was a web application that aimed to solve a specific problem for a client in the NGO industry for animals. My role in the project was to lead the backend development effort and work closely with the frontend developers to deliver a high-quality, scalable, and secure application.'
                },
                {
                    id: 2,
                    details:
                        'As one of the developers who worked on the project from scratch, I was responsible for building the core functionalities of the application, designing and implementing the database schema, and developing the APIs that the frontend would consume. This required deep technical knowledge of the Laravel framework, as well as other technologies such as MySQL, REST APIs, and AWS services.',
                },
                     {
                    id: 3,
                    details:
                        'One of my most significant achievements in the project was leading the development of a custom search algorithm that was designed to improve the applications search capabilities. This required a deep understanding of search algorithms, data structures, and database management, as well as strong analytical and problem-solving skills.',
                },
                {
                    id: 4,
                    details:
                        'Overall, my experience working on this project from scratch was a valuable one that helped me grow both personally and professionally. The technical and project management skills that I developed during my time as a Laravel developer will undoubtedly serve me well in future roles in the tech industry.',
                },
               
            ],
            socialSharingsHeading: 'Share This',
            socialSharings: [
                {
                    id: 1,
                    name: 'Twitter',
                    icon: 'twitter',
                    url: 'https://twitter.com/',
                },
                {
                    id: 2,
                    name: 'Instagram',
                    icon: 'instagram',
                    url: 'https://instagram.com/',
                },
                {
                    id: 3,
                    name: 'Facebook',
                    icon: 'facebook',
                    url: 'https://facebook.com/',
                },
                {
                    id: 4,
                    name: 'LinkedIn',
                    icon: 'linkedin',
                    url: 'https://linkedin.com/',
                },
                {
                    id: 5,
                    name: 'Youtube',
                    icon: 'youtube',
                    url: 'https://www.youtube.com/',
                },
            ],
        },
	
	},
    {
        id: 5,
		project_id: 5,
		projectImages: [
            {
                id: 1,
                title: 'Talent Hunter',
                img: require('@/assets/images/talent-hunter-1.png'),
            },
            {
                id: 2,
                title: 'Talent Hunter',
                img: require('@/assets/images/talent-hunter-2.png'),
            },
            {
                id: 3,
                title: 'Talent Hunter',
                img: require('@/assets/images/talent-hunter-3.png'),
            },
        ],
        projectInfo: {
            clientHeading: 'About Client',
            companyInfos: [
                {
                    id: 1,
                    title: 'Name',
                    details: 'Talent Hunter',
                },
                {
                    id: 2,
                    title: 'Services',
                    details: 'Laravel',
                },
                {
                    id: 3,
                    title: 'Website',
                    details: 'https://www.talenthunters.com.pk/',
                },
               
            ],
            // projectCredentialsTitle:'Project Credentials',
            // projectCredentialsInfo: [
            //     {
            //         id: 1,
            //         title: 'Link',
            //         details: 'http://35.162.29.30/admin/login',
            //     },
            //     {
            //         id: 2,
            //         title: 'Email',
            //         details: 'muhammad.abdullah@ikonicsolution.com',
            //     },
            //     {
            //         id: 3,
            //         title: 'Password',
            //         details: 'doobert',
            //     }
                
                
            // ],
            
            objectivesHeading: 'Objective',
            objectivesDetails:
                'Develope this Project added  Modules in it. and solve error',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'HTML',
                        'CSS',
                        'JavaScript',
                        'Bootstrap',
                        'Jquery',
                        'Email Api',
                        'Api Development',
                        'Laravel Framework',
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: 1,
                    details:
                        'As a Laravel developer for Talent Hunters Pakistan, I was responsible for developing and implementing various modules and functionalities for the companys recruitment platform. Using my skills in Laravel, I was able to create custom solutions that met the specific needs of the platform and helped to streamline the recruitment process'
                },
                {
                    id: 2,
                    details:
                        'One of my key responsibilities was to create a user-friendly interface for job seekers to easily search and apply for jobs. I implemented advanced search functionality, allowing job seekers to filter their search results based on job title, location, salary range, and more. Additionally, I created a job application process that made it easy for job seekers to upload their resumes and cover letters, ensuring that their applications were submitted accurately and efficiently.',
                },
                     {
                    id: 3,
                    details:
                        'In addition to job seeker functionality, I also developed various features for the Talent Hunters Pakistan team to manage their recruitment activities. This included a comprehensive candidate management system, allowing recruiters to easily track and manage candidate applications, resumes, and interview notes. I also developed custom reporting tools that provided real-time data on recruitment activity, allowing the team to make informed decisions and adjust their strategy as needed.',
                },
              
               
            ],
            socialSharingsHeading: 'Share This',
            socialSharings: [
                {
                    id: 1,
                    name: 'Twitter',
                    icon: 'twitter',
                    url: 'https://twitter.com/',
                },
                {
                    id: 2,
                    name: 'Instagram',
                    icon: 'instagram',
                    url: 'https://instagram.com/',
                },
                {
                    id: 3,
                    name: 'Facebook',
                    icon: 'facebook',
                    url: 'https://facebook.com/',
                },
                {
                    id: 4,
                    name: 'LinkedIn',
                    icon: 'linkedin',
                    url: 'https://linkedin.com/',
                },
                {
                    id: 5,
                    name: 'Youtube',
                    icon: 'youtube',
                    url: 'https://www.youtube.com/',
                },
            ],
        },
	
	},
    {
        id: 6,
		project_id: 6,
		projectImages: [
            {
                id: 1,
                title: 'Portfolio Site',
                img: require('@/assets/images/portfolio-1.png'),
            },
            {
                id: 2,
                title: 'Portfolio Site',
                img: require('@/assets/images/portfolio-2.png'),
            },
            {
                id: 3,
                title: 'Portfolio Site',
                img: require('@/assets/images/portfolio-3.png'),
            },
        ],
        projectInfo: {
            clientHeading: 'About Client',
            companyInfos: [
                {
                    id: 1,
                    title: 'Name',
                    details: 'Maheer',
                },
                {
                    id: 2,
                    title: 'Services',
                    details: 'Vue js',
                },
                {
                    id: 3,
                    title: 'Website',
                    details: 'Your seeing it',
                },
               
            ],
            // projectCredentialsTitle:'Project Credentials',
            // projectCredentialsInfo: [
            //     {
            //         id: 1,
            //         title: 'Link',
            //         details: 'http://35.162.29.30/admin/login',
            //     },
            //     {
            //         id: 2,
            //         title: 'Email',
            //         details: 'muhammad.abdullah@ikonicsolution.com',
            //     },
            //     {
            //         id: 3,
            //         title: 'Password',
            //         details: 'doobert',
            //     }
                
                
            // ],
            
            objectivesHeading: 'Objective',
            objectivesDetails:
                'Develope this Portfolio to Showcase my Projects',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'HTML',
                        'CSS',
                        'JavaScript',
                        'Bootstrap',
                        'Api Development',
                        'Vue js',
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: 1,
                    details:
                        'I created a sleek and responsive portfolio website using Vue.js to showcase my skills and experience in web development. The website features a modern and minimalist design, intuitive navigation, and engaging animations and interactive elements. It highlights my work and provides potential clients with an easy way to learn more about me.'
                },
                
               
            ],
            socialSharingsHeading: 'Share This',
            socialSharings: [
                {
                    id: 1,
                    name: 'Twitter',
                    icon: 'twitter',
                    url: 'https://twitter.com/',
                },
                {
                    id: 2,
                    name: 'Instagram',
                    icon: 'instagram',
                    url: 'https://instagram.com/',
                },
                {
                    id: 3,
                    name: 'Facebook',
                    icon: 'facebook',
                    url: 'https://facebook.com/',
                },
                {
                    id: 4,
                    name: 'LinkedIn',
                    icon: 'linkedin',
                    url: 'https://linkedin.com/',
                },
                {
                    id: 5,
                    name: 'Youtube',
                    icon: 'youtube',
                    url: 'https://www.youtube.com/',
                },
            ],
        },
	
	},
    {
        id: 7,
		project_id: 7,
		projectImages: [
            {
                id: 1,
                title: 'Account ERP',
                img: require('@/assets/images/account-1.png'),
            },
            {
                id: 2,
                title: 'Account ERP',
                img: require('@/assets/images/account-2.png'),
            },
            {
                id: 3,
                title: 'Account ERP',
                img: require('@/assets/images/account-3.png'),
            },
        ],
        projectInfo: {
            clientHeading: 'About Client',
            companyInfos: [
                {
                    id: 1,
                    title: 'Name',
                    details: 'Account`s ERP  SASS',
                },
                {
                    id: 2,
                    title: 'Services',
                    details: 'Laravel',
                },
                {
                    id: 3,
                    title: 'Website',
                    details: 'client did not live it!',
                },
               
            ],
            // projectCredentialsTitle:'Project Credentials',
            // projectCredentialsInfo: [
            //     {
            //         id: 1,
            //         title: 'Link',
            //         details: 'http://35.162.29.30/admin/login',
            //     },
            //     {
            //         id: 2,
            //         title: 'Email',
            //         details: 'muhammad.abdullah@ikonicsolution.com',
            //     },
            //     {
            //         id: 3,
            //         title: 'Password',
            //         details: 'doobert',
            //     }
                
                
            // ],
            
            objectivesHeading: 'Objective',
            objectivesDetails:
                'Develop project from scratch and make a full ERP for a Organizations ',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'HTML',
                        'CSS',
                        'JavaScript',
                        'Bootstrap',
                        'Api Development',
                        'Laravel',
                        'SASS',
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: 1,
                    details:
                        'As a SaaS-based ERP developer, I designed and developed a comprehensive ERP system for my client that includes all necessary modules such as products, customers ,HRM , suppliers, sales, purchases, accounts, and stock reports. This ERP system provides a complete solution to manage and track various business operations, helping my client to streamline their processes and increase efficiency.'
                },
                {
                    id: 2,
                    details:
                        'One of the key features of this SaaS-based ERP system is that it is accessible from anywhere, at any time. My client s employees can access the system from any device with an internet connection, without needing to install any software. This makes it easier for them to collaborate and work remotely, while also reducing IT costs.'
                },
                {
                    id: 3,
                    details:
                        'The ERP system includes a variety of modules that cover all aspects of the business operations. The product module enables my client to manage their products, including product information, pricing, inventory, and more. The customer and supplier modules allow them to manage their relationships with customers and suppliers, including contact information, payment terms, and transaction history.'
                },
                {
                    id: 4,
                    details:
                        'The sales and purchase modules enable my client to manage their sales and purchase transactions, including invoicing, payment tracking, and order fulfillment. The accounts module allows them to manage their financial transactions, including receivables, payables, and general ledger. Finally, the stock reports module provides comprehensive reports on inventory levels, stock movements, and more.'
                },
               
            ],
            socialSharingsHeading: 'Share This',
            socialSharings: [
                {
                    id: 1,
                    name: 'Twitter',
                    icon: 'twitter',
                    url: 'https://twitter.com/',
                },
                {
                    id: 2,
                    name: 'Instagram',
                    icon: 'instagram',
                    url: 'https://instagram.com/',
                },
                {
                    id: 3,
                    name: 'Facebook',
                    icon: 'facebook',
                    url: 'https://facebook.com/',
                },
                {
                    id: 4,
                    name: 'LinkedIn',
                    icon: 'linkedin',
                    url: 'https://linkedin.com/',
                },
                {
                    id: 5,
                    name: 'Youtube',
                    icon: 'youtube',
                    url: 'https://www.youtube.com/',
                },
            ],
        },
	
	},
];

export default projectsData;
