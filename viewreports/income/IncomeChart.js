import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import income from "../images/income.png";

const IncomeChart = () => {
    return (
        <div className={styles.container}>

            <div className={styles.order}>
                <div className={styles.income}>
                    <select>
                        <option>Income</option>
                    </select>
                </div>
                <div className={styles.month}>
                    <select>
                        <option>Last month</option>
                    </select>
                </div>

                <div className='mt-4'>
                    <Image src={income}  alt='img' />
                </div>

                <div className={styles.percentage}>
                    <h3>30%</h3>
                    <div>
                        <h6>Income last month</h6>
                        <p>Rs. 4500 more than last month</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default IncomeChart