def three_odd_numbers(nums):
    sum_is_odd = False
    for i in range(len(nums)):
        current_nums = nums[i:i+3]
        if len(current_nums) == 3 and sum(current_nums) % 2 == 1:
            sum_is_odd = True
    
    return sum_is_odd




    """Is the sum of any 3 sequential numbers odd?"

        >>> three_odd_numbers([1, 2, 3, 4, 5])
        True

        >>> three_odd_numbers([0, -2, 4, 1, 9, 12, 4, 1, 0])
        True

        >>> three_odd_numbers([5, 2, 1])
        False

        >>> three_odd_numbers([1, 2, 3, 3, 2])
        False
    """
