import styles from "./page.module.css";
import Card from "./components/card/card";
import Image from "next/image";


export default function Home() {
    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <div className={styles.left}>
                    <h1 className={styles.title}>Student | Developer | Kenzie</h1>
                    <p className={styles.description}>
                        Hi, I'm Kenzie! I'm passionate about technology and love building creative projects. Here are some of the things I've worked on, click the cards to explore them and see what I've been up to!
                    </p>
                </div>
                <div className={styles.right}>
                    <Image
                        className={styles["header-img"]}
                        src="/kenzie.jpeg"
                        width={1600}
                        height={1201}
                        alt="Header image"
                    />
                </div>
            </div>

            <h1 className={styles["section-header"]}>Featured</h1>
            <div className={styles["card-container"]}>
                <Card
                    title="CodeVerse"
                    year="2025"
                    projectHref="https://codeverse-nu.vercel.app/codeverse-vanilla/"
                    imageSrc="/featured/codeverse.png"
                    imageWidth={2880}
                    imageHeight={1800}
                    imageAlt="CodeVerse logo"
                    bodyText="CodeVerse is a web app my team and I developed to teach programming through interactive video lessons, in collaboration with Blangah Rise Primary School. Designing and building this app taught me about user authentication, database management, the importance of teamwork, and effective communication."
                />
                <Card
                    title="SST CTF"
                    year="2025"
                    projectHref="https://sstctf.ybn.sg"
                    imageSrc="/featured/sstctf.png"
                    imageWidth={463}
                    imageHeight={479}
                    imageAlt="SST CTF logo"
                    bodyText="As organiser of SST CTF 2025, a school-wide cybersecurity capture-the-flag style competition focused on cryptography, web security, and digital forensics, I planned challenges, coordinated participants, and ensured smooth execution. This strengthened my leadership and technical skills while contributing to our tech community."
                />
                <Card
                    title="VEX Worlds"
                    year="2024"
                    imageSrc="/featured/vex_worlds.png"
                    imageWidth={900}
                    imageHeight={900}
                    imageAlt="VEX Robotics World Championship logo"
                    bodyText="At the 2025 VEX Robotics World Championship in Dallas, I worked with my team to design, build, and program a robot for complex engineering challenges. Competing against top teams worldwide, I refined my technical and coding skills, adapted to new obstacles, and learned the value of teamwork and innovation in a high-pressure, international setting."
                />
            </div>

            <h1 className={styles["section-header"]}>Competitions</h1>
            <div className={styles["card-container"]}>
                <Card
                    title="IDE Robotics (Secondary)"
                    year="2022"
                    imageSrc="/competitions/ide.jpg"
                    imageWidth={1000}
                    imageHeight={417}
                    imageAlt="IDE Series"
                    bodyText="I participated in the IDE Series 2022 competition, where I collaborated with my team to design and program a robot to complete various tasks. As a result of our efforts, our team won first place! As my first competition in Robotics@Apex CCA, this experience enhanced my problem-solving skills and deepened my understanding of robotics."
                />
                <Card
                    title="FIRST LEGO League"
                    year="2023"
                    imageSrc="/competitions/fll.jpg"
                    imageWidth={900}
                    imageHeight={900}
                    imageAlt="FIRST LEGO League logo"
                    bodyText="I participated in the FIRST LEGO League 2023 competition, where I collaborated with my team to design and program a modular robot to complete various tasks, and came up with a product prototype of spring loaded foldable solar panels on the theme green energy. The many iterations of our robot and product prototype taught me innovation and teamwork in problem-solving."
                />
                <Card
                    title="Perse Team Coding Challenge"
                    year="2023 - 2025"
                    imageSrc="/competitions/perse.jpg"
                    imageWidth={1280}
                    imageHeight={720}
                    imageAlt="Perse Team Coding Challenge Logo"
                    bodyText="I participated in the Perse Team Coding Challenge, where my team and I used a divide and conquer strategy to solve complex coding problems. This enhanced my python coding skills and deepened my understanding of teamwork and collaboration in a competitive environment. My team received a Distinction award for our efforts in 2023, a Merit award in 2024, and a Distinction award in 2025."
                />
                <Card
                    title="Singapore VEX Tournament"
                    year="2023"
                    imageSrc="/competitions/singvex.jpg"
                    imageWidth={4032}
                    imageHeight={3024}
                    imageAlt="Trophies from the Singapore VEX Tournament"
                    bodyText="My team and I designed, built and programmed a robot to compete in the Singapore VEX Robotics Tournament 2023, where we won second runner up and the Design Award. This experience taught me about engineering design processes, teamwork, and the importance of effective communication in achieving success."
                />
                <Card
                    title="Roborave Kaga Japan"
                    year="2023"
                    imageSrc="/competitions/roborave_kaga.png"
                    imageWidth={480}
                    imageHeight={480}
                    imageAlt="Roborave Kaga Japan 2023 Logo"
                    bodyText="Representing SST and Singapore, I participated in Roborave Kaga Japan 2023, where my team and I designed, built, and programmed a robot to compete in various categories like SumoBot and a-MAZE-ing. This international competition taught me about cultural exchange, communication in a high-pressure environment, and task delegation."
                />
                <Card
                    title="Sieberrsec CTF 5.0"
                    year="2024"
                    imageSrc="/competitions/sctf.png"
                    imageWidth={160}
                    imageHeight={160}
                    imageAlt="Sieberrsec CTF Logo"
                    bodyText="As my first forray into the world of cybersecurity, I participated in the Sieberrsec CTF 5.0 competition, where I collaborated with my team to solve various challenges related to web security, cryptography, and digital forensics. This experience opened my eyes to the world of cybersecurity and sparked my passion in it."
                />
                <Card
                    title="Blahaj CTF"
                    year="2024"
                    imageSrc="/competitions/blahajctf.png"
                    imageFill={false}
                    imageWidth={998}
                    imageHeight={358}
                    imageAlt="Blahaj CTF Logo"
                    bodyText="I further honed my skills in cybersecurity by participating in the Blahaj CTF competition, where I collaborated with my team to solve various challenges related to web security, cryptography, and digital forensics. This experience deepened my understanding of cybersecurity and strengthened my passion for it."
                />
                <Card
                    title="YBN CTF"
                    year="2024"
                    imageSrc="/competitions/ybnctf.jpeg"
                    imageWidth={200}
                    imageHeight={200}
                    imageAlt="Yes But No CTF Logo"
                    bodyText="I also participated in the Yes But No CTF competition, where I collaborated with my team to solve various challenges related to web security, cryptography, and digital forensics. This experience further enhanced my skills, and because of our efforts, we were able to achieve 14th place out of over 100 teams."
                />
                <Card
                    title="What The Hack"
                    year="2024"
                    imageSrc="/competitions/wth.svg"
                    imageFill={false}
                    imageWidth={559}
                    imageHeight={356}
                    imageAlt="What The Hack Logo"
                    bodyText="In this hackathon, I collaborated with my team to create a chrome extension using a machine learning model to detect offensive language in order to reduce inequality. This experience taught me how to use online technologies like flask and pytorch, and how to create a minimum viable product in a short time frame."
                />
                <Card
                    title="BuildingBloCS June Hackathon"
                    year="2025"
                    imageSrc="/competitions/buildingblocs.svg"
                    imageWidth={2371}
                    imageHeight={2328}
                    imageAlt="BuildingBloCS Logo"
                    bodyText="Working with my team, I participated in the BuildingBloCS June Conference, where we learnt about machine learning with python, and trained a machine learning model to help people with hearing disabilities communicate more easily with others through sign language. This experience taught me how to use machine learning technologies like streamlit and tensorflow."
                />
                <Card
                    title="National Cybersecurity Olympiad"
                    year="2025"
                    imageSrc="/competitions/nco.jpg"
                    imageFill={false}
                    imageWidth={1440}
                    imageHeight={262}
                    imageAlt="National Cybersecurity Olympiad Logo"
                    bodyText="Seeking to further my knowledge in cybersecurity, I participated in the National Cybersecurity Olympiad, where I tackled various cybersecurity challenges in a jeopardy-style competition. This allowed me to apply my skills in a competitive environment, and due to my efforts, I was able to achieve a Bronze award."
                />
            </div>

            <h1 className={styles["section-header"]}>Contact</h1>

            <h2 className={styles.footer}>Made with ❤️ by Kenzie</h2>
        </div>
    );
}
