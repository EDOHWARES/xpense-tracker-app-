import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const FRF = () => {

    const {user} = useAuth0();

    const [formData, setFormData] = useState({
        userId: user?.name || Math.random(),
        date: new Date(),
        desc: '',
        amt: '',
        catg: '',
        pm: '',
    });

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setFormData((prev) => {
            return {...prev, [name]: value};
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // addRecord(formData);
        setFormData({
            userId: user?.name || Math.random(),
            date: new Date(),
            desc: '',
            amt: '',
            catg: '',
            pm: '',
        })
    };

  return (
    <div className="form-container">
        <form onSubmit={handleSubmit}>
            <div className="form-field">
                <label htmlFor="desc">Description:</label>
                <input onChange={handleChange} value={formData.desc} name="desc" id="desc" type="text" required className="input" />
            </div>
            <div className="form-field">
                <label htmlFor="amt">Amount:</label>
                <input onChange={handleChange} value={formData.amt} name="amt" id="amt" type="number" required className="input" />
            </div>
            <div className="form-field">
                <label htmlFor="catg">Category</label>
                <select onChange={handleChange} value={formData.catg} name="catg" id="catg" required className="input">
                    <option value="">Select a Category</option>
                    <option value="Food">Food</option>
                    <option value="Rent">Rent</option>
                    <option value="Salary">Salary</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className="form-field">
                <label htmlFor="pm">Payment Method</label>
                <select onChange={handleChange} value={formData.pm} name="pm" id="pm" required className="input">
                    <option value="">Select a Payment Method</option>
                    <option value="Credit Cart">Credit Card</option>
                    <option value="Cash">Cash</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                </select>
            </div>
            <button type="submit" className="button">Add Record</button>
        </form>
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default FRF
