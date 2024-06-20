
"use client"
import { useState } from 'react';
import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import edit from "../images/file.png";
import remove from "../images/delete.png";
import dleft from "../images/dleft.png"
import sleft from "../images/sleft.png"
import sright from "../images/sright.png"
import dright from "../images/dright.png"
import person from "../images/person.png"
import cross from "../../../../public/images/cross.png"


function Table() {

    const [showMessage, setShowMessage] = useState(false);

    const [deleteMessage, setdeleteMessage] = useState(false);


    const handleButtonClick = () => {
        setShowMessage(true)
    }
    const closeModal = () => {
        setShowMessage(false)
    }

    const deleteButtonClick = () => {
        setdeleteMessage(true)
    }

    const deleteModal = () => {
        setdeleteMessage(false)
    }

    return (
        <div className={styles.container}>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Doctor/Hospital name</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Savannah Nguyen</td>

                        <td><span><Image onClick={handleButtonClick} src={edit} alt='img' /></span><span className='ms-3'><Image onClick={deleteButtonClick} src={remove} alt='img' /> </span>  </td>
                    </tr>
                    {showMessage && (
                        <div className={styles.modal}>

                            <div className={styles.modal_content}>
                                <div className={styles.paymet}>
                                    <p>Doctor/Hospital details</p>
                                    <Image onClick={closeModal} src={cross} />
                                </div>

                                <div className="pb-4">
                                    <form className={styles.forms}>
                                        <div className="m-3">
                                            <span><Image src={person} alt='img' /> </span>
                                            <label for="exampleInputText" className="form-label"> Doctor/hospital name</label>
                                            <input type="text" className="form-control" placeholder='Ralph Edwards' aria-describedby="textHelp" />

                                        </div>

                                    </form>

                                    <button>Update</button>

                                </div>

                            </div>

                        </div>
                    )}

                    {deleteMessage && (
                        <div className={styles.modal_delete}>

                            <div className={styles.modal_content_delete}>
                                <div className={styles.paymet}>
                                    <p>Doctor/Hospital details</p>
                                    <Image onClick={deleteModal} src={cross} />
                                </div>

                                <div className="pb-4">
                                    
                                    <p>Are you sure you want to remove Jerome Bell as your doctor/hospital?</p>

                                </div>
                                <div className='d-flex'>
                                    <button>No</button>
                                    <button>Remove</button>

                                </div>

                            </div>

                        </div>
                    )}

                    <tr>
                        <td>Savannah Nguyen</td>

                        <td><span><Image src={edit} alt='img' /></span><span className='ms-3'><Image src={remove} alt='img' /> </span>  </td>
                    </tr>

                    <tr>
                        <td>Savannah Nguyen</td>

                        <td><span><Image src={edit} alt='img' /></span><span className='ms-3'><Image src={remove} alt='img' /> </span>  </td>
                    </tr>
                    <tr>
                        <td>Savannah Nguyen</td>

                        <td><span><Image src={edit} alt='img' /></span><span className='ms-3'><Image src={remove} alt='img' /> </span>  </td>
                    </tr>
                    <tr>
                        <td>Savannah Nguyen</td>

                        <td><span><Image src={edit} alt='img' /></span><span className='ms-3'><Image src={remove} alt='img' /> </span>  </td>
                    </tr>


                </tbody>
            </table>
            <div className={styles.bottom}>
                <span>1</span>
                <span>-</span>
                <span>50</span>
                <span className='ms-2'>off</span>
                <span className='ms-2'>650</span>
                <span className='ms-4'><Image src={dleft} alt='img' /></span>
                <span className='ms-4'><Image src={sleft} alt='img' /></span>
                <span className='ms-4'><Image src={sright} alt='img' /></span>
                <span className='ms-4'><Image src={dright} alt='img' /></span>
            </div>


        </div>
    )
}

export default Table