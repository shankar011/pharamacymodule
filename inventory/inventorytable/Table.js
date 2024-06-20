"use client"
import { useState } from 'react';
import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import edit from "../images/file.png";
import remove from "../images/remove.png";
import tablet from "../images/tablet.png";
import powder from "../images/powder.png";
import doumble from "../images/doumble.png";
import aspire from "../images/aspire.png";
import files from "../images/edit.png";
import dis from "../images/dis.png";
import shelf from "../images/dis.png";
import quantity from "../images/dis.png";
import expiry from "../images/expiry.png";
import cross from "../../../../public/images/cross.png";
import add from "../images/add.png";
import plus from "../images/plus.png"






function Table() {


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

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Medicine</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Type</th>
                        <th scope="col">Expiry date</th>
                        <th scope="col">Purchase date</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Shelf label</th>
                        <th scope="col">Distributor</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td><Image src={tablet} alt='img' /> </td>
                        <td>04-09-2022</td>
                        <td>04-09-2022</td>
                        <td>Bayer AG </td>
                        <td>SB-12</td>
                        <td>McKesson Corporation</td>
                        <td><span><Image onClick={handleButtonClick} src={edit} alt='img' /></span><span className='ms-3'><Image  onClick={deleteButtonClick} src={remove} alt='img' /> </span>  </td>
                    </tr>
                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td><Image src={powder} alt='img' /> </td>
                        <td>04-09-2022</td>
                        <td>04-09-2022</td>
                        <td>Bayer AG </td>
                        <td>SB-12</td>
                        <td>McKesson Corporation</td>
                        <td><span><Image onClick={handleButtonClick} src={edit} alt='img' /></span><span className='ms-3'><Image  onClick={deleteButtonClick} src={remove} alt='img' /> </span>  </td>

                    </tr>

                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td><Image src={doumble} alt='img' /> </td>
                        <td>04-09-2022</td>
                        <td>04-09-2022</td>
                        <td>Bayer AG </td>
                        <td>SB-12</td>
                        <td>McKesson Corporation</td>
                        <td><span><Image onClick={handleButtonClick} src={edit} alt='img' /></span><span className='ms-3'><Image  onClick={deleteButtonClick} src={remove} alt='img' /> </span>  </td>

                    </tr>

                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td><Image src={tablet} alt='img' /> </td>
                        <td>04-09-2022</td>
                        <td>04-09-2022</td>
                        <td>Bayer AG </td>
                        <td>SB-12</td>
                        <td>McKesson Corporation</td>
                        <td><span><Image onClick={handleButtonClick} src={edit} alt='img' /></span><span className='ms-3'><Image  onClick={deleteButtonClick} src={remove} alt='img' /> </span>  </td>

                    </tr>
                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td><Image src={powder} alt='img' /> </td>
                        <td>04-09-2022</td>
                        <td>04-09-2022</td>
                        <td>Bayer AG </td>
                        <td>SB-12</td>
                        <td>McKesson Corporation</td>
                        <td><span><Image onClick={handleButtonClick} src={edit} alt='img' /></span><span className='ms-3'><Image  onClick={deleteButtonClick} src={remove} alt='img' /> </span>  </td>

                    </tr>

                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td><Image src={doumble} alt='img' /> </td>
                        <td>04-09-2022</td>
                        <td>04-09-2022</td>
                        <td>Bayer AG </td>
                        <td>SB-12</td>
                        <td>McKesson Corporation</td>
                        <td><span><Image onClick={handleButtonClick} src={edit} alt='img' /></span><span className='ms-3'><Image  onClick={deleteButtonClick} src={remove} alt='img' /> </span>  </td>

                    </tr>


                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td><Image src={tablet} alt='img' /> </td>
                        <td>04-09-2022</td>
                        <td>04-09-2022</td>
                        <td>Bayer AG </td>
                        <td>SB-12</td>
                        <td>McKesson Corporation</td>
                        <td><span><Image onClick={handleButtonClick} src={edit} alt='img' /></span><span className='ms-3'><Image  onClick={deleteButtonClick} src={remove} alt='img' /> </span>  </td>

                    </tr>
                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td><Image src={powder} alt='img' /> </td>
                        <td>04-09-2022</td>
                        <td>04-09-2022</td>
                        <td>Bayer AG </td>
                        <td>SB-12</td>
                        <td>McKesson Corporation</td>
                        <td><span><Image onClick={handleButtonClick} src={edit} alt='img' /></span><span className='ms-3'><Image  onClick={deleteButtonClick} src={remove} alt='img' /> </span>  </td>

                    </tr>

                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td><Image src={doumble} alt='img' /> </td>
                        <td>04-09-2022</td>
                        <td>04-09-2022</td>
                        <td>Bayer AG </td>
                        <td>SB-12</td>
                        <td>McKesson Corporation</td>
                        <td><span><Image onClick={handleButtonClick} src={edit} alt='img' /></span><span className='ms-3'><Image  onClick={deleteButtonClick} src={remove} alt='img' /> </span>  </td>

                    </tr>

                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td><Image src={tablet} alt='img' /> </td>
                        <td>04-09-2022</td>
                        <td>04-09-2022</td>
                        <td>Bayer AG </td>
                        <td>SB-12</td>
                        <td>McKesson Corporation</td>
                        <td><span><Image onClick={handleButtonClick} src={edit} alt='img' /></span><span className='ms-3'><Image  onClick={deleteButtonClick} src={remove} alt='img' /> </span>  </td>

                    </tr>
                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td><Image src={powder} alt='img' /> </td>
                        <td>04-09-2022</td>
                        <td>04-09-2022</td>
                        <td>Bayer AG </td>
                        <td>SB-12</td>
                        <td>McKesson Corporation</td>
                        <td><span><Image onClick={handleButtonClick} src={edit} alt='img' /></span><span className='ms-3'><Image  onClick={deleteButtonClick} src={remove} alt='img' /> </span>  </td>

                    </tr>

                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td><Image src={doumble} alt='img' /> </td>
                        <td>04-09-2022</td>
                        <td>04-09-2022</td>
                        <td>Bayer AG </td>
                        <td>SB-12</td>
                        <td>McKesson Corporation</td>
                        <td><span><Image onClick={handleButtonClick} src={edit} alt='img' /></span><span className='ms-3'><Image  onClick={deleteButtonClick} src={remove} alt='img' /> </span>  </td>

                    </tr>




                </tbody>
            </table>


            {deleteClick && (
                <div className={styles.modal}>

                    <div className={styles.modal_content}>

                        <div className={styles.conform_1}>
                            <span className={styles.conform}>Remove distriburor </span>
                            <span><Image onClick={deletecloseModal} src={cross} /> </span>
                        </div>

                        <p>Are you sure you want to remove <b> Annette Black</b> as your distributor? </p>


                        <div className='d-flex ms-5'>
                            <button onClick={deletecloseModal} className={styles.no}>No</button>
                            <button className={styles.pdf}>Remove</button>
                        </div>

                    </div>

                </div>
            )}


            {showMessage && (
                <div className={styles.modal}>

                    <div className={styles.modal_content}>
                        <div className={styles.paymet}>
                            <p>Medicine details</p>
                            <Image onClick={closeModal} src={cross} />
                        </div>

                        <div className={styles.add}>
                            <Image src={add} alt='img' />
                            <Image src={plus} alt='img' />
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
                        <div className='d-flex justify-content-between'>
                            <span className={styles.removetext}><Image src={remove} alt='img' />  Remove medicine  </span>
                            <div className={styles.buttons}>
                                <button className={styles.btn_1}>Clear all</button>
                                <button className={styles.btn_2}>Update</button>
                            </div>
                        </div>
                    </div>

                </div>
            )}

        </div>
    )
}

export default Table