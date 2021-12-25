import { useRouter } from "next/router"

const SpanLanguage = () =>{
    const router = useRouter();

    const handleClick = () => {
        router.push(router.pathname, router.pathname,{
            locale: router.locale === "es" ? "en" : "es",
        })
    }

    return (
        <div className="Language" onClick={handleClick}>
            <p className="Language_Text">{router.locale}</p>
        </div>
    )
}

export default SpanLanguage