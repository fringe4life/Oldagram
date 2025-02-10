

import avatarCourbet from './images/avatar-courbet.jpg';
import avatarVangogh from './images/avatar-vangogh.jpg';
import avatarDucreux from './images/avatar-ducreux.jpg';

import postCourbet from './images/post-courbet.jpg';
import postVangogh from './images/post-vangogh.jpg';
import postDucreux from './images/post-ducreux.jpg';

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: avatarVangogh,
        post: postVangogh,
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: avatarCourbet,
        post: postCourbet,
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: avatarDucreux,
        post: postDucreux,
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
type Post = {
    name: string,
    username: string,
    location: string,
    avatar: string,
    post: string,
    comment: string,
    likes: number
}
export { posts, type Post  }