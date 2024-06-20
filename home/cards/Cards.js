
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from "./style.module.css";
import create from "../../../../public/images/create.svg";
import held from "../../../../public/images/held.svg";
import sales from "../../../../public/images/sales.svg";
import purchases from "../../../../public/images/purchase.svg";
import updates from "../../../../public/images/update.svg";



const Cards = () => {



    return (
        <div className={styles.cardshome}>
            <div className={styles.card}>
            <Link href="./salesorders"> <Image src={create} alt='img' /> </Link>
            <Link href="./salesorders"> Create <br/> Sales Order </Link>
            
        </div>
       
        <div className={styles.card}>
            <Link href="./salesreturn">  <Image src={sales} alt='img' /> </Link>
            <Link href="./salesreturn">Create   Sales Return</Link>
        </div>
        <div className={styles.card}>
            <Image src={purchases} alt='img' />
            <Link href="./purchaseorder">Create   Purchase Order</Link>
        </div>
        <div className={styles.card}>
            <Link  href="./cardsinventory"> <Image src={updates} alt='img' /> </Link>
            <Link href="./cardsinventory">Update   Inventory</Link>
        </div>
        <div className={styles.card}>
            <Link  href="./cardsheldorders"> <Image src={held} alt='img' />  </Link>
            <Link href="./cardsheldorders"> View   Held  Orders</Link>
        </div>

            {/* <Link href="./salesorders" className="cards">
                <Image src={create} alt="img" />
                <p>Create Sales Order</p>
            </Link> */}


        </div>

    )
}

export default Cards