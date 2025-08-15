"use client";
import './globals.css';
import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const handleGetStarted = () => {
    router.push('/predict');
  };
  return (
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex h-screen items-center justify-center flex-col text-center"
        >
          <h1 className="text-white text-2xl md:text-3xl lg:text-5xl">Predict Your Chances of Getting Placed</h1>
          <p className="text-white mt-4 lg:text-2xl">Enter your details to find out!</p>
          <div className='flex gap-4 flex-col lg:flex-row'>
            <a href='https://github.com/Tejeswar001/Placement-Prediction-App' target='_blank'>
              <button className='mt-6 btn btn-secondary btn-outline lg:btn-lg btn-sm btn-ghost'>
                View on GitHub
                <Github className='inline-block ml-2' />
              </button>
            </a>
            <button className='mt-6 btn btn-primary btn-outline btn-sm lg:btn-lg btn-ghost' onClick={handleGetStarted}>
              Get Started 
              <motion.div
                  animate={{ x: [0, 5, 0] }} // move right 5px and back
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                ><ArrowRight className='inline-block ml-2 animate-slide' />
                </motion.div>
            </button>
          </div>
        </motion.div>
      </div>
  )
}

