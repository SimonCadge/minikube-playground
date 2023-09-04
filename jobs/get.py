import requests
URL = "http://playground-backend:3000/graphql"
QUERY = """mutation Call {
    call
}"""

r = requests.post(URL, json={"query": QUERY})

if not r.ok:
    print(r.content)
    exit(1)

data = r.json()

print(data)