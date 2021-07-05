import axios from 'axios'


class Auth {
    authenticated: boolean;

    constructor() {
        this.authenticated  = false;
    }

      async login(username: string, password: string): Promise<any> {

        const body = {
            username,
            password
        };

        const response =  await axios.post(
            'http://localhost:3000/auth/signin',
            body
        );
        
        localStorage.setItem('somina_token', response.data.accessToken);
        this.authenticated = true;
        return response.data;
      
            }

    logout(): Promise<any> {
        this.authenticated = false;
        localStorage.removeItem('somina_token');
        const temp = new Promise(function(resolve, reject) {
            // do a thing, possibly async, then…
          
            if (true) {
              resolve("Stuff worked!");
            }
            else {
              reject(Error("It broke"));
            }
          });
        return temp;
    }

    isAuthenticated() {
        
        return this.authenticated;
    }
}

export default new Auth();