import requests

def make_request(url):
  return requests.get(url).json()
