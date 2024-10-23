install -> npm install styled-components


1. Split Pattern :
   
    used to show 
       [    left   |  right    ]
    
    - uses flex property 
# basic split screen [demo]
![Alt text](image-1.png)

we add left width and right width to it and now we can dynmically generate different sizes 

test - 1
 <SplitScreen Left={LeftSide} Right={RightSide} lw={2} rw={3}/>
 ![Alt text](image-2.png)

 test - 2 
<SplitScreen Left={LeftSide} Right={RightSide} lw={1} rw={10}/>
 ![Alt text](image-3.png)

 -- instead of passing left and right side we can pass them as children 

 
