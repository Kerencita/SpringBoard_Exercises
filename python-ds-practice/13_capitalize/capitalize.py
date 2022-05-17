def capitalize(phrase):
    first_letter = phrase[0:1]
    first_ltr_upper = first_letter.upper()
    result = phrase.replace(first_letter, first_ltr_upper, 1)

    return result
    """Capitalize first letter of first word of phrase.

        >>> capitalize('python')
        'Python'

        >>> capitalize('only first word')
        'Only first word'
    """