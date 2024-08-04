import { Button } from "@/components/ui/button";
import Hero from "./_components/Hero";
import OurServices from "./_components/OurServices";
import WhyUs from "./_components/WhyUs";
import Testimony from "./_components/Testimony";
import Banner from "./_components/Banner";
import Question from "./_components/Question";

const HomePage = () => {
  return (
    <section className="flex flex-col gap-12 pl-5 mx-auto 2xl:mx-48">
      {/* <div className='main-container flex flex-wrap gap-2'>
         <Button variant="default">
           default
         </Button>
         <Button variant="outline">
           outline
         </Button>
         <Button variant="secondary">
           secondary
         </Button>
         <Button variant="ghost">
           ghost
         </Button>
         <button 
           className='btn btn-success'
           type="button">
           success class
         </button>
         <Button variant="success">
           success
         </Button>
         <button 
           className='btn btn-destructive'
           type="button">
           destructive class
         </button>
         <Button variant="destructive">
           destructive
         </Button>
     </div>
     <h1>Home page</h1> */}
      <Hero />
      <OurServices />
      <WhyUs />
      <Testimony />
      <Banner />
      <Question />
    </section>
  );
};

export default HomePage;
