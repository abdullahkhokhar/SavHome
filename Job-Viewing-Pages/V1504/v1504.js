setInterval(refresh, 300000);
function refresh(){
  document.location.reload();
}

var scrolldelay;
function pageScroll() {
    window.scrollBy(0,1); // horizontal and vertical scroll increments
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        setTimeout('PageUp()',2000);
    }
}

function PageUp() {
    clearInterval(scrolldelay)
    window.scrollTo(0, 0);
    scrolldelay = setInterval('pageScroll()',100);
}

scrolldelay = setInterval('pageScroll()',200); // scrolls every 100 milliseconds

function readFromDB(){
  // you want to call this everytime the page is reloaded
  const list = document.getElementById('job-list');
  keys = [];
  // read from database and for each item read make a new table row to insert
  const dbRef = firebase.database().ref();  // NEED TO READ ONLY V1504
  dbRef.once('value', function(snap){
    snap.forEach(function(item){
      var itemVal = item.val();
      keys.push(itemVal);
    });
    for(var i in keys){
      const obj = keys[i];
      Object.keys(obj).forEach((name, index) => {
        // Now I have the name, department, and job number
        const jobNumArr = obj[name].job_numbers;
        const department = obj[name].department;
        const jobNumArrLength = (obj[name].job_numbers).length;

        for(var i = 0; i < jobNumArrLength; i++){
          if(department == 'V1504'){
            // Now each time we want to create a new table row element and load the items
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${jobNumArr[i]}</td>
            <td>${name}</td>
            <!-- <td><a href ="#">&#9989<a></td> -->
            `;
            list.appendChild(row);
          }
        }
        //console.log(`${name}: ${obj[name].job_numbers}, department: ${obj[name].department}`);
      })
    }
  });
}
