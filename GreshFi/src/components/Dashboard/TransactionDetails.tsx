import  { useState } from 'react'
import Cancel from '../../assets/Vector.svg'
import { useNavigate } from 'react-router-dom'
import { ArrowLeftIcon } from 'lucide-react'
interface TransactionDetailsProps {
  transaction: {
    title: string
    date: string
    price: string
    imaage: string
    status: string
    paid: string
    transactionNumber: string
    Reference: string
  }
  onClose: () => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  paymentData?: any[]
}

const TransactionDetails = ({ transaction, onClose, paymentData = [] }: TransactionDetailsProps) => {
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState<boolean>(false)
  
  // Filter transactions with the same title as the selected transaction
  const relatedTransactions = paymentData.filter(item => item.title === transaction.title)
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50">
      <div className="bg-gray-50 h-full rounded-t-lg w-full max-w-md relative animate-slide-up">
        <div className='absolute left-6 top-6 cursor-pointer' onClick={showDetails ? () => setShowDetails(false) : onClose}>
          {showDetails ? (
               <ArrowLeftIcon size={24} />
          ) : (
            <img src={Cancel} alt="Cancel" className='w-[11.74px] h-[11.74px]' />
          )}
        </div>

        {!showDetails ? (
          <>
            <div className="flex flex-col items-center gap-4 mt-4 w-full bg-[#33FFC2] py-6">
              <img src={transaction.imaage} alt={transaction.title} className="w-16 h-16" />
              <p className="text-gray-600">{transaction.date}</p>
              <p className="text-2xl font-semibold text-black">{transaction.price}</p>
            </div>

            <div className="mt-6 space-y-4 p-6">
              <p>Transaction Details</p>

              <div className="flex justify-between">
                <span className="text-gray-600">Status</span>
                <span className="font-medium capitalize text-black">{transaction.status}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Reciept</span>
                <span className="font-medium capitalize text-black">Share</span>
              </div>

              <div className="border-t border-dashed border-gray-300 pt-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Reference</span>
                  <span className="font-medium capitalize text-black">{transaction.Reference}</span>
                </div>
              </div>
              <div className="border-t border-dashed border-gray-300 pt-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total paid to this service</span>
                  <span className="font-medium">{transaction.paid}</span>
                </div>
                <div className="flex justify-between mt-4">
                  <span className="text-gray-600">Number of times paid</span>
                  <span className="font-medium">{transaction.transactionNumber}</span>
                </div>
              </div>
            </div>
            
            <div className='flex justify-center items-center'>
              <button onClick={() => setShowDetails(true)} className="text-[#0D2F28] font-medium">See all</button>
            </div>
             <div className='px-[20px] py-[10px]'>
          <button
            onClick={() => { navigate('/dashboard/support') }}
            className="w-full mt-6 bg-[#C8102E] text-white py-3 rounded-[24px] font-semibold"
          >
            Report Issue
          </button>
        </div>
          </>
        ) : (
          <div className="p-6 mt-12 ">
            <div className='flex  justify-between'>
              <div className='mb-4'>
            <h3 className="text-lg font-bold ">{transaction.title}</h3>
            <p>Total Spent: {transaction.price}</p>
            </div>
            <div className='rounded-full  w-auto'>

            <img src={transaction.imaage} className='w-[64px] h-[64px]' />
            </div>
              </div>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {relatedTransactions.map((item, index) => (
                <>
                 <p className="text-gray-600 text-xs">{item.date}</p>
                <div key={index} className="flex gap-4 p-3 bg-white rounded-lg">
                  <img className="h-8 w-8" src={item.imaage} alt={item.title} />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{item.title}</h4>
                    <p className="text-gray-600 text-xs">{item.date}</p>
                    
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-sm">{item.price}</p>
                    {/* <p className="text-xs text-gray-600 capitalize">{item.status}</p> */}
                  </div>
                </div>
                </>
              ))}
            </div>
          </div>
        )}

       
      </div>
    </div>
  )
}

export default TransactionDetails