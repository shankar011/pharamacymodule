'use client'
import { useState } from 'react';
import React from 'react';
import styles from "./style.module.css"
import NavBar from './topnav/NavBar';
import Table from './mpemtable/Table';
import Image from 'next/image';
import search from "./images/search.png";
import cross from "./images/cross.png";
import person from "./images/person.png";
import phone from "./images/phone.png";
import email from "./images/email.png";


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
            <div className='d-flex justify-content-between'>
                <div className='d-flex flex-wrap ms-2'>
                    <p>Employee</p>
                    <div className={styles.search} >
                        <input placeholder='Search in employees' />
                        <Image src={search} alt='img' />
                    </div>
                </div>

                <button onClick={handleButtonClick}>Add new</button>
                {showMessage && (
                    <div className={styles.modal}>

                        <div className={styles.modal_content}>
                            <div className={styles.paymet}>
                                <p>Add new employee</p>
                                <Image onClick={closeModal} src={cross} />
                            </div>

                            <div className="pb-4">
                                <form className={styles.forms}>
                                    <div className="m-3">
                                        <span><Image src={person} alt='img' /> </span>
                                        <label for="exampleInputText" className="form-label">Employee name</label>
                                        <input type="text" className="form-control" placeholder='John Doe' aria-describedby="textHelp" />

                                        <span><Image src={email} alt='img' /> </span>
                                        <label for="exampleInputBrand" className="form-label">Email address (Optional)</label>
                                        <input type="email" placeholder='Enter email address' className="form-control" />



                                    </div>

                                    <div className="m-3 flex-wrap">
                                        <span><Image src={phone} alt='img' /> </span>
                                        <label for="exampleInputBatchNo" className="form-label">Mobile number</label>
                                        <input type="number" placeholder='Enter 10-digit mobile number' className="form-control" />

                                    </div>
                                </form>

                                <button>Add employee</button>

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