"use client";
import { useState } from 'react';
import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import files from "../images/edit.png"
import remove from "../images/remove.png";
import aspire from "../images/aspire.png";
import dis from "../images/dis.png";
import expiry from "../images/expiry.png";
import quantity from "../images/quantity.png";
import shelf from "../images/shelf.png";
import cross from "../images/cross.png"

import medicine from "../../../../public/images/medicine.png"
import brand from "../../../../public/images/brand.png"
import distributor from "../../../../public/images/distributor.png"
import batch from "../../../../public/images/batch.png"
import mtype from "../../../../public/images/mtype.png"
import date from "../../../../public/images/expirydate.png"
import purchase from "../../../../public/images/purchase.png"

const Mtable = () => {

    const [showMessage, setShowMessage] = useState(false);

    const handleButtonClick = () => {
        setShowMessage(true);
    };

    const closeModal = () => {
        setShowMessage(false);
    };

    return (
        <div className={styles.container}>



            <div className={styles.msection}>
                <div className={styles.details}>
                    <div className={styles.name}>
                        <p>1. <Image src={aspire} alt='img' />Aspirine <span> (Brand - Bayer AG)</span></p>
                        <div className={styles.img_1}>
                            <Image onClick={handleButtonClick} src={files} alt='img' />
                            <Image src={remove} alt='img' />
                        </div>

                    </div>
                    <div className='d-flex'>
                        <ul className={styles.list_1}>
                            <li><Image src={dis} alt='img' /> Distributor</li>
                            <li><Image src={shelf} alt='img' /> Shelf label</li>
                            <li><Image src={quantity} alt='img' /> Quantity</li>
                            <li><Image src={dis} alt='img' /> Purchase date</li>
                            <li><Image src={expiry} alt='img' /> Expiry date</li>

                        </ul>
                        <ul className={styles.list_2}>
                            <li>McKesson Corporation</li>
                            <li>SB-12</li>
                            <li>100</li>
                            <li>04-09-2022</li>
                            <li>04-09-2022</li>

                        </ul>
                    </div>
                </div>
            </div>

          

            <div className={styles.msection}>
                <div className={styles.details}>
                    <div className={styles.name}>
                        <p>2. <Image src={aspire} alt='img' />Aspirine <span> (Brand - Bayer AG)</span></p>
                        <div className={styles.img_1}>
                            <Image src={files} alt='img' />
                            <Image src={remove} alt='img' />
                        </div>

                    </div>
                    <div className='d-flex'>
                        <ul className={styles.list_1}>
                            <li><Image src={dis} alt='img' /> Distributor</li>
                            <li><Image src={shelf} alt='img' /> Shelf label</li>
                            <li><Image src={quantity} alt='img' /> Quantity</li>
                            <li><Image src={dis} alt='img' /> Purchase date</li>
                            <li><Image src={expiry} alt='img' /> Expiry date</li>

                        </ul>
                        <ul className={styles.list_2}>
                            <li>McKesson Corporation</li>
                            <li>SB-12</li>
                            <li>100</li>
                            <li>04-09-2022</li>
                            <li>04-09-2022</li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.msection}>
                <div className={styles.details}>
                    <div className={styles.name}>
                        <p>3. <Image src={aspire} alt='img' />Aspirine <span> (Brand - Bayer AG)</span></p>
                        <div className={styles.img_1}>
                            <Image src={files} alt='img' />
                            <Image src={remove} alt='img' />
                        </div>

                    </div>
                    <div className='d-flex'>
                        <ul className={styles.list_1}>
                            <li><Image src={dis} alt='img' /> Distributor</li>
                            <li><Image src={shelf} alt='img' /> Shelf label</li>
                            <li><Image src={quantity} alt='img' /> Quantity</li>
                            <li><Image src={dis} alt='img' /> Purchase date</li>
                            <li><Image src={expiry} alt='img' /> Expiry date</li>

                        </ul>
                        <ul className={styles.list_2}>
                            <li>McKesson Corporation</li>
                            <li>SB-12</li>
                            <li>100</li>
                            <li>04-09-2022</li>
                            <li>04-09-2022</li>

                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Mtable