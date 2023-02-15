import React from 'react';
import { BsSearch } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { VscBell } from "react-icons/vsc";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri"
import "./home.scss"
import { useState } from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`

    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    padding: 10px 0;
    z-index: 15;
    transition: all 0.1s ease;
    &.active{
        background-color: #fff;
        box-shadow:  0 0 3px 1px rgb(231, 218, 218);
    }
    
    
    
    .mymenu{
        width: 100%;
        position: fixed;
        top: 0;
        right: -100%;
        background-color: #fff;
        height: 100vh;
        overflow-y: auto;
        transition: all 0.3s ease-in-out;
        .closeme{
            position: sticky;
            top: 0;
            right: 0;
            box-shadow: 0 0 3px 1px #ddd;
            width: 100%;
            padding: 10px;
            z-index: 10;
            svg{
                font-size: 35px;
                color: #555;
                cursor: pointer;
            }
        }
        .user-informaion{
            margin-top: 70px;
            display: flex;
            align-items: center;
            img{
                width: 50px;
                height: 50px;
                object-fit: cover;
                border-radius: 50%;
            }
            .email{
                margin-left: 15px;
                .text{
                    color: #424242;
                }
                .id{
                    color: #999;
                    font-size: 14px;
                }
            }
        }
    
        .item{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 20px;
            padding: 10px;
            .text{
                color: #424242;
            }
            .icon{
                color: #999;
            }
            &.vip{
                background-color: #cbcb6bb8;
                 border-radius: 10px;
                 .text{
                    color: #000;
                    font-weight: bold;
                    font-size: 17px;
                 }
            }
        }
        &.active{
            right: 0;
        }
    }
    .content{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-inline: 20px;

        .user-icon{
            width: 30px;
            height: 30px;
            border-radius: 50%;
            img{
                width: 100%;
                object-fit: cover;
                border-radius: 50%;
            }
        }
        .myheaderright{
            display: flex;
            align-items: center;
            div{
                margin-left: 20px;
                svg{
                    color: #424242;
                    font-weight: 200;
                    width: 22px;
                    height: 22px;
                }
                &:last-of-type svg{
                    width: 22px;
                    height: 22px;
                }
                &:first-of-type svg{
                    width: 18px;
                    height: 18px;
                }
            }
    
        }
    }





`
export default function Heading  () {

    const [scroll, setScroll] = useState(false)
     const [show,setShow] = useState(false) 
    window.addEventListener("scroll", function () {
        if (window.scrollY > 30) {
            setScroll(true)
        } else {
            setScroll(false)

        }

    })

    return (
        <HeaderWrapper className={scroll ? " active" : ""}>
            <div className="content">
                <div className="user-icon" onClick={()=> setShow(true)}>
                    <img src="image/user.jpg" alt="" />
                </div>
                <div className="myheaderright">
                    <div className="search-icon"><BsSearch /></div>
                    <div className="support-icon"><BiSupport /></div>
                    <div className="notif-icon"><VscBell /></div>
                </div>

            </div>

            <div className={show ? "mymenu active" : "mymenu"}>
                    <div  className="closeme"><RiArrowLeftSLine onClick={() => setShow(false)} /></div>
                <div className="custom-container">
                    <div className="user-informaion">
                        <img src="image/user.jpg" alt="" />
                        <div className="email">
                            <div className="text">hadyjmaly184@gmail.com</div>
                            <div className="id">UID : 06556656</div>
                        </div>
                    </div>
                    <div className=" item vip">
                        <div className="text">vip</div>
                        <div className="icon"><RiArrowRightSLine /></div>
                    </div>
                    <div className="item">
                        <div className="text">New user</div>
                        <div className="icon"><RiArrowRightSLine /></div>
                    </div>
                    <div className="item">
                        <div className="text">My Rewards</div>
                        <div className="icon"><RiArrowRightSLine /></div>
                    </div>
                    <div className="item">
                        <div className="text">Invite To Earn</div>
                        <div className="icon"><RiArrowRightSLine /></div>
                    </div>
                </div>
            </div>
        </HeaderWrapper>


    )
}

