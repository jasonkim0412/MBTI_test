import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MBTIType, Result } from '../types/mbti';


interface CardProps {
  mbti: MBTIType;
  result: Result;
}

const ResultCard: React.FC<CardProps> = ({ 
  mbti, result
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  
  return (
    <motion.div
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="relative w-[400px] h-[600px] [transform-style:preserve-3d]"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* 카드 앞면 */}
      <div 
        className="absolute w-full h-full bg-white rounded-xl shadow-2xl cursor-pointer
                   [backface-visibility:hidden] p-8"
        style={{ transform: 'rotateY(0deg)' }}
      >
        <div className="absolute top-4 left-5 text-black-600 text-3xl">♠</div>
        <div className="absolute top-5 left-9 text-black-600 text-2xl">A</div>
        <div className="absolute bottom-4 right-5 text-black-600 text-3xl rotate-180">♠</div>
        <div className="absolute bottom-5 right-9 text-black-600 text-2xl rotate-180">A</div>
        
        
        <div className="flex flex-col items-center justify-center h-full">
        <h2 className="text-4xl font-cafe24 text-gray-800 mb-2">{result.en_title}</h2>
          <img 
            src={`/images/${mbti}.jpeg`}
            alt={`${mbti} 직업 카드 이미지`} 
            className="w-64 h-100 object-cover rounded-lg"
            
          />
        </div>
      </div>

      {/* 카드 뒷면 */}
      <div 
        className="absolute w-full h-full bg-white rounded-xl shadow-2xl cursor-pointer
                   [backface-visibility:hidden] p-8"
        style={{ transform: 'rotateY(180deg)' }}
      >
        <div className="absolute top-4 left-5 text-black-600 text-3xl">♠</div>
        <div className="absolute top-5 left-9 text-black-600 text-2xl">A</div>
        <div className="absolute bottom-4 right-5 text-black-600 text-3xl rotate-180">♠</div>
        <div className="absolute bottom-5 right-9 text-black-600 text-2xl rotate-180">A</div>
        
        
        <div className="text-center mt-12">
          <h2 className="text-3xl font-pcp font-bold text-gray-800 mb-6">{result.title} ({mbti})</h2>
          <p className="text-xl text-gray-700 font-myy whitespace-pre-line break-keep mb-8">{result.description}</p>
          
          <div className="space-y-4">
            {/* <h3 className="text-xl font-semibold text-gray-800">주요 특성</h3> */}
            <ul className="space-y-2">
              {result.traits.map((trait, i) => (
                <li key={i} className="text-lg text-gray-700 font-myy">#{trait}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ResultCard;