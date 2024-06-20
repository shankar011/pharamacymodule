import React from 'react';
import Image from 'next/image';
import styles from "./style.module.css";
import bell from "../../../../../public/images/bell.png";
import signin from "../../../../../public/images/signIn.png";
import dawamobile from "../../../../../public/images/dawamobilelogo.png";
import menu from "../../../../../public/images/humberger.png";


const NavBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.mobileview}>
                
                <Image src={dawamobile} alt="img" />
                <Image src={menu} width={30} height={20} alt='img' />
            </div>

            <nav>
                <div className={styles.mobile}>
                <div>
                    <b>Hello John Doe</b>
                    <p>Welcome to your store 1, store address</p>
                </div>
                    <div>
                    <span className='me-4'> <Image src={bell} /> </span>
                    <span > <Image src={signin} /> </span>
                    </div>
                </div>
            </nav>
            <div className={styles.hello}>
                <span > <Image src={signin} /> Hello John Doe! </span>
            </div>

        </div>
    )
}

export default NavBar