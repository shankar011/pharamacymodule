"use client";
import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import styles from './style.module.css';


const Dashboard = ({ children }) => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.left}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        {children}
       
      </div>
    </div>
  );
};

export default Dashboard;

