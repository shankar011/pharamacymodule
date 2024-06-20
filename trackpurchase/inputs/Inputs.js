import React from 'react';
import Image from 'next/image';
import styles from "./style.module.css";
import arrow from "../images/rightarrow.png";

const Inputs = () => {
  return (
    <div className={styles.container}>

      <div className={styles.dates}>
        <span> <input type='date' /> </span>
        <span> <Image src={arrow} alt='img' /> </span>
        <span> <input type='date' /> </span>
      </div>
      <div className={styles.inputs}>
        <input type='text' placeholder='Distributor name' />
        <select>
          <option>Payment method</option>
        </select>
        <select>
          <option>Payment status</option>
        </select>
        <button>Search</button>
      </div>
    </div>
  )
}

export default Inputs