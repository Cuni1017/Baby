// $("#menu").html("新內容");

// menu=[];
// menu[0]="東坡肉炒飯";
// menu[1]="蔥爆牛肉";
// menu[2]="花式炒鮭魚";

menu=["東坡肉炒飯","蔥爆牛肉","花式炒鮭魚"];

menu.push("新疆烤山豬")

// $("#menu").append("<li>"+menu[0]+"</li>");
// $("#menu").append("<li>"+menu[1]+"</li>");
// $("#menu").append("<li>"+menu[2]+"</li>");
// $("#menu").append("<li>"+menu[3]+"</li>");

for(var i=0;i<menu.length;i++){
    $("#menu").append("<li>"+menu[i]+"</li>");
}

// shop={};
// shop.name="阿東熱炒";
// shop.addr="台北市宵夜路";
// shop.phone="02-12345678";

shop={
    name:"阿東熱炒",
    addr:"台北市宵夜路",
    phone:"02-12345678",
    menu:["東坡肉炒飯","蔥爆牛肉","花式炒鮭魚"],
}

shop.menu.push("新疆炒羊肉");

$("#shop").append("<li>商店名稱:"+shop.name+"</li>");
$("#shop").append("<li>商店地址:"+shop.addr+"</li>");
$("#shop").append("<li>商店電話:"+shop.phone+"</li>");

var menu_html="";
menu_html+="<ul>";
for(var i=0;i<shop.menu.length;i++){
    menu_html+="<li>"+shop.menu[i]+"</li>";
}
menu_html+="</ul";

$("#shop").append("<li>品項與菜單:"+menu_html+"</li>");