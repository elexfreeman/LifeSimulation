# LifeSimulation
UE4 life simulator
## 003-make-plants
Симуляция поведения простейших организмов

Разные ветки - разные эксперименты

# Результаты эксперемента
https://www.youtube.com/watch?v=Gqdt_4X8Avc
![003-make-plants](https://raw.githubusercontent.com/elexfreeman/LifeSimulation/003-make-plants/Screens/2019-03-10_22-33-22.png)


# Простейший организм

## Параметры организма
* Name - Имя уникальный идентификатор
* Parent - родитель
* Color - цвет 
* MaxEnergy - максимальный запас энергии (используется только для индикатора цвета энергии)
* Energy - запас энергии 
* imDie - признак смерти
* energyCloneBuffer - буфер для запаса энергии для клонирования
* generation - поколение

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
- клону также передается **generation+1**
### Смерть
- если Energy меньше 1 то проставляется флаг **imDie** и добавляется curpusEnergy
### Посмертие
- стадия трупа
- если Energy меньше 1 объект уничтожается


# Растение (seaweed)
![003-make-plants](https://raw.githubusercontent.com/elexfreeman/LifeSimulation/003-make-plants/Screens/2019-03-10_22-49-48.png)
## Параметры организма
* Name - Имя уникальный идентификатор
* Parent - родитель
* Energy - запас энергии 
* imDie - признак смерти
* energyCloneBuffer - буфер для запаса энергии для клонирования
* generation - поколение

## Константы
* PhotosynthesisEnergy - энеригия получаемая при фотосинтезе
* scalePercent - процент энергии к размеру
* startEnergy - стартовая энергия
* energyForClone - максимальное значение которое должен достичь буфер чтобы клонироваться
* corpusEnergy - энергия трупа


## Модель поведения
### Питание
- раз в секунду увеличивает энергию при фотосинтезе
- увеличивается при этом в размере на scalePercent
### Резмножение
- при полном заполнении energyCloneBuffer происходит клонирование
- клону также передается **clonePercentEnergyForChild**
- клону также передается **generation+1**

### Смерть
- если Energy меньше 1 то проставляется флаг **imDie** и добавляется curpusEnergy
### Посмертие
- стадия трупа
- если Energy меньше 1 объект уничтожается



