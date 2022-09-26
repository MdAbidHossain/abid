function IsEnter()
{
	var TextBox_val = document.getElementById("InputBox").value; // Get all the data from the input box.

	// If enter key is pressed then only respond.
	if (TextBox_val != "")
	{
		if (event.keyCode == 13)
			main();
	}
}

function main()
{
	// the main logic will be coded here.
	var TextBox_val = document.getElementById("InputBox").value; // Get all the data from the input box.
	var ResponseText_val = document.getElementById("ResponseText"); // Get all the data from the response text.

	var FormatInput = TextBox_val.toLowerCase().trim(); // convert our given input to lowercase.
	// For example "Apple" -> "apple".

	// Let's code the Logic for chatting...
	// and like this you can add several more features to it make it really advance.
	// As i said, i will be uploading it's source code it github so just check the link in description!
	if (FormatInput.includes("hi") || FormatInput.includes("hello") || FormatInput.includes("kmn aco?") || FormatInput.includes("hey"))

		ResponseText_val.innerHTML = "Alhamdulillah - Assalamuyalaikum";

	else if (FormatInput.includes("how are you"))
		ResponseText_val.innerHTML = "I'm fine! and You?";


else if (FormatInput.includes("i am also fine"))
		ResponseText_val.innerHTML = "Alhamdulillah";

else if (FormatInput.includes("Fine"))
        ResponseText_val.innerHTML = "Alhamdulillah";

else if (FormatInput.includes("you name?"))
        ResponseText_val.innerHTML = "i'm an AI😂🙄🙄😂";
    else if (FormatInput.includes("your name?"))
        ResponseText_val.innerHTML = "i'm an AI😂🙄🙄😂";

else if (FormatInput.includes("rabiul"))
        ResponseText_val.innerHTML = "play boy";

else if (FormatInput.includes("help"))
        ResponseText_val.innerHTML = "How Can I help You sir?";

else if (FormatInput.includes("gmail"))
        ResponseText_val.innerHTML = "mdabidhossaiin@gmail.com";

else if (FormatInput.includes("you name?"))
        ResponseText_val.innerHTML = "i'm a AI-Made By Abid Hossain";

else if (FormatInput.includes("Abid"))
        ResponseText_val.innerHTML = "This is personal Website";
else if (FormatInput.includes("bye"))
        ResponseText_val.innerHTML = "Allah Hafiz🥰❤";



	// Open websites!
	else if (FormatInput.includes("google"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening Google";
		window.open("https://www.google.com", "_blank");
	}

	else if (FormatInput.includes("youtube"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening YouTube";
		window.open("https://www.youtube.com", "_blank");
	}

	else if (FormatInput.includes("facebook"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening YouTube";
		window.open("https://www.facebook.com/MdAbidHossaiin");
	}

	else if (FormatInput.includes("open light-lens"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Github";
		window.open("");
	}

	else
		ResponseText_val.innerHTML = "Sorry, I can't understand you 😔";
}



$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["CSE Student.", "Nature photographer.","tourism."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["CSE Student.", "tourism.", "Nature photographer."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
