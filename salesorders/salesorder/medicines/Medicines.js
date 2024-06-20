"use client";
import { useState } from 'react';
import React from 'react';
import styles from "./style.module.css";
import dawa from "../images/dawa_2.svg";
import Image from 'next/image';
import cross from "../../../../../public/images/cross.png"
import medicine from "../../../../../public/images/medicine.png"
import brand from "../../../../../public/images/brand.png"
import distributor from "../../../../../public/images/distributor.png"
import batch from "../../../../../public/images/batch.png"
import quantity from "../../../../../public/images/quantity.png"
import mtype from "../../../../../public/images/mtype.png"
import date from "../../../../../public/images/expirydate.png"
import purchase from "../../../../../public/images/purchase.png"

const Medicines = () => {
    const [showMessage, setShowMessage] = useState(false);

    const handleButtonClick = () => {
        setShowMessage(true);
    };

    const closeModal = () => {
        setShowMessage(false);
    };

    return (
        <div className={styles.left}>
            <div className={styles.medicine}>
                <div className={styles.top}>
                    <h3>Add medicines</h3>
                    <div>
                        <span>Reset cart <button className='ms-4'>Add to cart</button> </span>
                    </div>
                </div>
                <form className=' m-2'>
                    <div className={styles.medico}>
                        <div className="form-group ms-3">
                            <label for="medicinename">Medicine name</label>
                            <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Dolo" />
                            <small className="form-text text-muted"><span style={{ color: "#FF0000", fontSize: "12px" }}>Medicine not available.</span> <span style={{ color: "#7F82FF", fontSize: "12px", cursor: "pointer" }} onClick={handleButtonClick}>  Update inventory? </span> </small>
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
                                    <button>Update</button>
                                </div>

                            </div>
                        )}

                        <div className="form-group">
                            <input type="text" className="form-control mt-4 ms-2" placeholder="paracetamol" />
                        </div>
                    </div>

                    <div className="form-group  ms-3 mt-2">
                        <label for="exampleFormControlSelect1">Quantity</label>
                        <select className="form-control w-50">
                            <option>Enter quanntity</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>

                </form>
            </div>
            <div>
                <Image src={dawa} alt="img" />
            </div>
        </div>
    )
}

export default Medicines