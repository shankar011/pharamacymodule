import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import star from "../images/star.png"

const Payment = () => {
    return (
        <div className={styles.container}>
            <p>Payment details</p>
            <form>
                <div>
                    <label htmlForfor="exampleInputSelect" className="form-label">Payable method<span><Image src={star} alt='img' /> </span></label>
                    <select className="form-select">
                        <option>Credit</option>
                    </select>
                </div>
                <div className={styles.days}>
                    <label htmlFor='days' className="form-label">Days<span><Image src={star} alt='img' /> </span></label>
                    <input type="text" placeholder='45 days' className="form-control" />
                </div>
                <div>
                    <label htmlForfor="exampleInputSelect" className="form-label">Payable method<span><Image src={star} alt='img' /> </span></label>
                    <select className="form-select">
                        <option>Unpaid</option>
                    </select>
                </div>

            </form>
        </div>
    )
}

export default Payment