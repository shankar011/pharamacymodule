import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import NavBar from './topnav/NavBar';
import Payment from './paymets/Payments';
import arrow from "./images/leftarrow.png";
import Inputs from './filedinputs/Inputs';
import Table from './odtable/Table';

const page = () => {
    return (
        <div className={styles.container}>

            <div className={styles.main}>
                <NavBar />
                <hr />
                <div className={styles.return}>
                    <span><Image src={arrow} alt='img' /> </span>
                    <span className={styles.po}>ORD-1562792774779 -  Savannah Nguyen - Rs. 1, 453 </span>
                    <span className={styles.status}>Delivery awaiting</span>
                    <button className={styles.upload}>Upload CSV</button>
                    <button className={styles.scan} >Scan invoice</button>

                </div>

                <Payment />

                <div className={styles.yourpo}>
                    <p>Order details</p>
                </div>

                <Inputs />

                <Table />
               
            </div>
            <div className={styles.bottom}>
                <button>Save</button>
            </div>


        </div>

    )
}

export default page