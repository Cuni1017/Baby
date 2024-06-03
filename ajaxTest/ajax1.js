
var tododata;

$.ajax(
    {
        url:"https://monoame.com/awi_class/api/command.php?type=get&name=tododata",
        success: function(res){
            $("#notify").text(res);
            tododata=res;
        }
    }
);