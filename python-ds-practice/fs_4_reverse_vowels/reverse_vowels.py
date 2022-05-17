def reverse_vowels(s):
    vowels = ['a', 'A', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u']
    s_list = list(s)

    vowels_in_s = [char for char in s if char in vowels]
    vowel_indeces = [i for i in range(len(s)) if s[i] in vowels]
    
    vowels_in_s.reverse()

    for (index, vowel) in zip(vowel_indeces, vowels_in_s):
        s_list.insert(index, vowel)
        s_list.pop(index+1)

    return ''.join(s_list)




    """Reverse vowels in a string.

    Characters which are not vowels do not change position in string, but all
    vowels (y is not a vowel), should reverse their order.

    >>> reverse_vowels("Hello!")
    'Holle!'

    >>> reverse_vowels("Tomatoes")
    'Temotaos'

    >>> reverse_vowels("Reverse Vowels In A String")
    'RivArsI Vewols en e Streng'

    reverse_vowels("aeiou")
    'uoiea'

    reverse_vowels("why try, shy fly?")
    'why try, shy fly?''
    """