import Image from "next/image"

const GridOption = ({portada,x,y,alt,action,index,clase,active}) =>{
    return(
        <div className={clase +" "+ active} onClick={() => action(index)} >
            <Image
                crossOrigin="anonymous"
                src={portada}
                alt={alt}
                width={x}
                height={y}
                placeholder="blur"
                blurDataURL="../img/imgCarga.webp"
            />
        </div>
    )
}

export default GridOption