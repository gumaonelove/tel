import requests

resp = requests.post(
    url='http://127.0.0.1:4004/stt',
    files={'file': open('file.wav', 'rb')},
    data={'text': 'минә көз борсы керлөһуны вә уруммана'.encode()}
)

print(resp.json())