def partition(lst, fn):
    #go through each item in list
    #if fn(item) is true add to one list
    #if fn(item) is false add to other list
    #use list comprehension and filtering
    #return the two lists joined as one list
    
    true_items = [item for item in lst if fn(item) == True]
    false_items = [item for item in lst if fn(item) == False]
    result = [true_items, false_items]
    return result

    """Partition lst by predicate.
     
     - lst: list of items
     - fn: function that returns True or False
     
     Returns new list: [a, b], where `a` are items that passed fn test,
     and `b` are items that failed fn test.

        >>> def is_even(num):
        ...     return num % 2 == 0
        
        >>> def is_string(el):
        ...     return isinstance(el, str)
        
        >>> partition([1, 2, 3, 4], is_even)
        [[2, 4], [1, 3]]
        
        >>> partition(["hi", None, 6, "bye"], is_string)
        [['hi', 'bye'], [None, 6]]
    """