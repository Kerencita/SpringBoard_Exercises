def compact(lst):
    #used list comprehension combining mapping and filtering
    result_lst = [item for item in lst if bool(item)]
    return result_lst

    """Return a copy of lst with non-true elements removed.

        >>> compact([0, 1, 2, '', [], False, (), None, 'All done'])
        [1, 2, 'All done']
    """

