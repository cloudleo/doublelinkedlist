function Node(n){     //Create a Node with the reference of next and previous  set to null
	this.element = n;
	this.next = null ;
	this.prev = null;
}

function DoubleLL(){
	this.head = new Node("head");  //creates head automatically when this function is called
	                               //if you want, you can set it to null and let the function insert handle that	
}                                   
DoubleLL.prototype.insert = function(n){
  var current = this.head;              // You will always want to start from the head, makes traversing a lot easier
  while(current.next !== null){         //traversing through the nodes until current.next === null
  	current = current.next;
  }                                     //once the while loop is over, it means it have reached the end 
  current.next = new Node(n);          // set the new Node as next of the existing last node you are on 
  current.next.prev = current;          //set the new Node previous as the current node
  return this;                          // returning this let you chain the function
}

DoubleLL.prototype.find = function(n){   
	var current = this.head;            //Again, you will always want to start from the head
	while(current.next !== null){         
		if (current.element === n){      //while travesing through the list, check to see if it equals an element that already exist
			return current;              //if so then return the whole node
		}
		current = current.next;         
	}
   return -1;                         //if cant find node then return -1
}

DoubleLL.prototype.del = function(n){   
	var current = this.find(n);            // use the find method and put the return value into a variable 
	current.prev.next = current.next;    //   make the next node forget about the current node
	current.next.prev = current.prev;    // And make the previous node forget about the current node
 return this;
}

DoubleLL.prototype.display = function(){  // this function display on the console
	var current = this.head , line = "";          // it traverses the list and add strings and get the nodes elements
	while(current.next !== null){
		line += current.element + " <--> ";
		current = current.next;
    }
    line += current.element + " <--> ";
    console.log(line, "tail")
}

DoubleLL.prototype.rev = function(){
	var current = this.head, line = "";    // to reverse a linked, you first have to traverse it to the end...then traverse backwards
	while(current.next !== null){
		current = current.next;
	}
   while(current.prev.element !== "head"){
   line += current.element + " <--> ";
   current = current.prev;
   }
   line += current.element;

}

var cool = new DoubleLL();       
cool.insert(1).insert(2).insert(3).insert(4).insert(5);  // chaining because the function return this
cool.display();      // head <--> 1 <--> 2 <--> 3 <--> 4 <--> 5 <-->  tail
cool.rev();            //reverses the list
cool.del(3);          // deletes the node from list with 3 as an element
cool.display();       // head <--> 5 <--> 4 <--> 2 <--> 1 <--> tail
console.log(cool.find(2));    // returns the whole object of the node with the element of 2











