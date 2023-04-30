import React, { useState } from 'react'
import './healthArticles.scss';
import Header from '../../../components/page/Header/header';

const HealthArticles = () => {
    const [diseases, setDiseases]: any = useState([
        {
            "name": "Influenza",
            "symptoms": "Commonly known as the flu, this viral infection can cause fever, cough, sore throat, runny or stuffy nose, body aches, headache, chills, and fatigue.",
            "prevention": ""
        },
        {
            "name": "Dengue Fever",
            "symptoms": "Commonly known as the flu, this viral infection can cause fever, cough, sore throat, runny or stuffy nose, body aches, headache, chills, and fatigue.",
            "prevention": ""
        },
        {
            "name": "Chikungunya",
            "symptoms": "Commonly known as the flu, this viral infection can cause fever, cough, sore throat, runny or stuffy nose, body aches, headache, chills, and fatigue.",
            "prevention": ""
        },
        {
            "name": "COVID-19",
            "symptoms": " This viral infection is caused by the SARS-CoV-2 virus and can cause fever, cough, shortness of breath or difficulty breathing, fatigue, muscle or body aches, headache, new loss of taste or smell, sore throat, congestion or runny nose, nausea or vomiting, and diarrhea.",
            "prevention": ""
        }
    ]);
    return (
        <div className="App">
            <Header />
            <div className="health-articles">
                <h1>Health Articles</h1>
                <p>At our medical appointment booking application, we believe that staying healthy is a top priority. We understand that local viral diseases can be a concern for many people, which is why we've created a platform that not only makes it easy to find and book appointments with the nearest clinic for treatment but also provides information about local viral diseases and their symptoms.</p>
                <p>
                    Here are some common local viral diseases and their symptoms:
                    <ul>
                        {diseases.map((disease: any, ind: number) => {
                            return (
                                <li key={`_${ind}`}><a href="#">{`${ind + 1} ${disease.name} : ${disease.symptoms}`}</a></li>
                            )
                        })}
                    </ul>
                </p>
            </div>
        </div>
    )
}

export default HealthArticles
