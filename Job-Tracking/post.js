function readJobFromDB(){
  // first clear the list completley
  const list = document.getElementById('job-list');
  list.innerHTML = '';

  // read from database and enter into the list
  const db = firebase.database();
  const job = db.ref('Jobs');

  job.once('value')
  .then(function(dataSnapshot){
    var data = dataSnapshot.val();
    var keys = Object.keys(data);

    keys.forEach(function(key){
      console.log(data[key]);
    });
  });
}

class Job{
  constructor(section, name, jobNumber){
    this.section = section;
    this.name =  name;
    this.jobNumber  = jobNumber;
  }
}

class UI{
  addJobToList(job){
    // Need to add to the data base
    var empRef = firebase.database().ref('Jobs'); // reference to our collection
    // save to firebase database
    empRef.child(job.jobNumber).set({
      section: job.section,
      name: job.name,
    })
    .then(function(){
      // GIVE A SUCCSESS MESSEGE
      console.log('succsess');
    });

    // then add to the list
    // create a tr element
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${job.title}</td>
    <td>${job.author}</td>
    <td>${job.jobNum}</td>
    <td><a href ="#" class = "delete">X<a></td>
    `;
    list.appendChild(row);
  }

  showAlert(msg, className){
    // create a div
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    // ad text node
    div.appendChild(document.createTextNode(msg));
    // get parent
    const container = document.querySelector('.container');
    const form = document.querySelector('#job-form');
    container.insertBefore(div, form); // want to put the div before the parent form

    setTimeout(function(){
      document.querySelector('.alert').remove();
    }, 3000);
  }

  deleteJob(target){
    // Remove from DB


    //  then remove from the list
    if(target.className === 'delete'){
      target.parentElement.parentElement.remove();
    }
  }

  clearFields(){
    document.getElementById('title').value = '';
    document.getElementById('employee').value = '';
    document.getElementById('job-number').value = '';
  }
}




document.getElementById('job-form').addEventListener('submit', function(e){
  // get all the field values
  const title = document.getElementById('title').value;
  const employee = document.getElementById('employee').value;
  const job = document.getElementById('job-number').value;

  const new_job = new Job(title, employee, job); // Create a new job

  // Instantiate a UI object
  const ui = new UI();

  // check for empty insertions and provide some change
  if(title === '' || employee === '' || job === ''){
    // error alert
    ui.showAlert('Fill in All Fields!', 'error');
  } else {
    // add the job to list
    ui.addJobToList(new_job);
    // show showAlert
    ui.showAlert('Job Added to be Tracked!', 'success')
    ui.clearFields();
  }
  e.preventDefault();
});
