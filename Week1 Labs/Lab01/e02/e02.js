var library = [{prof:'Asaad Saad', course:'WAP', courseID:'CS452'},
{prof:'Rakesh Shretha', course:'WAA', courseID:'CS545'},
{prof:'Steve Nolle', course:'SWE', courseID:'CS452'}];

const sorted_library= library.sort((a,b) => a.course>b.course);
console.log(sorted_library);