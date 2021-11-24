let budgetValue = 0;
let arr = [0]
let arrReel = 0;
let maxLimit = [];
let leftOver = 0;
let binarySwitcher = 0;

//Assembler Variables:
let isFirstRun = true;
let stateChange = false;
let rep_stateChange = false;
let currentID;
let last_Usable_Value = [0,0];
let reel = 0;
let runOnce = true;
let temp = true;
const POSITIVE_INFINITY = Infinity
//Validation Variables:
let maxCap = [99999, 99999];

// NOTES
    // let overrideKeyUp = true;
    // let override_counter = 0;
    // NOTE : dry run of code on click helps avoid reel locking.
    // TODO : unable to keep up issue
    // TODO : unsure of dry drun code is required & um, a keydown function would be preferred
    //        as it would avoid initial dry run, (ex: tab)
    // TODO: implement function, switch(x: boolean){return y: 1/boolean};
    // TODO: create doOnce function

$(document).ready(function(){
    //iterate through each text-boxes and add keyup
    //handler to trigger sum event
    $(".budget").each(function(){
        $(this).keyup(function(){
            budgetValue = this.value;
            getSetBudget(budgetValue);
        })    
    });

    $(".txt").each(function() {
        $(this).keyup(function() {
            if (!isNaN(parseInt($(this).val()))) {
                console.log("***********~START~***********");
                console.log("source: ", $(this).attr("id").toUpperCase());

                if (!isFirstRun && $(this).attr("id") != currentID) {
                    rep_stateChange = true;
                    console.log("STATE CHANGED")
                    //runOnce = true;
                     // override_counter++;
                    // TODO: possible non-conflicting unified binary controller ^
                    // UPDATE^: identified as antagonistic binary controller
                }

                //BLOCK 7:

                if (rep_stateChange) {
                    console.log("Triggered Binary Switch!");
                    switch (binarySwitcher) {
                        case 0:
                            //maxCap[1] = leftOver;
                            //if (!stateChange) {
                                reel++;
                                binarySwitcher++;
                            //}
                            break;
                        case 1:
                            //maxCap[0] = leftOver;
                            //if (!stateChange) {
                                reel--;
                                binarySwitcher--;
                            //}
                            break;
                    }
                    rep_stateChange = false;
                }

                console.log("last_Usable_Value[", reel, "]: ", last_Usable_Value[reel]);
                console.log("Budget: ", budgetValue);
                console.log("currentID: ", currentID);

                if (parseInt($(this).val()) > budgetValue
                        || parseInt($(this).val()) > maxCap[reel]) {
                    $(this).val(last_Usable_Value[reel]);
                }
                else if (parseInt($(this).val()) <= budgetValue
                    && !isNaN(parseInt($(this).val()))
                    && parseInt($(this).val()) != 0
                    && parseInt($(this).val()) <= maxCap[reel]) {
                    last_Usable_Value[reel] = $(this).val();
                }
                leftOver = budgetValue - last_Usable_Value[reel];
                switch (reel){
                    case 0:
                        maxCap[1] = leftOver;
                        break;
                    case 1:
                        maxCap[0] = leftOver;
                        break;
                }

                last_Usable_Value[reel] > maxCap[reel] ? console.log("ANTI-ANTAGONISTIC WARNING!") : console.log("pass");

                console.log("last_Usable_Value__AFTER[", reel, "]: ", last_Usable_Value[reel]);

                calculateSum();

                let testing_sum = $("#sum").html();
                $("#testing").html(testing_sum);
                console.log("SumQuery: ", testing_sum);

                if (testing_sum > budgetValue) {

                }

                if (!stateChange) {
                    isFirstRun = false;
                    currentID = $(this).attr("id");
                    if(temp) {
                        stateChange = true;
                        temp = false;
                    }
                }
                console.log("-END-");
                currentID = $(this).attr("id");
            }
        });
    });
});

function calculateSum(budget) {
//create a break inside
    var sum = 0;
    //iterate through each textboxes and add the values
    $(".txt").each(function() {

        //add only if the value is number
        if(!isNaN(this.value) && this.value.length!=0) {
            if(this.value > budgetValue){
                console.log("BUDGET EXCEEDED");
            }
            sum += parseFloat(this.value);
        }
        //console.log(budget);

    });
    //.toFixed() method will roundoff the final sum to 2 decimal places
    $("#sum").html(sum.toFixed(2));
}

function getSetBudget(budget){
    $("#para").html(budget);
}




//TESTING
$("#funBox").hover(function(){
    $(this).css("background-color", "black");
});
$("#funBox").mouseleave(function(){
    $(this).css("background-color", "lightblue");
});

$("#show_txt").click(function(){
    if($("#text-inside").html() === "You got this!"){
        $("#text-inside").html("You can do this!");
    }else{
        $("#text-inside").html("You got this!");
    }
    $("#text-inside").show();

})

$("#hide_txt").click(function(){
    $("#text-inside").html("HIDDEN! :P");
    $("#text-inside").hide();
})
//TESTING^



//ver_1
// $(".txt").each(function() {

//     $(this).keyup(function(){
//         arrReel++;
//         arr[arrReel] = $(this).data("arr", $(this).val());
//         arr[arrReel] = $(this).data("arr");
//         console.log(arr[arrReel]);
//         console.log(budgetValue);
//         if (parseInt($(this).val()) <= budgetValue
//             || $(this).val() == null  // testing
//                 && parseInt($(this).val()) >= 0
//                     && !isNaN(parseInt($(this).val()))
//                 ){
//             ;
//         }else{
//             $(this).val(arr[arrReel - 1]);
//         }
//         calculateSum()
//         });
//     });

// $(".budget").each(function(){
//     $(this).keyup(function(){
//         budgetValue = this.value;
//         getSetBudget(this.value);
//     })    
// });
// });



// if(overrideKeyUp && override_counter === 2){
//     if(runOnce){
//         console.log("triggered binary switch!");
//         switch(binarySwitcher){
//             case 0:
//                 maxCap[1] = leftOver;
//                 if(!stateChange){
//                     reel++;
//                     binarySwitcher++;
//                 }
//                 break;
//             case 1:
//                 maxCap[0] = leftOver;
//                 if(!stateChange){
//                     reel--;
//                     binarySwitcher--;
//                 }
//                 break;
//         }
//         runOnce = false;
//     }
//     overrideKeyUp = false;
//     override_counter = 0;
// }

//VEYR BIG TEST
//double check

//BLOCK 7:
// if($(this).attr("id") != currentID){
//     switch(reel){
//         case 0:
//             console.log("SHOULD CHANGE REEL");
//             reel = 1;
//             binarySwitcher = 1;
//             break;
//         case 1:
//             reel = 0;
//             binarySwitcher = 0;
//             break;
//     }
// }