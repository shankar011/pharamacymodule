"use client"
import { useState } from 'react';
import React from 'react'
import NavBar from './topnav/NavBar';
import styles from "./style.module.css";
import Image from 'next/image';
import Inputs from './inputs/Inputs';
import Table from './inventorytable/Table';
import cross from "../../../public/images/cross.png"
import medicine from "../../../public/images/medicine.png"
import brand from "../../../public/images/brand.png"
import distributor from "../../../public/images/distributor.png"
import batch from "../../../public/images/batch.png"
import quantity from "../../../public/images/quantity.png"
import mtype from "../../../public/images/mtype.png"
import date from "../../../public/images/expirydate.png"
import purchase from "../../../public/images/purchase.png"
import Mtable from './mtable/Mtable';
import Minputs from "../cardsinventory/minputs/Inputs"
import arrow from "./images/leftarrow.png";



const page = () => {

    const [showMessage, setShowMessage] = useState(false);

    const handleButtonClick = () => {
        setShowMessage(true);
    };

    const closeModal = () => {
        setShowMessage(false);
    };

    return (
        <div className={styles.container}>
            <NavBar />
            <hr />
            <div className={styles.return}>
                <h1>Inventory</h1>
                <button onClick={handleButtonClick}>Update inventory</button>
            </div>
        
            {showMessage && (
                <div className={styles.modal}>

                    <div className={styles.modal_content}>
                        <div className={styles.paymet}>
                            <p>Add new medicine</p>
                            <Image onClick={closeModal} src={cross} />
                        </div>

                        <div className="pb-4">
                            <form className={styles.forms}>
                                <div className="m-3">
                                    <span><Image src={medicine} alt='img' /> </span>
                                    <label for="exampleInputText" className="form-label">Medicine</label>
                                    <input type="text" className="form-control" placeholder='Enter medicne name' aria-describedby="textHelp" />

                                    <span><Image src={brand} alt='img' /> </span>
                                    <label for="exampleInputBrand" className="form-label">Brand name</label>
                                    <input type="text" placeholder='Enter brand name' className="form-control" />

                                    <span><Image src={quantity} alt='img' /> </span>
                                    <label for="exampleInputNumber" className="form-label">Quantity</label>
                                    <input type="number" placeholder='Enter quantity' className="form-control" aria-describedby="numberHelp" />

                                    <span><Image src={purchase} alt='img' /> </span>
                                    <label for="exampleInputprice" className="form-label">Purchase date</label>
                                    <input type="date" placeholder='Enter purchase date' className="form-control" />


                                </div>

                                <div className="m-3">
                                    <span><Image src={batch} alt='img' /> </span>
                                    <label for="exampleInputBatchNo" className="form-label">Batch no.</label>
                                    <input type="number" placeholder='Enter batch no.' className="form-control" />

                                    <span><Image src={distributor} alt='img' /> </span>
                                    <label for="exampleInputName" className="form-label">Distributor name</label>
                                    <input type="text" placeholder='Enter Distributer name' className="form-control" />

                                    <span><Image src={mtype} alt='img' /> </span>
                                    <label for="exampleInputText" className="form-label">Type</label>
                                    <select class="form-select form-select" aria-label=".form-select-lg example">
                                        <option selected>Select medicine type</option>
                                        <option value="1">Tablet</option>
                                        <option value="2">Powder</option>
                                        <option value="3">Syrup</option>
                                    </select>

                                    <span><Image src={date} alt='img' /> </span>
                                    <label for="exampleInputdate" className="form-label">Expiry date</label>
                                    <input type="date" placeholder='select expiry date' className="form-control" />

                                </div>
                            </form>
                        </div>
                        <button>Add</button>
                    </div>

                </div>
            )}

          <div className={styles.dinput}>
          <Inputs />
          </div>

            <Table />

            <div className={styles.mview}>
                <div className={styles.mreturn}>
                    <span><Image className='me-2' height={18} src={arrow} alt="img" />Add new medicine</span>
                    <button onClick={handleButtonClick}>Add New</button>
                </div>
                <Minputs />
                <Mtable />
            </div>

        </div>
    )
}



export default page;





