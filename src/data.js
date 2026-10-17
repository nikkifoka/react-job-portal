export const JOBS = [
  { id: 1, title: "Frontend Developer", company: "Pixelwave", location: "Mumbai", type: "Full-time", salary: "₹8–12 LPA", skills: ["React", "CSS", "REST"], posted: "2 days ago", description: "Build and maintain customer-facing dashboards in React. You will work with designers and backend engineers to ship features every sprint." },
  { id: 2, title: "Java Backend Engineer", company: "LedgerLine", location: "Pune", type: "Full-time", salary: "₹10–15 LPA", skills: ["Java", "Spring Boot", "MySQL"], posted: "1 day ago", description: "Design REST APIs and own database schemas for a billing platform. Experience with Spring Data JPA is a plus." },
  { id: 3, title: "UI/UX Intern", company: "Studio Kora", location: "Remote", type: "Internship", salary: "₹15k / month", skills: ["Figma", "Research"], posted: "5 days ago", description: "Support the design team with wireframes, usability tests and prototypes. Portfolio required." },
  { id: 4, title: "QA Analyst", company: "Northgate Systems", location: "Bengaluru", type: "Full-time", salary: "₹5–8 LPA", skills: ["Testing", "Selenium", "SQL"], posted: "1 week ago", description: "Write test plans, automate regression suites and report defects clearly to developers." },
  { id: 5, title: "React Native Developer", company: "Tiffin&Co", location: "Mumbai", type: "Contract", salary: "₹60k / month", skills: ["React Native", "Redux"], posted: "3 days ago", description: "Ship a delivery-tracking mobile app in 4 months. Contract may extend based on delivery." },
  { id: 6, title: "Database Administrator", company: "Harbor Data", location: "Hyderabad", type: "Full-time", salary: "₹9–13 LPA", skills: ["MySQL", "Backup", "Tuning"], posted: "4 days ago", description: "Maintain production MySQL clusters, tune slow queries and plan backups and recovery." },
  { id: 7, title: "Technical Writer", company: "Docsmith", location: "Remote", type: "Part-time", salary: "₹25k / month", skills: ["Writing", "API docs"], posted: "6 days ago", description: "Write clear API guides and tutorials for developers. Comfortable reading code is required." },
  { id: 8, title: "Full-Stack Trainee", company: "Brightpath", location: "Pune", type: "Internship", salary: "₹20k / month", skills: ["React", "Node", "SQL"], posted: "Today", description: "Six-month training program ending in a full-time offer for strong performers." },
];

export const TYPES = ["All", "Full-time", "Part-time", "Contract", "Internship"];
export const LOCATIONS = ["All", ...new Set(JOBS.map((j) => j.location))];
