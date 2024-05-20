/*
    * install jsonwebtoken
    * jwt.sign(payload, secret, {expiredIn: })
    * token client
*/

/* 
    * how to store token in the client side
    1. memory --> ok type
    2. local storage --> ok type (xss)
    3. cookies : http only

*/

/* 
    1. set cookie with https only. for development secure: false,

    2. cors
        app.use(cors({
            origin: ['http://localhost:5173'],
            credentials: true
            }));

    3. client side axios settings
      -> in axios set withCredentials: true 
*/


/* 
    1. to send cookies from the client make sure you added withCredential: true for the api call using axios
    2. use cookie parser as middle ware
*/