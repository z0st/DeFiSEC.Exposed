from defillama import DefiLlama
import socket
import json

llama = DefiLlama()

response = llama.get_all_protocols()

def get_all_protocols():
    with open("protocol_all.txt", "w") as file:
        for protocols in response:
            print(protocols)

def get_protocol_name():
    with open("protocol_names.json", "w") as file:
        name_list = []
        for protocols in response:
            name = str(protocols["name"])
            name_list.append(name)
        json_list = json.dumps(name_list)
        file.write(json_list)
        file.close

def get_protocol_logo():
    with open("protocol_logo.json", "w") as file:
        logo_list = []
        for protocols in response:
            logo = str(protocols["logo"])
            logo_list.append(logo)
        json_list = json.dumps(logo_list)
        file.write(json_list)
        file.close

def get_protocol_address():
    with open("protocol_address.json", "w") as file:
        address_list = []
        for protocols in response:
            address = str(protocols["address"])
            address_list.append(address)
        json_list = json.dumps(address_list)
        file.write(json_list)
        file.close

def get_protocol_symbol():
    with open("protocol_symbol.json", "w") as file:
        symbol_list = []
        for protocols in response:
            symbol = str(protocols["symbol"])
            symbol_list.append(symbol)
        json_list = json.dumps(symbol_list)
        file.write(json_list)
        file.close
        return symbol_list

def get_10_protocol_symbol():
    with open("first_10_protocol_symbol.json", "w") as file:
        symbol_list = []
        for protocols in response:
            symbol = str(protocols["symbol"])
            symbol_list.append(symbol)
        json_list = json.dumps(symbol_list[0:10])
        file.write(json_list)
        file.close
        return symbol_list[0:10]

get_10_protocol_symbol()

def get_10_protocol_tvl():
    with open("first_10_protocol_tvl.json", "w") as file:
        tvl_list = []
        for protocols in response:
            tvl = protocols["chainTvls"]
            tvl_list.append(tvl)
        print(tvl_list[2])

        json_list = json.dumps(tvl_list[0:10])
        file.write(json_list)
        file.close

print(get_10_protocol_tvl())

# def protocols():
#     protocols_list = []
#     for protocols in response:
#         print(protocols)

# protocols()

def get_protocol_url():
    with open("protocol_url.json", "w") as file:
        url_list = []
        for protocols in response:
            url = str(protocols["url"])
            url_list.append(url)
        json_list = json.dumps(url_list)
        file.write(json_list)
        file.close

def get_protocol_related_IPs():
    with open("protocol_ip_domains.json", "w") as file:
        ip_list = []
        for protocols in response:
            ip = str(protocols["url"]).replace("https://", "")
            ip_without_uri = str(ip).replace("/", "")
            try:
                related_IPs_domains = socket.gethostbyname_ex(ip_without_uri)
            except:
                print("No se pudo encontrar dominios ni IPs relacionados")
            ip_list.append(related_IPs_domains)
        json_list = json.dumps(ip_list)
        file.write(json_list)
        file.close

def get_domains():
    domain_list = []
    for protocols in response:
        domain = str(protocols["url"]).replace("https://", "").replace("/", "")
        domain_list.append(domain)
    with open("domains.json", "w") as file:
        json_list = json.dumps(domain_list)
        file.write(json_list)
        file.close
    return domain_list

get_domains()

def get_10_domains():
    list_total_domains = list(get_domains())
    with open("first_10_domains.json", "w") as file:
        json_list = json.dumps(list_total_domains[0:10])
        file.write(json_list)
        file.close

get_10_domains()

def get_protocol_description():
    with open("protocol_description.json", "w") as file:
        description_list = []
        for protocols in response:
            description = str(protocols["description"])
            description_list.append(description)
        json_list = json.dumps(description_list)
        file.write(json_list)
        file.close

def get_protocol_category():
    with open("protocol_category.json", "w") as file:
        category_list = []
        for protocols in response:
            category = str(protocols["category"])
            category_list.append(category)
        json_list = json.dumps(category_list)
        file.write(json_list)
        file.close

def get_protocol_chains():
    with open("protocol_chains.json", "w") as file:
        chains_list = []
        for protocols in response:
            chains = str(protocols["chains"])
            chains_list.append(chains)
        json_list = json.dumps(chains_list)
        file.write(json_list)
        file.close

def protocols_data():
    with open("protocols_data.json", "w") as file:
        protocols_list = []
        for protocols in response:
            protocols_list.append(protocols)
        json_list = json.dumps(protocols_list)
        file.write(json_list)
        file.close

protocols_data()