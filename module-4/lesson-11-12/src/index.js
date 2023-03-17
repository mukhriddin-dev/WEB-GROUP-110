"use strict";

let BASE_URL = "http://localhost:3000";

// --------------- GET TASK LIAST --------------///

const getTaskList = async () => {
    $("#task").innerHTML = "<h1>LOADING . . .</h1>";
    try {
        const response = await fetch(`${BASE_URL}/task`);

        if (response.status === 200) {
            const result = await response.json();
            console.log(result);
            renderList(result);
        }
    } catch (err) {}
};

getTaskList();

function renderList(task) {
    if (task.length > 0) {
        $("#task").innerHTML = "";

        task.forEach((item, index) => {
            let tr = createElement("tr", "my-2 bg-green-300 h-[60px]", `
                <td> ${
                index + 1
            } </td>
                <td>${
                item.title
            }</td> 
                <td> ${
                item.date
            }</td>
                <td>
                  <button data-edit="${
                item.id
            }" class="bg-sky-500 focus:ring-4 text-white font-bold text-center px-3 min-w-[80px] h-[45px] rounded-xl">
                   EDIT
                  </button>
                </td> 
                <td> 
                 <button   data-del ="${
                item.id
            }" class ="bg-red-600 focus:ring-4 text-white font-bold text-center px-3 min-w-[80px] h-[45px] rounded-xl" >
                    Delete 
                  </button>
                </td>
            `);

            $("#task").append(tr);
        });
    } else {
        $("#task").innerHTML = "TASK LIST EMPTY"
    }
}

// --------------- GET TASK LIST END --------------///

// -------------- ADD TASK LIST --------------------//

const addTask = (e) => {
    e.preventDefault();

    let val1 = $("#title").value;
    let val2 = $("#date").value;

    let newTask = {
        id: Date.now(),
        title: val1,
        date: val2
    };

    if (newTask.title.length === 0 || newTask.date.length === 0) {
        alert("PLEASE FILL FORM ELEMNTS !")
    } else {
        fetch(`${BASE_URL}/task`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(newTask)
        });

    }

    console.log(newTask);
};

$("#add").addEventListener("submit", (e) => {
    console.log("ok");
    addTask(e);
});

// -------------- ADD TASK LIST  END--------------------//


// ------------- DELETE PART ------------------------//


function deleteTask(id) {
    fetch(`${BASE_URL}/task/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({})
    })
}

// deleteTask(1678877278920)


$('#task').addEventListener('click', (e) => {
    if (e.target.classList.contains('bg-red-600')) {
        let id = e.target.getAttribute('data-del');

        if (id) {
            deleteTask(id)

        }

    }
})


// ----------------------- edit post ---------------------------


function editTask(e) { // e.preventDefault();
    let id = localStorage.getItem('id');

    let val1 = $("#title").value;
    let val2 = $("#date").value;

    let newTask = {
        id: Date.now(),
        title: val1,
        date: val2
    };

    // console.log(id)

    if (newTask.title.length === 0 || newTask.date.length === 0) {
        alert("PLEASE FILL FORM ELEMNTS !")
    } else {
        fetch(`${BASE_URL}/task/${id}`, {

            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(newTask)
        });

    }

    console.log(newTask);

}


$('#edit').addEventListener('click', () => {
    editTask();
})

$('#task').addEventListener('click', (e) => {
    if (e.target.classList.contains('bg-sky-500')) {
        let id = e.target.getAttribute('data-edit');
        if (id) {
            localStorage.setItem('id', id)

        }

    }
})
