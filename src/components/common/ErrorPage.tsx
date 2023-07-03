import { Images } from 'assets/images';
import { useNavigate } from 'react-router-dom';
import Button from './button/Button';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[calc(100vh-120px)] flex items-center justify-center">
      <div className="mx-auto max-w-[550px] p-10 bg-white dark:bg-dark-100 shadow drop-shadow-sm">
        <div className="text-center">
          <span className="text-6xl flex justify-center mb-3">
            <img src={Images.ErrorIcon} alt="Error Icon" />
          </span>
          <h1>Nothing is here!</h1>
          <p className="my-4 text-lg">This page has been shown to you purposely</p>
          <Button name="pageNotFound" value="Go Back" handleOnClick={() => navigate(-1)} />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
