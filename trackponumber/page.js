import React from 'react';
import styles from "./style.module.css";

import NavBar from './topnav/NavBar';
import Payment from './paymets/Payments';
import Table from "./potable/Table";
import Image from 'next/image';
import arrow from "./images/leftarrow.png";
import Contractor from './assign/Contractor';

const page = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <NavBar />
                <hr />
                <div className={styles.return}>
                    <span><Image src={arrow} alt='img' /> </span>
                    <span className={styles.po}>ORD-1562792774779 -  Savannah Nguyen</span>
                    <span className={styles.status}>Pricing awaiting</span>
                </div>

                <Payment />

                <div className={styles.yourpo}>
                    <p>Your PO #3214 </p>
                </div>
                <Table />
                <Contractor />
            </div>
            <div className={styles.bottom}>
                <button>Save PO</button>
            </div>
        </div>
    )
}

export default page