import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import first from "../../../../public/images/1.png";
import second from "../../../../public/images/2.png";
import third from "../../../../public/images/3.png";


const Table = () => {
    return (
        <div className={styles.container}>

        <div className={styles.tableparent}>
            <div className={styles.top}>
                <p className={styles.top_1}>Top 3 Distributors</p>
                <p className={styles.top_2}>Sell all</p>
            </div>
            <hr />
            <table className={styles.tablemain}>
                <thead >
                    <tr className={styles.head}>
                        <th> Name</th>
                        <th>Medicines Purchased</th>
                        <th>Delivery Awaiting</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='ps-4'><span><Image src={first} alt='img' /> </span> John Doe</td>
                        <td className={styles.mid}>120</td>
                        <td className='ps-5'>832</td>
                    </tr>

                    <tr>
                        <td className='ps-4'><span><Image src={second} alt='img' /> </span> John Doe</td>
                        <td className={styles.mid}>200</td>
                        <td className='ps-5'>2341</td>
                    </tr>

                    <tr >
                        <td className='ps-4'><span><Image src={third} alt='img' /> </span> John Doe</td>
                        <td className={styles.mid}>200</td>
                        <td className='ps-5'>2341</td>
                    </tr>
                </tbody>
            </table>
        </div>

           <div className={styles.tableparent}>
            <div className={styles.top}>
                <p className={styles.top_1}>Top 3 Employees</p>
                <p className={styles.top_2}>Sell all</p>
            </div>
            <hr />
            <table className={styles.tablemain}>
                <thead >
                    <tr className={styles.head}>
                        <th> Name</th>
                        <th>No. of orders</th>
                        <th style={{paddingLeft:"80px"}}>Order amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td className='ps-4'><span><Image src={first} alt='img' /> </span> John Doe</td>
                        <td className='ps-5'>120</td>
                        <td style={{paddingLeft:"100px"}}> &#8377;832</td>
                    </tr>

                    <tr>
                        <td className='ps-4'><span><Image src={second} alt='img' /> </span> John Doe</td>
                        <td className='ps-5'>200</td>
                        <td style={{paddingLeft:"100px"}}> &#8377;2341</td>
                    </tr>

                    <tr >
                        <td className='ps-4'><span><Image src={third} alt='img' /> </span> John Doe</td>
                        <td className='ps-5'>200</td>
                        <td style={{paddingLeft:"100px"}}> &#8377;2341</td>
                    </tr>
                </tbody>
            </table>
          </div>  


        </div>



    )
}

export default Table