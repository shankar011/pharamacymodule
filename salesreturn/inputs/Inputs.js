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
        <input type='text' placeholder='invoice number' />
        <input type='text' placeholder='Medicine' />
        <input type='number' placeholder='mobile number' />
        <input type='text' placeholder='customer number' />
        <button>Search</button>
      </div>
    </div>
  )
}

export default Inputs