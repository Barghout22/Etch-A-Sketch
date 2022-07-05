
let gridNumber=prompt('enter the grid measurements');

let expectedMeasurment=960/gridNumber;
let numberOfItems=gridNumber**2;
const gridContainer=document.querySelector('.container');

for(let i=1;i<=numberOfItems;i++)
{
const div=document.createElement('div');
div.classList.add('grid-div');
div.setAttribute('id',`${i}`);
div.textContent=`${i}`;
div.style.width=`${expectedMeasurment}px`;
div.style.height=`${expectedMeasurment}px`;
gridContainer.appendChild(div);
}

/*function changeColor(e)
{
this.style.backgroundColor='orange';


}
*/

let id =document.getElementsByTagName('div')[1].id;
console.log(id);

div.addEventListener('onclick',console.log('hello world'));