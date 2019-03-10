// 환경 설정 파일 load
import Server from 'server';

require('dotenv').config();

const server = new Server();

server.listen(3000);
