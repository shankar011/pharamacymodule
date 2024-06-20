import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import remove from "../images/delete.png";
import deletes from "../images/remove.png";
import files from "../images/files.png";


function Table() {
    return (
        <div className={styles.container}>

            <table className="table ms-4">
                <thead>
                    <tr>
                        <th scope="col">Medicine name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Brand</th>
                        <th scope="col">MRP</th>
                        <th scope="col">GST%</th>
                        <th scope="col">Discount</th>
                        <th scope="col">Total price</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td>Bayer AG</td>
                        <td>₹832</td>
                        <td>10</td>
                        <td>₹0</td>
                        <td>₹83200</td>
                        <td><Image src={remove} alt='img' /> </td>
                    </tr>
                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td>Bristol Myers Squibb Company</td>
                        <td>₹832</td>
                        <td>10</td>
                        <td>₹0</td>
                        <td>₹83200</td>
                        <td><Image src={remove} alt='img' /> </td>
                    </tr>

                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td>Bayer AG</td>
                        <td>₹832</td>
                        <td>10</td>
                        <td>₹0</td>
                        <td>₹83200</td>
                        <td><Image src={remove} alt='img' /> </td>
                    </tr>
                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td>Bristol Myers Squibb Company</td>
                        <td>₹832</td>
                        <td>10</td>
                        <td>₹0</td>
                        <td>₹83200</td>
                        <td><Image src={remove} alt='img' /> </td>
                    </tr>

                    <tr className='table-secondary'>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Total price</td>
                        <td>₹1032</td>
                    </tr>
                    <tr className='table-secondary'>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Total discount:</td>
                        <td>₹0</td>
                    </tr>
                    <tr className='table-secondary'>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><b>Payable price </b></td>
                        <td><b> ₹969.95 </b></td>
                    </tr>

                </tbody>
            </table>

            <div className={styles.mobiletable}>
                <div className='d-flex justify-content-between'>
                    <div>
                        <span>1</span>
                        <span>Synthroid</span>
                    </div>
                    <div>
                        <span><Image src={deletes} alt='img' /></span>
                        <span className='ms-3'><Image src={files} alt='img' /></span>
                    </div>
                </div>
                <div className='d-flex justify-content-evenly'>
                    <ul className={styles.label}>
                        <li>Brand name</li>
                        <li>Quantity</li>
                        <li>MRP Price</li>
                        <li>GST%</li>
                        <li>Discount</li>
                        <li>Total price</li>

                    </ul>
                    <ul className={styles.name}>
                        <li>Bayer AG</li>
                        <li>100</li>
                        <li>&#8377;400</li>
                        <li>10%</li>
                        <li><input placeholder='&#8377;10%' /></li>
                        <li>&#8377;832000</li>

                    </ul>
                </div>
            </div>
            <div className={styles.mobiletable}>
                <div className='d-flex justify-content-between'>
                    <div>
                        <span>2.</span>
                        <span>Synthroid</span>
                    </div>
                    <div>
                        <span><Image src={deletes} alt='img' /></span>
                        <span className='ms-3'><Image src={files} alt='img' /></span>
                    </div>
                </div>
                <div className='d-flex justify-content-evenly'>
                    <ul className={styles.label}>
                        <li>Brand name</li>
                        <li>Quantity</li>
                        <li>MRP Price</li>
                        <li>GST%</li>
                        <li>Discount</li>
                        <li>Total price</li>

                    </ul>
                    <ul className={styles.name}>
                        <li>Bayer AG</li>
                        <li>100</li>
                        <li>&#8377;400</li>
                        <li>10%</li>
                        <li><input placeholder='&#8377;10%' /></li>
                        <li>&#8377;832000</li>

                    </ul>
                </div>
            </div>

            <div className={styles.price}>
                <div className='d-flex justify-content-evenly'>
                    <ul className={styles.label}>
                        <li>Total price:</li>
                        <li>Total discount:</li>
                        <li>Payable price</li>

                    </ul>
                    <ul className={styles.name}>
                        <li>₹1032</li>
                        <li><input placeholder='&#8377;10%' /></li>
                        <li>&#8377;969.65</li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default Table