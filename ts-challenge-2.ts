// Typescript Classes 를 사용하여, Dict (dictionary) class 를 빌드하세요. Dict은 아래와 같은 methods 를 갖고있어야 합니다.

// add: 단어를 추가함.
// get: 단어의 정의를 리턴함.
// delete: 단어를 삭제함.
// update: 단어를 업데이트 함.
// showAll: dictionary 의 단어를 모두 프린트함.
// count: dict 단어들의 총 count 를 리턴함.

type Words = {
  [key: string]: string;
};
type Word = {
  term: string;
  def: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  get(term: string) {
    return this.words[term];
  }
  delete(word: Word) {
    if (this.words[word.term] !== undefined) {
      delete this.words[word.term];
    }
  }
  update(newOne: Word, oldOne: Word) {
    if (this.words[newOne.term] === this.words[oldOne.term]) {
      this.words[oldOne.term] = newOne.def;
    } else console.log("Not exist");
  }
  showAll() {
    return console.log(this.words);
  }
  count() {
    return console.log(Object.keys(this.words).length);
  }
}
