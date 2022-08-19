import bag1 from './bag1.jpeg';
import bag2 from './bag2.jpeg';
import bag3 from './bag3.jpeg';
import bag4 from './bag4.jpeg';
import bag5 from './bag5.jpeg';
import './Inventory.css';
function Inventory(){
    const inventories = [
                            [bag1, 'bag1', '$10.00'],
                            [bag2, 'bag2', '$15.00'],
                            [bag3, 'bag3', '$25.00'],
                            [bag4, 'bag4', '$8.00'],
                            [bag5, 'bag5', '$12.00']
                        ]

    let a = [];
    for(let i = 0; i < inventories.length; i++){
        a.push(
            <div key={inventories[i][1]}>
                <img src= {inventories[i][0]} alt = {inventories[i][1]} />
                    <br/>
                    <p><b>{inventories[i][1]}</b></p>
                    <br/>
                    <p>{inventories[i][2]}</p>
            </div>
            );
        }
        
    return (
        <div>
            <div className="InventoryHeader">
                <h2>Inventory</h2>
            </div>
            
            <div className="Inventory">
                {a}
            </div>
        </div>
    );
}

export default Inventory;