num = 0


while num < 10:
    print("Rati")
    num = num + 1


sum = 0


while sum <= 20:
    print(sum)
    sum = sum + 2


#guess game



num = int(input("please enter your number:"))
    
while num !=5:
    num = int(input("please enter your number:"))

    if num == 7:
        print("you won!")

    else:
        print("incorrect please try again:")
