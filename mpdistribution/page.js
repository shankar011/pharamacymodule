"use client"
import React, { useState } from 'react';
import styles from "./style.module.css";
import NavBar from './topnav/NavBar';
import Image from 'next/image';
import search from "./images/search.png";
import Table from './mpdtable/Table';
import cross from "./images/cross.png";
import person from "./images/person.png";
import sales from "./images/sales.png";
import drug from "./images/drug.png";
import phone from "./images/phone.png";
import food from "./images/food.png";
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
            <div className='d-flex flex-wrap justify-content-between'>
                <div className='d-flex flex-wrap ms-2'>
                    <p>Distributors</p>
                    <div className={styles.search} >
                        <input placeholder='Search in distributors' />
                        <Image src={search} alt='img' />
                    </div>
                </div>
                <button onClick={handleButtonClick}>Add new</button>
                {showMessage && (
                    <div className={styles.modal}>

                        <div className={styles.modal_content}>
                            <div className={styles.paymet}>
                                <p>Add new destributor</p>
                                <Image onClick={closeModal} src={cross} />
                            </div>

                            <div className="pb-4">
                                <form className={styles.forms}>
                                    <div className="m-3">
                                        <span><Image src={person} alt='img' /> </span>
                                        <label for="exampleInputText" className="form-label">Disributor’s name</label>
                                        <input type="text" className="form-control" placeholder='Disributor’s name' aria-describedby="textHelp" />

                                        <span><Image src={email} alt='img' /> </span>
                                        <label for="exampleInputBrand" className="form-label">Email address</label>
                                        <input type="email" placeholder='Enter email address' className="form-control" />

                                        <span><Image src={drug} alt='img' /> </span>
                                        <label for="exampleInputNumber" className="form-label">Drug License no.</label>
                                        <input type="text" placeholder='Enter DL no.' className="form-control" aria-describedby="numberHelp" />

                                    </div>

                                    <div className="m-3 flex-wrap">
                                        <span><Image src={phone} alt='img' /> </span>
                                        <label for="exampleInputBatchNo" className="form-label">Mobile number</label>
                                        <input type="number" placeholder='Enter 10-digit mobile number' className="form-control" />

                                        <span><Image src={sales} alt='img' /> </span>
                                        <label for="exampleInputName" className="form-label">Sales Representative Name</label>
                                        <input type="text" placeholder='Enter Sales Representative Name ' className="form-control" />

                                        <span><Image src={food} alt='img' /> </span>
                                        <label for="exampleInputdate" className="form-label">Food License no.</label>
                                        <input type="text" placeholder='Enter Food lic no.' className="form-control" />

                                    </div>
                                </form>

                            </div>

                            <div className={styles.add}>
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