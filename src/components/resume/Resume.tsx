import Header from "../header/Header";
import './resume.css'

const Resume = () => {
    return <>
        <Header />
        <div className="resumeScreen">
            <embed className="embeddedPdf"
                // src="src/assets/20250224_en.pdf"
                src="20250224_en.pdf"
                type="application/pdf"
                width="100%"
                height="900px"/>

        </div>
    </>
}

export default Resume;