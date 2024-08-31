const form=document.querySelector('form');
const  resultDiv=document.querySelector('.result');

form.addEventListener('submit',(e)=>{
e.preventDefault();
getWordInfo(form.elements[0].value);
});

const getWordInfo=async(word)=>{
    try{

    
    // alert("word:"+word);
    const response= await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data=await response.json();
 
    resultDiv.innerHTML=`
    <h2><strong>word:</strong>${data[0].word}</h2>
    <p> class="parts of speech"${data[0].meanings[0].partOfSpeech}</p>
        <p><strong>meaning:</strong>${data[0].meanings[0].definitions[0].definition}</p>
         
        <p><strong>example:</strong>${data[0].meanings[0].definitions[0].example}</p>
         <p><strong>antonyms:</strong></p>
        `;
    //     if(definitions.antonyms.length==0){
    //         resultDiv.innerHTML +=`<span>not found</span>`;
    //     }
    //     else{
    // for(let i=0;i<definitions.antonyms.length;i++){
    //     resultDiv.innerHTML +=`<li>${definitions.antonyms[i]}</li>`
    // }

//adding read more button
resultDiv.innerHTML+=` <div><a href="${data[0].sourceUrls}"traget="_blank">Read More</a </div>> `
    }
    catch
        (error){
            resultDiv.innerHTML=`<p> sorry the word can not be found </p>`
    }
    console.log(data);

}