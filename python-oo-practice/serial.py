"""Python serial number generator."""

from typing import Counter


class SerialGenerator:

    counter = 0

    def __init__(self, start):
        self.start = start

    def generate(self):
        if self.counter == 0:
            self.counter += 1
            return self.start
        gen_value = self.start + self.counter
        self.counter += 1
        return gen_value
    
        """ function to generate value from start input and add one to it each time the function is called"""
    
    def reset(self):
        self.start - self.counter
        self.counter = 0

        """ resets the value of the SerialGenerator object back to its original start value """

    def __repr__(self):
        return f"<Serial Generator start = {self.start}  next = {self.start + self.counter}>"

    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """

