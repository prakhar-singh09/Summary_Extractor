import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col '>
      <nav className='flex justify-between items-center w-full mb-10 pt-4'>
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>Tex-Sum</span>

      
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Accelerate Your Reading and Boost Productivity, Save Time and Energy
        with AI-Powered Article Summarization
      </h2>
    </header>
  );
};

export default Hero;
