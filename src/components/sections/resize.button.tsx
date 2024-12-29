interface IProps {
  btnText?: string;
  btnIcons?: React.ReactNode; //tượng trưng cho component
  btnStyle?: React.CSSProperties; //tượng trưng cho css
  onClick?: () => void;
}

const ResizeButton = (props: IProps) => {
  const { btnText, btnIcons, btnStyle, onClick } = props;

  return (
    <button className="resize-button" style={btnStyle} onClick={onClick}>
      <span style={{ textTransform: "uppercase" }}>{btnText}</span>
      <>{btnIcons}</>
    </button>
  );
};

export default ResizeButton;
