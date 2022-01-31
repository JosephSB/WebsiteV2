const IconSvg = ({ src, size = 2 }) => {
  return <img className={`Svg size-${size} icon`} src={src} alt="icon" />;
};

export default IconSvg;
