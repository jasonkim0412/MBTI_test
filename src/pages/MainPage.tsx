import React from 'react';
import { Link } from 'react-router-dom';

const MainPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#242424] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          나의 이세계 직업은?
        </h1>
        <p className="text-gray-600 text-center mb-8">
          당신은 이세계로 떨어졌습니다! 지금부터 당신은 원래 세계로 돌아가기 위해 선택을 해야합니다!
        </p>
        <Link
          to="/questions"
          className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          시작하기
        </Link>
      </div>
    </div>
  );
};


export default MainPage;