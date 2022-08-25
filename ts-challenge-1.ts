// last(arr): 이 함수는 array의 마지막 아이템을 리턴해야 합니다.
// prepend(arr, item): 이 함수는 array의 시작에 아이템을 넣고, 리턴해야 합니다.

function last<T>(arr: T[]) {
  return arr[arr.length - 1];
}

function prepend<M>(arr: M[], item: M) {
  return arr.unshift(item);
}
