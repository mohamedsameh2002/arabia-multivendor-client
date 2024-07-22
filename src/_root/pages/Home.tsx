
import HeroSlider from '../../components/shared/HeroSlider'
import CategoriesSlider from '../../components/shared/CategoriesSlider'
import ProductsSliser from '../../components/shared/ProductsSliser'
import BrandsUlove from '../../components/shared/BrandsUlove'


export default function Home() {

  return (
    <>
      <HeroSlider></HeroSlider>
      <div className='w-full h-32 bg-gray-200 flex items-center'>
        <h4 className=' text-blackText w-full text-center'>اكتشف المنتجات الرائعة</h4>
      </div>
      <CategoriesSlider></CategoriesSlider>

      <div className='flex flexCenter flex-col'>
        <div className=' container flex flexCenter py-10 flex-col'>
          <h4 className=' text-blackText font-medium text-2xl '>مباشرة من نايكي</h4>
          <h3 className=' text-blackText font-bold text-4xl py-10'>مجموعة جديدة</h3>
          <div className='flex flexCenter w-full md:h-[700px] mb-10  '>
            <div className='flex flexCenter  h-full w-1/2   flex-wrap gap-9   '>
              <div className='w-2/5 md:h-[47.5%] gap-14   rounded-lg flex flexCenter flex-col bg-gray-100'>
                <img className='w-2/3 ' src="./5646.png" alt="" />
                <div className='flex flexAround w-full'>
                  <h3 className='font-bold  text-black '>نايك اس بي زووم</h3>
                  <span className=' px-3 py-1 text-orange-500 font-bold bg-white rounded-xl text-sm'>999$</span>
                </div>
              </div>
              <div className='w-2/5 md:h-[47%] gap-14   rounded-lg flex flexCenter flex-col bg-gray-100'>
                <img className='w-2/3 ' src="./5646.png" alt="" />
                <div className='flex flexAround w-full'>
                  <h3 className='font-bold  text-black '>نايك اس بي زووم</h3>
                  <span className=' px-3 py-1 text-orange-500 font-bold bg-white rounded-xl text-sm'>999$</span>
                </div>
              </div>
              <div className='w-2/5 md:h-[47%] gap-14   rounded-lg flex flexCenter flex-col bg-gray-100'>
                <img className='w-2/3 ' src="./5646.png" alt="" />
                <div className='flex flexAround w-full'>
                  <h3 className='font-bold  text-black '>نايك اس بي زووم</h3>
                  <span className=' px-3 py-1 text-orange-500 font-bold bg-white rounded-xl text-sm'>999$</span>
                </div>
              </div>
              <div className='w-2/5 md:h-[47%] gap-14   rounded-lg flex flexCenter flex-col bg-gray-100'>
                <img className='w-2/3 ' src="./5646.png" alt="" />
                <div className='flex flexAround w-full'>
                  <h3 className='font-bold  text-black '>نايك اس بي زووم</h3>
                  <span className=' px-3 py-1 text-orange-500 font-bold bg-white rounded-xl text-sm'>999$</span>
                </div>
              </div>
            </div>
            <div className='flex gap-36 flex-col flexCenter w-2/5 rounded-lg bg-gray-100 h-full'>
              <div className='flex flexAround gap-96 w-full'>
                <h3 className=' text-white bg-black rounded-2xl px-3 py-1'>بيع -50%</h3>
                <span className=' px-3 py-1 text-orange-500 font-bold bg-white rounded-xl text-sm'>999$</span>
              </div>
              <div className='flex flexCenter w-full flex-col'>
                <img className='w-2/3 ' src="./5646.png" alt="" />
                <div className='flex w-full gap-5 flex-col items-start px-16 justify-center'>
                  <h3 className='font-bold text-2xl text-black'>نايك اير فورس 1 شادو</h3>
                  <p className='text-gray-400 text-sm'>العلامة التجارية: نايك</p>
                </div>
              </div>
            </div>
          </div>
          <button className='button1 px-6 h-14 w-52 font-bold'>اكتشف منتجات أخرى</button>
        </div>

        <div className='container flex flex-col flexCenter'>
          <div className='w-full relative h-72 bg-[url("./carousel-3.jpg")] bg-cover'>
          </div>
        </div>


        <div className=' container py-10 flex flex-col flexCenter'>
          <h2 className=' text-blackText w-full text-center font-bold text-3xl  '>مرشحة لك</h2>
          <div className='w-full flex flexCenter py-10'>
            <div className='  flex flex-col flexCenter gap-4'>
              <img className=' w-56 h-56' src="./5645641.png" alt="" />
              <h3 className='text-blackText text-xl  text-center font-bold '>جولة واحدة</h3>
              <span className=' px-2 py-1 text-orange-500 font-bold bg-orange-400/20 rounded-xl text-sm'>999$</span>
            </div>
            <div className='  flex flex-col flexCenter gap-4'>
              <img className=' w-56 h-56' src="./5645641.png" alt="" />
              <h3 className='text-blackText text-xl  text-center font-bold '>جولة واحدة</h3>
              <span className=' px-2 py-1 text-orange-500 font-bold bg-orange-400/20 rounded-xl text-sm'>999$</span>
            </div>
            <div className='  flex flex-col flexCenter gap-4'>
              <img className=' w-56 h-56' src="./5645641.png" alt="" />
              <h3 className='text-blackText text-xl  text-center font-bold '>جولة واحدة</h3>
              <span className=' px-2 py-1 text-orange-500 font-bold bg-orange-400/20 rounded-xl text-sm'>999$</span>
            </div>
            <div className='  flex flex-col flexCenter gap-4'>
              <img className=' w-56 h-56' src="./5645641.png" alt="" />
              <h3 className='text-blackText text-xl  text-center font-bold '>جولة واحدة</h3>
              <span className=' px-2 py-1 text-orange-500 font-bold bg-orange-400/20 rounded-xl text-sm'>999$</span>
            </div>
          </div>
          <button className='button1 px-6 h-14 w-52 font-bold'>اكتشف منتجات أخرى</button>
        </div>

        <div className='w-full relative h-72 bg-[url("./panar.jpg")] bg-cover'>
          <div className='absolute inset-0 bg-black opacity-50'></div>
          <div className='absolute  inset-0 flex gap-14 flexAround'>
            <h2 className='text-white text-4xl w-2/6 leading-relaxed '>الأحذية الرياضية لا تنفد أبدًااحصل على خصم 50% على مستوى الموقع</h2>
            <button className='button1 px-6 h-14 w-52 font-bold text-white'>ابدأ التسوق</button>
          </div>
        </div>
        <div className='flex flex-col container my-8 '>
          <h3 className=' w-full text-start font-bold text-blackText text-3xl mb-6'>مقترحه لك</h3>
          <ProductsSliser></ProductsSliser>
        </div>

        <div className='w-full flex flexCenter '>
          <div className=' container flex flexCenter  flex-col py-10'>
            <h1 className=' w-full text-center font-bold text-4xl text-blackText'  >منطقة <span className='text-Red'>العروض</span></h1>
            <div className=' py-16 w-full flex-wrap gap-10 h-fit flex flexCenter'>

              <div className=' w-2/6 flex flexAround  bg-white shadow-lg rounded-xl'>
                <div className='flex flexCenter w-2/5 gap-3 pb-2 relative flex-col'>
                  <span className=' w-52 h-12  -mr-4 rounded-tr-2xl    flex flexCenter text-white text-lg rounded-bl-2xl bg-Red'>استخدم كود :  <span className=' font-bold text-xl'>dfg64xd</span> </span>
                  <h3 className='text-xl font-bold'>المنتج,تفاصيل اخر عنه زياده</h3>
                  <div className=' flex w-full flex-col gap-2'>
                    <h3 className='text-2xl text-Red font-extrabold  '>احصل علي</h3>
                    <h3 className='text-2xl text-Red font-extrabold  '>خصم 10 %</h3>
                  </div>
                </div>
                <div className='w-1/2  flex flexCenter'>
                  <img className=' w-40 ' src="./5645641.png" alt="" />
                </div>
              </div>
              <div className=' w-2/6 flex flexAround  bg-white shadow-lg rounded-xl'>
                <div className='flex flexCenter w-2/5 gap-3 pb-2 relative flex-col'>
                  <span className=' w-52 h-12  -mr-4 rounded-tr-2xl    flex flexCenter text-white text-lg rounded-bl-2xl bg-Red'>استخدم كود :  <span className=' font-bold text-xl'>dfg64xd</span> </span>
                  <h3 className='text-xl font-bold'>المنتج,تفاصيل اخر عنه زياده</h3>
                  <div className=' flex w-full flex-col gap-2'>
                    <h3 className='text-2xl text-Red font-extrabold  '>احصل علي</h3>
                    <h3 className='text-2xl text-Red font-extrabold  '>خصم 10 %</h3>
                  </div>
                </div>
                <div className='w-1/2  flex flexCenter'>
                  <img className=' w-40 ' src="./5645641.png" alt="" />
                </div>
              </div>
              <div className=' w-2/6 flex flexAround  bg-white shadow-lg rounded-xl'>
                <div className='flex flexCenter w-2/5 gap-3 pb-2 relative flex-col'>
                  <span className=' w-52 h-12  -mr-4 rounded-tr-2xl    flex flexCenter text-white text-lg rounded-bl-2xl bg-Red'>استخدم كود :  <span className=' font-bold text-xl'>dfg64xd</span> </span>
                  <h3 className='text-xl font-bold'>المنتج,تفاصيل اخر عنه زياده</h3>
                  <div className=' flex w-full flex-col gap-2'>
                    <h3 className='text-2xl text-Red font-extrabold  '>احصل علي</h3>
                    <h3 className='text-2xl text-Red font-extrabold  '>خصم 10 %</h3>
                  </div>
                </div>
                <div className='w-1/2  flex flexCenter'>
                  <img className=' w-40 ' src="./5645641.png" alt="" />
                </div>
              </div>
              <div className=' w-2/6 flex flexAround  bg-white shadow-lg rounded-xl'>
                <div className='flex flexCenter w-2/5 gap-3 pb-2 relative flex-col'>
                  <span className=' w-52 h-12  -mr-4 rounded-tr-2xl    flex flexCenter text-white text-lg rounded-bl-2xl bg-Red'>استخدم كود :  <span className=' font-bold text-xl'>dfg64xd</span> </span>
                  <h3 className='text-xl font-bold'>المنتج,تفاصيل اخر عنه زياده</h3>
                  <div className=' flex w-full flex-col gap-2'>
                    <h3 className='text-2xl text-Red font-extrabold  '>احصل علي</h3>
                    <h3 className='text-2xl text-Red font-extrabold  '>خصم 10 %</h3>
                  </div>
                </div>
                <div className='w-1/2  flex flexCenter'>
                  <img className=' w-40 ' src="./5645641.png" alt="" />
                </div>
              </div>





            </div>
          </div>
        </div>
        <BrandsUlove></BrandsUlove>
        <div className='container flex flex-col flexCenter'>
          <div className='w-full relative h-72 bg-[url("./carousel-2.png")] bg-cover'>
          </div>
        </div>
        <div className='flex flex-col container my-8 '>
          <h3 className=' w-full text-start font-bold text-blackText text-3xl mb-6'>مقترحه لك</h3>
          <ProductsSliser></ProductsSliser>
        </div>
      </div>

    </>
  )
}
