
let gridNumber=4;
const gridContainer=document.querySelector('.container');

function addElements(gridNumber)
{
    let numberOfItems=gridNumber**2;
    let expectedMeasurment=960/gridNumber;

    for(let i=1;i<=numberOfItems;i++)
{

const div=document.createElement('div');
div.classList.add('grid-div');
div.setAttribute('id',`${i}`);
div.style.width=`${expectedMeasurment}px`;
div.style.height=`${expectedMeasurment}px`;
div.addEventListener('mouseenter',()=>{
    div.classList.add('hover');
});
gridContainer.appendChild(div);
}

}

function clearElements()
{
  while(gridContainer.firstChild)
  {
    gridContainer.removeChild(gridContainer.lastChild);
  }
}

addElements(gridNumber);

function addHoverClass(element)
{
    element.classList.add('hover');
}



function activateButton(Class)
{
    clearElements();
    
if(Class==='set') 
{
    gridNumber=prompt('set the grid size\nenter a value between 1 and 64');
    if((gridNumber>64)||(gridNumber<1)) 
    { alert('you have entered an invalid grid value');
    addElements(16);
    return;
    }

}
addElements(gridNumber);
}



const buttons=document.querySelectorAll('button');
buttons.forEach(button=>button.addEventListener('click',()=>{
    activateButton(button.classList.value);
}));