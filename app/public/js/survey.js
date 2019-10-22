$('#submit').on('click',function(){
    let values = []
    var name = $('#name').val();
    for (let  i = 1; i <= 10; i++){
        if (!isNaN(parseInt($("#q" + i + " option:selected").attr('value'))))
        values.push(parseInt($("#q" + i + " option:selected").attr('value')));
    };
    if (values.length == 10 && name ! = ""){
        console.log(values, name);
        $('results-modal').modal('show');
    }else{
        console.log("not all Values filled in");
    };
})