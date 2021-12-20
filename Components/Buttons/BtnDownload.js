
const BtnDownload = ({message}) =>{
    return(
        <a href="/pdf/cv.pdf" target="_blank">
            <button className="Btn_Download">
                <i className="fas fa-file-download fa-2x"></i>
                &nbsp;{message}  
            </button>
        </a>
    )
}

export default BtnDownload