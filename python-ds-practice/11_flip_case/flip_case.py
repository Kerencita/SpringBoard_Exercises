def flip_case(phrase, to_swap):
    # assigning variables to upper and lower case letter
    char_lower = to_swap.lower()
    char_upper = to_swap.upper()
    # making a list from the string
    phrase_lst = list(phrase)
    #replace letter in list from lower case to upper case
    for i in range (len(phrase_lst)):
        if phrase_lst[i] == char_lower:
            phrase_lst[i] = char_upper
        elif phrase_lst[i] == char_upper: 
            phrase_lst[i] = char_lower
    # return list as string
    return "".join(phrase_lst)



    """Flip [to_swap] case each time it appears in phrase.

        >>> flip_case('Aaaahhh', 'a')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'A')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'h')
        'AaaaHHH'

    """

