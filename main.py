from multiprocessing.connection import wait
import threading
import time
from scrapDeFiProtocols import get_domains, get_10_domains
import os
import logging

domains = get_domains()

domains_list = list(domains)

enumerate_domains = len(domains_list)

def thread_function(name):
    logging.info("Thread %s: starting", name)
    logging.info("Thread %s: finishing", name)

if __name__ == "__main__":
    format = "%(asctime)s: %(message)s"
    logging.basicConfig(format=format, level=logging.INFO,
                        datefmt="%H:%M:%S")

    threads = list()
    
    for domain in domains:
        logging.info("Audited protocol: %s", domain)
        x = threading.Thread(target=os.system("python scan/DNS_scan.py " + domain), args=(domain,))
        threads.append(x)
        x.start()

    print("Audited protocols: " + threads)
