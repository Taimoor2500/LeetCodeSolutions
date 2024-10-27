/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {

 let main_loop = 0;

  if(word1.length > word2.length)
  {
        main_loop = word1.length;
  }
  else
  {
    main_loop = word2.length;
  }
 let merged = "";
for (let i = 0; i < main_loop; i++) {
    if (i < word1.length) {
      merged = merged + word1[i];  
    }
    if (i < word2.length) {
      merged = merged + word2[i]; 
    }
  }

  return merged;


    
};