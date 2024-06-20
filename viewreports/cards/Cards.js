import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import sales from "../images/sales.png";
import purchase from "../images/purchase.png";
import customers from "../images/customers.png";
import doctors from "../images/doctors.png";
import profit from "../images/profit.png";
import up from "../images/up.png";
import down from "../images/down.png";
import current from "../images/current.png"



const Cards = () => {
    return (
        <div className='d-flex flex-wrap mt-5 ms-2 me-2 justify-content-between'>
            <div className={styles.card}>
                <div className={styles.img_1}> <Image src={sales} alt='img' /></div>
                <p>Sales Order Transactions <br /> <sapn className={styles.mtd}>(MTD)</sapn> </p>
                <p className={styles.price}>&#8377;1200</p>
                <div className={styles.img_2}>
                    <span><Image src={down} /></span>
                    <p>-28.57%</p>
                </div>

            </div>

            <div className={styles.card}>
                <div className={styles.img_1}> <Image src={purchase} alt='img' /></div>
                <p>Purchase Order Transactions<br /> <sapn className={styles.mtd}>(MTD)</sapn> </p>
                <p className={styles.price}>&#8377;1200</p>
                <div className={styles.img_3}>
                    <span><Image src={up} /></span>
                    <p>+28.57%</p>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.img_1}> <Image src={profit} alt='img' /></div>
                <p>Profit <sapn className={styles.mtd}>(MTD)</sapn> </p>
                <p className={styles.price}>&#8377;1200</p>
                <div className={styles.img_3}>
                <span><Image src={up} /></span>
                    <p>+28.57%</p>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.img_1}> <Image src={current} alt='img' /></div>
                <p>Current Inventory Value</p>
                <p className={styles.price}>1200</p>
                
            </div>

            <div className={styles.card}>
                <div className={styles.img_1}> <Image src={customers} alt='img' /></div>
                <p>No. of customers</p>
                <p className={styles.price}>&#8377;1200</p>
                <div className={styles.img_3}>
                    <span><Image src={up} /></span>
                    <p>+28.57%</p>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.img_1}> <Image src={doctors} alt='img' /></div>
                <p>No. of Doctors/Hospitals</p>
                <p className={styles.price}>&#8377;1200</p>
                <div className={styles.img_3}>
                    <span><Image src={up} /></span>
                    <p>-28.57%</p>
                </div>
            </div>
        </div>
    )
}

export default Cards