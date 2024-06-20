import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import stores from "../../../../public/images/stors.png";
import location from "../../../../public/images/storelocation.png";
import hover from "../../../../public/images/hover.png";
import file from "../../../../public/images/file.png";
import remove from "../../../../public/images/delete.png"




const Table = () => {
    return (
        <div>
            <div className={styles.container}>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">
                                <p><Image src={stores} alt='img' /> </p>
                                Store name
                            </th>
                            <th scope="col">
                                <p><Image src={location} alt='img' /> </p>

                                Store address
                            </th>
                            <th scope="col">
                                <p><Image src={hover} alt='img' /> </p>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <td>Store1</td>
                            <td>Vikhroli</td>
                            <td>
                                <span className='me-2'><Image src={file} alt='img' /> </span>
                                <span><Image src={remove} alt='img' /> </span>
                            </td>
                        </tr>
                        <tr>

                            <td>Store2</td>
                            <td>Vikhroli</td>
                            <td>
                                <span  className='me-2'><Image src={file} alt='img' /> </span>
                                <span><Image src={remove} alt='img' /> </span>
                            </td>
                        </tr>

                    </tbody>
                </table>

            </div>

        </div>
    )
}

export default Table