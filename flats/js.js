function count () {
  var porches = document.forms['form'].porches.value;
  var floors = document.forms['form'].floors.value;
  var flats = document.forms['form'].flats.value;
  var numberOfFlat = document.forms['form'].numberOfFlat.value;
  porches = parseInt(porches);
  floors = parseInt(floors);
  flats = parseInt(flats);
  numberOfFlat = parseInt(numberOfFlat);

  //будет выводиться
  var numberOfPorch = 1;
  var numberOfFloor;

  if(isNaN(porches) == true || isNaN(floors) == true || isNaN(flats) == true || isNaN(numberOfFlat) == true){
    alert('Введите число');
  }
  if(porches < 0 || floors < 0 || flats < 0 || numberOfFlat < 0){
    alert('Введите положительное число');
  }
  var all = porches*floors*flats;
  if(all < numberOfFlat){
    alert('Квартиры №' + numberOfFlat + ' не существует');
  }

  var flatsInPorch = floors*flats; //количество квартир в подъезде
  var iForPorches = 1, iForFlats = 1;

  for (var i = 1; i <= porches; i++){ // поиск подъезда

    for(var i1 = 0; i1 < flatsInPorch; i1++){
      if(numberOfFlat === iForFlats){
        numberOfPorch = i;
        break;
      }
      iForFlats++;
    }

    if(numberOfFlat === iForFlats){
      break;
    }

    flatsInPorch = flatsInPorch*i;
  }

  for(var i = 0; floors > i; floors--){ // поиск этажа
    if(flatsInPorch === numberOfFlat){
      numberOfFloor = floors;
      break;
    }
    flatsInPorch = flatsInPorch - flats;
  }
  alert('Подъезд №' + numberOfPorch + ' ' + 'Этаж №' + numberOfFloor);
  }
