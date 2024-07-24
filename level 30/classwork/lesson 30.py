# def filter_odd(numbers_list):
#     even_numbers =[]

#     for number in numbers_list:
#         if number % 2 == 0:
#             even_numbers.append(number)


# filter_odd([1,2,3,4,5,6,7,8,9,])


def even_sum(numbers_list):
    even_numbers = []


    for number in numbers_list:
        if number % 2 == 0:
            even_numbers.append(number)


result = even_sum([1,2,3,4,5,6,7,8,9,])

print(result)

