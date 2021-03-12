# ДЗ

Требуется реализовать методы в `ArrayUnique.js`, и проверить их тестами `ArrayUniqueTest.js`

Запуск тестов используя `node`:

`node ./ArrayUniqueTest.js`

## 1. Первый раз в первый Class

★★☆☆☆

Первоклассница Юля весь день тренировала начертание символов русского алфавита в прописи.
В конце дня мама Юли посмотрела в тетрадь и все что она там увидела было слово
`“АААФФФФФФФЖЫЫЫЫБЫРВАААААЛГГГХЫХЫБЛИА”`.
Выведите список букв, написание которых Юля выучила за день.

```javascript
lettersLearnedToday(word);
```

Пример:

```javascript
lettersLearnedToday(“АААФФФФФФФЖЫЫЫЫБЫРВАААААЛГГГХЫХЫБЛИА”) // => АФЖЫБРВЛГХИ
```

## 2. Breaking Bad

★★★★☆

Старший бухгалтер Вероника Павловна, как обычно в конце квартала,
подделывала финансовый отчет, чтобы ООО “Серый Оффшор”,
в котором она работала, могло избежать уплаты некоторых налогов.
Она открыла Excel и составила таблицу выплат в которой были все выплаты всем поставщикам.

Вероника знала что налоговая инспекция обязательно придерется к этой таблице,
если в ней хотя бы одна выплата повторялась (даже если выплата была разным поставщикам).

```javascript
report = [
  [12_391_203, 3_828_382, 334_934_939],
  [45_345_345, 5_341_312, 55_345_345],
  [334_934_939, 1_234_122, 657_657],
];
```

Помогите Гендиректору _ООО “Серый Оффшор”_ избежать уголовного преследования: проверьте, чтобы в таблице (двумерном массиве) были только уникальные записи.

```javascript
avoidJailDueToTaxFraud(report);
```

Если записи не уникальны — верните первую первую сумму, которая повторяется.
Если же они уникальны — верните -1.
Известно что у компании было N поставщиков (и в таблице N столбцов), и каждому было сделано X выплат (и в таблице X строчек).

```javascript
avoidJailDueToTaxFraud(report); // => 334_934_939
```

Как время выполнения алгоритма зависит от X и N ?