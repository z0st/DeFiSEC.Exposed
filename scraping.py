import requests
from bs4 import BeautifulSoup

URL = "https://defiyield.app/rekt-database"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")

print(soup)

# results = soup.find_all("a", {"class": "name"})
results = soup.find_all('div', class_=['root'])

print(results)