"use client"
import { useState } from 'react';
import React from 'react'
import styles from "./style.module.css";
import NavBar from './topnav/NavBar'
import Image from 'next/image'
import arrow from "./images/leftarrow.png"
import Table from "./ordertable/Table";
import Customer from "./customerdetails/Customer";
import cross from "../../../public/images/cross.png";

const page = () => {

    const [showMessage, setShowMessage] = useState(false);

    const handleButtonClick = () => {
      setShowMessage(true);
    };
  
    const closeModal = () => {
      setShowMessage(false);
    };
    return (
        <div>


            <div className={styles.container}>
                <NavBar />
                <hr />

                <div className={styles.return}>
                    <span><Image className='me-2' height={15} src={arrow} alt="img" />Inv001 </span>
                </div>
                <Table />
                <Customer />


            </div>

            <div className={styles.bottom}>
                    <button onClick={handleButtonClick}>Return order</button>
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

export default page;