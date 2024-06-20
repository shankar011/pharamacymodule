
import React from 'react';
import Image from 'next/image';
import styles from "./style.module.css";

import dleft from "../images/dleft.png";
import sleft from "../images/sleft.png";
import dright from "../images/dright.png";
import sright from "../images/sright.png";
import d1 from "../images/d1.png";
import d2 from "../images/d2.png";






function Table() {
    return (
        <div className={styles.container}>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Delivery Status</th>
                        <th scope="col">Timestamp</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Delivery Person</th>
                        <th scope="col">No of medicine</th>
                        <th scope="col">Amount</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>

                            <div className='d-flex justify-content-start'>
                                <Image src={d1} alt='img' />
                                <input type='checkbox' />
                                <Image src={d2} alt='img' />
                                <input type='checkbox' />
                            </div>


                        </td>
                        <td>04-09-23 12:34PM</td>
                        <td>Ramesh Verma</td>
                        <td>Ramesh Verma</td>
                        <td>100</td>
                        <td>&#8377;832</td>

                    </tr>
                    <tr>
                        <td>

                            <div className='d-flex justify-content-start'>
                                <Image src={d1} alt='img' />
                                <input type='checkbox' />
                                <Image src={d2} alt='img' />
                                <input type='checkbox' />
                            </div>


                        </td>
                        <td>04-09-23 12:34PM</td>
                        <td>Ramesh Verma</td>
                        <td>Ramesh Verma</td>
                        <td>100</td>
                        <td>&#8377;832</td>

                    </tr>
                    <tr>
                        <td>

                            <div className='d-flex justify-content-start'>
                                <Image src={d1} alt='img' />
                                <input type='checkbox' />
                                <Image src={d2} alt='img' />
                                <input type='checkbox' />
                            </div>


                        </td>
                        <td>04-09-23 12:34PM</td>
                        <td>Ramesh Verma</td>
                        <td>Ramesh Verma</td>
                        <td>100</td>
                        <td>&#8377;832</td>

                    </tr>
                    <tr>
                        <td>

                            <div className='d-flex justify-content-start'>
                                <Image src={d1} alt='img' />
                                <input type='checkbox' />
                                <Image src={d2} alt='img' />
                                <input type='checkbox' />
                            </div>


                        </td>
                        <td>04-09-23 12:34PM</td>
                        <td>Ramesh Verma</td>
                        <td>Ramesh Verma</td>
                        <td>100</td>
                        <td>&#8377;832</td>

                    </tr>
                    <tr>
                        <td>

                            <div className='d-flex justify-content-start'>
                                <Image src={d1} alt='img' />
                                <input type='checkbox' />
                                <Image src={d2} alt='img' />
                                <input type='checkbox' />
                            </div>


                        </td>
                        <td>04-09-23 12:34PM</td>
                        <td>Ramesh Verma</td>
                        <td>Ramesh Verma</td>
                        <td>100</td>
                        <td>&#8377;832</td>

                    </tr>
                    <tr>
                        <td>

                            <div className='d-flex justify-content-start'>
                                <Image src={d1} alt='img' />
                                <input type='checkbox' />
                                <Image src={d2} alt='img' />
                                <input type='checkbox' />
                            </div>


                        </td>
                        <td>04-09-23 12:34PM</td>
                        <td>Ramesh Verma</td>
                        <td>Ramesh Verma</td>
                        <td>100</td>
                        <td>&#8377;832</td>

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