import PieChart from './PieChart'
import BarChart from './BarChart'
import { useState } from 'react'

function Task1() {
    const [datas, setDatas] = useState([
        {
            "id" : "1",
            "name" : "Rubi",
            "age" : 31,
            "gender" : "F"
        },
        {
            "id" : 2,
            "name" : "Randy",
            "age" : 32,
            "gender" : "M"
        },
        {
            "id" : 3,
            "name" : "Apple",
            "age" : 18,
            "gender" : "F"
        },
        {
            "id" : 4,
            "name" : "Mango",
            "age" : 14,
            "gender" : "F"
        },
        {
            "id" : 5,
            "name" : "Ferry",
            "age" : 37,
            "gender" : "M"    
        },
        { 
            "id" : 6,
            "name" : "Johnson",
            "age" : 55,
            "gender" : "M"
        },
        { 
            "id" : 7,
            "name" : "Larry",
            "age" : 45,
            "gender" : "M"
        },
        { 
            "id" : 8,
            "name" : "Ryne",
            "age" : 12, 
            "gender" : "F"
        },
        { 
            "id" : 9,
            "name" : "Christopher",
            "age" : 24,
            "gender" : "M"
        }
    ]);
    

    const addData = (e) => {
        e.preventDefault()  
        const form = document.getElementById('addform')      
        const user = {
            name : form.txtname.value,
            age : form.txtage.value,
            gender : form.selgender.value
        }
        resetVal()
        setDatas(prevData => ([...prevData, user]));
        alert("Data inserted!")
    }

    const resetVal = () => {
        const form = document.getElementById('addform')   
        form.txtname.value = ''
        form.txtage.value = ''
        form.selgender.value = 'M'
    }

    return (
        <div className=' min-h-full w-full'>
            <div className="w-screen h-auto  flex flex-col justify-start items-center">
                <h1 className="text-yellow-600 text-2xl mt-2">Task 1 – Utilize any chart APIs</h1>
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 p-2 mt-10">
                        <PieChart datas={datas} />                    
                    </div>
                    <div className="w-full md:w-1/2 p-2 h-auto mt-20">
                        <BarChart datas={datas} />
                    </div>
                </div>
                <h1 className="text-yellow-600 text-2xl mt-4">Task 2 – Data Manipulation</h1>
                <div className="flex">
                    <form id="addform" onSubmit={addData} className='w-full flex-col flex text-gray-600 p-2 mb-20'>
                        Name <input name="txtname" required type="text" className='bg-white' />
                        Age <input name="txtage" required type="number" className='bg-white' />
                        Gender <select name="selgender"><option value="M">Male</option><option value="F">Female</option></select>
                        <button className='mt-3 bg-blue-500 text-white'>Submit</button>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Task1