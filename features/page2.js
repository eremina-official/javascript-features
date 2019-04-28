console.log('------- objects -------');

let objectTest = {
  name: 'John',
  showName: function() {console.log(this.name);},
  nameP: document.querySelector('#prg'),
  changeP: function() {this.nameP.innerHTML = 'Hello';}
};
objectTest.showName();
console.log(objectTest.name);
console.log(objectTest.nameP);
//objectTest.changeP();
