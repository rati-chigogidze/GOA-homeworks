countries = ["Georgia", "France", "United Kingdom"]
for x in countries:
  print(x)


countries1 = ["Albania", "Spain", "China"]
for x in countries1:
    for y in countries:
        print(x, y)


countries = (input('please enter: Georgia, France or United kingdom and i will guess its capital:'))
  
if countries == 'Georgia':
    print('Tbilisi')
elif countries == ('France'):
    print('Paris')
elif countries == ('United Kingdom'):
    print('London')
else:
    print('Enter only: Georgia, France or United kingdom.')
   
