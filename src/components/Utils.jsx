import React from 'react'
import data from "./data/data-tolls.json"
import styled from 'styled-components'

const UtilsWrapper = styled.div`
    width: 100%;
    padding: 40px 0 10px 0;
    margin-block: 32px;

    .row{
        display: flex;
        flex-wrap: wrap;
        a{
            width: 25%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            text-decoration: none;
            
            img{
                width: 35px;
                object-fit: cover;
            }
            div{
                color: #555;
                font-size: 12px;
                font-weight: bold;
                margin-top: 10px;
                white-space: nowrap;
            }
        }   
    }


`
export default function Utils () {
    return (
        <UtilsWrapper >
            <div className="row">
                {
                    data.tools.map((item) => (
                            <a href="/" key={item.id}>
                                <img src={item.image} alt="" />
                                <div>{item.name}</div>

                            </a>
                    ))
                    
                }
                {
                    data.tools.reverse().map((item) => (
                            <a href="/" className="mt-4" key={item.id}>
                                <img src={item.image} alt="" />
                                <div>{item.name}</div>

                            </a>
                    ))
                    
                }
            </div>
        </UtilsWrapper>
    )
}

