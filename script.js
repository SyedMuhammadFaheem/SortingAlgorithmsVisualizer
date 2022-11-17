//merge and quick sort under construction

var colors = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
];
var TROW = "tr",
  TDATA = "td";
function barChart(data) {
  var chart = document.createElement("div");

  var barchart = document.createElement("table");

  var titlerow = document.createElement(TROW);

  var titledata = document.createElement(TDATA);

  titlerow.appendChild(titledata);
  barchart.appendChild(titlerow);
  chart.appendChild(barchart);

  var barrow = document.createElement(TROW);
  var j = 0;

  for (var i = 0; i < data.length; i++) {
    if (i % 13 == 0) j = 0;

    barrow.setAttribute("class", "bars");
    var bardata = document.createElement(TDATA);
    var bar = document.createElement("div");
    bar.setAttribute("id", i);
    if (i > 13) {
      bar.setAttribute("class", colors[j]);
      j++;
    } else {
      bar.setAttribute("class", colors[i]);
    }
    bar.setAttribute("id", "elem" + data[i]);
    bar.style.height = data[i] + "px";
    bardata.innerText = data[i];
    bardata.appendChild(bar);
    barrow.appendChild(bardata);
  }

  var legendrow = document.createElement(TROW);
  var legend = document.createElement(TDATA);
  legend.setAttribute("class", "legend");
  legend.setAttribute("colspan", data.length);

  for (var i = 0; i < data.length; i++) {
    var legbox = document.createElement("span");
    legbox.setAttribute("class", "legbox");
    var barname = document.createElement("span");
    barname.setAttribute("class", colors[i] + " xaxisname");
    legbox.appendChild(barname);
  }
  barrow.appendChild(legend);
  barchart.appendChild(barrow);
  barchart.appendChild(legendrow);
  chart.appendChild(barchart);
  for (var i = 0; i < 12; i++)
    document.getElementsByClassName("chart")[i].innerHTML = chart.outerHTML;
}

var modBarChart = (data, index) => {
  var chart = document.createElement("div");

  var barchart = document.createElement("table");

  var titlerow = document.createElement(TROW);

  var titledata = document.createElement(TDATA);

  titlerow.appendChild(titledata);
  barchart.appendChild(titlerow);
  chart.appendChild(barchart);

  var barrow = document.createElement(TROW);
  var j = 0;

  for (var i = 0; i < data.length; i++) {
    if (i % 13 == 0) j = 0;

    barrow.setAttribute("class", "bars");
    var bardata = document.createElement(TDATA);
    var bar = document.createElement("div");
    if (i > 13) {
      bar.setAttribute("class", colors[j]);
      j++;
    } else {
      bar.setAttribute("class", colors[i]);
    }
    bar.style.height = data[i] + "px";
    bardata.innerText = data[i];
    bardata.appendChild(bar);
    barrow.appendChild(bardata);
  }

  var legendrow = document.createElement(TROW);
  var legend = document.createElement(TDATA);
  legend.setAttribute("class", "legend");
  legend.setAttribute("colspan", data.length);

  for (var i = 0; i < data.length; i++) {
    var legbox = document.createElement("span");
    legbox.setAttribute("class", "legbox");
    var barname = document.createElement("span");
    barname.setAttribute("class", colors[i] + " xaxisname");
    legbox.appendChild(barname);
  }
  barrow.appendChild(legend);
  barchart.appendChild(barrow);
  barchart.appendChild(legendrow);
  chart.appendChild(barchart);
  document.getElementsByClassName("chart")[index].innerHTML = chart.outerHTML;
};

var countModBarChart = (data, index) => {
  var chart = document.createElement("div");

  var barchart = document.createElement("table");

  var titlerow = document.createElement(TROW);

  var titledata = document.createElement(TDATA);

  titlerow.appendChild(titledata);
  barchart.appendChild(titlerow);
  chart.appendChild(barchart);

  var barrow = document.createElement(TROW);
  var j = 0;

  for (var i = 0; i < data.length; i++) {
    if (i % 13 == 0) j = 0;

    barrow.setAttribute("class", "bars");
    var bardata = document.createElement(TDATA);
    var bar = document.createElement("div");
    if (i > 13) {
      bar.setAttribute("class", colors[j]);
      j++;
    } else {
      bar.setAttribute("class", colors[i]);
    }
    bar.style.height = (data[i] + 1) * 7 + "px";
    bardata.innerText = data[i];
    bardata.appendChild(bar);
    barrow.appendChild(bardata);
  }

  var legendrow = document.createElement(TROW);
  var legend = document.createElement(TDATA);
  legend.setAttribute("class", "legend");
  legend.setAttribute("colspan", data.length);

  for (var i = 0; i < data.length; i++) {
    var legbox = document.createElement("span");
    legbox.setAttribute("class", "legbox");
    var barname = document.createElement("span");
    barname.setAttribute("class", colors[i] + " xaxisname");
    legbox.appendChild(barname);
  }
  barrow.appendChild(legend);
  barchart.appendChild(barrow);
  barchart.appendChild(legendrow);
  chart.appendChild(barchart);
  document.getElementsByClassName("chart")[index].innerHTML = chart.outerHTML;
};

