/*Create a function to accept a string and return the size of its smallest word */

let minWord = "";

function minLengthWords(input)
{
  
    let len = input.length;
    let si = 0, ei = 0;
    let min_length = len;
    let min_start_index = 0;
 
    while (ei <= len)
    {
        if (ei < len && input[ei] != ' ')
        {
            ei++;
        }
        else
        {
        
            let curr_length = ei - si;
 
            if (curr_length < min_length)
            {
                min_length = curr_length;
                min_start_index = si;
            }
 
        }
    }
 
    minWord =
    input.substring(min_start_index,min_start_index + min_length);
     
}

let a = " If You Know Where You Stand, Then You Know Where to Land and If You Fall It Won't Matter, Cuz You'll Know That You're Right,";
minLengthWords(a);
console.log(minLengthWords);