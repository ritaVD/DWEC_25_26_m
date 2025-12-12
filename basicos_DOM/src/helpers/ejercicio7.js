import { publicaciones } from "../db/data";

export default function createEjercicio7 () {
    const notFetching = () => publicaciones;

    const renderPost = () => {
        const container = document.createElement('div')
        container.classList.add('blog-container')
    
        publicaciones.forEach(publicacion => {
            const post = document.createElement('post')
            post.classList.add('post')
        });
        
    
        const postTitle = document.createElement('h1')
        postTitle.classList.add('post-title')
    
        const postMeta = document.createElement('h3')
        postMeta.classList.add('post-meta')
    
        const postContent = document.createElement('h4')
        postContent.classList.add('post-content')
    
        const tagContainer = document.createElement('div')
        tagContainer.classList.add('tags-container')
    
        const tag = document.createElement('tag')
        tag.classList.add('tag')
    
        tagContainer.appendChild(tag)
        post.appendChild(postTitle)
        post.appendChild(postMeta)
        post.appendChild(postContent)
        post.appendChild(tagContainer)
    
        //Contador de likes
        

    }

    const render = () => {
        const container = document.createElement('div')
        container.appendChild(renderPost(publicaciones))
    }

}