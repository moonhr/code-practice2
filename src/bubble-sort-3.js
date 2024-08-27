//랜덤 배열 생성 함수
function generateRandomArray(length, max) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * max) + 1);
  }
  return arr;
}

//구조분해 할당을 사용
function bubbleSortWithDestructring(arr) {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        //구조분해 할당을 사용하여 두 변수의 값을 교환
        swapped = true;
      }
    }
  }
  return arr;
}

//테스트용 코드
const randomArrayDestructring = generateRandomArray(10, 100);
console.log("만들어진 배열 :", randomArrayDestructring);

const sortedArrayDestructuring = bubbleSortWithDestructring(
  randomArrayDestructring
);
console.log("정렬된 배열 :", sortedArrayDestructuring);
