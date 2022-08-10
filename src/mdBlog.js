import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import rehypeRaw from 'rehype-raw'

const PageComponent = () => {
    const [content, setContent] = useState("")

    useEffect(() => {
        fetch("CV.md")
            .then((res) => res.text())
            .then((text) => setContent(text))
    }, [])

    return (
        <div id="cv">
            <ReactMarkdown rehypePlugins={[rehypeRaw]} children={content} />
        </div>
    );
}

export default PageComponent