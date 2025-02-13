import { ArrowBigRight, Github } from 'lucide-react';
import styles from './content.module.css';

const item_exp_1 = [
    "Maintain server on-premise and cloud",
    "Create server monitoring using Grafana, Prometheus, Loki, and InfluxDB",
    "Built CICD for automated deployment using Jenkins, Gitlab CI/CD",
    "Maintain Github and Gitlab Repositories",
    "Migrate applications from the server on-premise to the cloud",
    "Maintain Python code of ETL using Airflow",
    "Maintain production application on Amazon Web Service",
    "Deploy apps using Docker and Kubernetes- Maintain server on-premise and cloud",
    "Create server monitoring using Grafana, Prometheus, Loki, and InfluxDB",
    "Built CICD for automated deployment using Jenkins, Gitlab CI/CD",
    "Maintain Github and Gitlab Repositories",
    "Migrate applications from the server on-premise to the cloud",
    "Maintain Python code of ETL using Airflow",
    "Maintain production application on Amazon Web Service",
    "Deploy apps using Docker and Kubernetes"
]

const item_exp_2 = [
    "Develop high-quality backend systems using Python, REST API, Flask/FastAPI, and other relevant technologies",
    "Collaborate with cross-functional teams to design and implement efficient and scalable solutions for data processing, storage, and retrieval",
    "Implement and maintain data models, APIs, and database schemas in a big data environment",
    "Monitor and optimize system performance to ensure reliability, scalability, and security",
    "Participate in code reviews, debugging, and troubleshooting of issues"
]

const skill_list = [
    "Python",
    "Go",
    "SQL",
    "ETL",
    "Airflow",
    "Kafka",
    "Redis",
    "Express.js",
    "Javascript",
    "Next.js",
    "Bash",
    "Jenkins",
    "Docker",
    "Kubernetes",
    "CICD",
    "Flutter"
]

export function Content() {
    return (
        <div className={styles.container}>
            <div className={styles.name}>
                <h1>Hi, My Name is <span className={styles.name_detail}> Wahid Sholihul Fikri</span></h1>
            </div>
            <div className={styles.desc}>
                <p className={styles.text_desc}>Experienced DevOps Engineer and Backend Engineer with a demonstrated history of working in the information technology and services industry skilled in Python, Golang, SQL, ETL, Airflow, Kafka, Redis, Express.js, JavaScript, Next.js, Bash, Jenkins, Docker, Kubernetes, CICD and Flutter. I have expertise in developing applications from ETL, Backend, Frontend, monitoring, and deployment on-premise or in the cloud. Strong information technology professional with a Bachelor's Degree focused in Electronics and Instrumentation from Universitas Gadjah Mada (UGM).</p>
            </div>
            <div className={styles.experiences_list} id='experiences'>
                <div className={styles.experiences_item}>
                    <a className={styles.exp_job}>DevOps Engineer</a>
                    <a className={styles.exp_company}>Widya Analytic</a>
                    <p className={styles.exp_time}>Sep 2020 - Aug 2023</p>
                    <div className={styles.exp_detail_list}>
                        {item_exp_1.map((item, index) => (
                            <div className={styles.exp_detail_item} key={index}>
                                <p className={styles.exp_point}><ArrowBigRight /></p>
                                <p className={styles.exp_data}>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.experiences_item}>
                <a className={styles.exp_job}>Backend Engineer</a>
                    <a className={styles.exp_company}>PT. BangunIndo Teknusa Jaya</a>
                    <p className={styles.exp_time}>Sep 2023 - Present</p>
                    <div className={styles.exp_detail_list}>
                        {item_exp_2.map((item, index) => (
                            <div className={styles.exp_detail_item} key={index}>
                                <p className={styles.exp_point}><ArrowBigRight /></p>
                                <p className={styles.exp_data}>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.link}>
                <div className={styles.link_item}>
                    <a href='https://github.com/warcry98?tab=repositories'>
                        <svg className={styles.github_icon} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                    </a>
                </div>
                <div className={styles.link_item}>
                    <a href='https://www.linkedin.com/in/wahid-sholihul-f/'>
                        <svg className={styles.linkedin_icon} viewBox="0 0 310 310">
                            <g id="XMLID_801_">
	<path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
		C77.16,101.969,74.922,99.73,72.16,99.73z"/>
	<path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
		c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"/>
	<path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
		c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
		c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
		C310,145.43,300.549,94.761,230.454,94.761z"/>
                        </g>
                        </svg>
                    </a>
                </div>
            </div>
            <div id='skills' className={styles.skills_list}>
                {skill_list.map((skill, index) => (
                    <div key={index} className={styles.skills_item}>
                    <p>{skill}</p>
                </div>
                ))}
            </div>
        </div>
    )
}