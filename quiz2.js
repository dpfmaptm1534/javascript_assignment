// 2. 퀴즈 문제 맞추기 게임을 작성
// - 약 20개 이상의 문제를 미리 등록
// - 미리 등록한 문제 중 3개를 출력하고 몇개 맞았는지 확인
// - 3개 모두 맞추지 못할 경우 재시험
// (단, 1문제씩 출력하며 답을 전송 후 3초 후에 다음 문제가 출제)


/*
1. 문제객체
key : 문제번호 q#
value : 배열[문제,답]
*/
const Question ={

    q1 : ["5 + 7 = ?", 5+7],
    q2 : ["6 + 4 = ?", 6+4],
    q3 : ["10 + 50 = ?", 10+50],
    q4 : ["1 + 5 = ?", 1+5 ],
    q5 : ["4 + 7 = ?", 4+7],
    q6 : ["12 + 3 = ?", 12+3],
    q7 : ["7 + 5 = ?", 7+5],
    q8 : ["8 + 2 = ?", 8+2]    
}


//2. 배열 무작위 정렬 함수
function shuffle(array) {
    for (let index = array.length - 1; index > 0; index--) {
    // 무작위 index 값을 만든다. (0 이상의 배열 길이 값)
    const randomPosition = Math.floor(Math.random() * (index + 1));

    // 임시로 원본 값을 저장하고, randomPosition을 사용해 배열 요소를 섞는다.
    const temporary = array[index];
    array[index] = array[randomPosition];
    array[randomPosition] = temporary;
    }
}


//3. 문제출제함수
function func(a, b, c) {
    setTimeout(() => {
        user.push(prompt(a))
        if(user[0]==threeA[0]) point++;
        setTimeout(() => {
            user.push(prompt(b))
            console.log('2')
            if(user[1]==threeA[1]) point++;
            setTimeout(() => {
                user.push(prompt(c))
                console.log('3')
                if(user[2]==threeA[2]) point++;
                if(point==3){
                    alert('만점! 합격입니다');
                        document.getElementById("com").innerHTML='<h1>축하합니다! 합격입니다</h1>';
                }
                else{
                    alert(`${point}개 맞았습니다. 재시험입니다`);

                    user = [];
                    point = 0;
                    shuffle(arr);
                    threeQ=[arr[0][1][0],arr[1][1][0],arr[2][1][0]];
                    threeA=[arr[0][1][1],arr[1][1][1],arr[2][1][1]];
                    func(threeQ[0],threeQ[1],threeQ[2]);
                }
            }, 3000);
        }, 3000);
    }, 0);     
}


let arr = Object.entries(Question); //object의 엔트리값들을 배열로 받기
shuffle(arr);                       //섞기

let threeQ=[arr[0][1][0],arr[1][1][0],arr[2][1][0]];  //문제 3개요소
let threeA=[arr[0][1][1],arr[1][1][1],arr[2][1][1]];  //정답 3개요소
let user=[];  //user작성답안
let point=0;
let re=0;
func(threeQ[0],threeQ[1],threeQ[2]);






