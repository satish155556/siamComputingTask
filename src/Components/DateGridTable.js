import React, {useState } from 'react';

const DateGridTable =(props)=>{

    const [search,setSearch] = useState('');
    
    var serialNumber = 1;
    const tabelData= props.data;
    console.log(tabelData);
    
    return(
        <div>
            <center>
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Id</th>
                        <th className='box'><input  type='checkbox'/>Name</th>
                        <th>DOB</th>
                        <th>city</th>
                        <th>Address</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td><input value={search} onChange={(e)=>{ setSearch(e.target.value)}} type='text'/></td>
                        <td><input value={search} onChange={(e)=>{ setSearch(e.target.value)}} type='date'/></td>
                        <td><select value={search} onChange={(e)=>{ setSearch(e.target.value)}} >
                            <option>Anantapur</option>
                            <option>Chittor</option>
                            <option>Bangalore</option>
                            <option>Chennai</option>
                            <option>Trivendram</option>
                            <option>Tirupati</option>
                            <option>Kadapa</option>
                            <option>Kurnool</option>
                            <option>Pamidi</option>
                            <option>Vijayawada</option>
                            </select></td>
                        <td><input type='address' value={search} onChange={(e)=>{ setSearch(e.target.value)}}/></td>
                    </tr>
                </thead>
                <tbody>
                    {tabelData.filter(sa=>sa.Name.includes(search)|| sa.city.includes(search)|| sa.Address.includes(search)|| sa.DOB.includes(search)).map((processData)=>{ 
                        return <tr>
                        <td>{serialNumber++}</td>
                        <td>{processData.id}</td>
                        <td className='check'>{<input type='checkbox'/>}{processData.Name}</td>
                        <td>{processData.DOB}</td>
                        <td>{processData.city}</td>
                        <td>{processData.Address}</td>
                    </tr>})}
                </tbody>
            </table>
            </center>
        </div>       
    );
}
export default DateGridTable;