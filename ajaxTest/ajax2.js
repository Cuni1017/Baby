var item_template="<li class='{{class}}'>{{num}}.{{name}}.{{date}}</li>";

var data_url="https://monoame.com/awi_class/api/command.php?type=get&name=tododata";

var tododata;

$ajax(
    {
        url: data_url,
        success: function(res){
            console.log(res);
        }
    }
);