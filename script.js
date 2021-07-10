let searchBtn = document.querySelector('#searchBtn');
let searchUser = document.querySelector('#searchUser');
let uii = new ui();
searchBtn.addEventListener('click', (e) => {
    let gitUser = searchUser.value;
    if(gitUser != '') {
        //alert(gitUser);
        fetch(`https://api.github.com/users/${gitUser}`)
            .then(result => result.json())        
            .then(data => {
                console.log(data);
               if(data.message == 'Not Found'){
                    uii.showAlert("User not Found!", "alert alert-danger");
                }else{
                    uii.showProfile(data);
                    //profile
                }
            })
        } else{
            // clear
            uii.clearPro();
        }
});