import React from 'react';
import Image from 'next/image';
import styles from "./style.module.css";
import allo from "../images/allo.png";
import generic from "../images/generic.png";
import ayur from "../images/ayur.png";
import home from "../images/home.png";
import circle from "../images/circle.png";


const Statistics = () => {
    return (
        <div className={styles.container}>
            <div className={styles.order}>
                <div >
                    <h6>Order Statistics</h6>
                    <p>42.2k Total Sales </p>
                </div>
                <select>
                    <option>Last month</option>
                </select>
            </div>
            <div className={styles.circle}>
                <div>
                    <h4>1200</h4>
                    <p>Total Sales Order </p>

                </div>
                <Image src={circle} alt='img' />
            </div>

            <div>
                <div className={styles.mediname}>
                    <p><Image src={allo} alt='img'/> <span>Allopathy</span> </p>
                    <p>400</p>
                </div>
                <div className={styles.mediname}>
                    <p><Image src={home} alt='img'/> <span>Homeopathy</span> </p>
                    <p>400</p>
                </div>
                <div className={styles.mediname}>
                    <p><Image src={ayur} alt='img'/> <span>Ayurvedic</span> </p>
                    <p>400</p>
                </div>
                <div className={styles.mediname}>
                    <p><Image src={generic} alt='img'/> <span>Generic</span> </p>
                    <p>400</p>
                </div>
            </div>

        </div>
    )
}

export default Statistics