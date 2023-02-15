import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div`
  
  background-color: #c6d5f3;
  margin: 40px 0;
  border-radius: 10px;
  box-shadow: 0 0 30px 1px #e4d4d4;
  padding: 15px;
  .desc{
      width: 100%;
      .title{
          color: #222;
          font-size: 14px;
      }
      p{
          font-size: 12px;
          color: #444;
          margin: 10px 0;
      }
      .link{
          margin: 52px 10px 0 0;
          display: inline-block;
          background-color: #2e2ef5;
          color:  #fff;
          padding:4px 14px;
          font-size: 14px;
          border-radius: 5px;
          text-decoration: none;
      }
  }

`
const Footer = () => {
  return (

    <FooterWrapper>
        <div className="desc">
                 <div className="title">
                  Copy elite trader, profit easily
                 <p>Copy elite trader, profit automaticly</p>
                  </div>
                 <a className='link' href="#">Try It Now</a>
        </div>
    </FooterWrapper>

  )
}

export default Footer