'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const Card = ({ title, href, imageSrc, imageWidth, imageHeight, imageAlt, bodyText }) => {
    const [flipped, setFlipped] = useState(false);
    const handleFlip = () => setFlipped(f => !f);
    return (
        <div
            className={`${styles.card} ${flipped ? styles.flipped : ""}`}
            onClick={handleFlip}
            onKeyDown={e => (e.key === "Enter" || e.key === " ") && handleFlip()}
            tabIndex={0}
        >
            <div className={styles["card-inner"]}>
                <div className={styles.front}>
                    <div className={styles["front-img-bg"]}>
                        <Image 
                            className={styles["front-img"]}
                            src={imageSrc}
                            width={imageWidth}
                            height={imageHeight}
                            alt={imageAlt}
                        />
                    </div>
                    <h1>{title}</h1>
                </div>
                <div className={styles.back}>
                    <h1>{title}</h1>
                    <p>{bodyText}</p>
                    {href !== "" && (
                        <Link
                            className={styles.link}
                            href={href}
                            target="_blank" 
                        >View Project</Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;