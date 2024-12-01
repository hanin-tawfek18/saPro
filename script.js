function openfunction(){
    document.getElementById('menu').style.width ='200px';
}
function closefunction(){
    document.getElementById('menu').style.width = '0px'
}

let availablkeywords = [
    "Php" ,
    "Sql",
    "C",
    "C++",
    "Python",
    "Javascript"
];
const searchWrapper = document.querySelector(".row");
const inputbox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelect("result-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper .querySelector("a");
let webLink;

inputbox.onkeyup =(e)=>{
    let userData = e.target.value;
    let emptyArray = [];
    if(userData){
        icon.onclick = () =>{
            webLink = https//www.google.com/search?q=${userData};
            linkTag.setAttribute("href" , webLink);
            linkTag.click();
        }
        emptyArray = availablkeywords.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray=emptyArray.map((data)=>{
            return data = <li>${data}</li>;
        });
        searchWrapper.classList.add("active");
        showavailableKeywords(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for(let i=0; i< allList.length;i++){
            allList[i].setAttribute("onclick" , "select(this)");
        }
        }else{
            searchWrapper.classList.remove("active"); 
        }
    }
    function select(element){
        let selectData = element.textContent;
        inputBox.value = selectData;
        icon.onclick = ()=>{
            webLink = https//www.google.com/search?q=${selectData};
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
        searchWrapper.classList.remove("active");
    }
    function showSuggestions(list){
        let listData;
        if(!list.length){
            userValue = inputBox.value;
            listData = <li>${userValue}</li>;
        }else{
          listData = list.join('');
        }
        suggBox.innerHTML = listData;
    }
    
   
