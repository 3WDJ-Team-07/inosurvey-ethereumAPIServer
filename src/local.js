// 환경 설정 파일 load
require('dotenv').config();

/* code issue #1
* problem code : import Server from './server';
* problem : .env constants is undifined in db.js
* reason: require VS import difference
*   require - Synchronous loading
*   import  - Asynchronous loading
* solution code : const Server = require('./server').default;
* modified file list :
*   local.js, lib/token.js, db/db.js 
*/
const Server = require('./server').default;

const server = new Server();

server.listen(3000);
