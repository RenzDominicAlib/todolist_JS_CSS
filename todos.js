// Adding /////////
		
		// const todoList = document.querySelector('#todos-list ul');
		// // console.log(todoList);
		// const addForm = document.querySelector('#add-todos');
		// // console.log(addForm);
		// addForm.addEventListener('submit', function(e){
		// 	e.preventDefault();
		// 	// console.log('test');
		// 	let addBar = addForm.addbar.value.trim();
		// 	// console.log(addBar);

		// //// create HTML element for added Todos
		// 	let addedLi = document.createElement('li');
		// 	let addedSpan = document.createElement('span');
		// 	let addedI = document.createElement('i');

		// 	addedSpan.textContent = addBar;
		// 	addedSpan.setAttribute('class', 'name');

		// 	addedI.setAttribute('class', 'delete fas fa-trash-alt');

		// 	addedLi.append(addedSpan);
		// 	addedLi.append(addedI);
		// 	todoList.append(addedLi);
		// });

// Adding ////////////////////

		const todoList = document.querySelector('#todos-list ul');
		const addForm = document.querySelector('#add-todos');	

		let generateTemplate = function(todo){
			let html = `<li>
							<span class="name">${todo}</span>
							<i class="delete fas fa-trash-alt"></i>
						</li>`;
				todoList.innerHTML += html;

		};

		addForm.addEventListener('submit', function(e){
			e.preventDefault();
			let addBar = addForm.addbar.value.trim();
			if (addBar.length) {
				generateTemplate(addBar);
				addForm.reset();
			}
			
		});

// Deleting //////////////////////

		todoList.addEventListener('click', function(e){
			if (e.target.classList.contains('delete')) {
				let delLi = e.target.parentElement;
				todoList.removeChild(delLi);
			}
		});

// Searching and Filtering ///////
		
		// const searchForm = document.querySelector('#search-todos');
		// // console.log(searchForm);
		// searchForm.addEventListener('keyup', function(e){
		// 	let searchBar = searchForm.searchbar.value.toLowerCase();
		// 	// console.log(searchBar);
		// 	let todoListexist = document.querySelectorAll('#todos-list ul li');
		// 	// console.log(todoListexist);
		// 	todoListexist.forEach(function(todoExist){
		// 		let existingTodo = todoExist.textContent.toLowerCase();
		// 		// console.log(existingTodo);
		// 		if (existingTodo.indexOf(searchBar) != -1) {
		// 			todoExist.style.display = 'block';
		// 		}
		// 		else{
		// 			todoExist.style.display = 'none';
		// 		}
		// 	});
			
		// });

// Searching and Filtering ///////

		const searchBar = document.querySelector('#search-todos input');
		// console.log(searchBar);

		const filterTodos = function(term){

			let existingLi = Array.from(todoList.children);

			existingLi
			.filter(function(li){
				return !li.textContent.toLowerCase().includes(term)})
			.forEach(function(li){
					li.classList.add('filtered');});

			existingLi.filter(function(li){
				return li.textContent.toLowerCase().includes(term)}).forEach(function(li){
					li.classList.remove('filtered');});

		};

		searchBar.addEventListener('keyup', function(e){
			let term = searchBar.value.trim().toLowerCase();
			filterTodos(term);
		});


