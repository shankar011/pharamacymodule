import React from 'react';
import styles from "./style.module.css";
import NavBar from './topnav/NavBar';
import Table from "./purchasetable/Table";
import Inputs from "./inputs/Inputs";
const page = () => {
  return (
    <div className={styles.container}>
    <NavBar />
    <hr/>
    <div className={styles.return}>
        <span>Track purchase order</span>
    </div>
    <Inputs />
    <Table />
    
   
</div>
  )
}

export default page;