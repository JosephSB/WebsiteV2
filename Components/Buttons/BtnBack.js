import { useRouter } from 'next/router'
const BtnBack = () =>{
    const router = useRouter()

    const back = () => router.push('/Proyects')

    return(
        <button className="BtnBack" onClick={back}>
            ← Regresar
        </button>
    )
}

export default BtnBack