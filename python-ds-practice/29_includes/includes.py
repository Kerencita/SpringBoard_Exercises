def includes(collection, sought, start=None):
    in_collection = False
    #if set, ignore start
    if isinstance(collection, set):
        start = None
        if sought in collection:
            in_collection = True
    #if dictionary, ignore start
    if isinstance(collection, dict):
        start = None
        for key in collection:
            if collection[key] == sought:
                in_collection = True
    if start == None:
        if sought in collection:
            in_collection = True
    if start != None:
        if sought in collection[start::]:
            in_collection = True
    
    return in_collection

    """Is sought in collection, starting at index start?

    Return True/False if sought is in the given collection:
    - lists/strings/sets/tuples: returns True/False if sought present
    - dictionaries: return True/False if *value* of sought in dictionary

    If string/list/tuple and `start` is provided, starts searching only at that
    index. This `start` is ignored for sets/dictionaries, since they aren't
    ordered.

        >>> includes([1, 2, 3], 1)
        True

        >>> includes([1, 2, 3], 1, 2)
        False

        >>> includes("hello", "o")
        True

        >>> includes(('Elmo', 5, 'red'), 'red', 1)
        True

        >>> includes({1, 2, 3}, 1)
        True

        >>> includes({1, 2, 3}, 1, 3)  # "start" ignored for sets!
        True

        >>> includes({"apple": "red", "berry": "blue"}, "blue")
        True
    """