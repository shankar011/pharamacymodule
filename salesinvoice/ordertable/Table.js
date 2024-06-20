

import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import deletes from "../images/remove.png";
import files from "../images/files.png";


function Table() {
    return (
        <div className={styles.main}>
            <p>Your order #3214</p>

            <div className={styles.container}>

                <table className="table ms-4">
                    <thead>
                        <tr>
                            <th scope="col">Timestamp</th>
                            <th scope="col">Medicine</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Brand</th>
                            <th scope="col">MRP</th>
                            <th scope="col">Total price</th>
                            <th scope="col">Discount</th>
                            <th scope="col">Return quantity</th>
                            <th scope="col">Return amount</th>


                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>04-05-2023PM</td>
                            <td>Synthroid</td>
                            <td>100</td>
                            <td> Bayer AG</td>
                            <td>&#8377;832</td>
                            <td>&#8377;83200 </td>
                            <td>&#8377;200</td>
                            <td>&#8377;200</td>
                            <td>&#8377;416</td>
                        </tr>
                        <tr>
                            <td>04-05-2023PM</td>
                            <td>Pepto-Bismol</td>
                            <td>100</td>
                            <td>Bristol Myers Squibb</td>
                            <td>&#8377;200</td>
                            <td>&#8377;2000 </td>
                            <td>&#8377;100</td>
                            <td>&#8377;100</td>
                            <td>&#8377;100</td>
                        </tr>
                        <tr>
                            <td>04-05-2023PM</td>
                            <td>Synthroid</td>
                            <td>100</td>
                            <td> Bayer AG</td>
                            <td>&#8377;832</td>
                            <td>&#8377;83200 </td>
                            <td>&#8377;200</td>
                            <td>&#8377;200</td>
                            <td>&#8377;416</td>
                        </tr>
                        <tr>
                            <td>04-05-2023PM</td>
                            <td>Pepto-Bismol</td>
                            <td>100</td>
                            <td>Bristol Myers Squibb</td>
                            <td>&#8377;200</td>
                            <td>&#8377;2000 </td>
                            <td>&#8377;100</td>
                            <td>&#8377;100</td>
                            <td>&#8377;100</td>
                        </tr>



                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Discount provided:</td>
                            <td>₹300</td>
                        </tr>
                        <tr >
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Previous total:</td>
                            <td>₹1028</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Suggested return amount:</td>
                            <td>₹516</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><b>Actual return amount:</b></td>
                            <td><input type='number' placeholder='Enter amount' /></td>
                        </tr>

                    </tbody>
                </table>

            </div>

            <div className={styles.mobiletable}>
                <div className='d-flex justify-content-between'>
                    <div>
                        <span>1</span>
                        <span>Synthroid (04-09-23 12:34PM)</span>
                    </div>
                    <div>
                        <span><Image src={files} alt='img' /></span>
                        <span className='ms-1'><Image src={deletes} alt='img' /></span>
                    </div>
                </div>
                <div className='d-flex justify-content-evenly'>
                    <ul className={styles.label}>
                        <li>Brand name</li>
                        <li>Quantity</li>
                        <li>MRP Price</li>
                        <li>Total price</li>
                        <li>Discount</li>
                        <li>Return quantity</li>
                        <li>Return amount</li>
                      
                    </ul>
                    <ul className={styles.name}>
                        <li>Bayer AG</li>
                        <li>100</li>
                        <li>&#8377;400</li>
                        <li>&#8377;83200</li>
                        <li>&#8377;0</li>
                        <li>10</li>
                        <li>&#8377;832000</li>

                    </ul>
                </div>
            </div>

            <div className={styles.mobiletable}>
                <div className='d-flex justify-content-between'>
                    <div>
                        <span>1</span>
                        <span>Synthroid (04-09-23 12:34PM)</span>
                    </div>
                    <div>
                        <span><Image src={files} alt='img' /></span>
                        <span className='ms-1'><Image src={deletes} alt='img' /></span>
                    </div>
                </div>
                <div className='d-flex justify-content-evenly'>
                    <ul className={styles.label}>
                        <li>Brand name</li>
                        <li>Quantity</li>
                        <li>MRP Price</li>
                        <li>Total price</li>
                        <li>Discount</li>
                        <li>Return quantity</li>
                        <li>Return amount</li>
                      
                    </ul>
                    <ul className={styles.name}>
                        <li>Bayer AG</li>
                        <li>100</li>
                        <li>&#8377;400</li>
                        <li>&#8377;83200</li>
                        <li>&#8377;0</li>
                        <li>10</li>
                        <li>&#8377;832000</li>

                    </ul>
                </div>
            </div>

            <div className={styles.price}>
                <div className='d-flex justify-content-evenly'>
                    <ul className={styles.label}>
                        <li>Discount provided:</li>
                        <li>Previous total:</li>
                        <li>Suggested return amount:</li>
                        <li><b>Actual return amount:</b></li>

                    </ul>
                    <ul className={styles.name}>
                        <li>&#8377;1032</li>
                        <li>&#8377;40</li>
                        <li>&#8377;969.65</li>
                        <li><input placeholder='Enter amount' /></li>
                        
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Table