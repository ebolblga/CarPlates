# Генератор интересных автомобильных номеров
![image](https://user-images.githubusercontent.com/82185066/185743755-4a16ab44-78b6-43d3-97d5-f6686c9f6973.png)

Поиск слов мы будем использовать для серии и номера машины, кроме того, что слово должно состоять из 6 символов, есть ряд ограничений:

### 1.
В 1993 году в силу вступил новый [ГОСТ](https://docs.cntd.ru/document/1200160380). Известно, что его разрабатывали, опираясь на «Венскую Конвенцию о дорожном движении» 1968 года. Согласно данному документу, в государственных номерах могут применяться только арабские символы и цифры, которые аналогичны буквам в латинице. Если внимательно изучить русский алфавит, можно заметить, что под данное требование попадает всего 12 букв — А, В, Е, К, М, Н, О, Р, С, Т, Х, У

### 2.
Что касательно регистрационного, номера мы подберём цифры, которые часто читают и используют как буквы:
0 - О, 3 - З, 4 - Ч, 6 - Б, 9 - Д

## База данных слов
Для данного поекта я скачал [базу данных](https://github.com/danakt/russian-words) из 1.531.464 существующих русских слов во всех морфологических формах.
Далее [ahibis](https://github.com/ahibis) дополнительно запарсил 2784 бранных слова с [данного сайта](https://2yxa.ru/mat/). Нашлось место и для генерации смешных слов с помощью субверсии языкового шаблона, используя заведомо забавные паттерны в словах.

## Поиск
И так, в одном регионе всего существует 12^3 * 10^3 = 1.728.000 номеров, и среди них нужно найти слова из нашей базы данных. Язык JavaScript был выбран не случайно, он отлично подходит для написания [регулярных выражений](https://ru.wikipedia.org/wiki/%D0%A0%D0%B5%D0%B3%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D1%8B%D0%B5_%D0%B2%D1%8B%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F). Выполнив программу на первой базе данных, у нас остаётся всего 87 слов, которые можно написать на номерных знаках:<br />
![image](https://user-images.githubusercontent.com/82185066/185762995-7d7d8c3d-7e9a-40e1-8fda-ad03802f1514.png)

Из интересных (для картинки номера использовался [данный](https://carsvin.ru/auto/nomer#poluchit) ресурс):<br />
Моздок (M039OK)<br />
![image](https://user-images.githubusercontent.com/82185066/185744893-fc24e053-2370-42ca-b40c-12443ff7014a.png)

Ободок (O609OK)<br />
![image](https://user-images.githubusercontent.com/82185066/185744928-cc6043eb-a4a1-4015-ba92-d550990fe3bc.png)

Собчак (C064AK)<br />
![image](https://user-images.githubusercontent.com/82185066/185744970-d822a37e-0b5c-4b3f-9abe-66a7298f01bc.png)

Удочка (Y904KA)<br />
![image](https://user-images.githubusercontent.com/82185066/185745028-1be3036a-75e1-4111-ada4-d4793bcc75af.png)

К сожалению, в базе данных бранных слов не нашлось ни одного подходящего слова.<br />
![image](https://user-images.githubusercontent.com/82185066/185763085-1b8b1825-97cf-42f7-941b-7c843ee9bd10.png)

Что касается генерации смешных слов, из 1280 нашлись несколько:<br />
![image](https://user-images.githubusercontent.com/82185066/185764649-50a85b10-364f-4a0f-a2bf-9c22a233651c.png)

Из интересных:<br />
Абобан (A606AH)<br />
![image](https://user-images.githubusercontent.com/82185066/185745235-78cb6663-8d5b-4605-ad3e-4e085f2bc0fe.png)

Ебобун (E606YH)<br />
![image](https://user-images.githubusercontent.com/82185066/185745271-d69acc8d-e61d-451d-a9a1-c0965331fd8a.png)

Вбздун (B639YH)<br />
![image](https://user-images.githubusercontent.com/82185066/185764671-27713bfe-71b6-4c75-96ae-71eed0ed2c83.png)


Так же можно искать слова из трёх букв которые будут использовать лишь серию номерного знака и будут выглядеть так:<br />
![image](https://user-images.githubusercontent.com/82185066/185764337-098e46c4-f85d-441a-a546-64dc00735229.png)<br />
![image](https://user-images.githubusercontent.com/82185066/185764325-1d63d575-0c2f-40e2-ab8f-661678d1d9b7.png)<br />

Например:<br />
Вор (B***OP)<br />
![image](https://user-images.githubusercontent.com/82185066/185764192-da07e6bb-1f70-49b0-9bee-453e791c9fdc.png)

Хер (X***EP)<br />
![image](https://user-images.githubusercontent.com/82185066/185764249-4c5ab2e1-57e5-4bc4-8271-f0af361423e2.png)

![image](https://user-images.githubusercontent.com/82185066/185746086-ee81022b-0341-4bba-8685-4bb360307912.png)

## Как запустить проект самому
Используя Visual Studio Code и Node.js в консоли написать
```
yarn (или npm install) для установки всех модулей

yarn words для поиска из списка слов
yarn swears для поиска из списка бранных слов
yarn eboba для поиска из списка сгенерированных смешных слов

Аналогично для поиска слов из 3 букв:
yarn words3
yarn swears3
yarn eboba3
```

## License
This program is licensed under the GPL-3.0 License. Please read the License file to know about the usage terms and conditions.
