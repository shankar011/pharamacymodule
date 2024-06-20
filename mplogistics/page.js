"use client"
import { useState } from 'react';
import React from 'react';
import styles from "./style.module.css";
import NavBar from './topnav/NavBar';
import Table from './mplogitstictable/Table';
import Image from 'next/image';
import search from "./images/search.png";
import cross from "./images/cross.png";
import person from "./images/person.png";
import phone from "./images/phone.png";

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
    <hr/>
    <div className='d-flex flex-wrap justify-content-between'>
    <div className='d-flex flex-wrap ms-2'>
        <p>My logistics service providers</p>
        <div className={styles.search} >
            <input placeholder='Search in logistics service providers' />
            <Image src={search} alt='img' />
        </div>
    </div>
  
    <button onClick={handleButtonClick}>Add new</button>
    {showMessage && (
        <div className={styles.modal}>

            <div className={styles.modal_content}>
                <div className={styles.paymet}>
                    <p>Add new logistic service provider</p>
                    <Image onClick={closeModal} src={cross} />
                </div>

                <div className="pb-4">
                    <form className={styles.forms}>
                        <div className="m-3">
                            <span><Image src={person} alt='img' /> </span>
                            <label for="exampleInputText" className="form-label"> Doctor/hospital name</label>
                            <input type="text" className="form-control" placeholder='John Doe' aria-describedby="textHelp" />
                        </div>
                        <div className="m-3">
                            <span><Image src={phone} alt='img' /> </span>
                            <label for="exampleInputText" className="form-label">Mobile number</label>
                            <input type="number" className="form-control" placeholder='Enter 10-digit mobile number' aria-describedby="textHelp" />
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