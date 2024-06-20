
import React from 'react';
import styles from "./style.module.css";
import NavBar from './topnav/NavBar';
import Table from './deliverytable/Table';

const page = () => {
    return (
        <div className={styles.container}>
                <NavBar />
            <hr />
            <div className={styles.return}>
                <span>View delivery orders</span>
            </div>

            <Table />
           
        </div>
    )
}

export default page