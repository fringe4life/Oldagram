import { type Post, posts } from './posts.ts'


const app = document.getElementById('app')

app?.addEventListener('dblclick', handleLike)
const displayPosts = () => { 
    const html = posts.map(post => render(post)).join('')
    if (app) {
        app.innerHTML = html
    }
}
displayPosts()

function handleLike(e: Event) {
    if (e.target && e.target instanceof Element && e.target.classList.contains('click-to-like')){
        console.log(e.target.parentElement)
        let parent = e.target.parentElement as HTMLElement
        if (parent.classList.contains('icons')) {
            parent = parent.parentElement as HTMLElement
        }
        const name = parent.querySelector('h2')?.textContent || ''
        console.log(name)
        const post = posts.find(post => post.name === name)
        if (post) {
            updatePost(post, parent)
        }
    }
}
/**
 * 
 * @param it takes a post object
 * @returns the html string to be rendered for it
 */
function render({name,avatar,likes,username,comment,post }: Post) { 
    return `<article class="post">
                <header class='post-header padding-small'>
                    <img src="${avatar}" alt="${name}" class='avatar'>
                    <div>
                        <h2>${name}</h2>
                        <p>${username}</p>
                    </div>
                </header>
                <img src="${post}" alt="Post" class='post-img click-to-like'>
                <div class='icons padding-small'>
                    <img src="images/icon-heart.png" alt="Like" class='icon click-to-like'>
                    <img src="images/icon-comment.png" alt="Like" class='icon'>
                    <img src="images/icon-dm.png" alt="Like" class='icon'>
                </div>
                <p class='post-paragraph' id='like'><strong>${likes} likes</strong></p>
                <p class='post-paragraph'><strong>${username}</strong> ${comment}</p>
        </article>`
}
/**
 * This method updates the number of likes for a given post instead of re-rendering the entire post section.
 * @param likes the current number of likes
 * @param post the post object to update
 * @param parent the parent element of the post section to update the likes in 
 */
function updatePost(post: Post, parent: HTMLElement) { 
    post.likes += 1
    const likesElement = parent.querySelector('#like') as HTMLElement
    if (likesElement) {
        likesElement.innerHTML = `<strong>${ post.likes } likes </strong>`
    }
}