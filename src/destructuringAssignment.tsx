//객체 구조 분해
const person = { hisName: "공욱재", age: 26 };
const { hisName, age } = person;
console.log(person.hisName); //'공욱재
console.log(person.age); //26

//구조분해 할당을 사용하면 위와 아래처럼
//명시적으로 작성하느냐, 간결하게 작성하느냐의 차이가 있다.
//코드가 너무 길어지는 경우 객체구조를 분해해서 변수선언하듯이 사용하는데
//변수 선언부분에 중괄호를 사용하는 것이 작성법이다.

console.log(hisName); //공욱재
console.log(age); //26

//배열 구조 분해
const features = ["미남", "크드트"];
const [appearance, nickname] = features;
console.log(appearance); //미남
console.log(nickname); //크드트
