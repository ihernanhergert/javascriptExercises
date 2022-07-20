/* Lista Enlazada Simple, Dada 2 Listas Enlazadas, Devolver Una Nueva Lista Enlazada Con La Suma De Los Valores En Sus Posiciones 
Correspondientes.

*/

input = [2,4,3], [5,6,4]
output = [7,0,8]

function ListNode(val,next){
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}


let arr1 = []
let arr2 = []

let h1 = l1
let h2 = l2

while(h1 != null){
    arr1.push(h1)
    h1 = h1.next
}

while(h2 != null){
    arr2.push(h2)
    h2 = h2.next
}

const n1 = BigInt(arr1.join(""))
const n2 = BigInt(arr2.join(""))

const res = (n1 + n2).toString().split("").reverse()

let head = null
let current = null


for (i = 0; i < res.length; i ++){
    const node = new ListNode(res[i],null)
    if (head === null){
        head = node
        current = node
    } else {
        p.next = node
    }
}
return head