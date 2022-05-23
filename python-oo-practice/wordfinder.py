"""Word Finder: finds random words from a dictionary.

 Attributes
 ------------
 path: relative path to .txt file containing words

"""
from random import choice

class WordFinder:
    
    example_var = 0

    def __init__(self, path):
        self.path = path
        # calling function to get list of words from path
        self.words = self.get_words(self.path)
        print(f"{len(self.words)} words read")

    def get_words(self, path):
        """ function to generate list of random words, takes in path to word file"""
        file = open(path, "r")
        words_list = []

        for line in file:
            words_list.append(line[:-1])
        
        file.close()
        return words_list

    def random(self):
        """ function to generate a random word from the list of words"""
        return choice(self.words)

class SpecialWordFinder(WordFinder):
    def __init__(self, path):
        super().__init__(path)

    def get_words(self, path):
        """updated function to exclude blank lines and special character lines"""
        word_list = super().get_words(path)
        no_special_char = [line for line in word_list if line[0:1] != "#"]
        no_blanks = [line for line in no_special_char if line != '']

        return no_blanks
    
    def random(self):
        return choice(self.get_words(self.path))