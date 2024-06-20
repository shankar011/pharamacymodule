
import React from 'react';
import Link from 'next/link';
import styles from "./style.module.css";
import Image from 'next/image';
import edit from "../images/edit.png";





function Table() {
    return (
        <div className={styles.container}>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Invoice no.</th>
                        <th scope="col">Medicine</th>
                        <th scope="col">Mobile number</th>
                        <th scope="col">Customer name</th>
                        <th scope="col">Action</th>
                       

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>04-05-2023</td>
                        <td><Link href="./salesinvoice">Inv001</Link> </td>
                        <td>Synthroid</td>
                        <td>9455575237</td>
                        <td>Annette Black</td>
                        <td><Image src={edit} alt='img' /> </td>
                    </tr>
                    <tr>
                        <td>04-05-2023</td>
                        <td>Inv002</td>
                        <td>Pepto-Bismol</td>
                        <td>7555713647</td>
                        <td>Ralph Edwards</td>
                        <td><Image src={edit} alt='img' /> </td>
                    </tr>      
                </tbody>
            </table>


        </div>
    )
}

export default Table