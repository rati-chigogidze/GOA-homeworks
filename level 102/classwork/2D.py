def first_character_non_repeated(s):
   
    for letter in s:
        if s.count(letter) == 1:  
            return letter  
    return None  

print(first_character_non_repeated("aabbcsshse")) 
print(first_character_non_repeated("aabbcxsxf"))  
print(first_character_non_repeated("abasxcde"))  


def has_unique_chars(s):
   
    return len(s) == len(set(s)) 


print(has_unique_chars("abcdef"))  
print(has_unique_chars("aabbcc"))  
print(has_unique_chars("12345"))   
print(has_unique_chars("abcdeabc"))
