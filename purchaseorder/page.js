"use client";
import { useState } from 'react';
import React from 'react';
import Link from 'next/link';
import styles from "./style.module.css";
import Image from 'next/image';
import NavBar from './topnav/NavBar';
import arrow from "./images/leftarrow.png"
import Distributor from './distributor/Distributor';
import Table from './table/Table';
import Payment from './payment/Payment';
import Assign from './assign/Assign';
import cross from "./images/cross.png"


const page = () => {

    const [showMessage, setShowMessage] = useState(false);

    const handleButtonClick = () => {
        setShowMessage(true);
    };

    const closeModal = () => {
        setShowMessage(false);
    };


    return (
        <div className={styles.container}>
            <NavBar />
            <hr />
            <div className={styles.section}>
                <div className={styles.return}>
                   <Link href="./home"><span><Image height={15} src={arrow} alt="img" />  Create purchase order </span></Link> 
                </div>

                <Distributor />
                <Table />
                <Payment />
                <Assign />

            </div>
            <div className={styles.bottom}>
                <button onClick={handleButtonClick}>Create PO</button>
            </div>
            {showMessage && (
                <div className={styles.modal}>

                    <div className={styles.modal_content}>

                        <div className='d-flex'>
                            <span className={styles.conform}>Confirm purchase order #3214? </span>
                            <span><Image onClick={closeModal} src={cross} /> </span>
                        </div>

                        <p>Are you sure you want to confirm the order and generate a PDF? </p>


                        <div className='d-flex justify-content-evenly'>
                            <button className={styles.no}>No</button>
                            <button className={styles.pdf}>Generate PDF</button>
                        </div>

                    </div>

                </div>
            )}
        </div>
    )
}

export default page