import React from 'react';
import Image from 'next/image';
import styles from "./style.module.css";
import person from "../images/personfill.png";
import phone from "../images/phone_fill.png";
import hospital from "../images/hospital.png";



const Customer = () => {
    return (
        <div className={styles.container}>
            <h1>Customer details </h1>
            <div className={styles.cinfo}>
                <div>
                    <p><span><Image src={person} alt='img' /> </span>  Customer name</p>
                    <b>Savannah Nguyen</b>
                </div>
                <div>
                    <p><span><Image src={phone} alt='img' /> </span> Mobile number</p>
                    <b>3333333333</b>
                </div>
                <div>
                    <p><span><Image src={hospital} alt='img' /> </span> Hospital/Doctor name</p>
                    <b>Dr. Rathi</b>
                </div>
            </div>
            
        </div>
    )
}

export default Customer