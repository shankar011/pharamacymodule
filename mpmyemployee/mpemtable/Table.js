
'use client'
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
import first from "../images/1.png"
import second from "../images/2.png"
import third from "../images/3.png"
import call from "../images/phone.png";
import mail from "../images/email.png";
import edits from "../images/edit.png";
import close from "../images/remove.png"
import cross from "../../../../public/images/cross.png"






function Table() {

    const [showMessage, setShowMessage] = useState(false);

    const handleButtonClick = () => {
        setShowMessage(true)
    }
    const closeModal = () => {
        setShowMessage(false)
    }

  

    return (
        <div className={styles.container}>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Employee name</th>
                        <th scope="col">Mobile number</th>
                        <th scope="col">Joining date</th>
                        <th className='ps-5' scope="col">Email</th>
                        <th scope="col">Access control</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Savannah Nguyen</td>

                        <td>9455575237 </td>
                        <td>14/02/2022</td>
                        <td>sara.cruz@example.com</td>
                        <td>
                            <span><Image src={first} alt='img' /> </span>
                            <span className='ps-2'><Image src={second} alt='img' /> </span>
                            <span className='ps-2'><Image src={third} alt='img' /> </span>

                        </td>
                        <td><span><Image src={edit} alt='img' /></span><span onClick={handleButtonClick}  className='ms-3'><Image  src={remove} alt='img' /> </span>  </td>
                    </tr>

                    {showMessage && (
                    <div className={styles.modal}>

                        <div className={styles.modal_content}>
                            <div className={styles.paymet}>
                                <p>Remove distriburor</p>
                                <Image onClick={closeModal} src={cross} />
                            </div>

                            <div className="pb-4">
                                <form className={styles.forms}>
                                    <div className={styles.para_1}>
                                        <p>Are you sure you want to remove <b>Annette Black</b> as your distributor?</p>
                                    </div>

                                    <div className="d-flex">
                                       
                                    <button onClick={closeModal}>No</button>
                                    <button>Remove</button>

                                    </div>
                                </form>

                              

                            </div>

                        </div>

                    </div>
                )}
                   
                 

                    <tr>
                        <td>Savannah Nguyen</td>

                        <td>9455575237 </td>
                        <td>14/02/2022</td>
                        <td>sara.cruz@example.com</td>
                        <td>
                            <span><Image src={first} alt='img' /> </span>
                            <span className='ps-2'><Image src={second} alt='img' /> </span>
                            <span className='ps-2'><Image src={third} alt='img' /> </span>

                        </td>
                        <td><span><Image src={edit} alt='img' /></span><span className='ms-3'><Image src={remove} alt='img' /> </span>  </td>
                    </tr>

                    <tr>
                        <td>Savannah Nguyen</td>

                        <td>9455575237 </td>
                        <td>14/02/2022</td>
                        <td>sara.cruz@example.com</td>
                        <td>
                            <span><Image src={first} alt='img' /> </span>
                            <span className='ps-2'><Image src={second} alt='img' /> </span>
                            <span className='ps-2'><Image src={third} alt='img' /> </span>

                        </td>
                        <td><span><Image src={edit} alt='img' /></span><span className='ms-3'><Image src={remove} alt='img' /> </span>  </td>
                    </tr>
                    <tr>
                        <td>Savannah Nguyen</td>

                        <td>9455575237 </td>
                        <td>14/02/2022</td>
                        <td>sara.cruz@example.com</td>
                        <td>
                            <span><Image src={first} alt='img' /> </span>
                            <span className='ps-2' ><Image src={second} alt='img' /> </span>
                            <span className='ps-2' ><Image src={third} alt='img' /> </span>

                        </td>
                        <td><span><Image src={edit} alt='img' /></span><span className='ms-3'><Image src={remove} alt='img' /> </span>  </td>
                    </tr>
                    <tr>
                        <td>Savannah Nguyen</td>

                        <td>9455575237 </td>
                        <td>14/02/2022</td>
                        <td>sara.cruz@example.com</td>
                        <td>
                            <span><Image src={first} alt='img' /> </span>
                            <span className='ps-2'><Image src={second} alt='img' /> </span>
                            <span className='ps-2'><Image src={third} alt='img' /> </span>

                        </td>
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
                    <span>1.McKesson Corporation</span>
                    <span>
                        <Image src={edits} alt='img' />
                        <Image src={close} alt='img' />
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
                <div className='d-flex'>
                    <ul className={styles.left}>
                        <li>Joining date</li>
                        <li>Access control</li>
                    </ul>
                    <ul className={styles.right}>
                        <li>14/07/2022</li>
                        <li>
                            <span><Image src={first} alt='img' /> </span>
                            <span className='ps-2'><Image src={second} alt='img' /> </span>
                            <span className='ps-2'><Image src={third} alt='img' /> </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.mtable}>
                <div className={styles.top}>
                    <span>1.McKesson Corporation</span>
                    <span>
                        <Image src={edits} alt='img' />
                        <Image src={close} alt='img' />
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
                <div className='d-flex'>
                    <ul className={styles.left}>
                        <li>Joining date</li>
                        <li>Access control</li>
                    </ul>
                    <ul className={styles.right}>
                        <li>14/07/2022</li>
                        <li>
                            <span><Image src={first} alt='img' /> </span>
                            <span className='ps-2'><Image src={second} alt='img' /> </span>
                            <span className='ps-2'><Image src={third} alt='img' /> </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.mtable}>
                <div className={styles.top}>
                    <span>1.McKesson Corporation</span>
                    <span>
                        <Image src={edits} alt='img' />
                        <Image src={close} alt='img' />
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
                <div className='d-flex'>
                    <ul className={styles.left}>
                        <li>Joining date</li>
                        <li>Access control</li>
                    </ul>
                    <ul className={styles.right}>
                        <li>14/07/2022</li>
                        <li>
                            <span><Image src={first} alt='img' /> </span>
                            <span className='ps-2'><Image src={second} alt='img' /> </span>
                            <span className='ps-2'><Image src={third} alt='img' /> </span>
                        </li>
                    </ul>
                </div>
            </div>




        </div>
    )
}

export default Table