var defaultArr = [82, 23, 75, 53, 32, 24];

barChart(defaultArr);
var myFile = document.getElementById("formFile");
var arrFromFile;
var data;
myFile.addEventListener("change", function() {
  var file = myFile.files.item(0);
  var fileReader = new FileReader();
  fileReader.onload = function() {
    arrFromFile = JSON.parse(fileReader.result);
    data = arrFromFile.split(",");
    barChart(data);
  };

  fileReader.readAsText(file);
});

var start, end, time;
var check = true;
var count = 0;

let sortBarChart = async (data, sortID) => {
  if (sortID == 1) {
    count = 0;
    insertionSort(data);
  } else if (sortID == 2) {
    count = 0;
    start = Date.now();
    await mergeSort(data, 0, data.length - 1);
    end = Date.now();
    time = end - start;
    time = time / 1000;
    time = time - count * (150 / 1000);
    time = time.toPrecision(5);
    document.getElementById("mergeTime").innerHTML =
    String(time) + " seconds";
  } else if (sortID == 3) {
    count = 0;
    check = true;
    bubbleSort(data);
  } else if (sortID == 4) {
    count = 0;
    start = Date.now();
    await heapSort(data);
    end = Date.now();
    time = end - start;
    time = time / 1000;
    time = time - count * (150 / 1000);
    time = time.toPrecision(5);
    document.getElementById("heapTime").innerHTML =
    String(time) + " seconds";
  } else if (sortID == 5) {
    count = 0;
    start = Date.now();
    await quickSort(data,0,data.length-1);
    end = Date.now();
    time = end - start;
    time = time / 1000;
    time = time - count * (150 / 1000);
    time = time.toPrecision(5);
    document.getElementById("quickTime").innerHTML =
    String(time) + " seconds";
  } else if (sortID == 6) {
    count = 0;
    radixSort(data);
  } else if (sortID == 7) {
    count = 0;
    countSort(data);
  } else if (sortID == 8) {
    count = 0;
    bucketSort(data);
  }
};

const sleep = (time) => {
  count += 1;
  return new Promise((resolve) => setTimeout(resolve, time));
};


var insertionSort = async (data) => {
  start = Date.now();
  var key, j;
  for (var i = 1; i < data.length; i++) {
    key = data[i];
    j = i - 1;
    while (j >= 0 && parseInt(data[j]) > key) {
      await sleep(150);
      data[j + 1] = data[j];
      modBarChart(data, 0);
      j--;
    }
    data[j + 1] = key;
    await sleep(150);
    modBarChart(data, 0);
  }
  modBarChart(data, 0);
  end = Date.now();
  time = end - start;
  time = time / 1000;
  time = time - count * (150 / 1000);
  time = time.toPrecision(5);
  document.getElementById("insertionTime").innerHTML =
    String(time) + " seconds";
};


var merge =async (data, low, mid, high) => {
  console.log("merge");
  var i = low,
    j = mid + 1,
    k = low;
  var arr = new Array(100);
  while (i <= mid && j <= high) {
    if (parseInt(data[i]) < parseInt(data[j])) arr[k++] = data[i++];
    else arr[k++] = data[j++];
  }
  while (i <= mid) arr[k++] = data[i++];
  while (j <= high) arr[k++] = data[j++];
  for (var i = low; i <= high; i++) {
    data[i] = arr[i];
    await sleep(150)
    modBarChart(data,1)  
  }

};

var mergeSort = async (data, low, high) => {
  if (low < high) {
    var mid = parseInt((low + high) / 2);
    await mergeSort(data, low, mid);
    await mergeSort(data, mid + 1, high);
    await merge(data, low, mid, high);
  }
};

var bubbleSort = async (data) => {
  start = Date.now();
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data.length - i - 1; j++) {
      count += 1;
      await sleep(150);
      if (parseInt(data[j]) > parseInt(data[j + 1])) {
        [data[j], data[j + 1]] = [data[j + 1], data[j]];
        modBarChart(data, 2);
        check = false;
      }
    }
    if (check) break;
  }
  end = Date.now();
  time = end - start;
  time = time / 1000;
  time = time - count * (150 / 1000);
  time = time.toPrecision(5);
  document.getElementById("bubbleTime").innerHTML = String(time) + " seconds";
};


