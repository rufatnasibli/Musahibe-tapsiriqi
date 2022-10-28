const azer =['Qarabag','Agdam','1951'];
function reverseArray(arr){
    return arr.reverse()
}
console.log(reverseArray(azer))
//2ci
const aliens = ['Blorgous','Glamyx','Wegord','SpaceKing'];

function greetAliens(aliens){
    console.log(`oh powerful ${aliens[0]},we humans offe our unconditional surrender!`)
    console.log(`oh powerful ${aliens[1]},we humans offe our unconditional surrender!`)
     console.log(`oh powerful ${aliens[2]},we humans offe our unconditional surrender!`)
    console.log(`oh powerful ${aliens[3]},we humans offe our unconditional surrender!`)
}
greetAliens(aliens)
//3cu
const aysun = [
    'gameboys',
    'skateboards',
    'backwards hats',
    'my room',
    'temporary tattoos'
];
const rufet = [
    'sweaters',
    'skateboards',
    'family-night',
    'my room'
];
function cuci (aysun,rufet){
    aysun.forEach((item)=>{
        rufet.forEach((element)=>{
            if(item==element){
                console.log(item)
            }
        })
    })
}
cuci(aysun,rufet)
//4cu
const meal = [
    { name: 'arugula', source: 'plant' },
    { name: 'tomatoes', source: 'plant' },
    { name: 'lemon', source: 'plant' },
    { name: 'olive oil', source: 'plant' },
  ];
  const dinner = [
    { name: 'hamburger', source: 'meat' },
    { name: 'cheese', source: 'dairy' },
    { name: 'ketchup', source: 'plant'},
    { name: 'bun', source: 'plant' }
  ];
  function  isTheDinnerVegan (arr){
    for (let i=0;i < arr.length;i++){
        if(arr[i].source !== 'meat'){
            return false
        }
        else {
            return true
        }
    }
  }
  console.log(isTheDinnerVegan(meal));
  console.log(isTheDinnerVegan(dinner));
  //bitirdim