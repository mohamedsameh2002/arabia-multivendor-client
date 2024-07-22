import { IoMdClose } from 'react-icons/io'
import { RiDeleteBin6Line } from 'react-icons/ri'

export default function SideCart({ isCartOpen, closeSideCart }) {
    return (
        <div onClick={closeSideCart} className={` ${isCartOpen ? ' opacity-100' : ' opacity-0 pointer-events-none'} fixed w-screen h-screen inset-0 transition-opacity duration-300 bg-black bg-opacity-60 z-20  `}>
            <div onClick={(e) => e.stopPropagation()} className={` ${isCartOpen ? ' left-0' : ' -left-96'} fixed bg-white flex flex-col flexStart h-screen w-96 transition-all duration-500  `}>
                <div className=' flex flexStart px-16 gap-32 w-full my-16 '>
                    <h3 className=' text-blackText font-bold text-2xl'>عربتك</h3>
                    <IoMdClose onClick={closeSideCart} className=' hover:text-Red text-blackText text-4xl cursor-pointer' />
                </div>

                <div className=' flex px-6 items-center w-full my-5 '>
                    <div className=' flex flexStart gap-1 w-11/12'>
                        <img className=' w-20  h-20' src="./5645641.png" alt="" />
                        <div className='flex flex-col gap-1'>
                            <h4 className=' font-bold text-sm  text-blackText'>ساعه اوريجنال 540</h4>
                            <p className='text-gray-500 text-xs '>لا يوجد نص عنا</p>
                        </div>
                    </div>
                    <div className='  flex flexCenter  w-1/12'>
                        <RiDeleteBin6Line className=' hover:text-Red text-blackText text-2xl cursor-pointer' />
                    </div>
                </div>

            </div>
        </div>
    )
}
