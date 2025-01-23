def function(name):
  print(name + "surname")

function("Rati")
function("Luka")
function("Davit")



def my_function(name, surname):
  print(name + " " + surname)

my_function("name", "surname")


def my_function(*kids):
  print("The youngest child is " + kids[2])

my_function("Rati", "Luka", "Davit")



def my_function(child3, child2, child1):
  print("The youngest child is " + child3)

my_function(child1 = "Luka", child2 = "Davit", child3 = "Rati")



def my_function(country = "Georgia"):
  print("I am from " + country)

my_function("Sweden")
my_function("India")
my_function("Georgia")
my_function("Brazil")



def my_function(food):
  for i in food:
    print(i)

cars = ["BMW", "Mercedes", "Porshe"]

my_function(cars)



def my_function(i):
  return 5 * i

print(my_function(7))
print(my_function(3))
print(my_function(12))





