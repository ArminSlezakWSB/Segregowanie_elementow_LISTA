var leweL = [], praweL = [];
var leweC = [], praweC = [];
var przycisk = document.querySelectorAll('header > input[type=button]');

przycisk[0].onclick = dodaj(0);
przycisk[1].onclick = dodaj(1);

function przepisz(x)
{
    switch(x)
        {
            case 1: leweC = document.querySelectorAll('section#lewa > label > input[type=checkbox]');
                    leweL = document.querySelectorAll('section#lewa > label');
                break;
            case 2: praweC = document.querySelectorAll('section#prawa > label > input[type=checkbox]');
                    praweL = document.querySelectorAll('section#prawa > label');
                break;
        }    
    zmien_wyglad(leweC, leweL);
    zmien_wyglad(praweC, praweL);
}

function zmien_wyglad(x, y)
{
    for(let i =0; i<x.length; i++)
        {
            x[i].onfocus = function()
            {
                x[i].style.background = 'red';
            }
        }
}

 /* Rboxy = document.querySelectorAll('section#prawa > label > input[type=checkbox]');
    Lboxy = document.querySelectorAll('section#lewa > label > input[type=checkbox]');
    if(Rboxy.length>0)
        {
            Rboxy[0].onchecked = function()
            {
                console.log('m');
            }
        }*/