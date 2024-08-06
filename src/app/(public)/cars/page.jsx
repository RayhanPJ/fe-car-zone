import SearchForm from "./_components/SearchForm"
import HeaderArticle from "./_components/HeaderArticle"

import CarLists from "./_components/CarLists"

export const metadata = {
   title: "Car Collections - Carzone best car dealer website"
}

const CarsPage = () => {
  return (
   <>
   <div className="bg-secondary relative before:content-[''] before:absolute before:h-3/4 md:before:h-2/4 md:before:w-[50vw] before:rounded-t-[100px] md:before:rounded-t-[unset] before:w-screen md:before:rounded-tl-[100px] before:bg-primary/90 before:bottom-0 before:right-0">
      <div className="min-h-52 main-container relative">
         <HeaderArticle />
         <SearchForm />
      </div>
   </div>

   <CarLists />

   </>
  )
}

export default CarsPage