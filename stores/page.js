import React from 'react';
import Image from 'next/image';
import styles from "./style.module.css";
import bell from "../../../public/images/bell.png";
import signin from "../../../public/images/signIn.png";
import dawamobile from "../../../public/images/dawamobilelogo.png";
import menu from "../../../public/images/humberger.png";
import AddStore from './addstore/AddStore';
import Table from './table/Table';

const page = () => {
    return (
        <div>
            <div className={styles.mobileview}>
                <Image src={dawamobile} alt="img" />
                <Image src={menu} width={33} height={23} alt='img' />
            </div>

            <div className={styles.manage}>

                <nav className='d-flex justify-content-between'>
                    <div>
                        <p>Hello John Doe!</p>
                    </div>

                    <div className={styles.mobile}>
                        <span className='me-4'> <Image src={bell} /> </span>
                        <span > <Image src={signin} /> </span>
                    </div>
                </nav>

                <div className={styles.stores}>
                    <p>Manage your stores</p>
                    <button>Add Stores</button>
                </div>



                <div className={styles.AddStore}>
                    <AddStore />
                </div>

                <div className={styles.yourstore}>
                    <p>Your Stores</p>
                    <Table />
                </div>

                <div className={styles.skip}>
                    <button>Skip for now</button>
                </div>

            </div>
        </div>
    )
}

export default page;