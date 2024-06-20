import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import sfile from "../images/sfile.png";
import sremove from "../images/sremove.png";


const Table = () => {
  return (
    <div className={styles.container}>
             <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Medicine</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">RevisedQuantity</th>
                        <th scope="col">MRP</th>
                        <th scope="col">Purchase Price</th>
                        <th scope="col">GST%</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Shelf label</th>
                        <th scope="col">HSN </th>
                        <th scope="col">Expiry date</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
               <tbody>
                <tr>
                       <td >Synthroid</td>
                        <td>100</td>
                        <td>100</td>
                        <td>&#8377;832</td>
                        <td>-----</td>
                        <td>12</td>
                        <td>Bayer AG</td>
                        <td>01293</td>
                        <td>012934142</td>
                        <td>04-06-2029</td>
                        <td><span><Image src={sfile} alt='img' /> </span> <span className='ms-3'><Image src={sremove} alt='img' /> </span> </td>
                </tr>
                <tr>
                       <td >Synthroid</td>
                        <td>100</td>
                        <td>100</td>
                        <td>&#8377;832</td>
                        <td>-----</td>
                        <td>12</td>
                        <td>Bayer AG</td>
                        <td>01293</td>
                        <td>012934142</td>
                        <td>04-06-2029</td>
                        <td><span><Image src={sfile} alt='img' /> </span> <span className='ms-3'><Image src={sremove} alt='img' /> </span> </td>
                </tr>
                <tr>
                       <td >Synthroid</td>
                        <td>100</td>
                        <td>100</td>
                        <td>&#8377;832</td>
                        <td>-----</td>
                        <td>12</td>
                        <td>Bayer AG</td>
                        <td>01293</td>
                        <td>012934142</td>
                        <td>04-06-2029</td>
                        <td><span><Image src={sfile} alt='img' /> </span> <span className='ms-3'><Image src={sremove} alt='img' /> </span> </td>
                </tr>
                <tr>
                       <td >Synthroid</td>
                        <td>100</td>
                        <td>100</td>
                        <td>&#8377;832</td>
                        <td>-----</td>
                        <td>12</td>
                        <td>Bayer AG</td>
                        <td>01293</td>
                        <td>012934142</td>
                        <td>04-06-2029</td>
                        <td><span><Image src={sfile} alt='img' /> </span> <span className='ms-3'><Image src={sremove} alt='img' /> </span> </td>
                </tr>
                <tr>
                       <td >Synthroid</td>
                        <td>100</td>
                        <td>100</td>
                        <td>&#8377;832</td>
                        <td>-----</td>
                        <td>12</td>
                        <td>Bayer AG</td>
                        <td>01293</td>
                        <td>012934142</td>
                        <td>04-06-2029</td>
                        <td><span><Image src={sfile} alt='img' /> </span> <span className='ms-3'><Image src={sremove} alt='img' /> </span> </td>
                </tr>
                <tr>
                       <td >Synthroid</td>
                        <td>100</td>
                        <td>100</td>
                        <td>&#8377;832</td>
                        <td>-----</td>
                        <td>12</td>
                        <td>Bayer AG</td>
                        <td>01293</td>
                        <td>012934142</td>
                        <td>04-06-2029</td>
                        <td><span><Image src={sfile} alt='img' /> </span> <span className='ms-3'><Image src={sremove} alt='img' /> </span> </td>
                </tr>
                <tr>
                       <td >Synthroid</td>
                        <td>100</td>
                        <td>100</td>
                        <td>&#8377;832</td>
                        <td>-----</td>
                        <td>12</td>
                        <td>Bayer AG</td>
                        <td>01293</td>
                        <td>012934142</td>
                        <td>04-06-2029</td>
                        <td><span><Image src={sfile} alt='img' /> </span> <span className='ms-3'><Image src={sremove} alt='img' /> </span> </td>
                </tr>
                <tr>
                       <td >Synthroid</td>
                        <td>100</td>
                        <td>100</td>
                        <td>&#8377;832</td>
                        <td>-----</td>
                        <td>12</td>
                        <td>Bayer AG</td>
                        <td>01293</td>
                        <td>012934142</td>
                        <td>04-06-2029</td>
                        <td><span><Image src={sfile} alt='img' /> </span> <span className='ms-3'><Image src={sremove} alt='img' /> </span> </td>
                </tr>
                <tr>
                       <td >Synthroid</td>
                        <td>100</td>
                        <td>100</td>
                        <td>&#8377;832</td>
                        <td>-----</td>
                        <td>12</td>
                        <td>Bayer AG</td>
                        <td>01293</td>
                        <td>012934142</td>
                        <td>04-06-2029</td>
                        <td><span><Image src={sfile} alt='img' /> </span> <span className='ms-3'><Image src={sremove} alt='img' /> </span> </td>
                </tr>
               </tbody>
            </table>
    </div>
  )
}

export default Table