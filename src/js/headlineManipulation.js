


let manipulate = async (headings)=>{
    for (let i = 0; i<headings.length; i++){
        const heading = headings[i];
        const letters = heading.innerText.split("")
        heading.innerHTML = ""
        heading.classList.remove('opacity-0')
        for (let x=0; x<letters.length; x++){
            const letter = letters[x];
            if(letter === '\n'){
                heading.innerHTML += "<br>"
            }else if(letter === ' '){
                heading.innerHTML += " "
            }
            else{
                let promise = new Promise((res)=>{
                    if(letter!= ','){
                        setTimeout(()=>{
                            res();
                        },100)
                    }
                    else{
                        setTimeout(()=>{
                            res();
                        },300)
                    }
                });
                heading.innerHTML += "<span class='grow hover:text-myGreen'>" + letter + "</span>";
                await promise;
            }
        }
    }
}

export {manipulate}