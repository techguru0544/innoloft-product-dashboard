import Button from 'components/common/button/Button';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="py-5">
      <div className="container text-center flex flex-col items-center">
        Welcome to InnoLoft Dashoarad
        <Button
          name="Product"
          value="Product - 6781"
          customClass="h-[50px] mt-2"
          handleOnClick={() => navigate(`product/6781`)}
        />
      </div>
    </section>
  );
};

export default Home;
