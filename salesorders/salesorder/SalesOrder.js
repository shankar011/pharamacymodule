"use client"
import { useState } from 'react';
import React from 'react';
import NavBar from './topnav/NavBar';
import Link from 'next/link';
import styles from "./style.module.css";
import arrow from "./images/leftarrow.png";
import Image from 'next/image';
import Medicines from './medicines/Medicines';
import Table from './ordertable/Table';
import Payment from './payment/Payment';
import cross from "./images/cross.png"

const SalesOrder = () => {

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
      <div style={{ backgroundColor: "#F5F4F7", paddingBottom: "20px" }}>
        <div className={styles.return}>
         <Link href="./home"><h1><span><Image height={15} src={arrow} alt="img" /> </span> Create sales order</h1></Link> 
          <button>Scan prescription</button>
        </div>

        <Medicines />

        <div className={styles.cart}>
          Your cart #3214
        </div>
        <Table />
        <Payment />
      </div>
      <div className={styles.bottom}>
        <span>Hold this sales order</span>
        <button onClick={handleButtonClick}>Confirm order</button>
      </div>
      {showMessage && (
        <div className={styles.modal}>

          <div className={styles.modal_content}>

            <div className='d-flex'>
              <span className={styles.conform}>Confirm sales order #3214? </span>
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

export default SalesOrder