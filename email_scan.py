import sys
import os
import time

targ = sys.argv[1]

os.system("dig TXT " + targ + "| grep IN > " + targ + "_email_spf.txt ")
time.sleep(2)

def checkIfSPFExist():
    with open(targ + '_email_spf.txt') as f:
        if not 'spf' in f.read():
            print("No tiene SPF - 0")

def checkPermanentError():
    with open(targ + '_email_spf.txt') as f:
        if 'error' in f.read():
            print("Tiene un permanent error - 3")

def checkIfExploitable():
    with open(targ + '_email_spf.txt') as f:
        if '~all' in f.read():
            print("Exploitable - 5")

def checkTooManyLookups():
    with open(targ + '_email_spf.txt') as f:
        if 'lookups' in f.read():
            print("Tiene más de 10 lookups - 6")

def checkIfAny():
    with open(targ + '_email_spf.txt') as f:
        if not 'error' and not '~all' and not 'lookups' and not 'spf' in f.read():
            print("El SPF esta bien configurado - 10")

def checkDMARC():
    os.system("python3 -m checkdmarc " + targ + " > " + targ + "_email_dmarc.json")
    with open(targ + '_email_dmarc.json') as dmarc_file:
        if 'none' in dmarc_file.read():
            print('Puntuacion 3')
            return 3
        elif 'quarentine' in dmarc_file.read():
            print('Puntuacion 7')
            return 7
        elif 'reject' in dmarc_file.read():
            print('Puntuacion 10')
            return 10
        else:
            print('No tiene DMARC')
            return 0


checkIfSPFExist()

checkPermanentError()

checkIfExploitable()

checkTooManyLookups()

checkIfAny()

checkDMARC()