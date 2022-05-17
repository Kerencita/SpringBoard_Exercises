def multiply_even_numbers(nums):
    total_value = 1
    for num in nums:
        # if number is even
        if num % 2 == 0:
            total_value *= num
        else: 
            continue

    return total_value




    """Multiply the even numbers.
    
        >>> multiply_even_numbers([2, 3, 4, 5, 6])
        48
        
        >>> multiply_even_numbers([3, 4, 5])
        4
        
    If there are no even numbers, return 1.
    
        >>> multiply_even_numbers([1, 3, 5])
        1
    """