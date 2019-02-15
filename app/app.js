/*
Init app
interact with DOM
interact with localstorage

 */

$(document).ready(function(){
  // this is where we jquery
  //var keyData = 'ourKey'; // going to need to make this dynamic?


  $('.btn-add').on('click', function(){
    var keyData = $('.input-key').val();
    var valueData = $('.input-value').val();
    // write to db
    localStorage.setItem(keyData, valueData);
    // read from db
    //var displayText = keyData + ' | ' + localStorage.getItem(keyData);
    // this only displays the last one? might want to switch to html
    // and append a div
    // <div class="display-data-item" data-keyValue="keyData">valueData</div>
    // if you use backticks ` you can use ${templateLiterals}
    // TODO make this vars make sense across the app

    $('.container-data').append('<div class="display-data-item" data-keyValue="'+ keyData +'">'+ keyData + ': ' + valueData+'</div>');

    $('.input-key').val('');
    $('.input-value').val('');
  });

  // update db
    // need to expand when  more than 1 item is added
$('.btn-delete').click(function(e){
  console.log(e);
    var keyData = $('.input-key').val();
    var divIWantToEdit = $(`.display-data-item[data-keyValue="${keyData}"]`)
        localStorage.removeItem(keyData);

    $('.display-data-item').each(function() {
      if ($(divIWantToEdit).data('keyvalue') === keyData) {
        divIWantToEdit.removeItem(keyData + ': ' + valueData);      }
    })
  })

  // delete item
  $('.container-data').on('click', '.display-data-item', function(e){
    console.log(e.currentTarget.dataset.keyvalue);
    var keyData = e.currentTarget.dataset.keyvalue;
    localStorage.removeItem(keyData);
    $('.container-data').text('');
  });
  // delete all?
  $('.btn-clear').click(function(){
    localStorage.clear();
    $('.container-data').text('');
  });
  //update

$('.btn-update').click(function(){
    var keyData = $('.input-key').val();
    var valueData = $('.input-value').val();
    $(".display-data-item").each(function() {

    if (localStorage.getItem(keyData) === null) {
          localStorage.setItem(keyData, valueData);
    $('.container-data').append('<div class="display-data-item" data-keyValue="'+ keyData +'">'+ keyData + ': ' + valueData+'</div>');
    } else {
        localStorage.setItem(keyData, valueData);
        var divIWantToEdit = $(`.display-data-item[data-keyValue="${keyData}"]`)
        divIWantToEdit.text(keyData + ': ' + valueData);
    }
  })
});



  $('.btn-random').click(function(){

    var getPlant = function() {
      var plantsArray = [["Red-hot cat’s tail or Chenille is common name of Acalypha hispida. The plants gets its name from drooping red spikes of red or purple color."],

    ["Century plant is common name of Agave americana. The plant is named so because it is believed to bloom after one hundred years; however, actually it takes about ten years to bloom."],

    ["Agave attenuata takes its common name, Foxtail plant, because of its tall and curved flowering stalks."],

    ["Allium christophii  is popularly known as Stars of Persia because it produces starry lilac flowers."],

    ["Elephant’s ear is common name of Alocasia macrorhiza. The plan produces huge yellow-green leaves."],

    ["Love-lies-bleeding is popular name of Amaranthus caudatus; the name is given because of red spikes that it produces in summer."],

    ["Lace plant is common name of Ammi majus. The name is given because of delicate, feathery foliage of the plant."],

    ["Anigozanthos flavidus is popularly known as Kangaroo paw."],

    ["Aphelandra squarrosa is a nice foliage plant that produces striking ornamental leaves. The dark-green leaves of the plan have broad silver-white veins that give the plant is common name, Zebra plant."],

    ["Dutchman’s pipe is popular name of Aristolochia durior. It is a woody climber that produces brownish-purple flowers shapes like curved pipes."],

    ["Spiral Grass is common name of Moraea tortilis. The plant is named after its twisting and curly leaves."],

    ["Bishop’s cap is common name of Astrophytum myriostigma."],

    ["Orchid tree is common name of Bahuinia variegata."],

    ["Brachychiton acerifolium is a beautiful tree with bright-red, bell-shaped flowers that give the tree its common name, Flame tree."],

    ["Angel’s trumpet or Moonflower is a small tree that produces very fragrant flowers that hang on this tree and look like trumpets. Scientific name of the plant is Brugmansia."],

    ["Like its popular name, Yesterday, Today and Tomorrow, Brunfelsia pauciflora is an interesting plant. The name is given because its produces violet-mauve flowers that fade into pale-mauve and then white on successive days."],

    ["Ladies purses is popular name of Calceolaria crenatiflora because it produces fleshy flower of the shape of a small purse."],

    ["The flowers of Bottlebrush actually resemble a bottle brush. Horticultural name is Callistemon."],

    ["Fishtail palm is common name of Caryota mitis."],

    ["Snow-in-Summer is common name of Cerastium tomentosum; it is a low growing plant usually grown as ground cover. The plan produces tiny white flowers in summer."],

    ["Cordyline terminalis is known as Good luck plant or sometimes as Tree of kings."],

    ["Falling stars is common name of Corocosmia paniculata."],

    ["Dicentra spectabilis produces heart-shaped flowers that hang on long arching stems. Popular name of this plant is Bleeding hearts."],

    ["Breath of heaven is popular name of Diosma ericoides because its flowers emit very delightful fragrance."],

    ["Dragon lily is common name of Dracunculus vulgaris; the plant produces really large and unusual flower."]];

    var randomNum = function() {
      return Math.floor(Math.random() * plantsArray.length);
    }
    return plantsArray[randomNum()];
    }
      alert("Random plant: " + getPlant())
  });
});