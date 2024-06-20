"use client"
import React from 'react';
import styles from "./style.module.css";
import NavBar from './topnav/NavBar'
import Cards from './cards/Cards';
import Table from './tables/Table';
import MyResponsivePie from './piechart/pieChart';
import Image from 'next/image';
import revenue from "./images/revenue.png"
import Statistics from './statistics/Statistics';
import IncomeChart from './income/IncomeChart';
import Growth from './growth/Growth';
import stastics from "./images/stastics.png"

const page = () => {

  const data =
    [
      {
        "id": "stylus",
        "label": "stylus",
        "value": 288,
        "color": "hsl(163, 70%, 50%)"
      },
      {
        "id": "rust",
        "label": "rust",
        "value": 195,
        "color": "hsl(335, 70%, 50%)"
      },
      {
        "id": "erlang",
        "label": "erlang",
        "value": 94,
        "color": "hsl(328, 70%, 50%)"
      },
      {
        "id": "python",
        "label": "python",
        "value": 147,
        "color": "hsl(339, 70%, 50%)"
      },
      {
        "id": "go",
        "label": "go",
        "value": 140,
        "color": "hsl(288, 70%, 50%)"
      }
    ]

  return (
    <div className={styles.container}>
      <NavBar />
      <hr />

      <div className={styles.mreoprts}>
        <p><Image src={stastics} alt='img' /> Statistics</p>
        <select>
          <option>Select Store</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>

      </div>

      <div className={styles.reoprts}>
        <p>View reports</p>

        <select>
          <option>Select Store</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
        <div className='d-flex'>
          <button>Today</button>
          <button>This week</button>
          <button>This month</button>
          <button>Last 6 months</button>
          <button style={{ backgroundColor: "#EDEDFF", color: " #7F82FF" }}>This year</button>
        </div>
      </div>
      <div className={styles.revenue}>
        <Image src={revenue} alt='img' />
      </div>

      <div className='d-flex flex-wrap justify-content-between ms-1 me-2 mt-5'>
        <Statistics />
        <IncomeChart />
        <Growth />
      </div>

      <Cards />
      <Table />
      <MyResponsivePie data={data} />

    </div>
  )
}

export default page