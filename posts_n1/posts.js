const ul = document.getElementById('posts'); 
const url = 'https://jsonplaceholder.typicode.com/posts'; 
const commentUrl = 'https://jsonplaceholder.typicode.com/comments';
const userUrl = 'https://jsonplaceholder.typicode.com/users';
// let attribute;
let output = '';
  
      fetch(url)
      .then(response => response.json())
      .then((data) =>{

      
      let idOfPost = (location.href).split('?postID=', 2)[1]; 
      let idOfUser = (location.href).split('?userID=', 2)[1];

      if (idOfPost > 0 && idOfPost <= 100){

          output = `<h3> Tittle: <br> ${data[idOfPost].title}  </h3>
          <h4> Post: <br> ${data[idOfPost].body} </h4>
          <h3 onClick="userOnClick(${data[idOfPost].userId})" id="userID=${data[idOfPost].userId}">User: ${data[idOfPost].userId}</h3>
          `;
          ul.innerHTML = output;
            
            getComments(idOfPost);
            // getUser(data[idOfPost].userId);

      } else if (idOfUser > 0 && idOfUser < 10){
          getUser(idOfUser);
      } else {
         data.forEach((post) => {
            output +=
            `<li id="postID=${post.id}" href="?postID=${post.id}">Post #${post.id}</li>
            `;
            ul.innerHTML = output;
        });
         postOnClick();
     }       
      }).catch((err)=>console.log(err))


function postOnClick(){
  fetch(url)
  .then(response => response.json())
.then((data) =>{
      data.forEach((post) => {
                  document.getElementById("postID=" + post.id).onclick = function () { 
                  location.href = "?postID=" + post.id;                         
                 }; 
               }); 
                      
      }).catch((err)=>console.log(err))
}

 

 function getComments(idOfPost) {
  // console.log('here 1');
       fetch(commentUrl)
      .then(response => response.json())
      .then((data) =>{
            data.forEach((comment) => {
              // console.log(comment.postId);
              // console.log(idOfPost);   
                        if (comment.postId == idOfPost){
                          // console.log('here 2');  
                            output += `<p> Comment: ${comment.body}  </h3>
                            <h6> Name: ${comment.name} </h6>
                            <h6> Email: ${comment.email}</h6>
                            `;
                            ul.innerHTML = output; 
                        }                      
                       }); 
                // console.log('here 3');            
            }).catch((err)=>console.log(err))

 }

function userOnClick(userID){
           location.href = "?userID=" + userID; 
}

 function getUser(userID) {
         fetch(userUrl)
      .then(response => response.json())
      .then((user) =>{  
   
    console.log("Here 1" + userID);
             output = `<h4> Name: ${user[userID].name}  </h4>
                  <h4> UserName: ${user[userID].username}  </h4>
                  <h4> Email: ${user[userID].email}  </h4>
                  <h4> Adress: ${user[userID].address.street}  </h4>
                  `;
                  ul.innerHTML = output;                                        
             console.log("Here 1" + userID);              
            }).catch((err)=>console.log(err))
 }

 


 // "id": 1,
 //    "name": "Leanne Graham",
 //    "username": "Bret",
 //    "email": "Sincere@april.biz",
 //    "address": {
 //      "street": "Kulas Light",
 //      "suite": "Apt. 556",
 //      "city": "Gwenborough",
 //      "zipcode": "92998-3874",
 //      "geo": {
 //        "lat": "-37.3159",
 //        "lng": "81.1496"
 //      }
 
// let output = `<h3> Tittle: <br> ${post.title}  </h3>
//                                 <h4> Post: <br> ${post.body} </h4>
//                        <p>User: ${post.userId}</p>
//                   `;
//                   ul.innerHTML = output;


// function EventHandler() {
//   let target = event.target;
//   attribute = target.getAttribute('href').split('=')[1];
//   console.log(attribute);
//   console.log(target.getAttribute('href'));
//   console.log(this);
// }

//   fetch(url)
// .then(response => response.json())
// .then((data) =>{
// let output = `<h3> Tittle: <br> ${data[attribute-1].title}  </h3>
//                      <h4> Post: <br> ${data[attribute-1].body} </h4>
//                        <p>User: ${data[attribute-1].userId}</p>
//                      `;
//                 ul.innerHTML = output;
//                 ;  
//       }).catch((err)=>console.log(err))

