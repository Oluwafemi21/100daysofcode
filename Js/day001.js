function even(start,stop){
  console.log(`This function prints even numbers from ${start}-${stop}`);
  for(start; start <= stop; start+=2){
    console.log(start);
  }
}

even(0,100);
