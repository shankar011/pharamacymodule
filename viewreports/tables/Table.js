

import React from 'react';
import styles from "./style.module.css";

const Table = () => {
    return (
        <div className={styles.container}>
            <div className={styles.tables}>
                <div className='d-flex '>
                    <h6>Top Selling</h6>
                    <p>See all</p>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Expiry date</th>
                            <th scope="col">Remaining quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Paracetamol - Dolo 600</td>
                            <td>04-09-2023</td>
                            <td className='ps-5'>212</td>
                        </tr>
                        <tr>
                            <td>Paracetamol - Dolo 600</td>
                            <td>04-09-2023</td>
                            <td className='ps-5'>212</td>
                        </tr>
                        <tr>
                            <td>Paracetamol - Dolo 600</td>
                            <td>04-09-2023</td>
                            <td className='ps-5'>212</td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <div className={styles.tables}>
                <div className='d-flex'>
                    <h6>Expiring soon</h6>
                    <p>See all</p>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Sold quantity</th>
                            <th scope="col">Remaining quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Paracetamol - Dolo 600</td>
                            <td className='ps-5'>210</td>
                            <td className='ps-5'>212</td>
                        </tr>
                        <tr>
                            <td>Paracetamol - Dolo 600</td>
                            <td className='ps-5'>210</td>
                            <td className='ps-5'>212</td>
                        </tr>
                        <tr>
                            <td>Paracetamol - Dolo 600</td>
                            <td className='ps-5'>210</td>
                            <td className='ps-5'>212</td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Table