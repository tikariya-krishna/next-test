
export const allBlog = async() =>{
    const res = await fetch("http://localhost:3000/api/blog")
    if(!res.ok) throw new Error("Failed to fetch blogs");
    return res.json();
}



export const deleteblog = async(id)=>{
    if(!confirm("Are you sure you want to delete this blog?")) return;
    try {
        const res = await fetch('http://localhost:3000/api/blog',{
            method: 'DELETE',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify({ id })
        })
        if(!res.ok) throw new Error("Failed to delete blog");

        return res.json();   
    } catch (error) {
        console.error(error);
    }
}

