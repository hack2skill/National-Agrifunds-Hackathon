import {useState} from "react";
import '../../assets/css/dropdown.css'; 
function Dropdown ({selected, setSelected}) {
    const[isActive, setIsActive]=useState(false);
    const options=["Vibrant Villages Programme", "Pradhan Mantri Kisan Samman Nidhi.", "KCC for animal husbandry and fisheries"];
    return(
        <div className="dropdown">
            <div className="dropdown-btn" onClick={(e)=>
            setIsActive(!isActive)}>
                {selected}
                <span className="caret"><i class="fa-solid fa-caret-down"></i></span>
            </div>
            {isActive && (
            <div className="dropdown-content">
                {options.map((option)=>(
                    <div
                     onClick={(e)=>{
                        setSelected(option);
                        setIsActive(false);
                     }}
                     className="dropdown-item"
                    >
                        {option}
            </div>
                ))}
        </div>
     )}
     </div>
 );
}
export default Dropdown