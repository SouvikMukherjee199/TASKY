
const Task_Container = document.querySelector(".task_container");
const globalStore = [];//array of objects
// console.log(Task_Container);
const generateNewCard =(taskData) =>
  `<div class="col-sm-12 col-lg-4 col-md-6" id="${taskData.id}"  >

<div class="card task_container shadow ">
  <div class="card-header d-flex justify-content-end gap-2">
    <button type="button" class="btn btn-outline-primary "><i class="fa-solid fa-pencil"></i></button>
      
    <button type="button" class="btn btn-outline-danger hover"><i class="fa-solid fa-trash-can"></i></button>
  </div>
  <div class="card-body">
    <img src=${taskData.imageUrl} class="card-img-top" alt="...">
    <h5 class="card-title mt-3 fw-bold text-primary">${taskData.taskTitle}</h5>
    <p class="card-text">${taskData.taskDescription}</p>
    <a href="#" class="btn btn-primary">${taskData.taskType}</a>
  </div>
</div>
</div>
`
;

const loadInitialCardData = () => {
//local storage to get the tasky card data
const getCardData = localStorage.getItem("tasky");

// Localstorage only  accepts data in array Format, hence we convert the data into array first, then into object of objects
//convert to normal object
const {cards} = JSON.parse(getCardData);//cards is now object of objects

//loop over these  array of task object to create HTML card, inject it to DOM
cards.map((cardObject)=>{
  // Task_Container.insertAdjacentHTML("beforeend", generateNewCard(cardObject));
  Task_Container.insertAdjacentHTML("beforeend", generateNewCard(cardObject));
  globalStore.push(cardObject);

}

)


//Update our globalStore
};


const saveChanges = () => {
const taskData = {
    id: `${Date.now()}`,//This function gives a unique id to it
    imageUrl: document.getElementById("imageurl").value ,
    taskTitle: document.getElementById("tasktitle").value,
    taskType: document.getElementById("tasktype").value,
    taskDescription: document.getElementById("taskdescription").value

    

}
// console.log(taskData);

// const newCard =
// `<div class="col-sm-12 col-lg-4 col-md-6" id="${taskData.id}"  >

// <div class="card task_container shadow ">
//   <div class="card-header d-flex justify-content-end gap-2">
//     <button type="button" class="btn btn-outline-primary "><i class="fa-solid fa-pencil"></i></button>
      
//     <button type="button" class="btn btn-outline-danger hover"><i class="fa-solid fa-trash-can"></i></button>
//   </div>
//   <div class="card-body">
//     <img src=${taskData.imageUrl} class="card-img-top" alt="...">
//     <h5 class="card-title mt-3 fw-bold text-primary">${taskData.taskTitle}</h5>
//     <p class="card-text">${taskData.taskDescription}</p>
//     <a href="#" class="btn btn-primary">${taskData.taskType}</a>
//   </div>
// </div>
// </div>
// `;
// Task_Container.insertAdjacentHTML("beforeend", newCard);
Task_Container.insertAdjacentHTML("beforeend", generateNewCard(taskData));

globalStore.push(taskData);
localStorage.setItem("tasky", JSON.stringify({cards: globalStore}));//Stores the data in form of object of objects in the localstorage
};
// localStorage.setItem("unique_id", globalStore);//Stores the data in form of array of objects in the localstorage
//${dynamically changeable parameter}

//Issues 
//Page refreshes causes the data to get deleted
//API -> Application Programming Interface
// local storage-> Accessing application via local storage
// Interface -> Interface means middle man
//Features - Delete, edit, open the card, search


