#!/bin/bash
#Author: Maura Kieft
#Date: 9/19/2019

#Problem 1 Code: 
#prompts user to input a file name and a regular expression
read -p 'Filename: ' fName
read -p 'Regular Expression: ' regEx

grep regEx fName

grep -c '^[0-9]*$' 'regex_practice.txt' 

grep -c '@' 'regex_practice.txt'

grep -c '303-' 'regex_practice.txt'
grep '.@geocities.com' 'regex_practice.txt' >> 'email_results.txt'

