import axios from 'axios';

class AskApikoAPI {
  constructor(params) {
    this.apiUrl = 'https://ask-apiko.herokuapp.com/api';
    this.apiVersion = 'v1';
    this.debug = true;
  }

  clog(message){
    if (this.debug) {
      console.log(message)
    }
  }

  call({url, apiVersion=this.apiVersion, token, method='GET', params={} }){
    const requestUrl = `${this.apiUrl}/${apiVersion}/${url}`;
    this.clog(requestUrl);

    let headers = {
      // 'Content-Type': 'application/json',
    }; 

    if(token){
      Object.assign({}, headers, {
        Authorization: `Bearer ${token}`
      });
    }

    let options = {
      method,
      headers,
      params
    }

    return new Promise(async (resolve,reject)=>{
      try{
        let response = await axios(requestUrl,options);
        const {status, data} = response;
        if(response){
          this.clog(`RESPONSE STATUS ${status}`)
        }
        if(status !== 200){
          this.clog(`ERROR`)
          this.clog(`${data}`)
          return reject(data);
        }
        this.clog(`RESPONSE BODY`)
        this.clog(`${JSON.stringify(data)}`);

        return resolve(data);
      } catch (error){
        this.clog(`ERROR`)
        this.clog(`${error}`)
        return reject(error);
      }
    });
  }

  signIn({email, password}) {
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
    this.clog(`CALLING API sign-in ${JSON.stringify(arguments)}`);
    return this.call({
      url:`auth/sign-in`,
      method: 'POST',
      params: {
        email,
        password
      }
    });
  }

  signUp({email, password}){
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
      url:`auth/sign-up`,
      method: 'POST',
      params: {
        email,
        password
      }
    });
  }

  signOut({token}){
    if(typeof token !== 'string'){
      return new Promise((resolve,reject)=>{
        reject({reason: 'Token must be a string.'});
      });
    }
    this.clog(`CALLING API sign-out ${JSON.stringify(arguments)}`);
    return this.call({
      url:`auth/sign-out`,
      method: 'POST',
      token
    });
  }
}

let api = new AskApikoAPI();
 
export default api;