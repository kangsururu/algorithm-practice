function solution(str){
    let answer="";
    for(let x of str){
        if(x === 'B') answer+='S';
        else answer+=x;
    }
    return answer;
}