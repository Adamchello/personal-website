import { motion } from 'framer-motion';

// Text animation was based on this solution: https://codesandbox.io/s/z7udk
const placeholderText = [
  { type: 'heading2', text: 'Hey!' },
  {
    type: 'heading1',
    text: 'My name is Adam.',
  },
  {
    type: 'paragraph',
    text: "I'm frontend developer and programming mentor from Poland.",
  },
];

const container = {
  visible: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const characterVariants = {
  hidden: {
    y: '200%',
    color: '#fff',
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  visible: {
    y: 0,
    color: '#fff',
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.45 },
  },
};

const getWords = (text: string) => {
  const splitWords = text.split(' ');

  const words: string[][] = [];

  for (const item of splitWords) {
    words.push(item.split(''));
  }

  words.map((word) => {
    return word.push('\u00A0');
  });

  return words;
};

const AnimatedCharacters = ({ text }: { text: string }) => {
  const words = getWords(text);

  return (
    <>
      {words.map((_, index) => {
        return (
          <span key={index}>
            {words[index].flat().map((element, index) => {
              return (
                <span className='inline-block overflow-hidden' key={index}>
                  <motion.span
                    className='inline-block'
                    variants={characterVariants}
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </span>
        );
      })}
    </>
  );
};

export default function Home() {
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center'>
      <motion.div initial='hidden' animate='visible' variants={container}>
        <div className='mx-6 lg:mx-0'>
          {placeholderText.map((item) => {
            if (item.type === 'paragraph')
              return (
                <p key={item.text} className='mt-2 sm:text-xl lg:text-3xl'>
                  <AnimatedCharacters text={item.text} />
                </p>
              );
            if (item.type === 'heading1')
              return (
                <h1 key={item.text} className='text-2xl lg:text-5xl'>
                  <AnimatedCharacters text={item.text} />
                </h1>
              );
            if (item.type === 'heading2')
              return (
                <h2
                  key={item.text}
                  className='mb-2 sm:text-xl lg:mb-2 lg:text-3xl'
                >
                  <AnimatedCharacters text={item.text} />
                </h2>
              );

            return null;
          })}
        </div>
      </motion.div>
      <motion.div
        className='mx-6 mt-20 text-base lg:mx-0 lg:text-xl'
        initial={{ opacity: 0, y: '100%' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        Interested about my skills and experience? Check out my{' '}
        <a
          href='https://github.com/Adamchello'
          target='_blank'
          rel='noreferrer'
          className='underline transition-colors hover:text-gray-400'
        >
          Github
        </a>{' '}
        or{' '}
        <a
          href='https://www.linkedin.com/in/adam-gornas/'
          target='_blank'
          rel='noreferrer'
          className='underline transition-colors hover:text-gray-400'
        >
          LinkedIn
        </a>
      </motion.div>
    </div>
  );
}
