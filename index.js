$(document).ready(()=>{
    console.log('check')
    let kanye = $(".kanye")
    let taylor = $(".taylor")
        const generate = ()=>{
            $.ajax({
                url: 'https://api.kanye.rest',
                method: "GET",
            }).then( function(res) {
                console.log(res.quote)
                kanye.text(res.quote)
            })
    
            $.ajax({
                url: 'https://api.taylor.rest',
                method: "GET",
            }).then((res)=>{
                console.log(res.quote)
                taylor.text(res.quote)
            })

        }
        generate()

    $("#kanyeAdd").on("click", ()=>{
        let val = parseInt($("#kanyeScore").text());
        let newVal = val+1
        console.log(newVal)
        $("#kanyeScore").text(newVal)
        generate()
    });
    
    $("#taylorAdd").on("click", ()=>{
        let val = parseInt($("#taylorScore").text());
        let newVal = val+1
        console.log(newVal)
        $("#taylorScore").text(newVal)
        generate()
    })

    







})