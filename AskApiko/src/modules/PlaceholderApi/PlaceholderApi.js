import axios from 'axios';

class PlaceholderAPI {
  constructor(params) {
    this.apiUrl = 'https://jsonplaceholder.typicode.com';    
    this.debug = true;
  }

  clog(message){
    if (this.debug) {
      console.log(message)
    }
  }

  call({url, method='GET', params={} }){
    const requestUrl = `${this.apiUrl}/${url}`;
    this.clog(requestUrl);

    let headers = {
      // 'Content-Type': 'application/json',
    }; 

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

  getPosts(){    
    this.clog(`CALLING API sign-out ${JSON.stringify(arguments)}`);
    return this.call({
      url:`posts`,
      method: 'GET'
    });
  }
}

let api = new PlaceholderAPI();
 
export default api;