"use client"
import React from 'react';
import styles from "./style.module.css";
import Link from 'next/link';
import NavBar from './topnav/NavBar';
import arrow from "./images/leftarrow.png"
import Image from 'next/image';
import Inputs from './inputs/Inputs';
import Table from './ordertable/Table';
import files from "./images/files.png";


const page = () => {




    return (
        <div >
            <div className={styles.container}>
                <NavBar />
                <hr/>
                <div className={styles.return}>
                  <Link href="./home">  <span><Image height={15} src={arrow} alt="img" />  Create sales return order </span></Link>
                </div>
                <Inputs />

                <div className={styles.cart}>
                    Order Details
                </div>

                <div className={styles.mobiletable}>
                <div className='d-flex justify-content-between'>
                    <div>
                        <span>1</span>
                        <span>Synthroid</span>
                    </div>
                    <div>
                        <span className='ms-3'><Image src={files} alt='img' /></span>
                    </div>
                </div>
                <div className='d-flex justify-content-evenly'>
                    <ul className={styles.label}>
                        <li>Invoice no.</li>
                        <li>Date</li>
                        <li>Mobile number</li>
                        <li>Customer name</li>
                    </ul>
                    <ul className={styles.name}>
                        <li>Inv001</li>
                        <li>04-05-2023</li>
                        <li>9455575237</li>
                        <li>Ralph Edwards</li>
                       

                    </ul>
                </div>
               </div>
               <div className={styles.mobiletable}>
                <div className='d-flex justify-content-between'>
                    <div>
                        <span>2</span>
                        <span>Synthroid</span>
                    </div>
                    <div>
                        <span className='ms-3'><Image src={files} alt='img' /></span>
                    </div>
                </div>
                <div className='d-flex justify-content-evenly'>
                    <ul className={styles.label}>
                        <li>Invoice no.</li>
                        <li>Date</li>
                        <li>Mobile number</li>
                        <li>Customer name</li>
                    </ul>
                    <ul className={styles.name}>
                        <li>Inv001</li>
                        <li>04-05-2023</li>
                        <li>9455575237</li>
                        <li>Ralph Edwards</li>
                       

                    </ul>
                </div>
               </div>

               <div className={styles.mobiletable}>
                <div className='d-flex justify-content-between'>
                    <div>
                        <span>3</span>
                        <span>Synthroid</span>
                    </div>
                    <div>
                        <span className='ms-3'><Image src={files} alt='img' /></span>
                    </div>
                </div>
                <div className='d-flex justify-content-evenly'>
                    <ul className={styles.label}>
                        <li>Invoice no.</li>
                        <li>Date</li>
                        <li>Mobile number</li>
                        <li>Customer name</li>
                    </ul>
                    <ul className={styles.name}>
                        <li>Inv001</li>
                        <li>04-05-2023</li>
                        <li>9455575237</li>
                        <li>Ralph Edwards</li>
                       

                    </ul>
                </div>
               </div>

                <div className={styles.mobileview}>
                <Table />
                </div>
                
               
            </div>
        </div>
    )
}

export default page