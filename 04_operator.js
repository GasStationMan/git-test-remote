/**
 * 📌 연산자
 * 1. 산술 연산자
 *   1) 이항 연산자 
 *   2) 종류
 *       → 덧셈(+), 뺄셈(-), 곱셈(*), 나눗셈(/), 나머지(%)
 *       → 제곱(**) => ES7에서 추가된 연산자
**/
console.log(10+10);
console.log(10-10);
console.log(10/20);
console.log(10%20);
console.log(10**10);


/*

 * 2. 증감 연산자
 *   1) 단항 연산자
 *   2) 변수 값을 1씩 증가/감소
 *   3) 종류
 *       → 증가(++), 감소(--) !!!!!!!
 * 
 */ 
let num = 10;
console.log(num);
console.log(num);
num++;
console.log(num++);    // 이건 12
console.log(++num);  // 선증가 후출력이라 이건 13
/*
 * 3. 대입(할당) 연산자 
 *   1) 오른쪽 값을 왼쪽 변수에 할당 !!!!!!!
 *   2) 종류
 *       → 대입(=)
 *       → 복합 대입(+=, -=, *=, **=, /=, %=)  누적해서 더하고,빼고,곱하고, 승곱하고,나누고,나머지만들고
 * 
 */
let num2= 10;
num2 += 20; // num2 = num2+20;
num2 -= 20;
num2 *= 20;
/*
 * 4. 비교 연산자
 *   1) 이항 연산자 
 *   2) 두 피연산자를 비교하여 참/거짓을 반환
 *   3) 종류
 *       → 대소 비교(>, <, >=, <=)
 *       → 동등 비교(==, !=)    같은 형태인지
 *       → 일치 비교(===, !==)   같은 값에 같은 형태인지
 */ 
console.log(10>5);  //대소 비교
console.log(10<5);
console.log(10>=5);
console.log(10<=5);

// 동등비교
  console.log(1 == 1);
  console.log(1 == '1');
  console.log(1 == true);
  console.log(0 == true);
  console.log(1 != '1');    //비교하기전에 형변환을 하고 비교를 해준다. 이를 기억하라!!!

// 일치 비교
console.log(1 === 1);
console.log(1 === '1');
console.log(1 === true);  // 형변환을 하지 않고 타입과 값이 일치하는지 비교하는 일치 비교

// null, undefined 비교
console.log(null == undefined);  //값은 같지만
console.log(null === undefined); // 형태가 달라서 false

//NaN 비교
console.log(NaN == NaN); // 그 누구와도 같을 수 없기 때문에
console.log(NaN === NaN); // 둘다 false가 뜬다. 그러면 어떨게 비교하면 되까.

console.log(Number.isNaN(NaN));
console.log('apple' == 'ban');
  /*
 * 5. 논리 연산자
 *   1) 이항 연산자 
 *   2) 두 논리값의 피연산자를 연산하여 참/거짓을 반환
 *   3) 종류
 *       → 논리 AND(&&)-모두 참일때 참, 논리 OR(||)둘다 거짓이여야 거짓, 논리 NOT(!)    // 논리  회로 시간에 배웠던것. 중요하다!
 */
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);


//num 변수가 1이상 "이면서" 10이하인지 확인
var num3 =20
console.log(num3 >=1 && num3 <=10);


//or 연산자
console.log(true ||true);
console.log(true ||false);
console.log(false|| true);
console.log(false|| false);

// num 변수가 3의 배수 '거나' 4의 배수인지 확인
console.log(num3%3===0 || num3 % 4===0);

// 논리 not
console.log(!true);
console.log(!false);

// 삼항 연산자.
console.log(num3 >0 ? "양수" : " 양수가 아니다");
console.log(num3 % 2 ===0 ? " 짝수":"홀수");

let isLoading = false;
console.log(isLoading ? "로딩중..." : " 로딩완료");


//대입 연산자
let str = 'hello' + 'world';
str += "!!";
console.log(str);


/* 
 * 6. 조건 연산자
 *   1) 삼항 연산자
 *   2) 조건식의 참/거짓 여부에 따라 반환값을 결정
 *   3) 작성법
 *       → [조건식] ? [true일 때 반환값] : [false일 때 반환값]
 * 7. 문자열 연결 연산자
 *   1) 문자열과 문자열을 연결하여 새로운 문자열을 반환
 *   2) 종류
 *       → 문자열 연결(+)
 *       → 문자열 연결 할당(+=)
 * 
 * 
 * ‼️ 연산자 우선순위 (높은 순으로 나열)
 * 1) 괄호, 대괄호, 마침표(멤버 접근, 함수호출)     !!!!!!
 * 2) 단항 연산자 : new, ++, --, !, +, -, typeof, delete 등
 * 3) 산술 연산자 : **   >   *, /, %   >   +, -
 * 4) 비교 연산자 : <, <=, >, >=, instanceof, in   >   ==, ===, !=, !==
 * 5) 논리 연산자 : &&   >   ||
 * 6) 조건(삼항) 연산자
 * 7) 대입 연산자 : =, +=, -=, *=, /=, %=, **=
 */