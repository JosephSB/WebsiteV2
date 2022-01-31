import { useState } from "react";
import GridOption from "./GridOption";

const Grilla = ({ portadas, name }) => {
  const [portadaPrincipal, setPortadaPrincipal] = useState(0);

  const changePortada = (index) => setPortadaPrincipal(index);

  return (
    <div className="Grid_Portada">
      <GridOption
        alt={name}
        x={680}
        y={420}
        portada={portadas[portadaPrincipal]}
        index={0}
        action={changePortada}
        clase="Grid_PortadaPrincipal"
      />
      {portadas.map((portada, index) => (
        <GridOption
          key={index}
          alt={name}
          x={166}
          y={90}
          active={index === portadaPrincipal && "Gridactive"}
          portada={portada}
          index={index}
          action={changePortada}
          clase="Grid_PortadaOption"
        />
      ))}
    </div>
  );
};

export default Grilla;
