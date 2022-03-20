def print_upper_words (words):
    """ converts list of words from lowercase to uppercase """
    for word in words:
        print(word.upper())

print_upper_words(["hello", "goodbye", "sayonara", "konichiwa"])


def print_e_upper_words (words):
    """ converts list of words that start with 'e' from lowercase to uppercase """
    for word in words:
        if word[0:1] == "e" or word[0:1] == "E":
            print(word.upper())

print_e_upper_words(["keren", "elvia", "Enano", "carlos"])


def print_upper_words (words, must_start_with):
    """ only prints out words that start with letters specified """
    for word in words:
        for letter in must_start_with:
            if word[0:1] == letter:
                print(word)

print_upper_words(["hello", "hey", "goodbye", "yo", "yes"],
                   must_start_with={"h", "y"})