question: //given an array and a target. you have to make the whole array prime by adding numbers from [1 to k].
// if a number can't become prime set it to -1;
let nums=5;
let arr=[10,12,15,20,22]
let k=3;
let arr2=[];
for(let i=0;i<nums.length;i++){
  let sum=0;
  for(let j=0;j<nums[i];j++){
    if(nums[i]%j==0){
      sum++;
    }
  }
  let sum3=0;
  if(sum==0 && nums[i]>1){
    arr2.push(nums[i])
    continue
  }
  if(nums[i]==0){
    arr2.push(2)
    continue
  }
  else{
    for(let x=1;x<=k;x++){
      let temp=nums[i]
      temp=temp+x;
      let sum2=0;
      for(let a=2;a<temp;a++){
        if(temp%a==0){
          sum2++;
          break;
        }
      }
      console.log(sum2)
      if(sum2==0){
        arr2.push(temp)
        sum3++
        break;
      }
       }
       if(sum3==0 && sum>0){
         arr2.push(-1)
       }
  }
    console.log(sum,sum3)
  }

return arr2