var heapSort=async (data)=>
{
  var N=data.length

  for (var i = Math.floor(N / 2) - 1; i >= 0; i--)
    await heapify(data, N, i);

  for (var i = N - 1; i > 0; i--) {
    var temp = data[0];
    data[0] = data[i];
    data[i] = temp;
    await sleep(150)
    modBarChart(data,3)
    await heapify(data, i, 0);
  }
}

var heapify=async (data, N, i)=>
{
  var largest = i; 
  var l = 2 * i + 1; 
  var r = 2 * i + 2; 

  if (l < N && parseInt(data[l]) > parseInt(data[largest]))
    largest = l;

  if (r < N && parseInt(data[r]) > parseInt(data[largest]))
    largest = r;

  if (largest != i) {
    var swap = data[i];
    data[i] = data[largest];
    data[largest] = swap;
    await sleep(150)
    modBarChart(data,3)
    await heapify(data, N, largest);
  }
}


var Partition=async (data,low,high)=>{
  console.log('hell')
  var pivot=data[low];
  var i=low+1;
  var j=high;
  do{
    while(parseInt(data[i])<=pivot)
    ++i;
    while(parseInt(data[j])>pivot)
    --j;
    if(i<j)
    {
      [data[i],data[j]]=[data[j],data[i]]
      await sleep(150)
      modBarChart(data,4)
    }
    
  }while(i<j)
  [data[low],data[j]]=[data[j],data[low]]
  await sleep(150)
  modBarChart(data,4)
  console.log(data)
  return j
  
}


var quickSort = async (data,low,high) => {
  var partitionIndex;
  if(low<high)
  {
    partitionIndex=await Partition(data,low,high);
    await quickSort(data,low,partitionIndex-1);
    await quickSort(data,partitionIndex+1,high)
  }

};

var Counting=async (data,div)=>{
  console.log(div)
  var output=new Array(data.length)
  var count=new Array(10).fill(0);
  await sleep(150)
  countModBarChart(count,7);
  for(var i=0;i<data.length;i++)
  {
    count[(Math.floor(parseInt(data[i])/div))%10]++;
    await sleep(150)
    countModBarChart(count,7);
  }

  for(var i=1;i<10;i++)
  {
    count[i]+=count[i-1]
    await sleep(150)
    countModBarChart(count,7);
  }

  for(var i=data.length-1;i>=0;i--)
  {
    output[count[(Math.floor(parseInt(data[i])/div))%10]-1]=data[i];
    --count[(Math.floor(parseInt(data[i])/div))%10];
    await sleep(150)
    countModBarChart(count,7);
  }

  for(i=0;i<data.length;i++)
  {
    data[i]=output[i];
    await sleep(150)
    modBarChart(data,8);
  }

  
}


var radixSort = async(data) => {
  start=Date.now()
  var max = Math.max(...data);
  console.log(max);
  for (var div = 1; Math.floor(max / div) > 0; div=div*10) await Counting(data, div);
  end = Date.now();
  time = end - start;
  time = time / 1000;
  time = time - count * (150 / 1000);
  time = time.toPrecision(5);
  document.getElementById("radixTime").innerHTML = String(time) + " seconds";
    
};

var countSort = async (data) => {
  start=Date.now()
  var max = Math.max(...data);
  var count = new Array(max + 1).fill(0);
  countModBarChart(count, 5);
  for (var i = 0; i < max + 1; i++) {
    count[data[i]] += 1;
    await sleep(15);
    countModBarChart(count, 5);
  }

  var index = 0;
  for (var i = 0; i < max + 1; i++) {
    while (count[i] > 0) {
      data[index++] = String(i);
      await sleep(15);
      modBarChart(data, 6);
      --count[i];
      await sleep(15);
      countModBarChart(count, 5);
    }
  }
  end = Date.now();
  time = end - start;
  time = time / 1000;
  time = time - count * (15 / 1000);
  time = time.toPrecision(5);
  document.getElementById("countTime").innerHTML = String(time) + " seconds";
};

var bucketSort = async (data) => {};


let insBtn = document.getElementById("ins-btn");

insBtn.addEventListener("click", () => {
  if (data) {
    barChart(data);
    sortBarChart(data, 1);
  }
});

let mergeBtn = document.getElementById("merge-btn");
mergeBtn.addEventListener("click", () => {
  if (data) {
    barChart(data);
    sortBarChart(data, 2);
  }
});

let bubBtn = document.getElementById("bub-btn");
bubBtn.addEventListener("click", () => {
  if (data) {
    barChart(data);
    sortBarChart(data, 3);
  }
});

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

let buckBtn=document.getElementById('buck-btn');
buckBtn.addEventListener('click',()=>{
  if(data)
  {
    barChart(data);
    sortBarChart(data,8);
  }
})

let countBtn = document.getElementById("count-btn");
countBtn.addEventListener("click", () => {
  if (data) {
    barChart(data);
    sortBarChart(data, 7);
  }
});
