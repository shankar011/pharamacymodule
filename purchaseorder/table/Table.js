import React from 'react';
import styles from "./style.module.css";
import Link from 'next/link';
import edit from "../images/edit.png";
import Image from 'next/image';
import uparrow from "../images/uparrow.png";
import remove from "../images/remove.png";
import files from "../images/files.png"

const Table = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cart}>
                <h4>Your PO#2323</h4>
                <p>Reset cart</p>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Medicine</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">MRP</th>
                        <th scope="col">Purchase Price</th>
                        <th scope="col">GST%</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Market trend</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td>₹832</td>
                        <td><input type='text' placeholder='&#8377;40' /><span className={styles.price}>20% less </span>  than MRP</td>
                        <td>12</td>
                        <td>Bayer AG</td>
                        <td><span className={styles.percentage}>2%</span> <span><Image src={uparrow} alt='img' /> </span>  </td>
                        <td><span><Image src={edit} alt='img' /> </span><span className='ms-3'><Image src={remove} alt='img' /> </span> </td>
                    </tr>
                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td>₹832</td>
                        <td><input type='text' placeholder='&#8377;40' /><span className={styles.price}>20% less </span> than MRP</td>
                        <td>12</td>
                        <td>Bayer AG</td>
                        <td><span className={styles.percentage}>2%</span> <span><Image src={uparrow} alt='img' /> </span>  </td>
                        <td><span><Image src={edit} alt='img' /> </span><span className='ms-3'><Image src={remove} alt='img' /> </span> </td>

                    </tr>
                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td>₹832</td>
                        <td><input type='text' placeholder='&#8377;40' /><span className={styles.price}>20% less </span>  than MRP</td>
                        <td>12</td>
                        <td>Bayer AG</td>
                        <td><span className={styles.percentage}>2%</span> <span><Image src={uparrow} alt='img' /> </span>  </td>
                        <td><span><Image src={edit} alt='img' /> </span><span className='ms-3'><Image src={remove} alt='img' /> </span> </td>
                    </tr>
                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td>₹832</td>
                        <td><input type='text' placeholder='&#8377;40' /><span className={styles.price}>20% less </span> than MRP</td>
                        <td>12</td>
                        <td>Bayer AG</td>
                        <td><span className={styles.percentage}>2%</span> <span><Image src={uparrow} alt='img' /> </span>  </td>
                        <td><span><Image src={edit} alt='img' /> </span><span className='ms-3'><Image src={remove} alt='img' /> </span> </td>

                    </tr>
                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td>₹832</td>
                        <td><input type='text' placeholder='&#8377;40' /><span className={styles.price}>20% less </span>  than MRP</td>
                        <td>12</td>
                        <td>Bayer AG</td>
                        <td><span className={styles.percentage}>2%</span> <span><Image src={uparrow} alt='img' /> </span>  </td>
                        <td><span><Image src={edit} alt='img' /> </span><span className='ms-3'><Image src={remove} alt='img' /> </span> </td>
                    </tr>
                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td>₹832</td>
                        <td><input type='text' placeholder='&#8377;40' /><span className={styles.price}>20% less </span> than MRP</td>
                        <td>12</td>
                        <td>Bayer AG</td>
                        <td><span className={styles.percentage}>2%</span> <span><Image src={uparrow} alt='img' /> </span>  </td>
                        <td><span><Image src={edit} alt='img' /> </span><span className='ms-3'><Image src={remove} alt='img' /> </span> </td>

                    </tr>
                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td>₹832</td>
                        <td><input type='text' placeholder='&#8377;40' /><span className={styles.price}>20% less </span>  than MRP</td>
                        <td>12</td>
                        <td>Bayer AG</td>
                        <td><span className={styles.percentage}>2%</span> <span><Image src={uparrow} alt='img' /> </span>  </td>
                        <td><span><Image src={edit} alt='img' /> </span><span className='ms-3'><Image src={remove} alt='img' /> </span> </td>
                    </tr>
                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td>₹832</td>
                        <td><input type='text' placeholder='&#8377;40' /><span className={styles.price}>20% less </span> than MRP</td>
                        <td>12</td>
                        <td>Bayer AG</td>
                        <td><span className={styles.percentage}>2%</span> <span><Image src={uparrow} alt='img' /> </span>  </td>
                        <td><span><Image src={edit} alt='img' /> </span><span className='ms-3'><Image src={remove} alt='img' /> </span> </td>

                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Total price:</td>
                        <td>₹1032</td>
                    </tr>
                    <tr >
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Cash discount:</td>
                        <td>Nil</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><b>Payable price</b></td>
                        <td><b>₹969.95</b></td>
                    </tr>
                </tbody>
            </table>

            <div className={styles.msection}>
                <div className={styles.details}>
                    <div className={styles.name}>
                        <p>1.Synthroid</p>
                        <Image src={files} alt='img' />
                    </div>
                    <div className='d-flex'>
                        <ul className={styles.list_1}>
                            <li>Brand name</li>
                            <li>Quantity</li>
                            <li>MRP Price</li>
                            <li>GST%</li>
                            <li>Your Purchase Price</li>
                            <li>Market trend (in your area)</li>
                        </ul>
                        <ul className={styles.list_2}>
                            <li>Bayer AG</li>
                            <li>100</li>
                            <li>&#8377;400</li>
                            <li>10%</li>
                            <li><input type='text' placeholder='&#8377;40' /><span className={styles.price}>20% less </span> than MRP</li>
                            <li><span className={styles.percentage}>2%</span> <span><Image src={uparrow} alt='img' /> </span>  </li>
                        </ul>
                    </div>
                    <hr />
                    <div className={styles.name}>
                        <p>2.Synthroid</p>
                        <Image src={files} alt='img' />
                    </div>
                    <div className='d-flex'>
                        <ul className={styles.list_1}>
                            <li>Brand name</li>
                            <li>Quantity</li>
                            <li>MRP Price</li>
                            <li>GST%</li>
                            <li>Your Purchase Price</li>
                            <li>Market trend (in your area)</li>
                        </ul>
                        <ul className={styles.list_2}>
                            <li>Bayer AG</li>
                            <li>100</li>
                            <li>&#8377;400</li>
                            <li>10%</li>
                            <li><input type='text' placeholder='&#8377;40' /><span className={styles.price}>20% less </span> than MRP</li>
                            <li><span className={styles.percentage}>2%</span> <span><Image src={uparrow} alt='img' /> </span>  </li>
                        </ul>
                    </div>
                    <hr />
                    <div className={styles.name}>
                        <p>3.Synthroid</p>
                        <Image src={files} alt='img' />
                    </div>
                    <div className='d-flex'>
                        <ul className={styles.list_1}>
                            <li>Brand name</li>
                            <li>Quantity</li>
                            <li>MRP Price</li>
                            <li>GST%</li>
                            <li>Your Purchase Price</li>
                            <li>Market trend (in your area)</li>
                        </ul>
                        <ul className={styles.list_2}>
                            <li>Bayer AG</li>
                            <li>100</li>
                            <li>&#8377;400</li>
                            <li>10%</li>
                            <li><input type='text' placeholder='&#8377;40' /><span className={styles.price}>20% less </span> than MRP</li>
                            <li><span className={styles.percentage}>2%</span> <span><Image src={uparrow} alt='img' /> </span>  </li>
                        </ul>
                    </div>
                    <hr/>
                    <div className={styles.name}>
                        <p>4.Synthroid</p>
                        <Image src={files} alt='img' />
                    </div>
                    <div className='d-flex'>
                        <ul className={styles.list_1}>
                            <li>Brand name</li>
                            <li>Quantity</li>
                            <li>MRP Price</li>
                            <li>GST%</li>
                            <li>Your Purchase Price</li>
                            <li>Market trend (in your area)</li>
                        </ul>
                        <ul className={styles.list_2}>
                            <li>Bayer AG</li>
                            <li>100</li>
                            <li>&#8377;400</li>
                            <li>10%</li>
                            <li><input type='text' placeholder='&#8377;40' /><span className={styles.price}>20% less </span> than MRP</li>
                            <li><span className={styles.percentage}>2%</span> <span><Image src={uparrow} alt='img' /> </span>  </li>
                        </ul>
                    </div>
                    <hr />

                </div>
            </div>

            <div className={styles.msection}>
                <div className={styles.details}>

                    <div className='d-flex border p-3'>
                        <ul className={styles.list_1}>
                            <li className='ms-5'>Total price:</li>
                            <li className='ms-5'>Cash discount:</li>
                            <li className='ms-5'>Payable price</li>
                        </ul>
                        <ul className={styles.list_2}>
                            <li>&#8377;400</li>
                            <li><input type='text' placeholder='&#8377;40' /></li>
                            <li>&#8377;400</li>
                        </ul>
                    </div>

                </div>
            </div>

            <button><Link href="./trackpayments">Pay</Link></button>

        </div>
    )
}

export default Table