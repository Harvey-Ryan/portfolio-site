import {
	dojo,
	toyota,
	subaru,
	mobile,
	backend,
	creator,
	web,
	javascript,
	// typescript,
	html,
	css,
	reactjs,
	// redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	// docker,
	// meta,
	// starbucks,
	// tesla,
	// shopify,
	// carrent,
	// jobit,
	// tripguide,
	threejs,
} from "../assets";
import python from "../assets/tech/python.png";
import brendan from "../assets/tech/brendan.jpg";
import cole from "../assets/tech/cole.png";
import travis from "../assets/tech/travis.png";
import kizer from "../assets/company/kizer.png";
import dealerpro from "../assets/tech/dealerpro.png";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "React Native Developer",
		icon: mobile,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
	{
		title: "Content Creator",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "Python",
		icon: python,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	// {
	//     name: "Redux Toolkit",
	//     icon: redux,
	// },
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	// {
	//     name: "docker",
	//     icon: docker,
	// },
];

const experiences = [
	{
		title: "Software Developer",
		company_name: "Kizer",
		icon: kizer,
		iconBg: "#000000",
		date: "October 2023 - Present",
        points: [
            "Developing web applications using React.js, Node.js, and Postgres.",
            "Pioneering a mobile app by leveraging React Native to simultaneously target multiple platforms.",
            "Planning out data models to ensure seamless design and maintainability.",
        ],
	},
	{
		title: "Student - Web Developer",
		company_name: "Coding Dojo",
		icon: dojo,
		iconBg: "#000000",
		date: "February 2023 - October 2023",
		points: [
			"Developing web applications using React.js, Python, and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "F&I Manager",
		company_name: "Fletcher Subaru",
		icon: subaru,
		iconBg: "#000000",
		date: "June 2017 - Present",
		points: [
			"Oversee and maintain large financial transactions.",
			"Protect the company's assets through diligent inspection of transaction records.",
			"Ensure continued client retention through transparency and continued support.",
			"Ensure that every transaction is handled in a legally binding manner.",
		],
	},
	{
		title: "Sales Consultant",
		company_name: "Fletcher Toyota",
		icon: toyota,
		iconBg: "#FFFFFF",
		date: "September 2014 - June 2017",
		points: [
			"Developing and maintaining client relationships.",
			"Critical thinking and attention to details.",
			"Ensuring legality of transactions.",
			"Daily continued education to keep up with the latest industry trends.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"One of Ryan's greatest strengths is his ability to ask insightful and thought-provoking questions. He possesses a curious and inquisitive mind, always seeking to deepen his understanding of the projects at hand. Ryan's questions not only demonstrate his thirst for knowledge but also his commitment to thoroughness and precision. ",
		name: "Brendan Cordova",
		designation: "Lead Full Stack Developer",
		company: "3BX",
		image: brendan,
	},
	{
		testimonial:
			"I have had the privilege of working closely with Ryan for over 6 years, and during this time, I have been continually impressed by his proactive approach to tackling challenges and genuine desire to contribute to our team's success. Ryan possesses a unique combination of curiosity, passion, and an exceptional work ethic that is truly commendable.",
		name: "Cole Brightman",
		designation: "GSM",
		company: "Roper Kia",
		image: cole,
	},
	{
		testimonial:
			"Ryan has always been the go-to guy when you needed help. His dedication to helping others succeed while constantly seeking to increase his knowledge and abilities has made him an invaluable member of our team.",
		name: "Travis Kunce",
		designation: "GSM",
		company: "Fletcher Subaru",
		image: travis,
	},
];

const projects = [
	{
		name: "Kizer",
		description:
			"Web-based platform that streamlines the flow of information and planning in the construction space by leveraging highly responsive technologies.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "postgresql",
				color: "green-text-gradient",
			},
			{
				name: "bootstrap",
				color: "pink-text-gradient",
			},
		],
		image: kizer,
		source_code_link: "https://github.com/Harvey-Ryan/",
	},
	{
		name: "Dealer Pro",
		description:
			"Web application built to simplify the process of vehicle intake at a car dealership by simultaneously storing vehicle information and tracking where it is at in the dealer's process.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "mongodb",
				color: "pink-text-gradient",
			},
		],
		image: dealerpro,
		source_code_link: "https://github.com/Harvey-Ryan/dealer_pro_deployment",
	},
	// {
	//     name: "Pet Shelter",
	//     description:
	//         "Beginings ",
	//     tags: [
	//         {
	//             name: "nextjs",
	//             color: "blue-text-gradient",
	//         },
	//         {
	//             name: "supabase",
	//             color: "green-text-gradient",
	//         },
	//         {
	//             name: "css",
	//             color: "pink-text-gradient",
	//         },
	//     ],
	//     image: tripguide,
	//     source_code_link: "https://github.com/",
	// },
];

export { services, technologies, experiences, testimonials, projects };
