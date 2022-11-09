//dynamic date footer
var foot=document.getElementById('footer');
var date = new Date().getFullYear();
foot.innerHTML='© ' + date + ' Copyright: All rights are reserved!';

//global
var colors = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen'];
var TROW = 'tr', TDATA = 'td';

//initialize bar charts
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




var start,end,time;
var check=true;
var count=0;
let sortBarChart=(data,sortID)=>{
  if(sortID==1)
  {
    count=0;
    check=true;
    insertionSort(data);
  }
  else if (sortID==2)
  {
    count=0;
    mergeSort(data);
  }
  else if (sortID==3)
  {
    count=0;
    check=true;
    bubbleSort(data);
  }
  else if (sortID==4)
  {
    count=0;
    heapSort(data);
  }
  else if (sortID==5)
  {
    count=0;
    quickSort(data);
  }
  else if (sortID==6)
  {
    count=0;
    radixSort(data);
  }
  else if (sortID==7)
  {
    count=0;
    countSort(data);
  }
  else if (sortID==8)
  {
    count=0;
    bucketSort(data); 
  }
}



const sleep = (time) =>{

  return new Promise(resolve => setTimeout(resolve,time))
}



var insertionSort=async (data)=>{
    parseInt(data);
    start=Date.now();
    for(var i=1;i<data.length;i++)
    {
      for(var j=0;j<i;j++)
      {
        count+=1;
        await sleep(300);
        if(data[j]>data[i])
        {
          [data[j],data[i]]=[data[i],data[j]];
          modBarChart(data,0)
          check=false;
        }
      }
      if(check)
      break;

    }
    end=Date.now();
    time=end-start;
    time=time/1000;
    time=time-(count*(300/1000));
    time=time.toPrecision(5);
    document.getElementById('ins-time').innerHTML='Time taken: ' + String(time) + ' seconds';
}


var mergeSort=async (data)=>{

}


var bubbleSort=async (data)=>{
  parseInt(data);
  start=Date.now();
  for(var i=0;i<data.length;i++)
  {
    for(var j=0;j<(data.length-i-1);j++)
    {
      count+=1;
      await sleep(300);
      if(data[j]>data[j+1])
      {
          [data[j],data[j+1]]=[data[j+1],data[j]];
          modBarChart(data,2)
          check=false;
      }
    }
    if(check)
    break;
  }
  end=Date.now();
  time=end-start;
  time=time/1000;
  time=time-(count*(300/1000));
  time=time.toPrecision(5);
  document.getElementById('bub-time').innerHTML='Time taken: ' + String(time) + ' seconds';
}


var left,right;
var heapSort=async (data)=>{
  parseInt(data);
  var check1,check2;
  console.log('heapifying');
  for(var i=data.length-1;i>=0;i--)
  {
    left=2*i+1;
    right=2*(i+1);
    check1=left<data.length;
    check2=right<data.length;
    await sleep(300);
    if(check1 || check2)
    {
      if(check1 && check2)
      {
        if(data[right]<data[left])
        {
          if(data[i]<data[left])
          {
            [data[i],data[left]]=[data[left],data[i]];
            
          }
        }
        else if(data[left]<data[right])
        {
          if(data[i]<data[right])
          [data[i],data[right]]=[data[right],data[i]];
        }
      }
      else if(check1)
      {
        if(data[right]<data[left])
        {
          if(data[i]<data[left])
          [data[i],data[left]]=[data[left],data[i]];
        }
      }
      else if(check2)
      {
        if(data[left]<data[right])
        {
          if(data[i]<data[right])
          [data[i],data[right]]=[data[right],data[i]];
        }
      }
      modBarChart(data,3);
    }
    
  }
  // var len=data.length;
  // while(len>0)
  // {
  //   await sleep(100);
  //   --len;
  //   [data[0],data[len]]=[data[len],data[0]];
  //   modBarChart(data,3);
  //   for(var i=0;i<len;i++)
  //   {
  //     await sleep(300);
  //     left=2*i+1;
  //     right=2*(i+1);
  //     check1=left<len;
  //     check2=right<len;
  //     if(check1 && check2)
  //     {
  //       if(data[right]<data[left])
  //       {
  //         if(data[i]<data[left])
  //         [data[i],data[left]]=[data[left],data[i]];
  //       }
  //       else if(data[left]<data[right])
  //       {
  //         if(data[i]<data[right])
  //         [data[i],data[right]]=[data[right],data[i]];
  //       }
  //     }
  //     else if(check1)
  //     {
  //       if(data[right]<data[left])
  //       {
  //         if(data[i]<data[left])
  //         [data[i],data[left]]=[data[left],data[i]];
  //       }
  //     }
  //     else if(check2)
  //     {
  //       if(data[left]<data[right])
  //       {
  //         if(data[i]<data[right])
  //         [data[i],data[right]]=[data[right],data[i]];
  //       }
  //     }
  //     modBarChart(data,3);
  //   }

  //   }

  }

  



var quickSort=async (data)=>{
  
}


var radixSort=async (data)=>{
  
}

var countSort=async (data)=>{

  
}


var bucketSort=async (data)=>{
  
}






let insBtn=document.getElementById('ins-btn');

insBtn.addEventListener('click',()=>{
  if(data)
  {
    barChart(data);
    sortBarChart(data,1);
  }
})

let mergeBtn= document.getElementById('merge-btn');
mergeBtn.addEventListener('click',()=>{
  if(data)
  {
    barChart(data);
    sortBarChart(data,2);
  }
})

let bubBtn= document.getElementById('bub-btn');
bubBtn.addEventListener('click',()=>{
  if(data)
  {
    barChart(data);
    sortBarChart(data,3);
  }
})

let heapBtn=document.getElementById('heap-btn');
heapBtn.addEventListener('click',()=>{
  if(data)
  {
    barChart(data);
    sortBarChart(data,4);
  }
})


let quickBtn=document.getElementById('quick-btn');
quickBtn.addEventListener('click',()=>{
  if(data)
  {
    barChart(data);
    sortBarChart(data,5);
  }
})


let radixBtn=document.getElementById('radix-btn');
radixBtn.addEventListener('click',()=>{
  if(data)
  {
    barChart(data);
    sortBarChart(data,6);
  }
})


let countBtn=document.getElementById('count-btn');
countBtn.addEventListener('click',()=>{
  if(data)
  {
    barChart(data);
    sortBarChart(data,7);
  }
})



let buckBtn=document.getElementById('buck-btn');
buckBtn.addEventListener('click',()=>{
  if(data)
  {
    barChart(data);
    sortBarChart(data,8);
  }
})
