function Stack(){
  let items = []; //存储数据

  //添加栈元素
  this.push = item => {
    items.push(item);
  }

  //弹出栈顶元素
  this.pop = () => items.pop();

  //返回栈顶元素
  this.top = () => items[items.length-1];
  
  //判断栈是否为空
  this.isEmpty = () => items.length === 0;

  //返回栈的大小
  this.size = () => items.length;

  //清空栈
  this.clear= () => {
    items = [];
  }
};

//找出最小数， 时间复杂度o(1)
function MinStack(){
  let data_stack = new Stack(); //存储数据
  let min_stack = new Stack(); // 存储最小值

  // push方法
  this.push = function(item){
    data_stack.push(item);

    // min_stack为空或者栈顶元素大于item
    if(min_stack.isEmpty() || item < min_stack.top()){
      min_stack.push(item);
    } else {
      min_stack.push(min_stack.top());
    }
  };

  //弹出栈顶元素
  this.pop = function(){
    data_stack.pop();
    min_stack.pop();
  }

  //返回栈的最小值
  this.min = function(){
    return min_stack.top();
  }
}

let minstack = new MinStack();

minstack.push(3);
minstack.push(6);
minstack.push(8);
console.log(minstack.min());
minstack.push(2);
console.log(minstack.min());
minstack.pop();
console.log(minstack.min());