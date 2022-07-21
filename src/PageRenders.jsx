import React from 'react'
import { useParams } from 'react-router-dom'
const generatePage = (name) => {
    const page = () => require(`./pages/${name}`).default;
    try {
        return React.createElement(page());
    } catch (error) {
        return <h1>Page Not Found</h1>
    }
}
const PageRenders = () => {
    const { page, id } = useParams();
    let name = '';
    if (page) {
        name = id ? `${page}/[id]` : `${page}`
    }
    return generatePage(name)
}

export default PageRenders