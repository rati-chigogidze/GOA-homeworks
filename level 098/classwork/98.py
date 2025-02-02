def print_key_value(objects):
    # თითოეულ ობიექტზე ვიტარებთ ლუპს
    for obj in objects:
        # თითოეული გასაღებისა და მნიშვნელობის გამოტანა
        for key, value in obj.items():
            print(f"{key}: {value}")

# ტესტი
objects = [
    {'name': 'lasha', 'age': 30},
    {'name': 'merabi', 'age': 15}
]

print_key_value(objects)
