import ShowLottie from './ui/ShowLottie';
import { heroHeading } from '../lib/hero';
import { heroSubHeading } from '../lib/hero';

const Hero = () => {
  const textParts = heroHeading[0].text.split(/(Learning)/); // Split the word "Learning"
  return (
    <main
      className='padding-x pt-10 grid grid-cols-1 md:grid-cols-2 place-content-center gap-5 md:gap-x-10 inter bg-[#1a1a2e]'
      id='hero'
    >
      <section className='mb-12'>
        <h1 className='leading-[60px] md:leading-[100px] text-[2.5rem] md:text-[4.7rem] font-black text-center md:text-left text-purple-600'>
          {textParts[0]} <span className='text-yellow-100'>{textParts[1]}</span> {textParts[2]}
        </h1>
        <p className='text-gray-50 text-base mt-4 text-center md:text-left'>
          {heroSubHeading[0].subText}
        </p>
      </section>

      <section className='flex justify-center'>
        <ShowLottie path={'/lotties/student.json'} />
      </section>
    </main>
  );
};

export default Hero;

