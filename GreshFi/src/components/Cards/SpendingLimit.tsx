// import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setSpendingLimit } from '../../redux/slice/LimitSlice'
import Cancel from '../../assets/Vector.svg'
const SpendingLimit = ({ onClose }: { onClose: () => void }) => {
  const dispatch = useDispatch()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const spendingLimit = useSelector((state: any) => state?.Limit.spendingLimit)
  const handleSave = () => {
    onClose(); // Close the spending limit screen
  }

  return (
    <div className="flex flex-col  gap-6 p-6 h-[80vh]">
      <div  className='absolute right-0 p-[10px] mb-[30px] cursor-pointer' onClick={onClose}>
       <img src={Cancel} alt="Cancel" className='w-[11.74px] h-[11.74px]' />
      </div>
      <div className='mt-[50px]'>
        <h3 className="font-semibold text-[20px] mb-2">Set Spending Limit</h3>
        <p className="text-[14px] text-[#636363]">Stay in charge by setting a limit to control the spending 
on your card each month.</p>
      </div>

      <div className="flex flex-col gap-4 justify-center items-center  h-[80vh] w-full">
        {/* <label className="font-medium text-[16px]">Daily Limit Amount</label> */}
        <input
          type="string"
          value={spendingLimit}
          onChange={(e) => dispatch(setSpendingLimit(e.target.value))}
          placeholder="$0"
          className="border-transparent border-gray-300 rounded-lg p-3 text-lg text-center focus:border-blue-500 focus:outline-none min-h-[300px] max-h-[350px] font-bold text-[48px]"
        />
      </div>

      <button
        onClick={handleSave}
        className="mt-auto bg-[#33FFC2] px-6 py-3 text-black rounded-[24px] font-semibold"
      >
        Save Limit
      </button>
    </div>
  )
}

export default SpendingLimit