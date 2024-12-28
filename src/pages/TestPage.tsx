import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MBTIDimension, MBTI, MBTIType } from '../types/mbti';
import { questions } from '../datas/questions';
import QuestionCard from '../components/QuestionCard';
import Navigation from '../components/Navigation';

const TestPage: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<MBTI[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        const result = calculateMBTIResult();
        navigate(`/result/${result}`);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isLoading, navigate]);

  const calculateMBTIResult = (): MBTIType => {
    // answers 배열을 차원별로 그룹화
    const dimensions: Record<MBTIDimension, MBTI[]> = {
      'EI': [],
      'SN': [],
      'TF': [],
      'PJ': []
    };

    // 각 답변을 해당하는 차원에 분류
    questions.forEach((q, index) => {
      if (answers[index]) {
        dimensions[q.mbtiDimension].push(answers[index]);
      }
    });

    // 각 차원별로 우세한 성향 계산
    const mbtiType = Object.entries(dimensions).map(([dimension, values]) => {
      const firstType = dimension[0] as MBTI; // E, S, T, P
      const firstTypeCount = values.filter(v => v === firstType).length;
      return firstTypeCount > values.length / 2 ? firstType : dimension[1];
    }).join('') as MBTIType;

    return mbtiType;
  };

  const handleSelect = (mbti: MBTI) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = mbti;
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setIsLoading(true);
      calculateMBTIResult();
    }
  };

  const goPrev = () => {
    const newAnswers = answers.slice(0,-1);
    setAnswers(newAnswers);
    setCurrentQuestionIndex(prev => prev - 1);
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#242424] flex flex-col items-center justify-center p-4">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-white opacity-60">당신의 직업을 찾는 중...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#242424] flex items-center justify-center p-4">
      <Navigation
        currentIndex={currentQuestionIndex}
        totalQuestions={questions.length}
        onPrevious={goPrev}
      />
      <QuestionCard
        question={questions[currentQuestionIndex].question}
        options={questions[currentQuestionIndex].options}
        onSelect={handleSelect}
        currentIndex={currentQuestionIndex}
      />
    </div>
  );
};

export default TestPage;