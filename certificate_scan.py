import sys
import os
import time
import ssl
import socket
import json

targ = sys.argv[1]

port = 443

def checkIfSSL():
    os.system('python ssl_checker.py -J -H ' + targ)
    with open(targ + '.json') as f:
        if not '"cert_valid": true' in f.read():
            print('No tiene certificado SSL - 0')
            return 0
        else:
            print('Tiene SSL')
            return 3

checkIfSSL()

def checkTLSVersion():
    context = ssl.create_default_context()
    with socket.create_connection((targ, 443)) as sock:
        with context.wrap_socket(sock, server_hostname=targ) as ssock:
            print(ssock.version())
            if ssock.version() == 'TLSv1.3':
                print('Tiene TLSv1.3 - 10')
                return 10

checkTLSVersion()

def checkHeartbleed():
    check_Heartbleed = os.system('nmap -p 443 --script ssl-heartbleed ' + targ)
    file = open(targ + '_heartbleed.txt', 'w')
    file.write(str(check_Heartbleed))
    file.close()
    file_Heartbleed = open(targ + '_heartbleed.txt', 'r')
    if 'VULNERABLE' in file_Heartbleed.read():
        print('Vulnerable a Heartbleed - 0')
        return 0

checkHeartbleed()

def checkPoodle():
    check_Heartbleed = os.system('nmap -sV --version-light --script ssl-poodle -p 443 ' + targ)
    file = open(targ + '_poodle.txt', 'w')
    file.write(check_Heartbleed)
    file.close()
    file_Heartbleed = open(targ + '_poodle.txt', 'r')
    if 'VULNERABLE' in file_Heartbleed.read():
        print('Vulnerable a POODLE - 0')
        return 0

checkPoodle()

def checkFreak():
    check_Heartbleed = os.system('nmap -p 443 --script ssl-enum-ciphers -oN freak_443 ' + targ)
    file = open(targ + '_freak.txt', 'w')
    file.write(check_Heartbleed)
    file.close()
    file_Heartbleed = open(targ + '_freak.txt', 'r')
    if 'VULNERABLE' in file_Heartbleed.read():
        print('Vulnerable a FREAK - 0')
        return 0

checkFreak()

score_list = [checkIfSSL(), checkTLSVersion(), checkHeartbleed(), checkPoodle(), checkFreak()]
score = sorted(score_list)[0]
print(score)

json_file = open('certs_score.json', 'a')
data = {
    "domain": targ,
    "certs_score": score 
}
to_json = json.dumps(data, indent=4)
json_file.write(to_json)

print(to_json)