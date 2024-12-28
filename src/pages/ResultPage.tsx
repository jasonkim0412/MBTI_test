import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ResultCard from '../components/ResultCard';
import { MBTIType } from '../types/mbti';
import { mbtiJobs } from '../datas/mbtiJobs';

declare global {
  interface Window {
    Kakao: any;
  }
}

const ResultPage: React.FC = () => {
  const { mbti } = useParams<{ mbti?: MBTIType }>() as {mbti: MBTIType};
  
  useEffect(() => {
    // 카카오톡 SDK 초기화
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.cleanup();
      window.Kakao.init(import.meta.env.VITE_KAKAO_APP_KEY);
    }
  }, []);

  // MBTI 타입 검증
  const isMBTIType = (param: MBTIType | undefined): param is MBTIType => {
    if (!param) return false;
    const validMBTIs = ['INTJ', 'INTP', 'INFJ', 'INFP', 'ISTJ', 'ISTP', 'ISFJ', 'ISFP',
                        'ENTJ', 'ENTP', 'ENFJ', 'ENFP', 'ESTJ', 'ESTP', 'ESFJ', 'ESFP'];
    return validMBTIs.includes(param);
  };

  // 유효하지 않은 파라미터인 경우 에러 페이지로 리다이렉트
  if (!isMBTIType(mbti)) {
    return <Navigate to="/error" />;
  }
  const validMbti = mbti as MBTIType;
  const result = mbtiJobs[validMbti];

  const handleShare = () => {
    const imageUrl = `${import.meta.env.VITE_PUBLIC_URL}/images/${validMbti}.jpeg`;
    const url = import.meta.env.VITE_PUBLIC_URL;
    if (window.Kakao) {
      // 카카오톡 공유 기능 호출
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: result.title,
          description: '이세계에서 당신의 직업은?',
          imageUrl: imageUrl,
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: '결과 확인하기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
          {
            title: "검사하기",
            link: {
              mobileWebUrl: url,
              webUrl: url,
            },
          },
        ],
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#242424] flex items-center justify-center p-4">
      <div className='absolute top-3'>
        <button className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                onClick={() => window.location.href = '/'}>다시하기</button>
        <button className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                onClick={handleShare}>공유하기</button>
      </div>
      <ResultCard mbti={mbti} result={result} />
      <div className="absolute bottom-8 text-center text-white opacity-60">
        카드를 클릭하여 뒤집을 수 있습니다
      </div>
    </div>
  );
};

export default ResultPage;