#name = "rati"
#name არის ცვლადი
# = არის ცვლადისთვის მნიშვნელობის მიმნიჭებელი ობიექტი
# "rati" არის ცვლადისთვის მნიშვნელობა

surname = "chigogidze"

#print(name)
#პრინტ ფუნქციას გადაეცემა ეკრანზე გამოსატანი ობიექტი

name = "rati" #ეს არის (string) ტიპის ცვლადი
age = 13 # ეს არის int ( integer ) მთელი რიცხვი
height = 168 #ეს არის float ტიპის ცვლადი ( ათწილადი )
#boolean (bool) ტიპის ცვლადი

knows_programing = True  #True ან False
is_ugly = False   #snakecase( უბრალოდ წერის სტილი სტანდარტულად)

isUgly = False # ჯავასკრიპტული camelcase


# print(name + " " + surname)

# სტრინგი არის ბრჭყალებში მოქცეული სიმბოლოები
# print(name + age)

#print(type(age))
#print(type(name))
#print(type(surname))
#print(type(height))
#print(type(knows_programing))

print(name + " " + str(age))

print(name + " " + surname + " " + str(age) + " " + str(height) + " " +str(knows_programing))