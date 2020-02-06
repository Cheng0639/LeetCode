/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  const [even, odd] = A.reduce(
    (acc, each) => {
      acc[each & 1].push(each);
      return acc;
    },
    [[], []]
  );
  return even.concat(odd);
};

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity1 = function(A) {
  const temp = [];
  A.forEach(each => temp[each & 1 ? "push" : "unshift"](each));
  return temp;
};

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity2 = function(A) {
  let head = 0;
  let tail = A.length - 1;
  while (head < tail) {
    //if Head is odd and tail is even
    if ((A[head] & 1) > (A[tail] & 1)) {
      const tmp = A[head];
      A[head] = A[tail];
      A[tail] = tmp;
    }
    if (!(A[head] & 1)) {
      head++;
    }
    if (A[tail] & 1) {
      tail--;
    }
  }

  return A;
};
