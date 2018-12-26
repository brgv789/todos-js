var localService = (function () {
    var _todos = [];
    var Service = {
        getTodos: function () {
            console.log(localStorage.getItem('todos'));
            console.log(JSON.parse(localStorage.getItem('todos')))
            _todos = JSON.parse(localStorage.getItem('todos')) || [];
            return _todos;
        },
        readTodo: function () { },
        createTodo: function (item) {   
            _todos.push(item);
            localStorage.setItem('todos', JSON.stringify(_todos));
            return item;
        },
        updateTodo: function () { },
        deleteTodo: function (itemId) {
            if(itemId){
                //TODO: find index
                var index = 0;
                _todos.slice(index, 0);
            }
         }

    }
    return Service;
})();