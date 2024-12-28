const ErrorPage = () => {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl mb-8">올바르지 않은 접근입니다.</p>
          <button 
            onClick={() => window.location.href = '/'}
            className="px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100"
          >
            테스트 다시하기
          </button>
        </div>
      </div>
    );
  };
export default ErrorPage;