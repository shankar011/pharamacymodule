import React from 'react';
import styles from "./style.module.css";
import NavBar from './topnav/NavBar';
import Payment from './paymets/Payments';
import PayMethods from './paymethod/PayMethods';
import Image from 'next/image';
import arrow from "./images/leftarrow.png"


const page = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <NavBar />
                <hr />

                <div className={styles.mview}>
                    <span><Image src={arrow} alt='img' />Payment Check0ut </span>
                    <button>pricing awaiting</button>
                </div>

                <Payment />

                <div className={styles.payment}>
                    <p>Payment method</p>
                </div>

                <PayMethods />

                <div className={styles.mbottom}>
                    <button>Save po</button>
                </div>

              

            </div>
            <div className={styles.bottom}>
                <button>Checkout</button>
            </div>
        </div>
    )
}

export default page