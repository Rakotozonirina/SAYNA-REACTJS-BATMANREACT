import React, {useState} from 'react'
import { FaAngleUp } from 'react-icons/fa6'
import "../styles/AnotherSelect.css"

function AnotherSelect() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedUnivers, setSelectedUnivers] = useState([]);
    const Univers = ["The Batman", "The Dark Night Rises", "Batman V Superman", "Batman et Robin", "Autres (comics, dessin animés)"];

    const toggleDropDown = () => {
        setIsOpen(!isOpen);
    };

    const toggleUnivers = (Univer) => {
        if(selectedUnivers.includes(Univer)){
            setSelectedUnivers(selectedUnivers.filter((item) => item !== Univer));
        } else {
            setSelectedUnivers([...selectedUnivers, Univer]);
        }
    };

return (
    <div className="another-custom-selected">
        <div className="selected-univer" onClick={toggleDropDown}>
            Univers
            <span> <FaAngleUp/> </span>
        </div>
        <ul className={`univer ${isOpen ? 'open' : ''}`}>
            {Univers.map((Univer, index) => (
                <li key={index} onClick={() => toggleUnivers(Univer)}>
                    <div>
                        <input type='checkbox' checked={selectedUnivers.includes(Univer)} readOnly />
                        {Univer}
                    </div>
                    <span>(123)</span>
                </li>
            ))}
        </ul>
    </div>
)
}

export default AnotherSelect
