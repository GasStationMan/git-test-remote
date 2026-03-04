/**
 * 📌 단축 평가
 * 1. Short-Circuit Evaluation
 * 2. 표현식을 평가하는 도중 평가 결과가 확정 된 경우 나머지 평가 과정을 생략하는 것
 *     → 논리 연산자의 평가 결과가 확정 된 경우 나머지 평가 과정이 생략됨 
 * 3. 종류
 *   1) 논리 AND (&&)
 *       → 왼쪽 피연산자가 falsy 값일 경우 왼쪽 피연산자를 바로 반환 (오른쪽은 평가하지 않음)
 *       → 왼쪽 피연산자가 truthy 값일 경우 오른쪽 피연산자를 평가해서 반환 
 *   2) 논리 OR (||)
 *       → 왼쪽 피연산자가 truthy 값일 경우 왼쪽 피연산자를 바로 반환 (오른쪽은 평가하지 않음)
 *       → 왼쪽 피연산자가 falsy 값일 경우 오른쪽 피연산자를 평가해서 반환 
 */

console.log(false && 'banana');
console.log(0 && 'banana');
console.log(''&& 'banana');
console.log(true&& 'banana');
console.log(10&& 'banana');
console.log('apple'&& 'banana'); // 뒤에 값까지 판단을 하고 보여주게 된다. 그래서 이건 출력값이 나올 수 있으니까 바바나.

console.log(true || 'banana');
console.log(10 || 'banana');
console.log('apple'|| 'banana');
console.log(false || 'banana');
console.log(0|| 'banana');
console.log(''|| 'banana');

// 적용 1. 조건문을 간결하게 표현할떄 사용, 로딩중일 상태일 경우 로딩중입니다. 출력.

let isLoading = true;
if(isLoading){
    console.log("로딩중입니다...")


}

//위 코드를 아래코드로 한줄로 가능.
isLoading && console.log("로딩중입니다..."); // 좌항의 결과가 true일 경우 뒤쪽 구문 실행
                                            // 좌항의 결과가 false일 경우 뒤쪽 구문 실행 X
// 사용자 입력값이 존재할 경우 해당 값 출력
let input ="안녕"
input && console.log(`사용자 입력값 : &{input}`);


// 입력값과 관련된 let 으로 시작하는 falsy 값 관련 구현 방법

