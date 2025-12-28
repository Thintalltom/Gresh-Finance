// import React from 'react'
// import type { RootState } from "@reduxjs/toolkit/query"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Card1 from '../../assets/card1.png'
import Card2 from '../../assets/card2.png'
import Card3 from '../../assets/card3.png'
const Wallet = () => {
  const navigate = useNavigate()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cardPresent = useSelector((state: any) => state.card?.cardPresent)
  const cardDetails = [
    {
      cardImage: Card1,
      cardType: "USD Virtual Card",
      cardNumber: "**** **** **** 1234",
    },
       {
      cardImage: Card2,
      cardType: "USD Virtual Card",
      cardNumber: "**** **** **** 1234",
    },
       {
      cardImage: Card3,
      cardType: "USD Virtual Card",
      cardNumber: "**** **** **** 1234",
    },
  ]
  return (
    <>
    {cardPresent ? (  <div className="flex justify-center items-center flex-col h-full w-full">
     <div>
      <p>Icon</p>
     </div>
    <p className="text-[#EDEEEF] text-[14px] text-center w-full max-w-[326px]">You currently do not have any active card. Every time you <span onClick={() => navigate('/')} className="font-bold  underline">create a card,</span> you will find it here. </p>

    </div>) : ( <div className=" w-full bg-white max-w-[358px] rounded-[16px] p-[16px] flex flex-col gap-[16px]">
      {cardDetails.map((card, index) => (
        <div key={index} className="flex justify-between items-center">
          <div className="flex gap-[16px]">
            <img src={card.cardImage} alt="card" className="max-w-[41.5px]  w-full max-h-[26px] h-full" />
            <div className="flex flex-col gap-[8px]">
              <p className="text-[#0D2F28] text-[14px] font-semibold">{card.cardType}</p>
              <p className="text-[#636363] text-[14px]">{card.cardNumber}</p>
            </div>
          </div>
       
        </div>
      ))}
      </div>
  
    )}
    </>
  )
}

export default Wallet