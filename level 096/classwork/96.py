# ობიექტის შექმნა
person = {
    "name": "John",
    "age": 30,
    "city": "New York",
    "job": "Engineer",
    "country": "USA",
    "hobby": "Reading"
}

# პირველი ნაწილი: ყველა key: value პარამეტრის გამოყვანა
print("ყველა key: value პოსტი:")
for key, value in person.items():
    print(f"{key}: {value}")

# ბონუსი: key: value მხოლოდ იმ შემთხვევაში თუ value-ს სიგრძე 5-ზე ნაკლებია
print("\nKey-value მხოლოდ მოკლე value-ს სიგრძით:")
for key, value in person.items():
    if len(value) < 5:
        print(f"{key}: {value}")
