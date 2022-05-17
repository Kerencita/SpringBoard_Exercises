def multiple_letter_count(phrase):
    freq_dict = {}
    for char in phrase:
        if char not in freq_dict:
            freq_dict[char] = phrase.count(char)
    return freq_dict


    """Return dict of {ltr: frequency} from phrase.

        >>> multiple_letter_count('yay')
        {'y': 2, 'a': 1}

        >>> multiple_letter_count('Yay')
        {'Y': 1, 'a': 1, 'y': 1}
    """