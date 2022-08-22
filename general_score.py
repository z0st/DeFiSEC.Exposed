import json

def dnsScore():
    with open('DNSSEC_score.json') as f:
        data = json.load(f)
        dnssec_score_file = open('dnssec_score.txt', 'w')
        for line in data:
            dnssec_score_file.write(str(line["dnssec_score"]) + '\n')
                
dnsScore()

def emailScore():
    with open('email_score17-08-22.json') as f:
        data = json.load(f)
        email_score_file = open('email_score.txt', 'w')
        for line in data:
            email_score_file.write(str(line["email_score"]) + '\n')
                
emailScore()

def certScore():
    with open('certs_score.json') as f:
        data = json.load(f)
        certs_score_file = open('certs_score.txt', 'w')
        for line in data:
            certs_score_file.write(str(line["certs_score"]) + '\n')
                
certScore()

def generalScore():
    dns = open('dnssec_score.txt', 'r')
    email = open('email_score.txt', 'r')
    certs = open('certs_score.txt', 'r')

    dns_score = []
    email_score = []
    certs_score = []

    for score in dns:
        dns_score.append((int(score.replace("\n", ""))))

    for score in email:
        email_score.append((int(score.replace("\n", ""))))

    for score in certs:
        certs_score.append((int(score.replace("\n", ""))))

    list_general_score = [dns_score, email_score, certs_score]
    sum_general_score = list(map(sum, zip(*list_general_score)))
    general_score = []
    for val in sum_general_score:
        general_score.append('{"general_score": ' + str(round(val/3)) + '}')

    print(general_score)

    general_score_file = open('general_score.json', 'w')
    general_score_file.write(str(general_score).replace("'", ""))
    general_score_file.close()

generalScore()