import random
import pronouncing
from textblob import TextBlob, Word, Blobber
import sys
import time
from importlib import reload

#prompting user for a choice
print("type d for a Dr. Suess poem")
print("type n for a poem from the shrek and bee movie script")
print("type s for a Smash Mouth poem")
print("type r for a poem made of other poems")
print("type c to input your own file.")
choice =input("enter your choice: ")

#assigning the correct name to file name variable
if(choice == 'd'):
	filename = "s.txt"
if(choice == 'n'):
	filename = "novel.txt"
if(choice == 's'):
	filename = "allstar.txt"
if(choice == 'r'):
	filename = "rhymes.txt"
if(choice == 'c'):
	filename = input("enter in the file name:")
#filling the array with lines from the chosen file
poem_array = []
with open(filename) as poem_file:
	for line in poem_file:
		poem_array.append(line)
		#print line

#looping through array, finding lines that rhyme with random chosen line and priting said lines.
count = 0
random.seed(time.time())
first_line = random.choice(poem_array)
print(first_line)
a = TextBlob(first_line)
rhyming_word = a.words[-1]
while count < len(poem_array):
	sentence = TextBlob(poem_array[count])
	comparing_word = sentence.words[-1]
	if(rhyming_word in pronouncing.rhymes(comparing_word)):
		print(sentence)
	count +=1