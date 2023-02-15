import React from 'react'
import data from "./data/data-crypto.json"
import "./home.scss"
import { useState } from 'react';
import changeCurrency from './Util';
import styled from 'styled-components';

const CryptoWrapper = styled.div`

    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
    position: relative;
    .home-crypto-list-menu{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        overflow-x: auto;
        border-bottom: solid 1px rgb(209, 209, 209);
        -ms-overflow-style: none;  /* Internet Explorer 10+ */
        scrollbar-width: none;  /* Firefox */
        &::-webkit-scrollbar { 
            display: none;  /* Safari and Chrome */
        }
        .menu-item{
            min-width: 700px;
            display: flex;
            flex-wrap: nowrap;
            .item{
                padding: 10px;
                cursor: pointer;
                font-size: 13px;
                color: #454545;
            }
            .item.active{
                border-bottom: solid 1px #000;
                font-weight: bolder;
            }
        }
    }
    .crypto-list-item{
        margin-top: 50px;
        .item{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px;
            .name{
                color: #222;
                font-size: 13px;
                font-weight: 500;
            }
            .desc{
                display: flex;
                align-items: center;
                justify-content: space-between;

                .price{
                    margin-right: 10px;
                    .least{
                        color: #333;
                        font-weight: bold;
                        font-size: 14px;
                        letter-spacing: 1.5px;
                    }
                    .most{
                        color: #888;
                        font-size: 10px;
                        text-align: end ;
                    }
                }
                .percentage{
                    width: 70px;
                    min-width: 70px;

                    background-color: rgb(0,221,120);
                    border-radius: 2px;
                    text-align: center;
                    color: #fff;
                    font-size: 14px;
                    padding: 3px 10px;
                }
                .percentage.red{
                    background-color: rgb(246,70,93);
                }
            }
        }
    
}
`
const categories = [...new Set(data.crypto.map((item) => item.cat))]
const CryptoList = () => {
    const defultItems = data.crypto.filter((item) => item.cat === "Perpetual Futures")
    const [items, setItems] = useState(defultItems)
    const [active, setActive] = useState("Perpetual Futures")
   
    const filterProduct = (categori) => {
        console.log(categori)
        setActive(categori)

    
        const newItem = data.crypto.filter((item) => item.cat === categori)
        setItems(newItem)
    }

    return (
        <CryptoWrapper >
            <div className="home-crypto-list-menu">
                <div className="menu-item">
                    {
                        categories.map((item, index) => (
                            <div onClick={() => filterProduct(item)} key={index} className={item ===  active ? "item active" : "item"}>{item}</div>
                        ))
                    }
                </div>

            </div>

            <div className="crypto-list-item">
                {
                    items.map((item) => 
                    
                    (
                        <div className="item" key={item.id}>
                            <div className="name">{item.name}</div>
                            <div className="desc">
                                <div className="price">
                                    <div className="least">{changeCurrency(item.least)}</div>
                                    <div className="most">${changeCurrency(item.most)}</div>
                                </div>
                                <div className={item.status.includes("-") ? "percentage red" : "percentage"}>{item.status}</div>
                            </div>

                        </div>
        
                    ) )
                }
            </div>
        </CryptoWrapper>
    )
}

export default CryptoList