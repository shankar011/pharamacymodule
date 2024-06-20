"use client";
import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
import styles from "./style.module.css";
import bell from "../../../../public/images/bell.png";
import signin from "../../../../public/images/signIn.png";
import dawamobile from "../../../../public/images/dawamobilelogo.png";
import menu from "../../../../public/images/humberger.png";
import cross from "../../../../public/images/cross.png"
import Sidebar from "../../../app/sidebar/Sidebar"




const NavBar = () => {

    const [showMessage, setShowMessage] = useState(false);
    const [showMenue, setShowMenu] = useState(false);

    const handleButtonClick = () => {
        setShowMessage(true);
    };

    const closeModal = () => {
        setShowMessage(false);
    };

    const toggleMenu = () => {
        setShowMenu(!showMenue);
    };

    return (
        <div className={styles.container}>
            <div className={styles.mobileview}>
                <Image src={dawamobile} alt="img" />
                <Image style={{ position: "relative" }} onClick={() => { toggleMenu() }} src={menu} width={30} height={20} alt='img' />
            </div>

            <div className={styles.hover}>
                <div style={{ listStyle: "none", display: showMenue ? 'block' : "none" }}>
                    <Sidebar />
                </div>
            </div>


            <nav>
                <div className={styles.mobile}>
                    <p>Hello John Doe</p>
                    <div>
                        <span className='me-4'> <Image src={bell} /> </span>
                        <span > <Image onClick={handleButtonClick} src={signin} /> </span>
                    </div>
                </div>
                <hr/>

                {showMessage && (
                    <div className={styles.modal}>

                        <div className={styles.modal_content}>

                            <div className={styles.top}>
                                <h3 className={styles.conform}>My Profile </h3>
                                <h3><Image onClick={closeModal} src={cross} /> </h3>
                            </div>
                            <div className="mb-3">
                                <h5>Your Name</h5>
                                <p>John Doe!</p>
                                <h5>Mobile No.</h5>
                                <p>9876543210</p>
                                <h5>GSTIN</h5>
                                <p>22AAAAA0000A1Z5</p>
                                <h5>Email address</h5>
                                <p>john@doe111@gmail.com</p>
                                <h5>Drug Licence no.</h5>
                                <p>7555381084</p>
                            </div>

                        </div>

                    </div>
                )}


            </nav>
            <div className={styles.hello}>
                <span   > <Image onClick={handleButtonClick} src={signin} /> Hello John Doe! </span>
            </div>





        </div>
    )
}

export default NavBar