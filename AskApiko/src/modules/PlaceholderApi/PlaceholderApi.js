import axios from 'axios';

class PlaceholderAPI {
  constructor(params) {
    this.apiUrl = 'https://jsonplaceholder.typicode.com';    
    this.debug = false;
  }

  clog(message){
    if (this.debug) {
      console.log(message)
    }
  }

  call({url, method='GET', params={}, data={} }){
    const requestUrl = `${this.apiUrl}/${url}`;
    this.clog(requestUrl);

    let headers = {
      // 'Content-Type': 'application/form-data',
    }; 
 

    let options = {
      method,
      headers,
      params,
      data
    }

    return new Promise(async (resolve,reject)=>{
      try{
        let response = await axios(requestUrl,options);
        const {status, data} = response;
        if(response){
          this.clog(`RESPONSE STATUS ${status}`)          
        }
        if(!(status !== 200 || status !==201)){
          this.clog(`ERROR`)
          this.clog(`${data}`)
          return reject(data);
        }
        this.clog(`RESPONSE BODY`)
        // this.clog(`${JSON.stringify(data)}`);

        return resolve(data);
      } catch (error){
        this.clog(`ERROR`)
        this.clog(`${error}`)
        return reject(error);
      }
    });
  }

  signIn( username, password ) {
    if(typeof username !== 'string'){
      return new Promise((resolve,reject)=>{
        reject({reason: 'Email must be a string.'});
      });
    }
    if(typeof password !== 'string'){
      return new Promise((resolve,reject)=>{
        reject({reason: 'Password must be a string.'});
      });
    }
    this.clog(`CALLING API sign-in ${JSON.stringify(arguments)}`);
    return this.call({
      url:`users`,
      method: 'POST',      
      data: {
        username,
        password
      }     
    });
  }

  signInReal( username, id ) {    
    this.clog(`CALLING API sign-in ${JSON.stringify(arguments)}`);
    return this.call({
      url:`users/${id}`,
      method: 'GET'          
    });
  }

  signUp( username, email, password ){
    if(typeof username !== 'string'){
      return new Promise((resolve,reject)=>{
        reject({reason: 'Username must be a string.'});
      });
    }
    if(typeof email !== 'string'){
      return new Promise((resolve,reject)=>{
        reject({reason: 'Email must be a string.'});
      });
    }
    if(typeof password !== 'string'){
      return new Promise((resolve,reject)=>{
        reject({reason: 'Password must be a string.'});
      });
    }
    this.clog(`CALLING API sign-up ${JSON.stringify(arguments)}`);
    return this.call({
      url:`users`,
      method: 'POST',
      data: {
        username,
        email,
        password
      }
    });
  }

  restorePassword( email ) {
    if(typeof email !== 'string'){
      return new Promise((resolve,reject)=>{
        reject({reason: 'Email must be a string.'});
      });
    }
    this.clog(`CALLING API sign-in ${JSON.stringify(arguments)}`);
    return this.call({
      url:`users`,
      method: 'POST',      
      data: {
        email
      }     
    });
  }

  createQuestion( title, body ) {
    if(typeof title !== 'string'){
      return new Promise((resolve,reject)=>{
        reject({reason: 'Title must be a string.'});
      });
    }
    if(typeof body !== 'string'){
      return new Promise((resolve,reject)=>{
        reject({reason: 'Body must be a string.'});
      });
    }
    this.clog(`CALLING API sign-in ${JSON.stringify(arguments)}`);
    return this.call({
      url:`posts`,
      method: 'POST',      
      data: {
        title,
        body
      }     
    });
  }

  getPosts(){    
    this.clog(`CALLING API sign-out ${JSON.stringify(arguments)}`);
    return this.call({
      url:`posts`,
      method: 'GET'
    });
  }

  getPost(id){    
    this.clog(`CALLING API sign-out ${JSON.stringify(arguments)}`);
    return this.call({
      url:`posts/${id}`,
      method: 'GET'
    });
  }

  getComments(id){    
    this.clog(`CALLING API sign-out ${JSON.stringify(arguments)}`);
    return this.call({
      url:`comments?postId=${id}`,
      method: 'GET'
    });
  }

  getUser(id){    
    this.clog(`CALLING API sign-out ${JSON.stringify(arguments)}`);
    return this.call({
      url:`users/${id}`,
      method: 'GET'
    });
  }

  getUserPhoto(id){    
    this.clog(`CALLING API sign-out ${JSON.stringify(arguments)}`);
    return this.call({
      url:`photos/${id}`,
      method: 'GET'
    });
  }

  getUserPosts(id){    
    this.clog(`CALLING API sign-out ${JSON.stringify(arguments)}`);
    this.clog("ID OF USER IN API: ", id);
    return this.call({
      url:`posts?userId=${id}`,
      method: 'GET'
    });
  }
}

let api = new PlaceholderAPI();
 
export default api;