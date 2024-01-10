import React from 'react'
import { navigationData } from '../../data'
import { NavItemsMobile } from './NavItems'

const NavMobile = ({ onClickClose }) => {
    return (
        <div className="overflow-y-auto w-full max-w-sm min-[387px]:min-w-[384px] h-screen py-2 transition transform shadow-lg ring-1 ring-[#0180F8]/60 bg-black/10 backdrop-blur-lg divide-y-2 divide-[#0180F8]/60">
            <div className="py-6 px-5">

                <span className="absolute right-2 top-2 p-1 text-white">
                    <button onClick={onClickClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="h-7 w-7" fill='currentColor'>
                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                        </svg>
                    </button>
                </span>
            </div>
            <ul className="flex flex-col py-6 px-2 space-y-1 ">
                {navigationData?.length > 0 && navigationData?.map((e, i) => (
                    <NavItemsMobile data={e} key={i} onClickClose={onClickClose} />
                ))}
            </ul>
        </div>
    )
}

export default NavMobile