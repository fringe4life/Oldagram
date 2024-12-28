import { posts } from './posts.ts'


const app = document.getElementById('app')
app?.addEventListener('dblclick', handleLike)
const displayPosts = () => { 
    const html = posts.map(({ name, username, location, avatar, post, comment, likes }) => {
        return `<section class="post">
                <header class='post-header'>
                    <img src="${avatar}" alt="${name}" class='avatar'>
                    <div>
                        <h2>${name}</h2>
                        <p>${username} - ${location}</p>
                    </div>
                </header>
                <img src="${post}" alt="Post" class='post-img'>
                <div class='icons'>
                    <img src="images/icon-heart.png" alt="Like" class='avatar'>
                    <img src="images/icon-comment.png" alt="Like" class='avatar'>
                    <img src="images/icon-dm.png" alt="Like" class='avatar'>
                </div>
                <p class='post-likes'><strong>${likes} likes</strong></p>
                <p class='post-comments'><strong>${username}</strong>${comment}</p>
        </section>`
    }).join('')
    if (app) {
        app.innerHTML = html
    }
}
displayPosts()

function handleLike(e: Event) {
    console.log(e)
}