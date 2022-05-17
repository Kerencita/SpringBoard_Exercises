def list_check(lst):
    list_check_result = True
    for item in lst:
        if not isinstance(item, list):
            list_check_result = False
    return list_check_result

    """Are all items in lst a list?

        >>> list_check([[1], [2, 3]])
        True

        >>> list_check([[1], "nope"])
        False
    """
