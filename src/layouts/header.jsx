import { ChevronsLeft, Search } from 'lucide-react'
import PropTypes from 'prop-types'

const Header = ({collapsed,setCollapsed}) => {
  return (
    <div className='relative z-10 flex h-[60px] items-center justify-between bg-white px-4 shadow-md transition-colors dark:bg-slate-900 '>
      <div className="flex items-center gap-x-3">
        <button className='btn-ghost size-10' onClick={()=>setCollapsed(!collapsed)}>
          <ChevronsLeft className={collapsed&& "rotate-180"}/>
        </button>
        <div className="input">
          <Search size={20} className='text-slate-300'/>
          <input type="text" placeholder='Search...' name="search" id="search" className="w-full bg-transparent text-slate-900 outline-o placeholder:text-slate-300 dark:text-slate-50" />
        </div>
      </div>
    </div>
  )
}

export default Header

Header.propTypes = {
  collapsed: PropTypes.bool,
  setCollapsed: PropTypes.func
}