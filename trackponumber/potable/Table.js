import React from 'react';
import styles from "./style.module.css";
import Link from 'next/link';
import Image from 'next/image';
import up from "../images/up.png";
import down from "../images/down.png";
import sfile from "../images/sfile.png"


const Table = () => {
    return (
        <div className={styles.container}>
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col">Medicine</th>
                        <th scope="col">Distributor name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">MRP Price</th>
                        <th scope="col">GST%</th>
                        <th scope="col">Your Purchase Price</th>
                        <th scope="col">Market trend <br /> (in your area)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Synthroid</td>
                        <td>Annette Black</td>
                        <td>100</td>
                        <td>&#8377;50</td>
                        <td>10</td>
                        <td><input type='number' placeholder='&#8377;40' /><span style={{ color: "#166534", fontStyle: "italic", fontSize: "12px", marginLeft: "0.5rem" }}>20% less</span> than MRP</td>
                        <td style={{ color: "#166534" }}>2% <span><Image src={up} alt="img" /></span></td>
                    </tr>
                    <tr>
                        <td>Pepto-Bismol</td>
                        <td>Ralph Edwards</td>
                        <td>100</td>
                        <td>&#8377;50</td>
                        <td>10</td>
                        <td><input type='number' placeholder='&#8377;40' /><span style={{ color: "#166534", fontStyle: "italic", fontSize: "12px", marginLeft: "0.5rem" }}>20% less</span> than MRP</td>
                        <td style={{ color: "#FF0000" }}>2% <span><Image src={down} alt="img" /></span></td>
                    </tr>
                    <tr>
                        <td>Synthroid</td>
                        <td>Annette Black</td>
                        <td>100</td>
                        <td>&#8377;50</td>
                        <td>10</td>
                        <td><input type='number' placeholder='&#8377;40' /><span style={{ color: "#166534", fontStyle: "italic", fontSize: "12px", marginLeft: "0.5rem" }}>20% less</span> than MRP</td>
                        <td style={{ color: "#166534" }}>2% <span><Image src={up} alt="img" /></span></td>
                    </tr>
                    <tr>
                        <td>Pepto-Bismol</td>
                        <td>Ralph Edwards</td>
                        <td>100</td>
                        <td>&#8377;50</td>
                        <td>10</td>
                        <td><input type='number' placeholder='&#8377;40' /><span style={{ color: "#166534", fontStyle: "italic", fontSize: "12px", marginLeft: "0.5rem" }}>20% less</span> than MRP</td>
                        <td style={{ color: "#FF0000" }}>2% <span><Image src={down} alt="img" /></span></td>
                    </tr>
                    <tr className='table-light'>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className='ps-5'> &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Total price:</td>
                        <td>&#8377;1000</td>
                    </tr>
                    <tr className='table-light'>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className='ps-5'> &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Cash discount:</td>
                        <td>&#8377;Nil</td>
                    </tr>
                    <tr className='table-light'>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className='ps-5'> &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <b>Payable price</b></td>
                        <td><b>&#8377;969.95</b> </td>
                    </tr>
                    <tr className='table-light'>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td ></td>
                        <td><Link href="./trackpayments" > <button>Pay</button></Link></td>
                    </tr>
                </tbody>
            </table>

            <div className={styles.mtable}>

                <div className={styles.edits}>
                    <span>1.Synthroid</span>
                    <span><Image src={sfile} alt='img' /></span>
                </div>



                <div className={styles.lists}>
                    <ul className={styles.left}>
                        <li>Distributor name</li>
                        <li>Quantity</li>
                        <li>MRP Price</li>
                        <li>GST%</li>
                        <li>Your Purchase Price</li>
                        <li>Market trend (in your area)</li>

                    </ul>
                    <ul className={styles.right}>
                        <li>Savannah Nguyen</li>
                        <li>100</li>
                        <li>&#8377;400</li>
                        <li>10%</li>
                        <li><input type='number' placeholder='&#8377;40' /><span style={{ color: "#166534", fontStyle: "italic", fontSize: "12px", marginLeft: "0.5rem" }}>20% less</span>tham MRP</li>
                        <li>2%<span><Image src={up} alt="img" /></span></li>
                    </ul>
                </div>

            </div>

            <div className={styles.mtable}>

                <div className={styles.edits}>
                    <span>1.Synthroid</span>
                    <span><Image src={sfile} alt='img' /></span>
                </div>

                <div className={styles.lists}>
                    <ul className={styles.left}>
                        <li>Distributor name</li>
                        <li>Quantity</li>
                        <li>MRP Price</li>
                        <li>GST%</li>
                        <li>Your Purchase Price</li>
                        <li>Market trend (in your area)</li>

                    </ul>
                    <ul className={styles.right}>
                        <li>Savannah Nguyen</li>
                        <li>100</li>
                        <li>&#8377;400</li>
                        <li>10%</li>
                        <li><input type='number' placeholder='&#8377;40' /><span style={{ color: "#166534", fontStyle: "italic", fontSize: "12px", marginLeft: "0.5rem" }}>20% less</span>tham MRP</li>
                        <li>2%<span><Image src={down} alt="img" /></span></li>
                    </ul>
                </div>

            </div>

            <div className={styles.mtable}>

                <div className={styles.edits}>
                    <span>1.Synthroid</span>
                    <span><Image src={sfile} alt='img' /></span>
                </div>



                <div className={styles.lists}>
                    <ul className={styles.left}>
                        <li>Distributor name</li>
                        <li>Quantity</li>
                        <li>MRP Price</li>
                        <li>GST%</li>
                        <li>Your Purchase Price</li>
                        <li>Market trend (in your area)</li>

                    </ul>
                    <ul className={styles.right}>
                        <li>Savannah Nguyen</li>
                        <li>100</li>
                        <li>&#8377;400</li>
                        <li>10%</li>
                        <li><input type='number' placeholder='&#8377;40' /><span style={{ color: "#166534", fontStyle: "italic", fontSize: "12px", marginLeft: "0.5rem" }}>20% less</span>tham MRP</li>
                        <li>2%<span><Image src={up} alt="img" /></span></li>
                    </ul>
                </div>

            </div>

            <div className={styles.mbtable}>


                <div className={styles.lists}>
                    <ul className={styles.left}>
                        <li>Total price:</li>
                        <li>Cash discount:</li>
                        <li>Payable price</li>
                    </ul>
                    <ul className={styles.right}>
                        <li>&#8377;100</li>
                        <li><input type='number' placeholder='Nil' /></li>
                        <li>&#8377;969.95</li>
                    </ul>
                </div>
                <button>Pay</button>
            </div>

        </div>
    )
}

export default Table