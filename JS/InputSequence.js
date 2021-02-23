
function validateInput () { 
    const name = document.querySelector("#sequence").value;
     let valid = false
     let count = 0
     loop1:
     while(valid === false)
     {
         count = 0;
         for (let index = 0; index < name.length; index++) {
            if(name[index] === "A" || name[index] === "C" || name[index] === "T" || name[index] === "G" || name[index] === "a" || name[index] === "c" || name[index] === "t" || name[index] === "g" )
             {
                count++
              if(count === name.length)
                {
                 valid = true
                }
             }
             else{
                 alert("You have entered an incompatible sequence for the translator. Please try using A, C, T, or G!")
                 break loop1;
             }
            
         }
     }
 }




function translateRNA() {
    
    let name = document.querySelector("#sequence").value;
    let valid = false
    let count = 0
    
    loop1:
    while(valid === false)
    {
        count = 0;
        for (let index = 0; index < name.length; index++) {
           if(name[index] === "A" || name[index] === "C" || name[index] === "T" || name[index] === "G" || name[index] === "a" || name[index] === "c" || name[index] === "t" || name[index] === "g" )
            {
               count++
             if(count === name.length)
               {
                valid = true
               }
            }
            else{
                alert("You have entered an incompatible sequence for the translator. Please try using A, C, T, or G!")
                
                break loop1;
            }
           
        }
    }


    let dna = name
    let rna = ""
     for(let i = 0; i < dna.length; i++)
    {
        if(dna[i] === "A")
        {
            rna += "U"
            
        }
        if(dna[i] === "C")
        {
            rna += "G" 
        }
        if(dna[i] === "T")
        {
            rna += "A"
        }
        if(dna[i] === "G")
        {
            rna += "C"
        }
        if(dna[i] === "a")
        {
            rna += "U"
        }
        if(dna[i] === "c")
        {
            rna += "G"
        }
        if(dna[i] === "t")
        {
            rna += "A"
        }
        if(dna[i] === "g")
        {
            rna += "C"
        }
    }
    document.getElementById("example").innerHTML = rna
    
 }





 function translateDNA() {
    
    let name = document.querySelector("#sequence").value;
    let valid = false
    let count = 0
    loop1:
    while(valid === false)
    {
        count = 0;
        for (let index = 0; index < name.length; index++) {
           if(name[index] === "A" || name[index] === "C" || name[index] === "T" || name[index] === "G" || name[index] === "a" || name[index] === "c" || name[index] === "t" || name[index] === "g" )
            {
               count++
             if(count === name.length)
               {
                valid = true
               }
            }
            else{
                alert("You have entered an incompatible sequence for the translator. Please try using A, C, T, or G!")
                break loop1;
            }
           
        }
    }
    let dna = name;
  let dnaNew = ""
    for(let index = 0; index < dna.length; index++)
   {
       
       if(dna.charAt(index) === "A")
       {
           dnaNew = dnaNew + "T"
       }
       if(dna[index] === "C")
       {
           dnaNew += "G" 
       }
       if(dna[index] === "T")
       {
           dnaNew += "A"
       }
       if(dna[index] === "G")
       {
           dnaNew += "C"
       }
       if(dna[index] === "a")
       {
           dnaNew += "t"
       }
       if(dna[index] === "c")
       {
           dnaNew += "g"
       }
       if(dna[index] === "a")
       {
           dnaNew += "t"
       }
       if(dna[index] === "g")
       {
           dnaNew += "c"
       }
   }
   document.getElementById("example").innerHTML = dnaNew
   
}







