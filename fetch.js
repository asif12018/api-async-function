



const loadComments = async() =>{
    const res =  await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await res.json();
    console.log(data);

    //if u want to catch error
    // try{
    //     const res =  await fetch('https://jsonplaceholder.typicode.com/comments');
    //     const data = await res.json();
    //     console.log(data);
    // }
    // catch(error){
    //     console.log('data load error')
    // }

}
