import { ArrowLeftIcon } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'

const CardWrapper = ({children}: React.PropsWithChildren) => {
    const navigate = useNavigate()
    const location = useLocation()
    const createNewcard = location.pathname === '/createCard/new'
  return (
    <div>
        <div className={`${createNewcard ? 'flex items-center gap-4' : ''} mt-[30px] `}>
        <button className={`${createNewcard ? 'flex-initial w-32' : ''} p-4`}  onClick={() => navigate(-1)}>
          <ArrowLeftIcon size={24} />
        </button>
        {createNewcard && <h4 className={ `${createNewcard ?'font-semibold text-[20px]   flex-initial w-64 mx-auto':''}`}>Create Card</h4>}
        </div>
        <div className="px-4 py-2">{children}</div>
    </div>
  )
}

export default CardWrapper