(function(){
    const items = Array.from(document.querySelectorAll('[data-time]'));
  // var items = Array.from($('[data-time]'));
    console.log(items);
    
    /**
     * Filtering the elements with the word ECMA6
     */
    console.log("Filtering the elements with the word ECMA6");
    const items_with_ecma6 = items.filter(item => item.textContent.includes('ECMA6'));
    console.log(items_with_ecma6);

    /**
     * Map down to a list of time
     */
    console.log("Map down to a list of time");
    const time_list = items.map(item => item.getAttribute("data-time"));
    console.log(time_list);

    /**
     * Map to an array of seconds
     */
    console.log("Map to an array of seconds");
    const array_of_seconds = time_list.map(item =>{ 
        const values = item.split(":");
        return parseInt(values[0])*60 + parseInt(values[1]);
    });
    console.log(array_of_seconds);

    /**
     * Reduce to get total time
     */
    console.log("Reduce to get total time");
    const total_time = array_of_seconds.reduce((x,y)=>x+y,0);
    console.log(total_time);
})();