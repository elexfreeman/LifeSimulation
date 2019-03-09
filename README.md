# LifeSimulation
UE4 life simulator

Симуляция поведения простейших организмов

Разные ветки - разные эксперименты

![Image of Yaktocat](https://raw.githubusercontent.com/elexfreeman/LifeSimulation/master/Screens/2019-03-09_15-49-20.png)

## Параметры организма
* Name - Имя уникальный идентификатор
* Parent - родитель
* Color - цвет 
* MaxEnergy - максимальный запас энергии (используется только для индикатора цвета энергии)
* Energy - запас энергии 
* imDie - признак смерти
* energyCloneBuffer - буфер для запаса энергии для клонирования
* 

## Константы
* startEnergy - стартовая энергия
* energyForClone - максимальное значение которое должен достичь буфер чтобы клонироваться
* hitEnergyVal - энергия при столкновении с другим организмом
* corpusEnergy - энергия трупа
* clonePercentEnergyForChild - процент прироста энергии для потомка
* clonePercentEnergyVal - процент энергии при поедании идущий для energyCloneBuffer
* startEnergyForClone - стартовое заполнение энергии для клонирования

## Модель поведения
### Рождение
- присваивается уникально **Имя**
- присваивается **Стартовая энергия**
- присваивается **Цвет**
### Перемещение
- перемещение происходит раз в 1 секунду
- проверяется параметр **ImDie**
  - в случае смерти перемещение не происходит
  - иначе перемещается в случайном направлении. Используется симуляция физики
### Питание
- при столкновении с другим микроорганизмом сравнивается энергия
- если у себя энергии больше то отъедается **hitEnergyVal**
### Размножение
- при полном заполнении energyCloneBuffer происходит клонирование
- клону также передается **clonePercentEnergyForChild**
### Смерть
- если Energy меньше 1 то проставляется флаг **imDie** и добавляется curpusEnergy
### Посмертие
- стадия трупа
- если Energy меньше 1 объект уничтожается


## Будущие эксперименты
* подключение мозгов к организму
* подключение генетического алгоритма
* фаза икринки