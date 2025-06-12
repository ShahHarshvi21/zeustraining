function f1(){
    const nameInput=document.getElementById('name');
    const name1=nameInput.value.trim()
    console.log(name1);

    const commentInput=document.getElementById('comments');
    const comment1=commentInput.value.trim()
    console.log(comment1);

    if(!name1 && !comment1){
        alert("Please fill name and comment field");
        nameInput.focus();
        return false;
    }
    else if(!name1){
        alert("Please fill name field");
        nameInput.focus();
        return false;
    }
    else if(!comment1){
        alert("Please fill comment field");
        commentInput.focus();
        return false;
    }
    const gender = document.querySelector('input[name="gender"]:checked');
    if (gender) {
        console(gender.value);
    } else {
        alert("Enter gender");
        const radioInput=document.getElementById('show');
        radioInput.innerText="Please enter your gender";
        document.querySelector('input[name="gender"]').focus();
        return false;
    }
    return true;
}