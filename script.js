var textfield = document.getElementById('text');
var lewy = document.getElementById('lewa');
var prawy = document.getElementById('prawa');

var Rboxy, Lboxy;
var Rzaznaczony = [], Lzaznaczony = [];

var lewaTab = [], prawaTab = [];

function przepisz(nr)
{
    var textValue = textfield.value;
    
    switch(nr)
        {
            case 1: 
                    if((textValue !== undefined)||(textValue !== null)||(textValue != ''))
                    {
                        lewaTab.push(textValue);
                        lewy.innerHTML += '<label>'+lewaTab[lewaTab.length-1]+'<input type="checkbox" class="lcheck"></label>';
                    }
                    else{
                        lewy.innerHTML += '';
                    }
                    break;
            case 2:
                    if((textValue !== undefined)||(textValue !== null)||(textValue != ''))
                    {    
                        prawaTab.push(textValue);
                        prawy.innerHTML += '<label>'+prawaTab[prawaTab.length-1]+'<input type="checkbox" class="rcheck"></label>';
                    }
                    else{
                        prawy.innerHTML += '';
                    }
                break;
        }
}
function przenies_wszystko_na_lewo()
{
    if(!prawaTab.length>0)
        {
            console.log('brak elementow w tablicy');
        }
    else{
        for(let i=0; i<prawaTab.length; i++)
            {
                lewaTab.push(prawaTab[i]);
                lewy.innerHTML += '<label>'+prawaTab[i]+'<input type="checkbox"></label>';
                prawy.innerHTML = '';
            }
                prawaTab.splice(0, prawaTab.length);
    }
}

function przenies_wszystko_na_prawo()
{
    if(!lewaTab.length>0)
        {
            console.log('brak elementow w tablicy');
        }
    else{
        for(let i=0; i<lewaTab.length; i++)
            {
                prawaTab.push(lewaTab[i]);
                prawy.innerHTML += '<label>'+lewaTab[i]+'<input type="checkbox"></label>';
                lewy.innerHTML = '';
            }
                lewaTab.splice(0, lewaTab.length);
    }
}

function przenies_na_lewo()
{
    Rboxy = document.querySelectorAll('section#prawa > label > input[type=checkbox]');
    
    for(let i=0; i<Rboxy.length; i++)
        {
            if(Rboxy[i].checked)
            {
                Rzaznaczony.push(i);
            }
        }
    for(let i=0; i<Rzaznaczony.length; i++)
        {
            lewaTab.push(prawaTab[Rzaznaczony[i]]);
            //console.log(prawaTab[Rzaznaczony[i]]);
            lewy.innerHTML += '<label>'+prawaTab[Rzaznaczony[i]]+'<input type="checkbox"></label>';
        }
    for(let i=0; i<Rzaznaczony.length; i++)
        {
            prawaTab.splice((Rzaznaczony[i]-i), 1);
        }
    prawy.innerHTML = '';
    for(let i=0; i<prawaTab.length; i++)
        {
            prawy.innerHTML += '<label>'+prawaTab[i]+'<input type="checkbox"></label>';
        }
    if(Rzaznaczony.length>0)
        {
            clear(Rzaznaczony);
        }
}
function przenies_na_prawo()
{
    Lboxy = document.querySelectorAll('section#lewa > label > input[type=checkbox]');
    
    for(let i=0; i<Lboxy.length; i++)
        {
            if(Lboxy[i].checked)
            {
                Lzaznaczony.push(i);
            }
        }
    for(let i=0; i<Lzaznaczony.length; i++)
        {
            prawaTab.push(lewaTab[Lzaznaczony[i]]);
            prawy.innerHTML += '<label>'+lewaTab[Lzaznaczony[i]]+'<input type="checkbox"></label>';
        }
    for(let i=0; i<Lzaznaczony.length; i++)
        {
            lewaTab.splice((Lzaznaczony[i]-i), 1);
        }
    lewy.innerHTML = '';
    for(let i=0; i<lewaTab.length; i++)
        {
            lewy.innerHTML += '<label>'+lewaTab[i]+'<input type="checkbox"></label>';
        }
    if(Lzaznaczony.length>0)
        {
            clear(Lzaznaczony);
        }
}

function usun()
{
    Lboxy = document.querySelectorAll('section#lewa > label > input[type=checkbox]');
    Rboxy = document.querySelectorAll('section#prawa > label > input[type=checkbox]');
    
    //Krok 1.
        //lewy_panel
    for(let i=0; i<Lboxy.length; i++)
        {
            if(Lboxy[i].checked)
            {
                Lzaznaczony.push(i);
            }
        }
        //prawy_panel
    for(let i=0; i<Rboxy.length; i++)
        {
            if(Rboxy[i].checked)
            {
                Rzaznaczony.push(i);
            }
        }
    //Krok 1.^^^
    
    
    //Krok 2.
        //lewy_panel
    for(let i=0; i<Lzaznaczony.length; i++)
        {
            lewaTab.splice((Lzaznaczony[i]-i), 1);
        }
        //prawy_panel
    for(let i=0; i<Rzaznaczony.length; i++)
        {
            prawaTab.splice((Rzaznaczony[i]-i), 1);
        }
    //Krok 2. ^^^
    
    
    //Krok 3.
        //lewy_panel
    lewy.innerHTML = '';
    for(let i=0; i<lewaTab.length; i++)
        {
            lewy.innerHTML += '<label>'+lewaTab[i]+'<input type="checkbox"></label>';
        }
        //prawy_panel
    prawy.innerHTML = '';
    for(let i=0; i<prawaTab.length; i++)
        {
            prawy.innerHTML += '<label>'+prawaTab[i]+'<input type="checkbox"></label>';
        }
    //Krok 3.^^^
    
    
    //Krok 4.
        //lewy_panel
    if(Lzaznaczony.length>0)
        {
            clear(Lzaznaczony);
        }
        //prawy_panel
    if(Rzaznaczony.length>0)
        {
            clear(Rzaznaczony);
        }
    //Krok 4. ^^^
}


function clear(x)
{
    x.splice(0,x.length);
}