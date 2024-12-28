import { ArrowLeft } from 'lucide-react';

interface NavProps {
    currentIndex: number;
    totalQuestions: number;
    onPrevious: () => void; 
}

const Navigation: React.FC<NavProps> = ({
    currentIndex, totalQuestions, onPrevious
}) => {
    const progress = ((currentIndex + 1) / totalQuestions) * 100;

    return(
        <div>
        {/* Navigation */}
        <div className="absolute top-3 left-3 flex items-center justify-between">
          <button
            onClick={onPrevious}
            disabled={currentIndex === 0}
            className="flex items-center text-sm text-gray-600 hover:text-gray-900 
                     disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            이전
          </button>
          <span className="text-sm text-gray-600 ml-5">
            {currentIndex + 1} / {totalQuestions}
          </span>
        </div>
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200 rounded-t-xl">
          <div 
            className="h-full bg-blue-500 rounded-tl-xl transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        </div>
    );
}
export default Navigation;