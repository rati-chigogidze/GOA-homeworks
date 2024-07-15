def add(num1,num2):
    return(num1 + num2)

print(add(12,32))
    
count = 0

def calculator(number1, number2):
    print("1. +")
    print("2. -")
    print("3. *")
    print("4. /")

    choice = int(input("Please enter your choice: "))
    result = 0

    if choice == 1:
        result = number1 + number2
    elif choice == 2:
        result = number1 - number2
    elif choice == 3:
        result = number1 * number2
    elif choice == 4:
        result = number1 * number2
    else:
        print("Invalid choice")
    
    return result



print(calculator(34, 64))
