$(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");

    var topicCount=topic.length;
    //一秒有1000毫秒
    //每分鐘60秒、每小時60min、每天24h
    var milisecsPerDay = 24*60*60*1000;
    for(var x=0;x<topicCount;x++)
    {
        $("#courseTable").append("<tr>");
        //$("#courseTable").append(`<td>${x+1}</td>`);
        if(x<=1)
        {
            $("#courseTable").append(`<td style="color:gray">${x+1}</td>`);
            $("#courseTable").append(`<td>${(new Date(startDate.getTime()+7*x*milisecsPerDay)).toLocaleDateString().slice(5).fontcolor("gray")}</td>`);
            $("#courseTable").append(`<td>${topic[x].fontcolor("gray")}</td>`);
        }
       else
       {
        $("#courseTable").append(`<td>${x+1}</td>`);
        $("#courseTable").append(`<td>${(new Date(startDate.getTime()+7*x*milisecsPerDay)).toLocaleDateString().slice(5)}</td>`);
        $("#courseTable").append(`<td>${topic[x]}</td>`);
       }
        $("#courseTable").append("</tr>");
    }
});