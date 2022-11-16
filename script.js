//merge and quick sort under construction


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
  var j=0;
  
  for (var i = 0; i < data.length; i++) {
    if(i%13==0)
    j=0;

    barrow.setAttribute('class', 'bars');
    var bardata = document.createElement(TDATA);
    var bar = document.createElement('div');
    if(i>13)
    {
      bar.setAttribute('class', colors[j]);
      j++;
    }
    else
    {
      bar.setAttribute('class', colors[i]);
      bar.setAttribute('id','elem'+data[i])
    }
    bar.style.height = data[i] + "px";
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
  for(var i=0;i<11;i++)
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
  var j=0;
  
  for (var i = 0; i < data.length; i++) {
    if(i%13==0)
    j=0;

    barrow.setAttribute('class', 'bars');
    var bardata = document.createElement(TDATA);
    var bar = document.createElement('div');
    if(i>13)
    {
      bar.setAttribute('class', colors[j]);
      j++;
    }
    else
    {
      bar.setAttribute('class', colors[i]);
    }
    bar.style.height = data[i] + "px";
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



var dNCModBarChart=(data,index,size)=>
{

  var chart = document.createElement('div');
    
  var barchart = document.createElement('table');
  
  var titlerow = document.createElement(TROW);
    
  var titledata = document.createElement(TDATA);
  
  titlerow.appendChild(titledata);
  barchart.appendChild(titlerow);
  chart.appendChild(barchart);
  
  
  var barrow = document.createElement(TROW);
  var j=0;
  
  for (var i = 0; i < size; i++) {
    if(i%13==0)
    j=0;

    barrow.setAttribute('class', 'bars');
    var bardata = document.createElement(TDATA);
    var bar = document.createElement('div');
    if(i>13)
    {
      bar.setAttribute('class', colors[j]);
      j++;
    }
    else
    {
      bar.setAttribute('class', colors[i]);
    }
    bar.style.height = data[i] + "px";
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




var countModBarChart=(data,index)=>
{

  var chart = document.createElement('div');
    
  var barchart = document.createElement('table');
  
  var titlerow = document.createElement(TROW);
    
  var titledata = document.createElement(TDATA);
  
  titlerow.appendChild(titledata);
  barchart.appendChild(titlerow);
  chart.appendChild(barchart);
  
  
  var barrow = document.createElement(TROW);
  var j=0;
  
  for (var i = 0; i < data.length; i++) {
    if(i%13==0)
    j=0;

    barrow.setAttribute('class', 'bars');
    var bardata = document.createElement(TDATA);
    var bar = document.createElement('div');
    if(i>13)
    {
      bar.setAttribute('class', colors[j]);
      j++;
    }
    else
    {
      bar.setAttribute('class', colors[i]);
    }
    bar.style.height = (data[i]+1) + "px";  
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
    mergeSort(data,0,(data.length-1));
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
    start=Date.now();
    var key,j;
    for(var i=1;i<data.length;i++)
    {
        key=data[i];
        j=i-1;
        while(j>=0 && parseInt(data[j])>key)
        {
            count+=1;
            await sleep(300);
            data[j+1]=data[j];
            modBarChart(data,0);
            j--;
        }
        count+=1;
        await sleep(300);
        data[j+1]=key;
        modBarChart(data,0);
    }
    
      end=Date.now();
      time=end-start;
      time=time/1000;
      time=time-(count*(300/1000));
      time=time.toPrecision(5);
      document.getElementById('insertionTime').innerHTML=String(time) + ' seconds';
    }


var merge=async (data,low,mid,high)=>{
  console.log('merge')
  var i=low,j=mid+1,k=low;
  var arr=new Array(100);
  while(i<=mid && j<=high)
  {
    if(parseInt(data[i])<parseInt(data[j]))
    arr[k++]=data[i++];
    else
    arr[k++]=data[j++];
  }
  while(i<=mid)
  arr[k++]=data[i++];
  while(j<=high)
  arr[k++]=data[j++];
  for(var i=low;i<=high;i++)
  {
    data[i]=arr[i];
    // await sleep(300)
    // modBarChart(data,1);
    // console.log(data[i]+' ');
  }
  // console.log('hello');

  
}



var mergeSort=(data,low,high)=>{
    if(low<high)
    {
      var mid=parseInt((low+high)/2);
      mergeSort(data,low,mid)
      mergeSort(data,mid+1,high)
      merge(data,low,mid,high)
    }

}


var bubbleSort=async (data)=>{
  start=Date.now();
  for(var i=0;i<data.length;i++)
  {
    for(var j=0;j<(data.length-i-1);j++)
    {
      count+=1;
      await sleep(300);
      if(parseInt(data[j])>parseInt(data[j+1]))
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
  document.getElementById('bubbleTime').innerHTML=String(time) + ' seconds';
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
  var len=data.length;
  while(len>0)
  {
    await sleep(100);
    --len;
    [data[0],data[len]]=[data[len],data[0]];
    modBarChart(data,3);
    for(var i=0;i<len;i++)
    {
      await sleep(300);
      left=2*i+1;
      right=2*(i+1);
      check1=left<len;
      check2=right<len;
      if(check1 && check2)
      {
        if(data[right]<data[left])
        {
          if(data[i]<data[left])
          [data[i],data[left]]=[data[left],data[i]];
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

  }

  



var quickSort=async (data)=>{
  
}




var radixSort=async (data)=>{
  var max=Math.max(...data);
  for(var div=1;max/div>0;div*=10)
  Counting(data,div);
  
}




var countSort=async (data)=>{
  var max=Math.max(...data)
  console.log(max);
  var count= new Array(max+1).fill(0);
  await sleep(200);
  countModBarChart(count,5);
  for(var i=0;i<max+1;i++)
  {
    // await sleep(300);
    count[data[i]]+=1;
    countModBarChart(count,5);
  }

  var index=0;
  for(var i=0;i<max+1;i++)
  {
    console.log('hello')
    while(count[i]>0)
    {
      // await sleep(300);
      data[index++]=String(i);
      modBarChart(data,6);
      --count[i];
      // await sleep(300);
      countModBarChart(count,5);
    }
  }

  
}


var bucketSort=async (data)=>{
  
}



function toObject(arr) {
  var rv = {};
  for (var i = 0; i < arr.length; ++i)
    if (arr[i] !== undefined) rv[i] = arr[i];
  return rv;
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

// let heapBtn=document.getElementById('heap-btn');
// heapBtn.addEventListener('click',()=>{
//   if(data)
//   {
//     barChart(data);
//     sortBarChart(data,4);
//   }
// })


// let quickBtn=document.getElementById('quick-btn');
// quickBtn.addEventListener('click',()=>{
//   if(data)
//   {
//     barChart(data);
//     sortBarChart(data,5);
//   }
// })


// let radixBtn=document.getElementById('radix-btn');
// radixBtn.addEventListener('click',()=>{
//   if(data)
//   {
//     barChart(data);
//     sortBarChart(data,6);
//   }
// })


// let buckBtn=document.getElementById('buck-btn');
// buckBtn.addEventListener('click',()=>{
//   if(data)
//   {
//     barChart(data);
//     sortBarChart(data,8);
//   }
// })




let countBtn=document.getElementById('count-btn');
countBtn.addEventListener('click',()=>{
  if(data)
  {
    barChart(data);
    sortBarChart(data,7);
  }
})


