
class TextEditor {
  constructor() {
    this.text = new Array(); // тип String ещё не изобрели, поэтому предположим, что у нас есть массив символов :(
    this.textLength = 0; // текущая длина текста в массиве text

    for (let i = 0; i < 255; i++) {
      this.text[i] = ' ';
    }
  }

  // Пустое место в этом массиве забито просто “пробелами”
  // Например если textLength = 3, и text = {‘ш’,’к’,’я’, … еще 252 символа ‘пробел’ .. }

  insertCharacterAt(position, c) {
    for (let i=0; i <= this.textLength; i++) {
      if (i === position) {
        for (let k = this.textLength; k >= position; k--) {
          this.text[k + 1] = this.text[k]
        }

        this.text[position] = c
        this.textLength++
      }
    }
    // Эта функция должна вставлять символ в строку на позиции position
    // Например когда пользователь напечатал “При|ет мир!” (этот текст у нас в переменной text)
    // и его курсор находится между буквами “и” и “е”, и он нажимает “в”.
    // В этот момент вызывается функция insertCharacterAt(3, “в”), после чего в переменной text значение меняется на “Привет мир!”
  }

  backspace(position) {
    for (let i=0; i < this.textLength; i++) {
      if (i === position) {
        for (let k = position; k <= this.textLength; k++) {
          this.text[k - 1] = this.text[k]
        }

        this.textLength--
      }
    }
    // “Привет Мм|ир!” => “Привет Мир!”
  }
}

module.exports = { TextEditor }
