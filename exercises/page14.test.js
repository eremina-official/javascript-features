import { toggleClass } from './page14';

describe('toggleClass', () => {
  beforeAll(() => {  
    //set document body HTML
    document.body.innerHTML = 
    '<div class="js-div">' + 
      '<p class ="js-paragraph bg-color-red"></p>' +
    '</div>'; 

    //console.log('beforeAll in describe');
  });

  //console.log('inside describe');

  test('adds class', () => {
    const targetDiv = document.querySelector('.js-div');
    toggleClass(targetDiv, 'bg-color-red');
    expect(targetDiv.classList.contains('bg-color-red')).toBe(true);
    //console.log('inside test');
  });

  test('removes class', () => {
    const targetP = document.querySelector('.js-paragraph'); 
    toggleClass(targetP, 'bg-color-red');
    expect(targetP.classList.contains('bg-color-red')).toBe(false);
  }); 

});

//console.log('after describe', document.body.innerHTML);
