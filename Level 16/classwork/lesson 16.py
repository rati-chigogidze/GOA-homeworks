age = int(input('please enter your age:'))

if age >= 5 and age < 13:
    print('you are kid')

elif age > 13 and age < 18:
    print('you are teen')

else:
    print('you are adult')




fav_movies = ['spiderman', 'gravity falls', 'avengers']

fav_musics = ['diamonds in the sky', 'phonk', 'sweater weather']

favourites = [fav_movies, fav_musics]


print(fav_movies[len(fav_movies) -1])
print(fav_musics[len(fav_musics) -1])
