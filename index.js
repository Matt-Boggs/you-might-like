$(document).ready(()=>{
    
    var kanyeYell = new Audio();
    kanyeYell.src = "YeSwif.mp3";
    kanyeYell.volume = .5
    console.log(kanyeYell)
    function PlayYe() { kanyeYell.play(); }

    var taylorYell = new Audio();
    taylorYell.src = "tayswif.mp3";
    function PlayTay() { taylorYell.play(); }

    console.log('check')
    let kanye = $(".kanye")
    let taylor = $(".taylor")
        const generate = ()=>{
            $.ajax({
                url: 'https://api.kanye.rest',
                method: "GET",
            }).then( function(res) {
                kanye.text("'" + res.quote.replace(/fuck/g, "@#$!") + "'")
            })
    
            $.ajax({
                url: 'https://api.taylor.rest',
                method: "GET",
            }).then((res)=>{
                taylor.text("'" + res.quote + "'")
            })

        }
        generate()

    $("#kanyeAdd").on("click", ()=>{
        console.log(kanyeYell)
        PlayYe();
        let val = parseInt($("#kanyeScore").text());
        let newVal = val+1
        $("#kanyeScore").text(newVal)
        generate()
    });
    
    $("#taylorAdd").on("click", ()=>{
        PlayTay();
        let val = parseInt($("#taylorScore").text());
        let newVal = val+1
        $("#taylorScore").text(newVal)
        generate()
    })





PlayTay()


})