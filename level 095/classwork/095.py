def check_winner(board):
    # Check rows and columns for a winner
    for i in range(3):
        if board[i][0] == board[i][1] == board[i][2] != "":
            return board[i][0]  # Row winner
        if board[0][i] == board[1][i] == board[2][i] != "":
            return board[0][i]  # Column winner
    
    # Check diagonals for a winner
    if board[0][0] == board[1][1] == board[2][2] != "":
        return board[0][0]  # Diagonal winner
    if board[0][2] == board[1][1] == board[2][0] != "":
        return board[0][2]  # Diagonal winner
    
    # Check for tie - if all cells are filled and no winner
    for row in board:
        if "" in row:
            return None  # There's still an empty space, no tie yet
    
    return "Tie"  # If no winner and no empty cells, it's a tie

# Example of calling the function with a game board
board = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['O', 'X', 'X']
]

result = check_winner(board)
print(result)  # Output: X
