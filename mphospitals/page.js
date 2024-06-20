"use client"
import { useState } from 'react';
import React from 'react';
import styles from "./style.module.css";
import NavBar from './topnav/NavBar';
import Table from './mphosmtable/Table';
import Image from 'next/image';
import search from "./images/search.png";
import cross from "./images/cross.png";
import person from "./images/person.png";



const page = () => {
    const [showMessage, setShowMessage] = useState(false);

    const handleButtonClick = () => {
        setShowMessage(true)
    }
    const closeModal = () => {
        setShowMessage(false)
    }
    return (
        <div className={styles.container}>
            <NavBar />
            <hr />
            <div className='d-flex  justify-content-between'>
                <div className={styles.dview}>
                    <p>My doctors/hospitals</p>
                    <div className={styles.search} >
                        <input placeholder='Search in customers' />
                        <Image src={search} alt='img' />
                    </div>
                </div>

                {/* <div className={styles.mview}>
                    <p>My doctors/hospitals</p>
                    <button onClick={handleButtonClick}>Add new</button>
                    <div className={styles.search} >
                        <input placeholder='Search in customers' />
                        <Image src={search} alt='img' />
                    </div>
                </div> */}

                <button onClick={handleButtonClick}>Add new</button>
                {showMessage && (
                    <div className={styles.modal}>

                        <div className={styles.modal_content}>
                            <div className={styles.paymet}>
                                <p>Add new hospital/doctor</p>
                                <Image onClick={closeModal} src={cross} />
                            </div>

                            <div className="pb-4">
                                <form className={styles.forms}>
                                    <div className="m-3">
                                        <span><Image src={person} alt='img' /> </span>
                                        <label for="exampleInputText" className="form-label"> Doctor/hospital name</label>
                                        <input type="text" className="form-control" placeholder='John Doe' aria-describedby="textHelp" />

                                    </div>

                                </form>

                                <button>Add</button>

                            </div>

                        </div>

                    </div>
                )}
            </div>
            <Table />
        </div>
    )
}

export default page