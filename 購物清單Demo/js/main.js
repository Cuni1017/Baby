
var shoplist={};

shoplist.name="MyBuylist 購物清單";
shoplist.time="2022/5/6";
shoplist.list=[
    {name: "吹風機",price: 300},
    {name: "麥克風",price: 9000},
    {name: "筆記型電腦",price: 54555},
    {name: "Iphone 9",price: 32000},
    {name: "神奇海螺",price: 5000},

];

{/* <li class="buy_item">1.吹風機
    <div class="price">100</div>
    <div class="del_btn">X</div>
</li> */}

var item_html="<li id={{id}} class='buy_item'>{{num}}.{{item}}<div class='price'>{{price}}</div><div id={{del_id}} class='del_btn'>X</div></li>";

var total_html="<li class='buy_item total'>總價<div class='price'>{{price}}</div></li>";


function showlist(){
    $("#items_list").html("");
    var total_price=0;  
    for(var i=0;i<shoplist.list.length;i++){
        var item=shoplist.list[i];
        var item_id="buyitem_"+i;
        var del_item_id="del_buyitem_"+i;
        console.log(del_item_id)
        total_price+=parseInt(item.price);
        // console.log(total_price );
    
        var current_item_html=
            item_html.replace("{{num}}",i+1)
                     .replace("{{item}}",item.name)
                     .replace("{{id}}",item_id)
                     .replace("{{del_id}}",del_item_id)
                     .replace("{{price}}",item.price)
                     
        ;
        $("#items_list").append(current_item_html);
        //delbtn id buyitem_1

        $("#"+del_item_id).click(
            function(){
                remove_item(item_id)
            }
        )

        // if($("#"+del_buyitem_0).click)

        // $("#del_item_0").click(
        //     function(){
        //         remove_item(0)
        //     }
        // );
        
        
    }

    var current_item_html=
        total_html.replace("{{price}}",total_price);
    $("#items_list").append(current_item_html);
}
showlist();

$(".addbtn").click(
    function(){
        shoplist.list.push(
            {
                name:$("#input_name").val(), 
                price:$("#input_price").val(),
                        
            }
        );
        $("#input_name").val("");
        $("input_price").val(""); 
        showlist();     
    }
)

function remove_item(id){
    shoplist.list.splice(id,1);
    showlist();
}

// remove_item(2);
