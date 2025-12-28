import { useNavigate } from 'react-router-dom'
import leftIcon from '../../assets/arrow-left.svg'
import Dropdown from './Dropdown'
import { useState } from 'react'
import searchIcon from '../../assets/magnifying-glass-2.png'
import rightArrow from '../../assets/rightArrow.svg'
const TransactionDispute = () => {
  const fundingOptions = [
    {
      title: "Bank Transfer",
      description: "Link your bank account directly to your app and transfer funds instantly or within 1-3 business days.",
      steps: ["Go to: Wallet → Add Funds → Bank Transfer → Follow prompts to connect your bank."]
    },
    {
      title: "Debit/Credit Card",
      description: "Instantly add money using a debit or credit card (check for fees in your region).",
      steps: ["Go to: Wallet → Add Funds → Card Payment → Enter card details."]
    },
    {
      title: "External Wallet or Payment App",
      description: "Use services like PayPal, Apple Pay, or Google Pay (if supported).",
      steps: ["Go to: Wallet → Add Funds → Select your preferred payment app."]
    },
    {
      title: "Direct Deposit",
      description: "Set up recurring deposits (e.g., salary) via your account/routing number.",
      steps: ["Find your details under: Profile → Account Details."]
    }
  ]

  const supportCard = [
    {
      text: 'Transaction Dispute',
      icon: rightArrow
    },
    {
      text: 'How do i fund my Card',
      icon: rightArrow
    },
    {
      text: 'view my card PIN',
      icon: rightArrow
    },
    {
      text: 'Funding issues',
      icon: rightArrow
    },
    {
      text: 'Manage frozen cards',
      icon: rightArrow
    },
  ]
  const navigate = useNavigate()
  const options = [
    {
      label: 'Dollar Card',
      value: 'Dollar Card'
    },
    {
      label: 'Euro Card',
      value: 'Euro Card'
    }
  ]
  const [cardUsed, setCardUsed] = useState<string>('')
  const [showDetails, setShowDetails] = useState<boolean>(false)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const handleItemClick = (index: number) => {
    setSelectedIndex(index)
    setShowDetails(true)
  }
  return (
    <div className='h-screen bg-gradient-to-b from-[#0D2F28] to-[#33FFC2] '>
      <button onClick={showDetails ? () => setShowDetails(false) : () => navigate(-1)} className='pt-[30px] p-[10px]'>
        <img src={leftIcon} />
      </button>
      {!showDetails ? <div className='flex flex-col gap-[10px] p-[10px]'>
        <h4 className='text-[24px] text-white font-semibold'>{selectedIndex !== null ? supportCard[selectedIndex].text : 'Transaction Dispute'}</h4>
        <div className='flex flex-col gap-[10px]'>
          <p className='text-[#FFFFFF] text-[14px]'>Card Used</p>
          <Dropdown options={options} value={cardUsed} onChange={setCardUsed} />
        </div>

        <div>
          <p className='text-[#FFFFFF] text-[14px]'>Transaction to dispute</p>
          <div className="px-[14px] py-[10px] bg-white rounded-[8px] flex items-center gap-2">
            <img src={searchIcon} alt="Search" className="w-[16px] h-[16px]" />
            <input type="text" placeholder="Search for related issues" className=" w-full bg-white outline-none" />
          </div>
        </div>

        <div className='flex flex-col gap-[20px]'>
          <h3 className='text-[24px] font-semibold text-white'>Need help with another issue?</h3>
          <div className='bg-white  h-fit min-w-[340px] w-full rounded-[16px] p-[16px]'>
            <div className='flex flex-col gap-[10px] bg-white'>
              {supportCard.map((item, index) => (
                <div key={index} onClick={() => handleItemClick(index)} className='flex justify-between gap-[10px]  p-[5px]'>
                  <p className='text-[#111111] text-[14px]'>{item.text}</p>
                  <img src={item.icon} alt={item.text} className='w-[5.98px] h-[8px]' />
                </div>
              ))}

            </div>
          </div>
        </div>
      </div> : <>
        <div className='p-[10px] bg-gradient-to-b from-[#0D2F28] to-[#33FFC2]'>
          <div className='text-white'>
            {selectedIndex === 0 && (
              <div>
                <h3 className='text-[24px] font-semibold mb-4'>{supportCard[selectedIndex!].text}</h3>
                <p>Content for Transaction Dispute...</p>
              </div>
            )}
            {selectedIndex === 1 && (
              <div>
                <h3 className='text-[24px] font-semibold mb-4'>{supportCard[selectedIndex!].text}</h3>
                <div className='bg-white text-black rounded-[16px] p-[16px] min-w-[356px] w-full'>
                  <p className='text-black'>Funding your card is quick and easy! Here’s how to add money to your account:</p>

                  <h3 className='text-[14px] font-semibold '>Funding options available:</h3>
                  <div>
                    {fundingOptions.map((option, index) => (
                      <div key={index} className='mb-4'>
                        <h4 className='font-semibold text-[16px] mb-2'>{index + 1}. {option.title}</h4>
                        <p className='text-[14px] mb-2'>{option.description}</p>
                        <ul className='ml-4'>
                          {option.steps.map((step, stepIndex) => (
                            <li key={stepIndex} className='text-[14px] list-disc'>{step}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <h3 className='text-[14px] font-semibold '>Rate this article</h3>

                    <div className='flex gap-[20px] mt-[10px]'>
                      <button className='bg-[#33ffc236]  rounded-[20px] w-[200px] h-[40px]'>Helpful</button>
                      <button className='bg-[#c8102f47] text-[#C8102E] rounded-[20px] w-[200px] h-[40px]'>Not helpful</button>
                    </div>

                    <div className='flex flex-col gap-[10px] mt-[10px]'>
                      <p>Still need help?</p>
                      <button onClick={() => navigate('/chat')} className=' rounded-[20px] mx-auto w-full bg-[#0D2F28] h-[47px] text-white'>Chat with us</button>
                      </div>
                  </div>
                </div>
              </div>
            )}
            {selectedIndex === 2 && (
              <div>
                <h3 className='text-[24px] font-semibold mb-4'>View my card PIN</h3>
                <p>Content for viewing card PIN...</p>
              </div>
            )}
            {selectedIndex === 3 && (
              <div>
                <h3 className='text-[24px] font-semibold mb-4'>Funding issues</h3>
                <p>Content for Funding issues...</p>
              </div>
            )}
            {selectedIndex === 4 && (
              <div>
                <h3 className='text-[24px] font-semibold mb-4'>Manage frozen cards</h3>
                <p>Content for managing frozen cards...</p>
              </div>
            )}
          </div>
        </div>
      </>}

    </div>
  )
}

export default TransactionDispute