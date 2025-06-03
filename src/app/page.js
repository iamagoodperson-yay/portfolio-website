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
                    href="https://codeverse-nu.vercel.app/codeverse-vanilla/"
                    imageSrc="/codeverse.png"
                    imageWidth={2880}
                    imageHeight={1800}
                    imageAlt="CodeVerse logo"
                    bodyText="CodeVerse is a web app my team and I developed to teach programming through interactive video lessons, in collaboration with Blangah Rise Primary School. Designing and building this app taught me about user authentication, database management, the importance of teamwork, and effective communication."
                />
                <Card
                    title="SST CTF"
                    href="https://sstctf.ybn.sg"
                    imageSrc="/sstctf.png"
                    imageWidth={463}
                    imageHeight={479}
                    imageAlt="SST CTF logo"
                    bodyText="As organiser of SST CTF 2025, a school-wide cybersecurity capture-the-flag style competition focused on cryptography, web security, and digital forensics, I planned challenges, coordinated participants, and ensured smooth execution. This strengthened my leadership and technical skills while contributing to our tech community."
                />
                <Card
                    title="VEX Worlds"
                    href=""
                    imageSrc="/vex_worlds.png"
                    imageWidth={900}
                    imageHeight={900}
                    imageAlt="VEX Robotics World Championship logo"
                    bodyText="At the 2025 VEX Robotics World Championship in Dallas, I worked with my team to design, build, and program a robot for complex engineering challenges. Competing against top teams worldwide, I refined my technical and coding skills, adapted to new obstacles, and learned the value of teamwork and innovation in a high-pressure, international setting."
                />
            </div>

            <h1 className={styles["section-header"]}>Competitions</h1>
            <div className={styles["card-container"]}>
                <h1>Coming soon...</h1>
            </div>
        </div>
    );
}
