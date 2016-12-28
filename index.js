var readline=require("readline"); //import or use the "readline" module
var exec=require("child_process").exec; //"exec" is used to execute commands and is a method in "child_process" module

var command, com;               //Bunch-
var com_arr, finalcommand;      //of-
var filname;                    //Global variables
var rl=readline.createInterface(process.stdin, process.stdout); //create a readline interface i.e setup readline to use
var dict=["make", "create", "new", "file", "folder"]; //dictionary array having familiar keywords

rl.question("> ", function(answer){ //rl.question is used to output a string and wait for input from user
  command=answer;                 //input is taken in answer variable and inturn put in 'command' for further processing
  com_arr=command.split(/\s+/);   //.split is used to split a string from specific token given in 'regex'(here '/\s+/' is used to tell to split string from spaces)'
  //console.log(com_arr);         //used for static debug
  if(dict.includes(com_arr[0])){ //'.includes' is used to check if something is present in something(here we check if the first word of string is familiar to us specified in "dict")
    for(var i=0;i<com_arr.length;i++){  //used to loop through the array which is a splitted input string by spaces
      if(com_arr[i].includes(".") && i!=com_arr.length-1){ //to check if a certain word has '.' meaning it is filename and is not the last word of input string
        filname=com_arr[i];       //if above condition is true 'that' word is recognised as filename and stored in 'filname'
      }
      if(com_arr[i]=="file"){    //to check if word 'file' is specified in input
        com="runas copy $null >>";  //put command to create a file in 'com'
        //console.log(com);      //used for static debugging
        continue;
      }
      else if(com_arr[i]=="folder"){ //to check if word 'file' is specified in input
        com="mkdir ";           //put command to create a file in 'com'
        //console.log(com);     //used for static debugging
        break;
      }
    }
      for(var i=0;i<com_arr.length;i++){  //to loop through array 'com_arr'
        if(com_arr[i]=="in"){         //to check the address of word 'in' in input
          var rawpath=splitpath(i);   //address i is passed as parameter to funtion 'splitpath'
          var finalpath=retpath(rawpath); //'rawpath' is passed as parameter to function 'retpath'
          if(filname==null){          //to check if 'filname' is empty i.e not specified
          finalcommand=`${com} ${finalpath}`; //generate a final command to execute
          //console.log(filname);       //used for static debugging
          }
          else{
          finalcommand=`${com} ${finalpath}\\${filname}`; //if filname is not empty put filname in command
          //console.log(filname);     //used for static debugging
          }
          exec(finalcommand, function(err, out){  //'exec' is used to execute command in command
            if (out) {
              console.log(out);
            }

            /*else if (err) {
              console.log(err);
            }*/
          });
          break;
        }
      }
    }
  else{
    console.log("please check the input");   //if input doesnt match the keywords in dict output this
  }
  rl.close();
});

function splitpath(ind){  //function to select word that follow word 'in' in input
  var j=0, split_arr=[];
  for(var i=ind+1;i<com_arr.length;i++){
    split_arr[j]=com_arr[i];
    j++;
  }
  return split_arr;
}

function retpath(path_arr){ //to create path putting '\' and ':' wherever necessary
  var temppath=path_arr.join('\\');
  var finalpath=temppath.slice(0, 1)+":"+temppath.slice(1);
  return finalpath;
}
