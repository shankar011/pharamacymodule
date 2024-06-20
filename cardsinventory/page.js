"use client";
import { useState } from 'react';
import React from 'react';
import Link from 'next/link';
import styles from "./style.module.css";
import Image from 'next/image';
import NavBar from './topnav/NavBar';
import arrow from "./images/leftarrow.png"
import Medicine from './medicine/Medicine';
import Inventory from './inventorytable/Inventory';
import cross from "./images/cross.png";
import medicine from "../../../public/images/medicine.png"
import brand from "../../../public/images/brand.png"
import distributor from "../../../public/images/distributor.png"
import batch from "../../../public/images/batch.png"
import quantity from "../../../public/images/quantity.png"
import mtype from "../../../public/images/mtype.png"
import date from "../../../public/images/expirydate.png"
import purchase from "../../../public/images/purchase.png"
import Inputs from './minputs/Inputs';
import Mtable from './mtable/Mtable';



const page = () => {

    const [showMessage, setShowMessage] = useState(false);

    const [mshowMessage, setmShowMessage] = useState(false);

    const handleButtonClick = () => {
        setShowMessage(true);
    };

    const closeModal = () => {
        setShowMessage(false);
    };

    const mhandleButtonClick = () => {
        setmShowMessage(true);
    };

    const mcloseModal = () => {
        setmShowMessage(false);
    };

    return (
        <div>
            <NavBar />

            <div className={styles.container}>

                <div className={styles.mview}>
                    <div className={styles.mreturn}>
                      <Link href="./home">  <span><Image className='me-2' height={18} src={arrow} alt="img" />Add new medicine</span></Link>
                        <button onClick={mhandleButtonClick}>Add New</button>
                    </div>
                    <Inputs />
                    <Mtable />
                </div>

                {mshowMessage && (
                    <div className={styles.modal}>

                        <div className={styles.modal_content}>
                            <div className={styles.mclose}>

                                <Image onClick={mcloseModal} src={cross} />
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

                            <div className={styles.paymet}>
                                <button>Add</button>
                            </div>

                        </div>

                    </div>
                )}


                <div className={styles.return}>
                  <Link href="./home"><span><Image className='me-2' height={18} src={arrow} alt="img" />Update inventory</span></Link>
                </div>
                <Medicine />
                <Inventory />


            </div>
            <div className={styles.bottom}>
                <button onClick={handleButtonClick}>Update inventory</button>
            </div>

            {showMessage && (
                <div className={styles.modal}>

                    <div className={styles.modal_content}>
                        <div className={styles.paymet}>
                            <p>Update inventory</p>
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



                    </div>

                </div>
            )}

        </div>
    )
}

export default page;