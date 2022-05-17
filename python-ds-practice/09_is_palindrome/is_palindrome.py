def is_palindrome(phrase):
    phrase_lower = phrase.lower().replace(" ", "")
    phrase_lst = list(phrase_lower)
    phrase_lst.reverse()
    phrase_join = "".join(phrase_lst)
    return phrase_lower == phrase_join

    """Is phrase a palindrome?

    Return True/False if phrase is a palindrome (same read backwards and
    forwards).

        >>> is_palindrome('tacocat')
        True

        >>> is_palindrome('noon')
        True

        >>> is_palindrome('robert')
        False

    Should ignore capitalization/spaces when deciding:

        >>> is_palindrome('taco cat')
        True

        >>> is_palindrome('Noon')
        True
    """
