def same_frequency(num1, num2):
    frequency = True
    num1_list = list(str(num1))
    num2_list = list(str(num2))

    for num in num1_list:
        if num1_list.count(num) != num2_list.count(num):
            frequency = False
    
    return frequency

    """Do these nums have same frequencies of digits?
    
        >>> same_frequency(551122, 221515)
        True
        
        >>> same_frequency(321142, 3212215)
        False
        
        >>> same_frequency(1212, 2211)
        True
    """