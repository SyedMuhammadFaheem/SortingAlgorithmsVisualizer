var foot=document.getElementById('footer');
var date = new Date().getFullYear();
foot.innerHTML='© ' + date + ' Copyright: All rights are reserved!';


var colors = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen'];
var TROW = 'tr', TDATA = 'td';
function barChart(data)
{
  var chart = document.createElement('div');
    
  var barchart = document.createElement('table');
  
  var titlerow = document.createElement(TROW);
    
  var titledata = document.createElement(TDATA);
  
  titlerow.appendChild(titledata);
  barchart.appendChild(titlerow);
  chart.appendChild(barchart);
  
  
  var barrow = document.createElement(TROW);
  
  
  for (var i = 0; i < data.length; i++) {
    barrow.setAttribute('class', 'bars');
    var bardata = document.createElement(TDATA);
    bardata.setAttribute('id',String(i));
    var bar = document.createElement('div');
    bar.setAttribute('id', colors[i]);
    bar.style.height = data[i] + "%";
    bardata.innerText = data[i];
    bardata.appendChild(bar);
    barrow.appendChild(bardata);
  }
  
  var legendrow = document.createElement(TROW);
  var legend = document.createElement(TDATA);
  legend.setAttribute('class', 'legend');
  legend.setAttribute('colspan', data.length);
  

  for (var i = 0; i < data.length; i++) {
    var legbox = document.createElement('span');
    legbox.setAttribute('class', 'legbox');
    var barname = document.createElement('span');
    barname.setAttribute('class', colors[i] + ' xaxisname');
    legbox.appendChild(barname);
  }
  barrow.appendChild(legend);
  barchart.appendChild(barrow);
  barchart.appendChild(legendrow);
  chart.appendChild(barchart);
  for(var i=0;i<8;i++)
  document.getElementsByClassName('chart')[i].innerHTML = chart.outerHTML;

}

var modBarChart=(data,index)=>
{
  var chart = document.createElement('div');
    
  var barchart = document.createElement('table');
  
  var titlerow = document.createElement(TROW);
    
  var titledata = document.createElement(TDATA);
  
  titlerow.appendChild(titledata);
  barchart.appendChild(titlerow);
  chart.appendChild(barchart);
  
  
  var barrow = document.createElement(TROW);
  
  
  for (var i = 0; i < data.length; i++) {
    barrow.setAttribute('class', 'bars');
    var bardata = document.createElement(TDATA);
    bardata.setAttribute('id',String(i));
    var bar = document.createElement('div');
    bar.setAttribute('id', colors[i]);
    bar.style.height = data[i] + "%";
    bardata.innerText = data[i];
    bardata.appendChild(bar);
    barrow.appendChild(bardata);
  }
  
  var legendrow = document.createElement(TROW);
  var legend = document.createElement(TDATA);
  legend.setAttribute('class', 'legend');
  legend.setAttribute('colspan', data.length);
  

  for (var i = 0; i < data.length; i++) {
    var legbox = document.createElement('span');
    legbox.setAttribute('class', 'legbox');
    var barname = document.createElement('span');
    barname.setAttribute('class', colors[i] + ' xaxisname');
    legbox.appendChild(barname);
  }
  barrow.appendChild(legend);
  barchart.appendChild(barrow);
  barchart.appendChild(legendrow);
  chart.appendChild(barchart);
  document.getElementsByClassName('chart')[index].innerHTML = chart.outerHTML;
}


var defaultArr=[82,23,75,53,32,24];
barChart(defaultArr);
var myFile = document.getElementById("formFile");
var arrFromFile;
var data;
myFile.addEventListener('change',function(){
  var file = myFile.files.item(0);
   var fileReader=new FileReader();
   fileReader.onload=function(){
      arrFromFile=JSON.parse(fileReader.result);
      data=arrFromFile.split(',');
      barChart(data);
   }
   
   fileReader.readAsText(file);
   
})

let sortBarChart=(data,sortID)=>{
  if(sortID==1)
  insertionSort(data);
}


const sleep = (time) =>{

  return new Promise(resolve => setTimeout(resolve,time))
}

insertionSort=async (data)=>{
    parseInt(data);
    for(var i=1;i<data.length;i++)
    {
      for(var j=0;j<i;j++)
      {
        await sleep(300);
        if(data[j]>data[i])
        {
          var temp;
          temp=data[j];
          data[j]=data[i];
          data[i]=temp;
          modBarChart(data,0)
        }
      }

    }
}

let insBtn=document.getElementById('ins-btn');

insBtn.addEventListener('click',()=>{
  if(data)
  {
    barChart(data);
    sortBarChart(data,1);
  }
})

// print=(data)=>{for(var i=0;i<data.length;i++)
// console.log(parseInt(data[i]));}

  //chart colors
  


