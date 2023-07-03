interface ButtonPropsType {
  customClass?: string;
  type?: 'button' | 'submit' | 'reset';
  name: string;
  value: string;
  disabled?: boolean;
  handleOnClick: () => void;
}

const Button = (props: ButtonPropsType) => {
  const { customClass, type = 'button', name, value = '', disabled = false, handleOnClick } = props;

  return (
    <button
      className={`bg-theme text-white text-sm px-6 py-2 rounded ${customClass}`}
      type={type}
      name={name}
      disabled={disabled}
      onClick={handleOnClick}
    >
      {value}
    </button>
  );
};

export default Button;
