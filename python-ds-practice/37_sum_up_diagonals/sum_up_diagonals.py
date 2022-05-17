def sum_up_diagonals(matrix):
    counter = 0
    reverse_counter = len(matrix)-1
    TL_BR_sum = 0
    BL_TR_sum = 0
    for list in matrix:
        TL_BR_sum += list[counter]
        counter+= 1
    
    for list in matrix:
        BL_TR_sum += list[reverse_counter]
        reverse_counter -= 1
    
    return TL_BR_sum + BL_TR_sum



    """Given a matrix [square list of lists], return sum of diagonals.

    Sum of TL-to-BR diagonal along with BL-to-TR diagonal:

        >>> m1 = [
        ...     [1,   2],
        ...     [30, 40],
        ... ]
        >>> sum_up_diagonals(m1)
        73

        >>> m2 = [
        ...    [1, 2, 3],
        ...    [4, 5, 6],
        ...    [7, 8, 9],
        ... ]
        >>> sum_up_diagonals(m2)
        30
    """