
import React from 'react';
import Image from 'next/image';
import styles from "./style.module.css";
import Link from 'next/link';
import dleft from "../images/dleft.png";
import sleft from "../images/sleft.png";
import dright from "../images/dright.png";
import sright from "../images/sright.png";
import sfile from "../images/sfile.png";
import sremove from "../images/sremove.png";






function Table() {
    return (
        <div className={styles.container}>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Distributor name</th>
                        <th scope="col">Order date</th>
                        <th scope="col">PO number</th>
                        <th scope="col">Due date</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Savannah Nguyen</td>
                        <td>19-08-2019</td>
                        <td><Link href="./trackodtable">ORD#1562792774779 - 31</Link></td>
                        <td>19-08-2019</td>
                        <td style={{ color: "#F2C94C", background: "#FAFFEE", padding: "4px 8px 4px 8px", borderRadius: "32px", margin: "1rem", fontSize: "12px", fontWeight: "600" }}>Pricing awaiting</td>
                    </tr>
                    <tr>
                        <td>Wade Warren</td>
                        <td>19-08-2019</td>
                        <td><Link href="./trackodtable">ORD#1562792776427 - 28</Link></td>
                        <td>19-08-2019</td>
                        <td style={{ color: "#176AB6", background: "#FAFFEE", padding: "4px 8px 4px 8px", borderRadius: "32px", margin: "1rem", fontSize: "12px", fontWeight: "600" }}>Delivery awaiting</td>

                    </tr>
                    <tr>
                        <td>Brooklyn Simmons</td>
                        <td>19-08-2019</td>
                        <td><Link href="./trackodtable">ORD#1562792771583 - 13</Link></td>
                        <td>19-08-2019</td>
                        <td style={{ color: "#176AB6", background: "#FAFFEE", padding: "4px 8px 4px 8px", borderRadius: "32px", margin: "1rem", fontSize: "12px", fontWeight: "600" }}>Delivery awaiting</td>
                    </tr>
                    <tr>
                        <td>Annette Black</td>
                        <td>19-08-2019</td>
                        <td><Link href="./trackodtable">ORD#1562792777582 - 01 </Link></td>
                        <td>19-08-2019</td>
                        <td style={{ color: "#D55F5A", background: "#FEF7F7", padding: "4px 4px 4px 8px", borderRadius: "32px", margin: "1rem", fontSize: "12px", fontWeight: "600" }}>Returned</td>

                    </tr>
                    <tr>
                        <td>Ralph Edwards</td>
                        <td>19-08-2019</td>
                        <td><Link href="./trackodtable">ORD#1562792778679 - 07</Link></td>
                        <td>19-08-2019</td>
                        <td style={{ color: "#D55F5A", background: "#FEF7F7", padding: "4px 4px 4px 8px", borderRadius: "32px", margin: "1rem", fontSize: "12px", fontWeight: "600" }}>Returned</td>

                    </tr>
                    <tr>
                        <td>Darlene Robertson</td>
                        <td>19-08-2019</td>
                        <td><Link href="./trackodtable">ORD#1562792773536 - 10</Link></td>
                        <td>19-08-2019</td>
                        <td style={{ color: "#166534", background: "#F0FDF4", padding: "4px 4px 4px 8px", borderRadius: "32px", margin: "1rem", fontSize: "12px", fontWeight: "600" }}>Delivered</td>

                    </tr>
                    <tr>
                        <td>Courtney Henry</td>
                        <td>19-08-2019</td>
                        <td><Link href="./trackodtable">ORD#1562792771583 - 09</Link></td>
                        <td>19-08-2019</td>
                        <td style={{ color: "#166534", background: "#F0FDF4", padding: "4px 4px 4px 8px", borderRadius: "32px", margin: "1rem", fontSize: "12px", fontWeight: "600" }}>Delivered</td>

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
                <span>1.ORD#1562792774779 - 31</span>
                <span className={styles.price}>Pricing awaiting</span>

                <div className={styles.lists}>
                    <ul className={styles.left}>
                        <li>Distributor name</li>
                        <li>Order date</li>
                        <li>Due date</li>

                    </ul>
                    <ul className={styles.right}>
                        <li>Savannah Nguyen</li>
                        <li>14/07/2022</li>
                        <li>14/07/2022</li>
                    </ul>
                </div>
                <div className={styles.edits}>
                    <Image src={sfile} alt='img' />
                    <Image src={sremove} alt='img' />
                </div>
            </div>
            <div className={styles.mtable}>
                <span>1.ORD#1562792774779 - 31</span>
                <span className={styles.price}>Pricing awaiting</span>

                <div className={styles.lists}>
                    <ul className={styles.left}>
                        <li>Distributor name</li>
                        <li>Order date</li>
                        <li>Due date</li>

                    </ul>
                    <ul className={styles.right}>
                        <li>Savannah Nguyen</li>
                        <li>14/07/2022</li>
                        <li>14/07/2022</li>
                    </ul>
                </div>
                <div className={styles.edits}>
                    <Image src={sfile} alt='img' />
                    <Image src={sremove} alt='img' />
                </div>

            </div>
        </div>
    )
}

export default Table