
import axios from 'axios';
async function getInfo(){
    const res=await axios.get(`http://127.0.0.1:40193/readdept/`)
    console.log(res)
    return res.data
}
async function postInfo(val){
    var arr=[]
    await axios.post(`http://127.0.0.1:40193/createdept/`,val)
    .then((res) =>{
        this.arr = res.data
    })
    return arr
}
async function editInfo(val){
    var arr=[]
    await axios.patch(`http://127.0.0.1:40193/updatedept/`,val)
    .then((res) =>{
        this.arr = res.data
    })
    return arr
}
async function deleteInfo(id){
    return await axios.delete(`http://127.0.0.1:40193/deletedept/${id}`)
}
export{getInfo,postInfo,editInfo,deleteInfo}