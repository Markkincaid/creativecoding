import markovify
from art import *

novel = ''

Art = text2art("Shrek The A.I. Novel")
chptr1 = text2art("-----------Chapter1-----------")
end = text2art("THE END")
fo = open("/home/mark/Documents/shreknovel.txt","w")
fo.write(Art)
fo.write(chptr1)
with open("/home/mark/Documents/Shrek.txt") as f:
	text = f.read()
chapter_number = 2
text_model = markovify.Text(text)
number = 0
for i in range(8000):
	number +=1
	fo.write(str(text_model.make_sentence()) + "\n")
	if number % 650 == 0:
		chapter_art = text2art("-----------Chapter" + str(chapter_number)+"-----------")
		fo.write(chapter_art)
		chapter_number +=1
fo.write(end)