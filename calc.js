function display(val){
    document.querySelector("#display_box").value+=val 

}

function clear_box(){
    document.querySelector("#display_box").value=""
}

function result(){
    let res=document.querySelector("#display_box").value
    let res1=eval(res)
    document.querySelector("#display_box").value=res1
}