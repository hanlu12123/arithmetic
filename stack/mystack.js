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
  this.size = () =>items.length;

  //清空栈
  this.clear= () => {
    items = [];
  }
};


//判断字符串里的括号是否合法
function is_leagl_brackets(string){
  let stack = new Stack();
  for(let i =0; i < string.length; i++){
    let item = string[i];
    //遇到左括号入栈
    if(item ==="("){
      stack.push(item);
    }else if(item === ")"){
      //遇到右括号，判断是否为空
      if(stack.isEmpty()){
        return false;
      }else{
        stack.pop(); //弹出左括号
      }
    }
  }
  //如果栈为空，说明字符串括号合法
  return stack.isEmpty();
}

console.log(is_leagl_brackets("sdf(dfg(ds(sds)sd)dfsfd)sdfrv"));
console.log(is_leagl_brackets("sdf(dfg(ds(sds)sd)dfsdfrv"));


//计算后缀表达式
function calc_exp(exp){
  let stack = new Stack();
  for(let i =0; i < exp.length; i++){
    let item = exp[i];
    if(["+", "-", "*", "/"].indexOf(item) >=0){
      //第一次弹出来的数放在运算符的右边，第二次弹出来的数放在运算符的左边
      let value_1 = stack.pop();
      let value_2 = stack.pop();
      let exp_str = value_2 + item + value_1;
      //计算并取整
      let res = parseInt(eval(exp_str));
      //计算结果压入栈中
      stack.push(res.toString());
    } else {
      stack.push(item);
    }
  }
  return stack.pop();
}

let exp = ["4","13","5","/","+"];
console.log(calc_exp(exp));