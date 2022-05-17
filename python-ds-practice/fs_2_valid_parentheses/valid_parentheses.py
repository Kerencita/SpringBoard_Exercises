def valid_parentheses(parens):

    open_paren = []
    close_paren = []
    if parens[0] != "(":
        return False
    for paren in parens:
        if paren == "(":
            open_paren.append(paren)
        elif paren == ")":
            close_paren.append(paren)
    
    return len(open_paren) == len(close_paren)

    """Are the parentheses validly balanced?

        >>> valid_parentheses("()")
        True

        >>> valid_parentheses("()()")
        True

        >>> valid_parentheses("(()())")
        True

        >>> valid_parentheses(")()")
        False

        >>> valid_parentheses("())")
        False

        >>> valid_parentheses("((())")
        False

        >>> valid_parentheses(")()(")
        False
    """