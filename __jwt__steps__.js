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