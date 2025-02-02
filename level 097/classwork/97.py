def get_unique_elements(matrix):
    # 1. გარდაქმნილია 2D მატრიცა 1D (ფლატ)
    flat_list = [item for sublist in matrix for item in sublist]
    
    # 2. ელემენტების სიხშირე
    element_count = {}
    
    for item in flat_list:
        if item in element_count:
            element_count[item] += 1
        else:
            element_count[item] = 1
    
    # 3. მხოლოდ უნიკალური ელემენტები (რომლებიც მხოლოდ ერთხელ გვხვდებიან)
    unique_elements = [item for item, count in element_count.items() if count == 1]
    
    return unique_elements

# ტესტი
matrix = [
    [1, 2, 3],
    [4, 5, 2],
    [6, 3, 1]
]

result = get_unique_elements(matrix)
print(result)  # უნდა დაბეჭდოს [4, 5, 6]
