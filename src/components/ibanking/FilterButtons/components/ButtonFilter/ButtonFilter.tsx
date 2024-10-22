interface ButtonFilterProps {
  isSelect: boolean;
  action: () => void;
  children: React.ReactNode
}


const ButtonFilter: React.FC<ButtonFilterProps> = ({ isSelect, action, children }) => {
  const buttonClassName = isSelect ? 'filterButtons__button--select' : 'filterButtons__button';

  return (
    <button className={buttonClassName} onClick={action}>
      {children}
    </button>
  )
};

export default ButtonFilter;