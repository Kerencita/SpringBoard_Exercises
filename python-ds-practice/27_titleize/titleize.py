def titleize(phrase):
    phrase_list = phrase.split(' ')
    phrase_result = []
    for word in phrase_list:
        word_capitalized = word.capitalize()
        phrase_result.append(word_capitalized)
    return ' '.join(phrase_result)
    
    """Return phrase in title case (each word capitalized).

        >>> titleize('this is awesome')
        'This Is Awesome'

        >>> titleize('oNLy cAPITALIZe fIRSt')
        'Only Capitalize First'
    """
