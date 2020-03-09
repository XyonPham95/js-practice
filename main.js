
const inventors = [
    "Albert Einstein",
    "Issac Newton",
    "Galileo Galilei",
    "Marie Curie",
    "Johannes Kepler",
    "Nicolaus Copernicus",
    "Max Planck",
    "Katherine Blodgett",
    "Ada Lovelace",
    "Sarah E. Goode",
    "Lise Meitner",
    "Hanna Hammarstrom"
  ];
  
  const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];
  
  
  //start with A
  // console.log(inventors.filter((name) => name.startsWith ("A") ));
   
   //name inclue n
  //  console.log(inventors.filter((name)=> name.includes("n")));
  
  
   // check if consecutive duplication:
  // function test(e){
  //   for(let i = 0; i < e.length; i++){
  //     if(e[i] === e[i+1]) return true
  //   } 
  //   return false
  // }
  // const dup = inventors.filter(test)
  // console.log(dup)
  
  // odd number
  // console.log(numbers.filter((num)=> num % 2 == 0));
  
  // 2 digits number
  // console.log(numbers.filter((num)=> num.toPrecision(2) ));
  
  //numbers which are primes
  
  // console.log(numbers.filter((num)=>{
  //   for(let i=2; i<=Math.sqrt(numbers);i++){if (numbers % i === 0) return false;}
  //   return true;}));
  
  //Print out the first name of each inventor.
  