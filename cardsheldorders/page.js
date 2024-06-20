
import React from 'react';
import styles from "./style.module.css";
import Link from 'next/link';
import Image from 'next/image';
import NavBar from './topnav/NavBar';
import arrow from "./images/leftarrow.png";
import Inputs from './inputs/Inputs';
import HeldOrders from './inventorytable/HeldOrders';

const page = () => {




    return (
        <div className={styles.container}>
            <NavBar />
            <hr />
            <div className={styles.return}>
                <Link href="./home"> <span><Image className='me-2' height={15} src={arrow} alt="img" />View held orders</span></Link>
            </div>

            <Inputs />
            <HeldOrders />

        </div>

    )
}

export default page;