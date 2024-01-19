// import React from 'react'
import { useState } from "react"
import "../Styles/Admin.css";

const Admin = () => {

    const [library,setLibrary] = useState([{bookid:1, title: "book -1", stock: 4 ,students: []},{bookid:2, title: "book -2", stock:3 ,students: []},{bookid:3, title: "book -3", stock:6 ,students: []},{bookid:4, title: "book -4", stock:0 ,students: []}]);

    const [student,setStudent] = useState({id:"", name:"", sem:"",division:"", sex:"",sbookid:""});

    
    const handelSubmit = (e) => {
        e.preventDefault();
        if(handelValues()){
            alert('registered successfully');
            library.map((e)=>{
                if(e.bookid == parseInt(student.sbookid) ){
                    e.students.push(student);
                }
            });
        
        setStudent({id:"", name:"", sem:"", division:"", sex:"",sbookid:""});
        }
        else{
            return;
        }   
    }


    const handelValues =(e)=>{
        if(!student.id )
        {
            alert("please enter student id");
            
            return false;
        }
        if(!student.name )
        {
            alert("please enter student name");
            //this.name.focus();
            return false;
        }
        if(!student.sem)
        {
            alert("please enter event id ");
            return false;
        }
        if(!student.division){
            alert('please select division');
            return false;
        }
        if(!student.sex)
        {
            alert('please select gender');
            return false;
        }
        if(!student.sbookid){
            alert('please select bookid');
            return false;
        } 
        return true;
    }

    const handelInput = (e) => {
        setStudent({...student,[e.target.name]:e.target.value});
        return
    }

  return (
    <div className="library-container">
        <div className="book-container">
            <h2>Books List</h2>
            <ul>
                {
                    library.map((e,index)=>{
                        return(
                        <li key={index}>{e.bookid} {e.title} {e.stock} {' :'} {"["}
                        {e.students?.map((student,index)=>{
                            return(
                                <p key={index}>
                                   {"StudentId : "}{student.id}{" Student Name : "}{student.name}{" Student Sem : "}{student.sem}{" Student Division : "}{student.division}{" Student Gendre : "}{student.sex}{" Student BookId : "}{student.sbookid}<br/>

                                </p>
                            )
                            
                            })}{"]"}
                        </li>
                        )
                    })
                }
                
            </ul>
        </div>
        <h2>Book Allotment</h2>
        <form action="" onSubmit={handelSubmit} className="form-container">
        <label htmlFor="id">Enter id:
            <input type="number" name="id" value={student.id} onChange={handelInput} />
        </label>
        <label htmlFor="name">Enter name:
            <input type="text" name="name" value={student.name} onChange={handelInput} />
        </label>
        <label htmlFor="sem">
            <select name="sem" id="sem" value={student.sem} onChange={handelInput} >
                <option value="">select sem:</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
            </select>
        </label>
        <label htmlFor="division">Enter division:
            <input type="text" name="division" value={student.division} onChange={handelInput} />
        </label>
        <>
        <p>Gendre:</p>
        <label htmlFor="male">Male:
            <input type="radio" name="sex" value={student.sex === 'male'} onChange={handelInput}/>
        </label>
        <label htmlFor="male">Female:
            <input type="radio" name="sex" value={student.sex === 'female'} onChange={handelInput}/>
        </label>
        </>
        <label htmlFor="selectbook-id">Enter book-id: 
            <input type="number" name="sbookid" value={student.sbookid} onChange={handelInput} required/>
        </label>
        <button type="submit">submit</button>
        </form>
    </div>
  )
}

export default Admin