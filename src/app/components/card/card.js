'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const Card = ({ title, year, projectHref, imageSrc, imageFill, imageWidth, imageHeight, imageAlt, bodyText }) => {
    const [flipped, setFlipped] = useState(false);
    const handleFlip = () => setFlipped(f => !f);
    const href = projectHref == undefined ? "" : projectHref;
    // Set imageFill to true by default
    const fill = imageFill !== undefined ? imageFill : true;
    const imageStyle = fill ? styles.cover : styles.contain;

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
                            className={`${styles["front-img"]} ${imageStyle}`}
                            src={imageSrc}
                            width={imageWidth}
                            height={imageHeight}
                            alt={imageAlt}
                        />
                    </div>
                    <div className={styles.header}>
                        <h1>{title}</h1>
                        <p>{year}</p>
                    </div>
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