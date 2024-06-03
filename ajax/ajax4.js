function ajax_get(url){
    //打開瀏覽器
    var request = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject('Microsoft.XMLHTTP')
    //輸入網址
    request.open("GET",url,true)
    //發送
    request.send();
    //獲取數據
    request.onreadystatechange = function(){
        if(request.onreadystatechange == 4){
            // 2xx 成功類相關
            // 3xx 重定向
            // 4xx 客戶端錯誤
            // 5xx 服務端錯誤
            if(request.status == 200){
                console.log(request.response)
                return request.response
            } else {
                alert("獲取數據失敗")
            }
        }
    }
}