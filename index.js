$(document).ready(()=>{
    $("#myModal").modal('show');
    
    // ==========AUDIO=========================
    var kanyeYell = new Audio();
        kanyeYell.src = "./assets/YeSwif.mp3";
        // kanye's mp3 is a bit louder, so setting the volume lower here
        kanyeYell.volume = .2;
    const PlayYe = ()=> kanyeYell.play(); 

    var taylorYell = new Audio();
        taylorYell.src = "./assets/tayswif.mp3";
    const PlayTay = ()=> taylorYell.play();

    // =========TWEET API======================
    let kanye = $(".yeTweet");
    let taylor = $(".tayTweet");
    const generate = ()=>{
            $.ajax({
                url: 'https://api.kanye.rest',
                method: "GET",
            }).then( function(res) {
                // filtering out the worst offender
                kanye.text(`"${res.quote.replace(/fuck/g, "@#$!")}"`);
            });
    
            $.ajax({
                url: 'https://api.taylor.rest',
                method: "GET",
            }).then((res)=>{
                taylor.text(`"${res.quote}"`);
            });
    }
    
    // =========SCORE=========================
    $("#kanyeAdd").on("click", ()=>{
        PlayYe();
        let val = parseInt($("#kanyeScore").text());
        val +=1;
        $("#kanyeScore").text(val);
        generate();
    });
    
    $("#taylorAdd").on("click", ()=>{
        PlayTay();
        let val = parseInt($("#taylorScore").text());
        val +=1;
        $("#taylorScore").text(val);
        generate();
    })

    // call the generate function to display tweets on page load
    generate();
})