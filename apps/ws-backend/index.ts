
import {prismaClient} from "db/client"
import {WebSocketServer} from "ws"

const wss = new WebSocketServer({
    port:8081
})

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', async function message(data) {
    console.log('received: %s', data);
    const user = await prismaClient.user.create({
      data:{
            username:Math.random().toString(),
            password:Math.random().toString()
      }
    })
    console.log(user)
  });

  ws.send('something');
});