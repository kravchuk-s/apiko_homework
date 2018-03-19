const ul = document.getElementById('posts');
const url = 'https://jsonplaceholder.typicode.com/posts';
const commentUrl = 'https://jsonplaceholder.typicode.com/comments';
const userUrl = 'https://jsonplaceholder.typicode.com/users';

let output = '';

let idOfPost = (location.href).split('?postID=', 2)[1];
let idOfUser = (location.href).split('?userID=', 2)[1];
let containPost = false;
let containUser = false;

renderPage();

async function renderPage() {

  await isContainPost(idOfPost);
  await isContainUser(idOfUser);

  if (containPost) {
    postPage(idOfPost);
  } else if (containUser) {
    getUser(idOfUser);
  } else {
    postList();
  }
}

async function isContainPost(idOfPost) {
  await fetch(url).then(response => response.json()).then((data) => {
    data.forEach((post) => {
      if (post.id == idOfPost) {
        containPost = true;
      }
    });
  }).catch((err) => console.log(err))
}

async function isContainUser(idOfUser) {
  await fetch(userUrl).then(response => response.json()).then((data) => {
    data.forEach((user) => {
      if (user.id == idOfUser) {
        containUser = true;
      }
    });
  }).catch((err) => console.log(err))
}

function postPage(idOfPost) {
  fetch(url).then(response => response.json()).then((data) => {
    const post = data[idOfPost - 1] || {};
    const { title, body, userId} = post;
    output = `<h2> Title: <br> ${title}  </h2>
          <h3> Post: <br> ${body} </h3>
          <h3 onClick="userOnClick(${userId})" id="userID=${userId}">User: ${userId}</h3>
          `;
    ul.innerHTML = output;
    getComments(idOfPost);
  }).catch((err) => console.log(err))
}

function postList() {
  fetch(url).then(response => response.json()).then((data) => {
    data.forEach((post) => {
      const { id, title } = post;
      output += `<div><p id="postID=${id}">Post #${id} <br> ${title}</p></div>`;
      ul.innerHTML = output;
    });
    postOnClick();
  }).catch((err) => console.log(err))
}

function postOnClick() {
  fetch(url).then(response => response.json()).then((data) => {
    data.forEach((post) => {
      const { id } = post;
      document.getElementById("postID=" + id).onclick = function() {
        location.href = "?postID=" + id;
      };
    });
  }).catch((err) => console.log(err))
}

function getComments(idOfPost) {
  fetch(commentUrl).then(response => response.json()).then((data) => {
    data.forEach((comment) => {
      const { body, name, email } = comment;
      if (comment.postId == idOfPost) {
        output += `<h4> Comment: ${body}</h4>
                   <p> Name: ${name} </p>
                   <p> Email: ${email}</p>
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
    const user = users[userID - 1];
    const { name, username, email, address: {street}} = user;
    output = `<h4> Name: ${name}  </h4>
                  <h4> User Name: ${username}  </h4>
                  <h4> Email: ${email}  </h4>
                  <h4> Address: ${street}  </h4>
                  `;
    ul.innerHTML = output;
  }).catch((err) => console.log(err))
}