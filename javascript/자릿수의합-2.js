function solution(arr){
    let answer=[];
    for(let x of arr){
        let sum=x.toString().split('').reduce((a, b)=> a+Number(b), 0);
        answer.push(sum);
    }
    return answer;
}