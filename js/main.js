$(document).ready(function(){
    $('#add-task-form').on('submit', function(e){
        addTask(e);
    })

    //function to add a task
    function addTask(){
        //add a unique ID 
        var newdate = new Date();
        id - newdate.getTime();

        var task = $('#task').val();
        var task_priority = $('#priority').val();
        var task_date = $('#date').val();
        var task_time = $('#time').val();

        //simple Validation
        if (task == ''){
            alert('task is required');
            e.preventDefault();
        }
        else if (task_date == ''){
            alert('Date is required');
            e.preventDefault();
        }
        else if (task_time == ''){
            alert('Time is required');
            e.preventDefault();
        }
        else if (task_priority == ''){
            alert('Priority is required');
        }
        else{
            tasks = JSON.parse(localStorage.getItem('task'));

            if (tasks == null){
                tasks = [];
            }

            var tasklist = JSON.parse(localStorage.getItem('task'));

            var new_task = {
                "id" : id,
                "task" : task,
                "task_priority" : task_priority,
                "task_time": task_time
            };

            tasks.push(new_task);
            localStorage.setItem('task', JSON.stringify(tasks))
        }




    }
});



