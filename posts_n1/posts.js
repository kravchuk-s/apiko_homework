const ul = document.getElementById('posts');
const url = 'https://jsonplaceholder.typicode.com/posts';
const commentUrl = 'https://jsonplaceholder.typicode.com/comments';
const userUrl = 'https://jsonplaceholder.typicode.com/users';

let output = '';

let idOfPost = (location.href).split('?postID=', 2)[1];
let idOfUser = (location.href).split('?userID=', 2)[1];

if (idOfPost > 0 && idOfPost <= 100) {
  postPage(idOfPost);
} else if (idOfUser > 0 && idOfUser <= 10) {
  getUser(idOfUser);
} else {
  postList();
}

function postPage(idOfPost) {
  fetch(url).then(response => response.json()).then((data) => {
    output = `<h3> Tittle: <br> ${data[idOfPost].title}  </h3>
          <h4> Post: <br> ${data[idOfPost].body} </h4>
          <h3 onClick="userOnClick(${data[idOfPost].userId})" id="userID=${data[idOfPost].userId}">User: ${data[idOfPost].userId}</h3>
          `;
    ul.innerHTML = output;
    getComments(idOfPost);
  }).catch((err) => console.log(err))
}

function postList() {
  fetch(url).then(response => response.json()).then((data) => {
    data.forEach((post) => {
      output += `<li id="postID=${post.id}" href="?postID=${post.id}">Post #${post.id}</li>
            `;
      ul.innerHTML = output;
    });
    postOnClick();
  }).catch((err) => console.log(err))
}

function postOnClick() {
  fetch(url).then(response => response.json()).then((data) => {
    data.forEach((post) => {
      document.getElementById("postID=" + post.id).onclick = function() {
        location.href = "?postID=" + post.id;
      };
    });
  }).catch((err) => console.log(err))
}

function getComments(idOfPost) {
  fetch(commentUrl).then(response => response.json()).then((data) => {
    data.forEach((comment) => {
      if (comment.postId == idOfPost) {
        output += `<p> Comment: ${comment.body}  </h3>
                            <h6> Name: ${comment.name} </h6>
                            <h6> Email: ${comment.email}</h6>
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
  fetch(userUrl).then(response => response.json()).then((user) => {
    console.log("Here 1" + userID);
    output = `<h4> Name: ${user[userID-1].name}  </h4>
                  <h4> UserName: ${user[userID-1].username}  </h4>
                  <h4> Email: ${user[userID-1].email}  </h4>
                  <h4> Adress: ${user[userID-1].address.street}  </h4>
                  `;
    ul.innerHTML = output;
    console.log("Here 1" + userID);
  }).catch((err) => console.log(err))
}