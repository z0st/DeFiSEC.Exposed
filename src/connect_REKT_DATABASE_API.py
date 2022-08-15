# importing the requests library
import requests
  
# defining the api-endpoint 
API_ENDPOINT = "https://api.safe.defiyield.app/audit/list"

API_ENDPOINT_AUDITS = "https://api.safe.defiyield.app/audit/address"

headers = {"Authorization": "Bearer 1672d241-0856-485a-9294-667958f00d48"}

data = {}

response = requests.post(url = API_ENDPOINT, data = data, headers = headers)

items = response.json()

def tokens():
    for item in items:
        print(item)
        for token_address in item["auditNetworks"]:
            # print(token_address["token_address"], token_address["token_ticker"])
            print(token_address["token_address"])
            print(token_address["token_ticker"])

data2 = {tokens()}

# print(data2)

# response2 = requests.json(url = API_ENDPOINT_AUDITS, data = data2, header = headers)

# print(response.json())