import Hero from "./_components/Hero";
import OurServices from "./_components/OurServices";
import WhyUs from "./_components/WhyUs";
import Testimony from "./_components/Testimony";
import Banner from "./_components/Banner";
import Question from "./_components/Question";

const HomePage = () => {
  return (
    <>
      <div className="bg-secondary relative before:content-[''] before:absolute before:h-3/4 md:before:h-2/4 md:before:w-[50vw] before:rounded-t-[100px] md:before:rounded-t-[unset] before:w-screen md:before:rounded-tl-[100px] before:bg-primary/90 before:bottom-0 before:right-0">
        <div className="min-h-52 main-container relative">
          <Hero />
        </div>
      </div>
      <div className="main-container flex flex-col gap-y-10 mt-10">
        <OurServices />
        <WhyUs />
        <Testimony />
        <Banner />
        <Question />
      </div>
    </>
  );
};

export default HomePage;
