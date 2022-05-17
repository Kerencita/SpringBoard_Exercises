def vowel_count(phrase):
    vowels = ['a', 'e', 'i', 'o', 'u']
    frequency_map = {}
    for char in phrase:
        char_lower = char.lower()
        if char_lower in frequency_map:
            frequency_map[char_lower] += 1

        elif char_lower in vowels:
            frequency_map[char_lower] = 1
    
    return frequency_map
    """Return frequency map of vowels, case-insensitive.

        >>> vowel_count('rithm school')
        {'i': 1, 'o': 2}
        
        >>> vowel_count('HOW ARE YOU? i am great!') 
        {'o': 2, 'a': 3, 'e': 2, 'u': 1, 'i': 1}
    """