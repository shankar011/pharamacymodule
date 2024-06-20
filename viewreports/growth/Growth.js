import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import circle from "../images/circle.png";
import file from "../images/files.svg";
const Growth = () => {
    return (
        <div className={styles.container}>
            <div className={styles.year}>
                <select>
                    <option>2022</option>
                    <option>2021</option>
                    <option>2020</option>
                </select>
            </div>
            <div className='ms-4'>
                <Image src={circle} alt='img' />
            </div>

            <div className={styles.revenue}>
                <select>
                    <option>Revenue</option>
                </select>
            </div>
            <div className={styles.numbers}>
                <div>
                    <Image src={file} alt='img' />
                    <span>
                        <span> 2022</span>
                        <p>&#8377;23.5k</p>
                    </span>
                </div>

                <div>
                    <Image width="15" height="15" src={file} alt='img' />
                    <span>
                        <span> 2021</span>
                        <p>&#8377;23.5k</p>
                    </span>
                </div>

            </div>
        </div>
    )
}

export default Growth