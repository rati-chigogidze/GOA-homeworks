def first_non_repeated_char(s):
    
    for char in s:
        if s.count(char) == 1:
            return char
        else:
            return False