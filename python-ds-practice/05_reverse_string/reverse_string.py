def reverse_string(phrase):
    phrase_list = list(phrase)
    phrase_list.reverse()
    return ''.join(phrase_list)
    
    """Reverse string,

        >>> reverse_string('awesome')
        'emosewa'

        >>> reverse_string('sauce')
        'ecuas'
    """
