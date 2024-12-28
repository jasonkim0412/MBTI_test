import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MBTI } from '../types/mbti';

interface CardProps {
  question: string;
  options: Array<{
    text: string;
    mbti: MBTI;
  }>;
  onSelect: (mbti: MBTI) => void;
  currentIndex: number;
}

const getCardNumber = (num: number): string => {
  switch (num) {
    case 11:
      return 'J';
    case 12:
      return 'Q';
    case 13:
      return 'K';
    default:
      return num.toString();
  }
};

const QuestionCard: React.FC<CardProps> = ({ 
  question, options, onSelect, currentIndex
}) => {
  const [isFlipping, setIsFlipping] = useState(false);
  const cardNumber = getCardNumber(currentIndex+2);
  

  const handleSelect = (mbti: MBTI) => {
    setIsFlipping(true);
    setTimeout(() => {
      onSelect(mbti);
      setIsFlipping(false);
    }, 500);
  };

  return (
    <motion.div
      initial={{ rotateY: 0, opacity: 0 }}
      animate={{ 
        rotateY: isFlipping ? 90 : 0,
        opacity: 1,
      }}
      transition={{ duration: 0.3 }}
      className="w-[400px] h-[600px] bg-white rounded-xl shadow-2xl mx-auto relative"
    >
      <div className="relative w-full h-full min-h-[500px] p-6 flex items-center justify-center">
      {/* Card Design Elements */}
      <div className="absolute top-4 left-5 text-black-600 text-3xl">♠</div>
      <div className="absolute top-5 left-9 text-black-600 text-2xl">{cardNumber}</div>
      <div className="absolute bottom-4 right-5 text-black-600 text-3xl rotate-180">♠</div>
      <div className="absolute bottom-5 right-9 text-black-600 text-2xl rotate-180">{cardNumber}</div>

      {/* Content Container */}
      <div className="w-full max-w-lg flex flex-col items-center justify-center gap-8">
        {/* Question Section */}
        <div className="text-center w-full px-8">
          <p className="text-gray-700 text-xl leading-relaxed whitespace-pre-line break-keep">{question}</p>
        </div>

        {/* Options Section */}
        <div className="w-full space-y-3">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelect(option.mbti)}
              className="w-full h-16 px-4 bg-gray-50 hover:bg-gray-100 
                        text-gray-800 rounded-lg transition-colors duration-200
                        border border-gray-300 text-sm font-medium
                        hover:shadow-md active:transform active:scale-95
                        flex items-center justify-center"
            >
              <span className="block whitespace-pre-line break-keep text-center
                             line-clamp-2 overflow-hidden">
                {option.text}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default QuestionCard;