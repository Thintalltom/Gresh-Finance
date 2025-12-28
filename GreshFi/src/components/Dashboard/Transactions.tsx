import { useState } from 'react'
import TransactionDetails from './TransactionDetails'
import Dropdown from '../UI/Dropdown'
import Cancel from '../../assets/Vector.svg'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../redux/store'
import { setTransactionFilter } from '../../redux/slice/CardSlice'
import ApplePay from '../../assets/Applepay.png'
import Adobe from '../../assets/Adobe.png'
import Twitter from '../../assets/twitter.png'
const Transactions = () => {
  const dispatch = useDispatch()
  const [selectedCard, setSelectedCard] = useState('')
  const [selectedTransaction, setSelectedTransaction] = useState<any>(null)
  const transactionFilter = useSelector((state: RootState) => state.Card?.transactionFilter)
  
  const handleTransactionClick = (payment: any) => {
    setSelectedTransaction(payment)
  }

  const closeTransactionDetails = () => {
    setSelectedTransaction(null)
  }
  const cardOptions = [
    { label: 'All Cards', value: 'all' },
    { label: 'Visa Card', value: 'visa' },
    { label: 'Master Card', value: 'master' },
  ]

  const paymentData = [
    {
      title: 'Apple',
      date: '20 January, 13:34',
      price: '- $1,200.00',
      imaage: ApplePay,
      status: 'completed',
      paid: '$79.90',
      transactionNumber: "1",
      Reference:"apple.com"
    },
    {
      title: 'Adobe Premium',
      date: '20 January, 13:34',
      price: '- $1,200.00',
      imaage: Adobe,
      status: 'completed',
      paid: '$79.90',
       transactionNumber: "2",
      Reference:"apple.com"
    }, {
      title: 'Twitter Premium',
      date: '20 January, 13:34',
      price: '- $1,200.00',
      imaage: Twitter,
      status: 'completed',
      paid: '$79.90',
       transactionNumber: "3",
      Reference:"apple.com"
    },
    {
      title: 'Apple',
      date: '20 January, 13:34',
      price: '- $1,200.00',
      imaage: ApplePay,
      status: 'completed',
      paid: '$79.90',
       transactionNumber: "4",
      Reference:"apple.com"
    },
    {
      title: 'Adobe Premium',
      date: '20 January, 13:34',
      price: '- $1,200.00',
      imaage: Adobe,
      status: 'completed',
      paid: '$79.90',
       transactionNumber: "5",
      Reference:"apple.com"
    }, {
      title: 'Twitter Premium',
      date: '20 January, 13:34',
      price: '- $1,200.00',
      imaage: Twitter,
      status: 'completed',
      paid: '$79.90',
       transactionNumber: "6",
      Reference:"apple.com"
    },
    {
      title: 'Apple',
      date: '20 January, 13:34',
      price: '- $1,200.00',
      imaage: ApplePay,
      status: 'completed',
      paid: '$79.90',
       transactionNumber: "7",
      Reference:"apple.com"
    },
    {
      title: 'Adobe Premium',
      date: '20 January, 13:34',
      price: '- $1,200.00',
      imaage: Adobe,
      status: 'completed',
      paid: '$79.90',
       transactionNumber: "8",
      Reference:"apple.com"
    }, {
      title: 'Twitter Premium',
      date: '20 January, 13:34',
      price: '- $1,200.00',
      imaage: Twitter,
      status: 'completed',
      paid: '$79.90',
       transactionNumber: "9",
      Reference:"apple.com"
    },
  ]


  return (
    <div className='flex flex-col gap-[20px]'>

      <div className='rounded-[16px] bg-white h-[225px] flex flex-col'>
        <div className='flex-1 overflow-auto p-[16px] pb-0'>
          {paymentData.map((payment, index) => (
            <div key={index} className='flex gap-[20px] mb-3 cursor-pointer hover:bg-gray-50 p-2 rounded' onClick={() => handleTransactionClick(payment)}>
              <img className='h-[24px] w-[24px] flex-none ' src={payment.imaage} alt={payment.title} />
              <div className='flex flex-col gap-[10px] flex-initial w-64 '>
                <h4 className='font-medium text-[14px]'>{payment.title}</h4>
                <p className='text-[#636363] text-[12px] '>{payment.date}</p>
              </div>
              <h4 className='text-[14px] text-[#000000] flex-initial w-50 '>{payment.price}</h4>
            </div>
          ))}
        </div>
        <div className='flex-shrink-0 p-[16px] pt-2'>
          <button className="text-[#0D2F28] font-medium flex mx-auto">See all</button>
        </div>
      </div>

      <div className='rounded-[16px] bg-white h-[225px] flex flex-col'>
        <div className='flex-1 overflow-auto p-[16px] pb-0'>
          {paymentData.map((payment, index) => (
            <div key={index} className='flex gap-[20px] mb-3'>
              <img className='h-[24px] w-[24px] flex-none ' src={payment.imaage} alt={payment.title} />
              <div className='flex flex-col gap-[10px] flex-initial w-64 '>
                <h4 className='font-medium text-[14px]'>{payment.title}</h4>
                <p className='text-[#636363] text-[12px] '>{payment.date}</p>
              </div>
              <h4 className='text-[14px] text-[#000000] flex-initial w-50 '>{payment.price}</h4>
            </div>
          ))}
        </div>
        <div className='flex-shrink-0 p-[16px] pt-2'>
          <button className="text-[#0D2F28] font-medium flex mx-auto">See all</button>
        </div>
      </div>

      <div className='rounded-[16px] bg-white h-[225px] flex flex-col'>
        <div className='flex-1 overflow-auto p-[16px] pb-0'>
          {paymentData.map((payment, index) => (
            <div key={index} className='flex gap-[20px] mb-3'>
              <img className='h-[24px] w-[24px] flex-none ' src={payment.imaage} alt={payment.title} />
              <div className='flex flex-col gap-[10px] flex-initial w-64 '>
                <h4 className='font-medium text-[14px]'>{payment.title}</h4>
                <p className='text-[#636363] text-[12px] '>{payment.date}</p>
              </div>
              <h4 className='text-[14px] text-[#000000] flex-initial w-50 '>{payment.price}</h4>
            </div>
          ))}
        </div>
        <div className='flex-shrink-0 p-[16px] pt-2'>
          <button className="text-[#0D2F28] font-medium flex mx-auto">See all</button>
        </div>
      </div>
      {selectedTransaction && (
        <TransactionDetails 
          transaction={selectedTransaction} 
          onClose={closeTransactionDetails}
          paymentData={paymentData}
        />
      )}
      {transactionFilter && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50">
          <div className="bg-white p-6 rounded-t-lg w-full relative">
            <div className='absolute right-6 top-6 cursor-pointer' onClick={() => dispatch(setTransactionFilter(false))}>
              <img src={Cancel} alt="Cancel" className='w-[11.74px] h-[11.74px]' />
            </div>
            <h3 className='text-center text-[18px] font-bold mb-6'>Filter</h3>
            <div className="mb-4">
              <h2 className="text-[14px] mb-2">Card</h2>
              <Dropdown
                options={cardOptions}
                placeholder="Select a card"
                value={selectedCard}
                onChange={setSelectedCard}
              />
            </div>
            <div className="mb-4">
              <h2 className="text-[14px] mb-2">Amount</h2>
              <input
                type='number'
                placeholder="Enter amount"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <h2 className="text-[14px] mb-2">Date</h2>
              <div className="flex gap-2">
                <input
                  type='date'
                  placeholder="From"
                  className="w-1/2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <input
                  type='date'
                  placeholder="To"
                  className="w-1/2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div className="mb-4">
              <h2 className="text-[14px] mb-2">Platform</h2>
              <Dropdown
                options={cardOptions}
                placeholder="Select biller platform"
                value={selectedCard}
                onChange={setSelectedCard}
              />
            </div>
            <div className="mb-4 ">
              <button
                // onClick={handleSave}
                className="mt-auto bg-[#33FFC2] px-6 py-3 w-full text-black rounded-[24px] font-semibold"
              >
                Apply filter
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Transactions
