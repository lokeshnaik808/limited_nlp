# limited_nlp
A lite, basic and limited nlp for the task of creating file or folder.

This is implemented in NodeJs. Lets users enter a natural language input and analyses the input and creates executable commands. I.e user can input "file xyz.docx in E folder1..folder2..folder_n". The program will take this input and create a file with given filename in the given path.

Tips and guidelines:
•	While creating folder your folder name that is to be created should be given strictly at the end of the path
•	Filename can be given after the first keyword and before ‘in’ or the end of the path because the program can identify it.
•	Also after the keyword ‘in’ the strictly the path should be given as the hierarchy i.e. drive folder1..folder2.. folder_n/filename(file name should be given with the extension)
•	Commands given are for windows only. Optimizing this program for Mac/linux will take fair amount of changes in the source code.
•	Also the input should strictly have ‘in’ keyword. As the program identifies this and tries to make out a path. A way around this would mean adding another 20-30 lines of logic code.
•	E.g. for folder “create new folder in E folder1..folder2..foldername” “make new folder in E folder1..folder2..foldername” “new folder in E folder1..folder2..foldername” “folder in E folder1..folder2..foldername”
•	E.g. for are same as above but the file name could be given before the ‘in’ keyword like “create new file in E folder1..folder2..filename.ex” or “create new file filename.ex in E folder1..folder2” or “new file filename.ex in E folder1..folder2” etc. You get the point.
