const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21492
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 13780
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 26367
    }
]

// Posts

const mainEl = document.getElementById("main-el")

function renderPosts () {
    let imgsDOM = ""
    for (let i = 0; i < posts.length; i++){
        imgsDOM += `
        <section>
              <div class="user-info">
                  <img class="avatar" src="${posts[i].avatar}">
                  <div>
                     <p class="post-name bold">${posts[i].name}</p>
                     <p class="post-location">${posts[i].location}</p>
                  </div>
              </div>
              <img class="post-img" src="${posts[i].post}">
              <div class="post-icons-container">
                    <img class="post-icons heart" src="images/icon-heart.png" alt="like button shaped like a heart">
                    <img class="post-icons" src="images/icon-comment.png" alt="Comment button shaped like a though bubble">
                    <img class="post-icons" src="images/icon-dm.png" alt="Direct message button shaped like a paper plane">
              </div>
              <p class="post-likes bold">${posts[i].likes} likes</p>
              <p class="post-comment"><span class="username bold">${posts[i].username}</span> ${posts[i].comment}</p>
        </section>
        `
    }
    mainEl.innerHTML = imgsDOM
}
renderPosts ()

// Likes Post

const heartBtn = document.getElementsByClassName("heart")
const likesDisplay = document.getElementsByClassName("post-likes")
const likesPost = document.getElementsByClassName("post-img")

// Likes for our heart button

for (let i = 0; i < posts.length; i++) {
    heartBtn[i].addEventListener ("click", function (){
        posts[i].likes += 1
        likesDisplay[i].innerHTML =`${posts[i].likes} likes`
    })
 }
// Likes for our post click

 for (let i = 0; i < posts.length; i++) {
    likesPost[i].addEventListener("dblclick", function (){
        posts[i].likes += 1
        likesDisplay[i].innerHTML = `${posts[i].likes} likes`
    })
 }
 