let $ = document
let liContainer = $.querySelector(".autocom-box")
let inputElem = $.querySelector("input")
let searchInput = $.querySelector(".search-input")

let suggestions = [
    "user 1","user 2","user 3",
    
];

inputElem.addEventListener("keyup", function(){
	let inputValue = inputElem.value
	if(inputValue){
		searchInput.classList.add("active")
		let filteredWord = suggestions.filter(function(word){
			return word.toLowerCase().includes(inputValue.toLowerCase())
			// return word.toLowerCase().startsWith(inputValue.toLowerCase())
		})
		
		suggestionWordsGenerator(filteredWord)
		
	} else{
		searchInput.classList.remove("active")
	}
	
})

let customListItem

function suggestionWordsGenerator(wordArray){
	let suggestionWord = wordArray.map(function(word){
		return "<li>" + word + "</li>"
	}).join("")
	
	if(suggestionWord){
		liContainer.innerHTML = suggestionWord
	}else{
		liContainer.innerHTML = "<li>" + inputElem.value + "</li>"
	}
	Select()
}

function Select (){
	let allListItems = liContainer.querySelectorAll("li")
	allListItems.forEach(function(wordItem){
		wordItem.addEventListener("click",function(e){
			inputElem.value = e.target.textContent
			searchInput.classList.remove("active")
		})
	})
}

const users = [
	{id: 1, name: 'ali', age: 22},
	{id: 2, name: 'akbar', age: 25},
	{id: 3, name: 'amir', age: 24},
	{id: 4, name: 'amin', age: 23},
]

let usersCount = users.length
function isLogin(userID) {
	let isUserInUsers = users.some(user => user.id === userID)
	return isUserInUsers
}

function userRegister(name,age) {
	let userObj = {
		id: Math.floor(Math.random() * 100),
		name: name,
		age: age
	}
	users.push(userObj)
	return users
}

export {suggestions,isLogin,userRegister,usersCount}