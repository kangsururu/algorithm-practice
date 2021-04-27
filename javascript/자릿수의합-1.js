function solution(arr){
    let answer=[];
    for(let x of arr){
        let sum=0, tmp=x;
        while(tmp){
            sum+=(tmp%10);
            tmp=Math.floor(tmp/10);
        }
        answer.push(sum);
    }
    return answer;
}