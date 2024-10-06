import ShowLottie from './ui/ShowLottie';

const Hero = () => {
  return (
    <main className='padding-x pt-10 grid grid-cols-1 md:grid-cols-2 place-content-center gap-5 md:gap-x-10 inter bg-[#1a1a2e] py-12' id='hero'>
      <section className='mb-12'>
        <h1 className='leading-[60px] md:leading-[100px] text-[2.5rem] md:text-[4.7rem] font-black text-center md:text-left text-purple-600'>
          Where <span className='text-yellow-100'>Learning</span> Becomes an Adventure
        </h1>
        <p className='text-gray-50 text-base mt-4 text-center md:text-left'>Learn, explore, and grow with cutting-edge educational experiences.</p>
      </section>

      <section className='flex justify-center'>
        <ShowLottie path={'/lotties/student.json'} />
      </section>
    </main>
  );
};

export default Hero;
