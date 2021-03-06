queue = new QueueDataStructure;

function QueueDataStructure () {
  this.queueControl = []
  this.MAX_SIZE = 8
}

QueueDataStructure.prototype.isEmpty = function (){
  if (this.queueControl.length === 0){
    return true
  } return false 
  }

QueueDataStructure.prototype.canEnqueue = function(){
  if (this.queueControl.length < this.MAX_SIZE){
    return true
  } else {
    return false
  }
}

QueueDataStructure.prototype.enqueue = function(elem){
  if (this.canEnqueue() === true){
    this.queueControl.unshift(elem)
    return this.queueControl
  } else {
    return 'Queue Overflow'
  }
}

QueueDataStructure.prototype.dequeue = function (){
  if (this.isEmpty() === true){
    return 'Queue Underflow'
  } return this.queueControl.pop() 
}