function getAmino() {
    const name = document.querySelector("#sequence").value;
     let valid = false
     let count = 0
    
     loop1:
     while(valid === false)
     {
         count = 0;
         for (let index = 0; index < name.length; index++) {
            if(name[index] === "A" || name[index] === "C" || name[index] === "T" || name[index] === "G" || name[index] === "a" || name[index] === "c" || name[index] === "t" || name[index] === "g" )
             {
                count++
              if(count === name.length)
                {
                 valid = true
                }
             }
             else{
                 alert("You have entered an incompatible sequence for the translator. Please try using A, C, T, or G!")
                 break loop1;
             }
            
         }
     } 

    const string = name;
       let amino = ""
    let seq = string.toLowerCase()
    let chunks = [];
    if(seq.length%3===0){
       
       let charsLength = seq.length;
       
       for (let i = 0;  i < charsLength; i += 3) {
           chunks.push(seq.substring(i, i + 3));
           
       }
   
     let pool = 1
    while(pool===1){
   for(let x=0; x<chunks.length; x++){
    
    if(chunks[x]==="aaa"||chunks[x]==="aag"){
        amino += "Phenylalanine, "
   }  
    else if(chunks[x]==="aat"||chunks[x]==="aac"||chunks[x]==="gaa"||chunks[x]==="gag"||chunks[x]==="gat"||chunks[x]==="gac"){
       amino += "Leucine, "
   } 
   else if(chunks[x]==="taa"||chunks[x]==="tag"||chunks[x]==="tat"){
       amino += "Isoleucine, "
   }
    else if(chunks[x]==="tac"){
       amino += "Methionine, "
   }
   else if(chunks[x]==="caa"||chunks[x]==="cag"||chunks[x]==="cat"||chunks[x]==="cac"){
       amino += "Valine, "
   }
   else if(chunks[x]=="aga"||chunks[x]==="agg"||chunks[x]==="agt"||chunks[x]==="agc"||chunks[x]==="tca"||chunks[x]==="tcg"){
       amino += "Serine, "    
   }
   else if(chunks[x]==="gga"||chunks[x]==="ggg"||chunks[x]==="ggt"||chunks[x]==="ggc"){
       amino += "Proine, "
   }
   else if(chunks[x]==="tga"||chunks[x]==="tgg"||chunks[x]==="tgt"||chunks[x]==="tgc"){
       amino += "Threonine, "    
   }
   else if(chunks[x]==="cga"||chunks[x]==="cgg"||chunks[x]==="cgt"||chunks[x]==="cgc"){
       amino += "Alanine, "
   }
   else if(chunks[x]==="ata"||chunks[x]==="atg"){
       amino += "Tyrosine, "
   }
   else if(chunks[x]==="gta"||chunks[x]==="gtg"){
       amino += "Histidine, "   
   }
   else if(chunks[x]==="gtt"||chunks[x]==="gtc"){
       amino += "Glutamine, "
   }    
   else if(chunks[x]==="tta"||chunks[x]==="ttg"){
       amino += "Asparagine, "
   }
   else if(chunks[x]==="ttt"||chunks[x]==="ttc"){
       amino += "Lysine, "
   }
   else if(chunks[x]==="cta"||chunks[x]==="ctg"){
       amino += "Aspartate, "
   }
   else if(chunks[x]==="ctt"||chunks[x]==="ctc"){
       amino += "Glutamic, "
   }
   else if(chunks[x]==="aca"||chunks[x]==="acg"){
       amino += "Cysteine, "
   }
   else if(chunks[x]==="acc"){
       amino += "Tryptophan, "
   }
   else if(chunks[x]==="gca"||chunks[x]==="gcg"||chunks[x]==="gct"||chunks[x]==="gcc"||chunks[x]==="tct"||chunks[x]==="tcc"){
       amino += "Arginine, "
   }
   else if(chunks[x]==="cca"||chunks[x]==="ccg"||chunks[x]==="cct"||chunks[x]==="ccc"){
       amino += "Glycine, "
   }
   else if(chunks[x]==="att"||chunks[x]==="atc"||chunks[x]==="act"){
       pool = 0;
        }
    }
 }

}
       else {
           alert("Your DNA strand does not have a multiple of 3 and cannot be translated.")
       }
    
    document.getElementById("example").innerHTML = amino
       
   }
