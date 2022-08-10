import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import rehypeRaw from 'rehype-raw'

const ProjectPageComponent = () => {
    const [content, setContent] = useState("")

    useEffect(() => {
        fetch("Projects.md")
            .then((res) => res.text())
            .then((text) => setContent(text))
    }, [])

    return (
        <div id="cv">
            <ReactMarkdown rehypePlugins={[rehypeRaw]} children={content} />
        </div>
    );
}

export default ProjectPageComponent