
import VISA from '../../assets/visa.png'

interface CardDisplayProps {
  brandName?: string
  cardholderName?: string
  cardLogo?: string
}

const CardDisplay = ({ brandName, cardholderName, cardLogo }: CardDisplayProps) => {
  return (
    <div className='flex justify-center items-center h-fit px-6'>
      <div className='min-w-[358px] rounded-[16px] p-[16px] min-h-[240px] bg-gradient-to-l flex flex-col justify-between from-[#9C56FF] to-[#0E0D2F] mt-[40px]'>
        <p className="font-extrabold text-[32px] text-white">{brandName || 'Gresh'}</p>

        <div className='flex justify-between'>
          <p className="text-white font-semibold text-[14px]">{cardholderName || 'CARDHOLDER NAME'}</p>

          <img src={cardLogo || VISA} alt='Card Logo' className='w-[74px] h-[24px]' />
        </div>
      </div>
    </div>
  )
}

export default CardDisplay