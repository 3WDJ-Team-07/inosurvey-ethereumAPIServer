// 환경 설정 파일  load
require('dotenv').config();

import Server from './server';

const server = new Server();
server.listen(4000);