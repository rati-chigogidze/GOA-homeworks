def longest_increasing_subarray(arr):
    if not arr:
        return []

    longest = []
    current = [arr[0]]

    for i in range(1, len(arr)):
        if arr[i] > arr[i - 1]:
            current.append(arr[i])
        else:
            if len(current) > len(longest):
                longest = current
            current = [arr[i]]

    # ბოლოს უნდა დავამატოთ ბოლო ნაწილი, თუ ის უფრო გრძელი იყო
    if len(current) > len(longest):
        longest = current

    return longest
