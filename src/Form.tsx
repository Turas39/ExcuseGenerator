import React, { useState } from "react";
import App from "./App.tsx";

interface formData{
    imie: string;
    powod: string;
    wiarygodnosc: number;
    data: string
    kreatywnosc: string;
    szczegoly: string;
    wymowki: boolean;

}

const Form: React.FC = () => {
    const [formData, setFormData] = useState<formData>({
        imie: "",
        powod: "",
        wiarygodnosc: 0,
        data: "",
        kreatywnosc: "",
        szczegoly: "",
        wymowki: false,
    });

    function handleSubmit() {

    }

    function handleChange() {

    }

    return (
        <form onSubmit={handleSubmit} >
            <input type="text" name="imie" placeholder="Imię" value={formData.imie} onChange={handleChange}/>

            <select name="powod" value={formData.powod} onChange={handleChange}>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
            </select>

            <input type="range" name="wiarygodnosc" min="1" max="10" value={formData.wiarygodnosc} onChange={handleChange} />
            <input type="date" name="date" value={formData.data} onChange={handleChange} />
            <select name="kreatywnosc" value={formData.kreatywnosc} onChange={handleChange} >
                <option value="mała"> </option>
                <option value="średnia"></option>
                <option value="duża"></option>
            </select>
            <textarea name="szczegoly" placeholder="Dodatkowe szczegóły" value={formData.szczegoly} onChange={handleChange} ></textarea>
            <label>
                <input type="checkbox" name="wymowki" checked={formData.wymowki} onChange={handleChange} /> Pilna
            </label>
            <button type="submit"> </button>
        </form>
    );
};

export default Form;
