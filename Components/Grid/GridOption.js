const GridOption = ({ portada, x, y, alt, action, index, clase, active }) => {
  return (
    <div className={clase + " " + active} onClick={() => action(index)}>
      <img
        crossOrigin="anonymous"
        src={portada}
        alt={alt}
        width={x}
        height={y}
      />
    </div>
  );
};

export default GridOption;
