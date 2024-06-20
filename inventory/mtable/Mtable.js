"use client"
import { useState } from 'react';
import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import files from "../images/edit.png"
import remove from "../images/remove.png";
import aspire from "../images/aspire.png";
import dis from "../images/dis.png";
import expiry from "../images/expiry.png";
import quantity from "../images/quantity.png";
import shelf from "../images/shelf.png";
import cross from "../../../../public/images/cross.png"




const Mtable = () => {

    const [showMessage, setShowMessage] = useState(false);

    const [deleteClick, setdeleteClick] = useState(false);

    const handleButtonClick = () => {
        setShowMessage(true);
    };

    const closeModal = () => {
        setShowMessage(false);
    };

    const deleteButtonClick = () => {
        setdeleteClick(true);
    };

    const deletecloseModal = () => {
        setdeleteClick(false);
    };

    return (
        <div className={styles.container}>
            <div className={styles.msection}>
                <div className={styles.details}>
                    <div className={styles.name}>
                        <p>1. <Image src={aspire} alt='img' />Aspirine <span> (Brand - Bayer AG)</span></p>
                        <div className={styles.img_1}>
                            <Image onClick={handleButtonClick} src={files} alt='img' />
                            <Image onClick={deleteButtonClick} src={remove} alt='img' />
                        </div>

                    </div>
                    <div className='d-flex'>
                        <ul className={styles.list_1}>
                            <li><Image src={dis} alt='img' /> Distributor</li>
                            <li><Image src={shelf} alt='img' /> Shelf label</li>
                            <li><Image src={quantity} alt='img' /> Quantity</li>
                            <li><Image src={dis} alt='img' /> Purchase date</li>
                            <li><Image src={expiry} alt='img' /> Expiry date</li>

                        </ul>
                        <ul className={styles.list_2}>
                            <li>McKesson Corporation</li>
                            <li>SB-12</li>
                            <li>100</li>
                            <li>04-09-2022</li>
                            <li>04-09-2022</li>

                        </ul>
                    </div>
                </div>
            </div>



            {showMessage && (
                <div className={styles.modal}>

                    <div className={styles.modal_content}>
                        <div className={styles.paymet}>
                            <p>Medicine details</p>
                            <Image onClick={closeModal} src={cross} />
                        </div>


                        <div className="pb-4">
                            <form className={styles.forms}>
                                <div className="m-3">

                                    <label for="exampleInputText" className="form-label">Medicine</label>
                                    <input type="text" className="form-control" placeholder='Enter medicne name' aria-describedby="textHelp" />


                                    <label for="exampleInputBrand" className="form-label">Brand name</label>
                                    <input type="text" placeholder='Enter brand name' className="form-control" />


                                    <label for="exampleInputNumber" className="form-label">Quantity</label>
                                    <input type="number" placeholder='Enter quantity' className="form-control" aria-describedby="numberHelp" />


                                    <label for="exampleInputprice" className="form-label">Purchase date</label>
                                    <input type="date" placeholder='Enter purchase date' className="form-control" />


                                </div>

                                <div className="m-3">

                                    <label for="exampleInputBatchNo" className="form-label">Batch no.</label>
                                    <input type="number" placeholder='Enter batch no.' className="form-control" />


                                    <label for="exampleInputName" className="form-label">Distributor name</label>
                                    <input type="text" placeholder='Enter Distributer name' className="form-control" />


                                    <label for="exampleInputText" className="form-label">Type</label>
                                    <select class="form-select form-select" aria-label=".form-select-lg example">
                                        <option selected>Select medicine type</option>
                                        <option value="1">Tablet</option>
                                        <option value="2">Powder</option>
                                        <option value="3">Syrup</option>
                                    </select>


                                    <label for="exampleInputdate" className="form-label">Expiry date</label>
                                    <input type="date" placeholder='select expiry date' className="form-control" />

                                </div>
                            </form>
                        </div>

                        <div className='d-flex justify-content-evenly'>
                            <span onClick={deleteButtonClick} className={styles.removetext}><Image src={remove} alt='img' />  Remove medicine  </span>
                            <div className={styles.buttons}>
                                <button className={styles.btn_1}>Clear all</button>
                                <button className={styles.btn_2}>Update</button>
                            </div>
                        </div>
                    </div>

                </div>
            )}

            {deleteClick && (
                <div className={styles.modal}>

                    <div className={styles.modal_content}>

                        <div className={styles.conform_1}>
                            <span className={styles.conform}>Remove Medicine </span>
                            <span><Image onClick={deletecloseModal} src={cross} /> </span>
                        </div>

                        <p>Are you sure you want to remove <b> Annette Black</b> as your distributor? </p>


                        <div className='d-flex'>
                            <button onClick={deletecloseModal} className={styles.no}>No</button>
                            <button className={styles.pdf}>Remove</button>
                        </div>

                    </div>

                </div>
            )}

<div className={styles.msection}>
                <div className={styles.details}>
                    <div className={styles.name}>
                        <p>1. <Image src={aspire} alt='img' />Aspirine <span> (Brand - Bayer AG)</span></p>
                        <div className={styles.img_1}>
                            <Image onClick={handleButtonClick} src={files} alt='img' />
                            <Image onClick={deleteButtonClick} src={remove} alt='img' />
                        </div>

                    </div>
                    <div className='d-flex'>
                        <ul className={styles.list_1}>
                            <li><Image src={dis} alt='img' /> Distributor</li>
                            <li><Image src={shelf} alt='img' /> Shelf label</li>
                            <li><Image src={quantity} alt='img' /> Quantity</li>
                            <li><Image src={dis} alt='img' /> Purchase date</li>
                            <li><Image src={expiry} alt='img' /> Expiry date</li>

                        </ul>
                        <ul className={styles.list_2}>
                            <li>McKesson Corporation</li>
                            <li>SB-12</li>
                            <li>100</li>
                            <li>04-09-2022</li>
                            <li>04-09-2022</li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.msection}>
                <div className={styles.details}>
                    <div className={styles.name}>
                        <p>1. <Image src={aspire} alt='img' />Aspirine <span> (Brand - Bayer AG)</span></p>
                        <div className={styles.img_1}>
                            <Image onClick={handleButtonClick} src={files} alt='img' />
                            <Image onClick={deleteButtonClick} src={remove} alt='img' />
                        </div>

                    </div>
                    <div className='d-flex'>
                        <ul className={styles.list_1}>
                            <li><Image src={dis} alt='img' /> Distributor</li>
                            <li><Image src={shelf} alt='img' /> Shelf label</li>
                            <li><Image src={quantity} alt='img' /> Quantity</li>
                            <li><Image src={dis} alt='img' /> Purchase date</li>
                            <li><Image src={expiry} alt='img' /> Expiry date</li>

                        </ul>
                        <ul className={styles.list_2}>
                            <li>McKesson Corporation</li>
                            <li>SB-12</li>
                            <li>100</li>
                            <li>04-09-2022</li>
                            <li>04-09-2022</li>

                        </ul>
                    </div>
                </div>
            </div>


           

        </div>
    )
}

export default Mtable;