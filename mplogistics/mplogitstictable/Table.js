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
import call from "../images/phone.png";
import mail from "../images/email.png";
import edits from "../images/medits.png"
import cross from "../../../../public/images/cross.png"
import person from "../images/person.png";
import phone from "../images/phone.png"

function Table() {
    const [showMessage, setShowMessage] = useState(false);

    const [deleteMessage, setDeleteMessage] = useState(false);

    const handleButtonClick = () => {
        setShowMessage(true)
    }
    const closeModal = () => {
        setShowMessage(false)
    }

    const deleteButtonClick = () => {
        setDeleteMessage(true)
    }

    const deletModal = () => {
        setDeleteMessage(false)
    }

    return (
        <div className={styles.container}>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Doctor/Hospital name</th>
                        <th scope="col">Mobile number</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Savannah Nguyen</td>
                        <td>9455575237</td>
                        <td><span><Image onClick={handleButtonClick} src={edit} alt='img' /></span><span className='ms-3'><Image onClick={deleteButtonClick} src={remove} alt='img' /> </span>  </td>
                    </tr>

                    {showMessage && (
                        <div className={styles.modal}>

                            <div className={styles.modal_content}>
                                <div className={styles.paymet}>
                                    <p>Logistic service provider details</p>
                                    <Image onClick={closeModal} src={cross} />
                                </div>

                                <div className="pb-4">
                                    <form className={styles.forms}>
                                        <div className="m-3">
                                            <span><Image src={person} alt='img' /> </span>
                                            <label for="exampleInputText" className="form-label"> Logistic service provider name</label>
                                            <input type="text" className="form-control" placeholder='John Doe' aria-describedby="textHelp" />
                                        </div>
                                        <div className="m-3">
                                            <span><Image src={phone} alt='img' /> </span>
                                            <label for="exampleInputText" className="form-label">Mobile number</label>
                                            <input type="number" className="form-control" placeholder='Enter 10-digit mobile number' aria-describedby="textHelp" />
                                        </div>

                                    </form>

                                    <button>Update</button>

                                </div>

                            </div>

                        </div>
                    )}

                    {deleteMessage && (
                        <div className={styles.modal}>

                            <div className={styles.modal_content}>
                                <div className={styles.paymet}>
                                    <p>Remove logistic service provider</p>
                                    <Image onClick={deletModal} src={cross} />
                                </div>

                                <div className="pb-4">
                                    <form className={styles.forms}>
                                        <div className="m-3">
                                            <span><Image src={person} alt='img' /> </span>
                                            <label for="exampleInputText" className="form-label"> Logistic service provider name</label>
                                            <input type="text" className="form-control" placeholder='John Doe' aria-describedby="textHelp" />
                                        </div>
                                        <div className="m-3">
                                            <span><Image src={phone} alt='img' /> </span>
                                            <label for="exampleInputText" className="form-label">Mobile number</label>
                                            <input type="number" className="form-control" placeholder='Enter 10-digit mobile number' aria-describedby="textHelp" />
                                        </div>

                                    </form>



                                </div>
                                <div >
                                   <span> <button className={styles.no}>No</button> </span>
                                  <span>  <button>Remove</button> </span>
                                </div>

                            </div>

                        </div>
                    )}

                    <tr>
                        <td>Savannah Nguyen</td>
                        <td>9455575237</td>
                        <td><span><Image src={edit} alt='img' /></span><span className='ms-3'><Image onClick={deleteButtonClick} src={remove} alt='img' /> </span>  </td>
                    </tr>

                    <tr>
                        <td>Savannah Nguyen</td>
                        <td>9455575237</td>
                        <td><span><Image src={edit} alt='img' /></span><span className='ms-3'><Image src={remove} alt='img' /> </span>  </td>
                    </tr>
                    <tr>
                        <td>Savannah Nguyen</td>
                        <td>9455575237</td>
                        <td><span><Image src={edit} alt='img' /></span><span className='ms-3'><Image src={remove} alt='img' /> </span>  </td>
                    </tr>
                    <tr>
                        <td>Savannah Nguyen</td>
                        <td>9455575237</td>
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

            <div className={styles.mtable}>
                <div className={styles.top}>
                    <span>1.Savannah Nguyen</span>
                    <span>
                        <Image onClick={handleButtonClick} src={edits} alt='img' />
                        <Image onClick={deleteButtonClick} src={remove} alt='img' />
                    </span>
                </div>
                <div className={styles.contact}>
                    <span>
                        <Image src={call} alt='img' />9455575237
                    </span>
                    <span>
                        <Image src={mail} alt='img' />sara@gmail.com
                    </span>
                </div>

            </div>

            <div className={styles.mtable}>
                <div className={styles.top}>
                    <span>1.Savannah Nguyen</span>
                    <span>
                        <Image onClick={handleButtonClick} src={edits} alt='img' />
                        <Image onClick={deleteButtonClick}  src={remove} alt='img' />
                    </span>
                </div>
                <div className={styles.contact}>
                    <span>
                        <Image src={call} alt='img' />9455575237
                    </span>
                    <span>
                        <Image src={mail} alt='img' />sara@gmail.com
                    </span>
                </div>

            </div>

            <div className={styles.mtable}>
                <div className={styles.top}>
                    <span>1.Savannah Nguyen</span>
                    <span>
                        <Image onClick={handleButtonClick} src={edits} alt='img' />
                        <Image onClick={deleteButtonClick}  src={remove} alt='img' />
                    </span>
                </div>
                <div className={styles.contact}>
                    <span>
                        <Image src={call} alt='img' />9455575237
                    </span>
                    <span>
                        <Image src={mail} alt='img' />sara@gmail.com
                    </span>
                </div>

            </div>


        </div>
    )
}

export default Table