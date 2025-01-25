const question = [
  'what is a full form of lifo', 
  'who is a founder of algorithms',
  'what is the time complexity of a binary search tree', 
  'recursion can follow which data structure',
  'what is a full form of sql',
  'what is the difference between stack and queue',
  'how does the merge sort algorithm work',
  'what are the properties of a binary heap',
  'what is the full form of JSON',
  'what is the difference between REST and SOAP'];


  const options = [
    ['Last In First Out', 'Long Integer Floating Object', 'Logical Input Function Output', 'List In Function Order'],
    ['Al-Khwarizmi', 'Isaac Newton', 'Niklaus Wirth', 'Charles Babbage'],
    ['O(n)', 'O(log n)', 'O(n^2)', 'O(1)'],
    ['Queue', 'Stack', 'Array', 'Linked List'],
    ['Structured Query Language', 'Sequential Query Language', 'Simple Query Language', 'Structured Question Language'],
    ['Stack follows LIFO and Queue follows FIFO', 'Stack and Queue both follow LIFO', 'Stack follows FIFO and Queue follows LIFO', 'Stack and Queue both follow FIFO'],
    ['Divide and Conquer', 'Backtracking', 'Greedy', 'Dynamic Programming'],
    ['Complete binary tree', 'Heap property', 'Complete binary tree and heap property', 'Binary search tree property'],
    ['JavaScript Object Notation', 'JavaScript Object Namespace', 'Java Script Object Notification', 'Java Script Object Navigation'],
    ['REST is stateless and SOAP is stateful', 'REST uses JSON and SOAP uses XML', 'REST is for microservices and SOAP is for monolithic services', 'All of the above'],
  ];
const ans = [];
const pustak=['last in first out','Al-Khwarizmi','O(log n)','Stack','Structured Query Language','Stack follows LIFO and Queue follows FIFO','Divide and Conquer','Complete binary tree','Java Script Object Notification','REST is stateless and SOAP is stateful'];

const me = document.querySelector('.me');
let val = -1;
const next = document.querySelector('.next');
const previous = document.querySelector('.previous');
const btn = document.querySelectorAll('.btn');
const lock = document.querySelector('.lock');
const submit=document.querySelector('.submit');
let score=0;

let selectedOption = null; // check krne kei liye


function select(index) {
  if (val >= 0 && val < question.length) {
    selectedOption = options[val][index]; // Store the selected option
    console.log('Selected:', options[val][index]);
   
    btn.forEach(button => button.classList.remove('active'));  // it is used for a propogation delay
    btn[index].classList.add('active');
  }
}

function nexty() {
  if (val >= question.length - 1) {
    return;
  }
  val++;
  me.innerHTML = question[val];
  for (let i = 0; i < options[val].length; i++) {
    btn[i].innerHTML = options[val][i];
    btn[i].onclick = () => select(i);
  }
  btn.forEach(button => button.classList.remove('active'));
  selectedOption = null; // reset
}

function prevous() {
  if (val <= 0) {
    return;
  }
  val--;
  me.innerHTML = question[val];
  for (let i = 0; i < options[val].length; i++) {
    btn[i].innerHTML = options[val][i];
    btn[i].onclick = () => select(i);
  }
  btn.forEach(button => button.classList.remove('active'));
  selectedOption = null; // =dubara lagea
}

function lockQuestion() {
  if (val >= 0 && val < question.length && selectedOption !== null) {
    ans[val] = selectedOption; // Store the selected option in the ans array
    console.log('Locked:', selectedOption);
    console.log(ans);
    nexty();
    
  }
}

next.addEventListener("click", nexty);
previous.addEventListener("click", prevous);
lock.addEventListener("click", lockQuestion);
submit.addEventListener("click",function(){
    for (let i=0; i<ans.length;i++){
        if(ans[i]==pustak[i]){ score++}
    }
  console.log(score);
  //let scorele=document.createElement('span');
  let scorehead=document.createElement('h1');
  scorehead.textContent=` your score is ${score}`;
  scorehead.classList.add('score-heading');
  document.body.appendChild(scorehead);

});

// Initial lock to set the first question
nexty();
