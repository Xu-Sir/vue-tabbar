var app = new Vue({

    el:"#app",
    data:{
        books:[
            {
                id:1,
                name:'人人都是产品经理',
                date:'2020-02-06',
                price:50,
                total:1
            },
            {
                id:2,
                name:'销售的技巧',
                date:'2020-02-16',
                price:510,
                total:1
            },
            {
                id:3,
                name:'致富的道路',
                date:'2020-02-26',
                price:250,
                total:1
            },
            {
                id:4,
                name:'装备的保养和维护',
                date:'2020-12-06',
                price:350,
                total:1
            },
            {
                id:5,
                name:'特种作战装备',
                date:'2020-03-06',
                price:550,
                total:1
            },
            {
                id:6,
                name:'枪械入门到入狱',
                date:'2021-02-06',
                price:650,
                total:1
            }
        ],
        book:"书籍",
        bookAll:['a', 'b', 'c', 'd', 'e']
    },
    methods:{
        cutDown(item){
            if (item.total > 0){
                item.total--;
            }
        },
        addUp(item){
            item.total++;
        },
        totalMoney(){
          return   this.books.reduce(function(pre, curr){
            return pre + curr.price*curr.total;
            },0)
        },
        removeTd(index){ 
            this.books.splice(index,1);
        }

    },
    filters:{
        showPrice(price){
            return "￥ " + price.toFixed(2);
        }
    }

})