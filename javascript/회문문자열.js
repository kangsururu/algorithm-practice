function solution(arr){
    let answer="YES";
    arr=arr.toLowerCase();
    if(arr.split('').reverse().join('') !== arr) return "NO";
    return answer;
}