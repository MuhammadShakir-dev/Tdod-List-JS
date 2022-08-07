      

        const form = document.querySelector('form');
        const input = document.querySelector('#todo');
        const list = document.querySelector('#li');
        form.addEventListener("submit",function(e){
            e.preventDefault();
            const todovalue = input.value;
            const newli = document.createElement('LI');
            newli.innerText = todovalue;
            list.append(newli);
            input.value = "";
        })
