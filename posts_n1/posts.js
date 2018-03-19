const ul = document.getElementById('posts');
const url = 'https://jsonplaceholder.typicode.com/posts';
const commentUrl = 'https://jsonplaceholder.typicode.com/comments';
const userUrl = 'https://jsonplaceholder.typicode.com/users';

let output = '';

let idOfPost = (location.href).split('?postID=', 2)[1];
let idOfUser = (location.href).split('?userID=', 2)[1];


if(idOfPost){
  postPage(idOfPost);
}else if(idOfUser){
  getUser(idOfUser);
} else {
  postList();
}

function postPage(idOfPost) {
  fetch(url).then(response => response.json()).then((data) => {
    const post = data[idOfPost-1] || {};
    const {title,body,userId} = post;

    output = `<h3> Title: <br> ${title}  </h3>
          <h4> Post: <br> ${body} </h4>
          <h3 onClick="userOnClick(${userId})" id="userID=${userId}">User: ${userId}</h3>
          `;

    ul.innerHTML = output;
    getComments(idOfPost);

  }).catch((err) => console.log(err))
}

function postList() {
  fetch(url).then(response => response.json()).then((data) => {
    data.forEach((post) => {
      const {id} = post;

      output += `<div><a id="postID=${id}" href="${location.href}?postID=${id}">Post #${id}</a></div>`;
      ul.innerHTML = output;
    });
    
  }).catch((err) => console.log(err))
}


function getComments(idOfPost) {
  fetch(commentUrl).then(response => response.json()).then((data) => {
    data.forEach((comment) => {
      const {body,name,email} = comment;

      if (comment.postId == idOfPost) {
        output += `<p> Comment: ${body}</h3>
                   <h6> Name: ${name} </h6>
                   <h6> Email: ${email}</h6>
                  `;

        ul.innerHTML = output;
      }
    });
  }).catch((err) => console.log(err))
}

function userOnClick(userID) {
  location.href = "?userID=" + userID;
}

function getUser(userID) {
  fetch(userUrl).then(response => response.json()).then((users) => {
    
    const user = users[userID-1];
    const {name,username,email,address:{street}}=user;

    output = `<h4> Name: ${name}  </h4>
                  <h4> User Name: ${username}  </h4>
                  <h4> Email: ${email}  </h4>
                  <h4> Address: ${street}  </h4>
                  `;
    ul.innerHTML = output;
    
  }).catch((err) => console.log(err))
}
