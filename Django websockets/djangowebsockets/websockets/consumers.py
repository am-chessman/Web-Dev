from channels.generic.websocket import WebsocketConsumer
import json 

class ChatConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()

        self.send(text_data=json.dumps({
            "type": "Connection established",
            "message": "Your are now connected"
        }))