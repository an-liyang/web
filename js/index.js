/*
* @Author: hangyouzi123
* @Date:   2016-12-17 16:00:35
* @Last Modified by:   hangyouzi123
* @Last Modified time: 2016-12-17 16:44:48
*/
$(function(){
    var odiv=$('.jinTab .col-xs-3');
    $(odiv).mouseenter(function(){
        console.log(this);
        $(this).attr('class','col-xs-3 actived')
    }).mouseleave(function(){
        $(this).attr('class','col-xs-3')
    })

})