import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import edit from "../images/edit.png";
import remove from "../images/remove.png";

const Inventory = () => {
  return (
    <div className={styles.container}>
        <p>Your inventory</p>

        <table>
                <thead>
                    <tr>
                        <th scope="col">Medicine</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">MRP</th>
                        <th scope="col">Shelf label</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Batch no.</th>
                        <th scope="col">Lorry no.</th>
                        <th scope="col">Expiry date</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td>₹832</td>
                        <td>BS-51</td>
                        <td>100</td>
                        <td>012934142</td>
                        <td>012934142</td>
                        <td>04-06-2029</td>
                        <td><span><Image src={edit} alt='img' /> </span><span className='ms-3'><Image src={remove} alt='img' /> </span> </td>
                    </tr>
                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td>₹832</td>
                        <td>BS-51</td>
                        <td>100</td>
                        <td>012934142</td>
                        <td>012934142</td>
                        <td>04-06-2029</td>
                        <td><span><Image src={edit} alt='img' /> </span><span className='ms-3'><Image src={remove} alt='img' /> </span> </td>
                    </tr>   
                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td>₹832</td>
                        <td>BS-51</td>
                        <td>100</td>
                        <td>012934142</td>
                        <td>012934142</td>
                        <td>04-06-2029</td>
                        <td><span><Image src={edit} alt='img' /> </span><span className='ms-3'><Image src={remove} alt='img' /> </span> </td>
                    </tr>  
                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td>₹832</td>
                        <td>BS-51</td>
                        <td>100</td>
                        <td>012934142</td>
                        <td>012934142</td>
                        <td>04-06-2029</td>
                        <td><span><Image src={edit} alt='img' /> </span><span className='ms-3'><Image src={remove} alt='img' /> </span> </td>
                    </tr>              
                </tbody>
            </table>


    </div>
  )
}

export default Inventory