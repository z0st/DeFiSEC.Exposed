import json

file1 = 'protocols_data-formatted.json'

x = open(file1, encoding="utf8")

first_data = json.load(x)

file2 = 'email_score17-08-22.json'

y = open(file2, encoding="utf8")

second_data = json.load(y)

data = []

for line in file1:
    print(line)
    j_content = json.loads(line)
    for line2 in file2:
        j2_content = json.loads(line2)
        # print(j2_content)

x.close()
y.close()