import { ArrowLeftIcon } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'

const CardWrapper = ({children}: React.PropsWithChildren) => {
    const navigate = useNavigate()
    const location = useLocation()
    const createNewcard = location.pathname === '/createCard/new'
    const setupPin = location.pathname === '/createCard/setupPin'
  return (
    <div className="h-screen flex flex-col">
        <header className="flex-shrink-0">
          <div className={`${createNewcard || setupPin ? 'flex items-center gap-4' : ''} mt-[30px] `}>
          <button className={`${createNewcard || setupPin ? 'flex-initial w-32' : ''} p-4`}  onClick={() => navigate(-1)}>
            <ArrowLeftIcon size={24} />
          </button>
          {setupPin && <h4 className={ `${setupPin ?'font-semibold text-[20px]   flex-initial w-64 mx-auto':''}`}>Setup PIN</h4>}
          {createNewcard && <h4 className={ `${createNewcard ?'font-semibold text-[20px]   flex-initial w-64 mx-auto':''}`}>Create Card</h4>}
          </div>
        </header>
        <main className="flex-1 overflow-y-auto">
          <div className="px-4 py-2 h-full">{children}</div>
        </main>
    </div>
  )
}

export default CardWrapper