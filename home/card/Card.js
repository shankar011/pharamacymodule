import React from 'react';
import Image from 'next/image';
import styles from './style.module.css';
import Link from 'next/link';
import create from '../../../../public/images/create.svg';
import held from "../../../../public/images/held.svg";
import sales from "../../../../public/images/sales.svg";
import purchases from "../../../../public/images/purchase.svg";
import updates from "../../../../public/images/update.svg";

const Card = () => {

    const cardStyle = {
        width: '11rem',
        paddingTop: '1rem',
        marginBottom : "1rem",
        borderRadius: '26px',
        background: '#FFF',
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    };

    return (
        <div className={styles.container}>
            <div className="card" style={cardStyle}>
                <Link href="./salesorders"> <Image src={create} className="card-img-top" alt="..." /></Link>
                <div className="card-body">
                    <Link href="./salesorders">   <p className="card-text text-center">Create <br /> Sales Order</p></Link>
                </div>
            </div>

            <div className="card" style={cardStyle}>
                <Link href="./salesreturn"> <Image src={sales} className="card-img-top" alt="..." /> </Link>
                <div className="card-body">
                    <Link href="./salesreturn"><p className="card-text text-center">Create <br />  Sales Return</p> </Link>
                </div>
            </div>

            <div className="card" style={cardStyle}>
                <Link href="./purchaseorder"><Image src={purchases} className="card-img-top" alt="..." /></Link>
                <div className="card-body">
                    <Link href="./purchaseorder">   <p className="card-text text-center">Create <br /> Purchase Order</p></Link>
                </div>
            </div>

            <div className="card" style={cardStyle}>
                <Link href="./cardsinventory"> <Image src={updates} className="card-img-top" alt="..." /></Link>
                <div className="card-body">
                    <Link href="./cardsinventory"> <p className="card-text text-center">Update <br /> Inventory</p></Link>
                </div>
            </div>

            <div className="card" style={cardStyle}>
                <Link href="./cardsheldorders"> <Image src={held} className="card-img-top" alt="..." /></Link>
                <div className="card-body">
                    <Link href="./cardsheldorders">  <p className="card-text text-center">View <br /> Held Orders</p></Link>
                </div>
            </div>

        </div>
    );
};

export default Card;
