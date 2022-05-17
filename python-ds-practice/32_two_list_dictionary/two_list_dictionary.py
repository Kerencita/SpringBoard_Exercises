def two_list_dictionary(keys, values):
    import itertools
    dictionary = {}
    if len(keys) == len(values):
        for (key, value) in zip(keys, values):
            dictionary[key] = value
        return dictionary
    elif len(keys) > len(values):
        for (key, value) in itertools.zip_longest(keys, values):
            dictionary[key] = value
        return dictionary
    elif len(keys) < len(values):
        for (key, value) in zip(keys, values[0:len(keys)]):
            dictionary[key] = value
        return dictionary
        
    """Given keys and values, make dictionary of those.
    
        >>> two_list_dictionary(['x', 'y', 'z'], [9, 8, 7])
        {'x': 9, 'y': 8, 'z': 7}
        
    If there are fewer values than keys, remaining keys should have value
    of None:
    
        >>> two_list_dictionary(['a', 'b', 'c', 'd'], [1, 2, 3])
        {'a': 1, 'b': 2, 'c': 3, 'd': None}
    
    If there are fewer keys, ignore remaining values:

        >>> two_list_dictionary(['a', 'b', 'c'], [1, 2, 3, 4])
        {'a': 1, 'b': 2, 'c': 3}
   """