const Stack = require('./stack');

let BinTreeNode = function(data){
  this.data = data;
  this.leftChild = null;
  this.rightChild = null;
  this.parentNOde = null;
};

// A(B(D,E(G,)),C(F))#
function binaryTree (){
  let root = null;

  this.init_tree = function(string){
    let  stack = new Stack.Stack();
    let k = 0;
    let new_node = null;

    for(let i = 0; i < string.lenght; i++){
      let item = string[i];
      if(item === "#"){
        break;
      }
      if(item === "("){
        stack.push(new_node);
        k = 1;
      }else if(item === ","){
        k = 2;
      }else if(item === ")"){
        stack.pop();
      }else{
        new_node = BinTreeNode(item);
        if(root === null){
          root = new_node;
        }else if(k === 1){
          let top_item = stack.top();
          top_item.leftChild = new_node;
          new_node.parent = top_item;
        }else{
          let top_item = stack.top();
          top_item.rightChild = new_node;
          new_node.parent = top_item;
        }
      }
    }
  }

  this.get_root = function(){
    return root;
  }

  this.in_order = function(node){
    if(node === null){
      return;
    }

    this.in_order(node.leftChild);
    console.log(node.data);
    this.in_order(node.rightChild);
  }

  this.pre_node = function(node){
    if(node === null){
      return;
    }
    console.log(node.data);
    this.pre_node(node.leftChild);
    this.pre_node(node.rightChild);
  }

  this.post_order = function(node){
    if(node === null){
      return;
    }
    this.post_order(node.leftChild);
    this.post_order(node.rightChild);
    console.log(node.data);
  }

  let tree_node_count = function(node){
    if(node === null){
      return;
    }
    let left_node_count = tree_node_count(node.leftChild);
    let right_node_count = tree_node_count(node.rightChild);
    return left_node_count + right_node_count + 1;
  }

  this.size = function(){
    return tree_node_count(root);
  }

  let tree_height = function(node){
    if(node === null){
      return 0;
    }
    let left_child_height = tree_height(node.leftChild);
    let right_child_height = tree_height(node.rightChild);
    return left_child_height > right_child_height ? left_child_height + 1 : right_child_height + 1;
  };
  this.height = function(){
    return tree_height(root);
  }

  let find_node = function(node, data){
    if(node === null){
      return;
    }
    if(node.data === data){
      return node;
    }
    let left_res = find_node(node.leftChild, data);
    if(left_res){
      return left_res;
    }
    return find_node(node.rightChild, data);
  }
  this.find = function(data){
    return find_node(root, data);
  }
}

let mirror_1 = function(node){
  if(node === null){
    return;
  }

  let temp = node.leftChild;
  node.leftChild = node.rightChild;
  node.rightChild = temp;
  mirror_1(node.leftChild);
  mirror_1(node.rightChild);
}

let mirror_2 = function(node){
  if(node === null){
    return;
  }

  let left = mirror_2(node.leftChild);
  let right = mirror_2(node.rightChild);
  node.leftChild = right;
  node.rightChild = left;
  return node;
}

function pre_order(node){
  if(node === null){
    return;
  }
  let stack = new Stack.Stack();
  let curr_node = node;

  while(curr_node){
    console.log(curr_node.data);
    if(node.rightChild){
      stack.push(curr_node.rightChild);
    }
    if(curr_node.leftChild){
      curr_node = curr_node.leftChild;
    }else{
      curr_node = stack.pop();
    }
  }
}

function in_order(node){
  if(node === null){
    return;
  }

  let stack = new Stack.Stack();
  let left_node = node.leftChild;
  while(left_node){
    console.log(left_node.data);
    console.log(left_node.parentNOde.data);
    if(left_node.parentNode.rightChild){
      left_node = left_node.parentNode.rightChild;
    }

  }

}