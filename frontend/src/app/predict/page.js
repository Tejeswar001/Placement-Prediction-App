'use client';
import React from 'react';
import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function Page() {
    const [iq, setIq] = useState("");
    const [cgpa, setCgpa] = useState("");
    const [previousSemesterGpa, setPreviousSemesterGpa] = useState("");
    const [academicPerformance, setAcademicPerformance] = useState("");
    const [extraCurriculars, setExtraCurriculars] = useState("");
    const [communicationSkills, setCommunicationSkills] = useState("");
    const [projectsCompleted, setProjectsCompleted] = useState("");
    const [internshipExperience, setInternshipExperience] = useState("");
    const router = useRouter();

    const [loading,setLoading] = useState(false);
    const [prediction,setPrediction] = useState("")

    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const handleHome = () => {
        router.push('/');
    }
    
    const handlePredict = async (e) => {
        e.preventDefault();

        setLoading(true);
        try{
            const response = await fetch(`${API_URL}/predict`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                features: [
                    Number(iq),
                    Number(previousSemesterGpa),
                    Number(cgpa),
                    Number(academicPerformance),
                    Number(internshipExperience),
                    Number(extraCurriculars),
                    Number(communicationSkills),
                    Number(projectsCompleted),
                ]
                }),
            });
            const data = await response.json();
            console.log(data);
            setPrediction(data.prediction);
            if(data.prediction===1){
                toast.success("High chance of placement!");
            }else{
                toast.error("Low chance of placement");
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }};


  return (
    <div className="min-h-screen w-full px-4 py-4">

        <div className="max-w-5xl mx-auto flex justify-start mb-6 py-2">
            <button className="btn btn-ghost text-white btn-circle" onClick={handleHome}>
                <ArrowLeft className="inline-block mr-2" />
            </button>
        </div>

        <div className="flex items-center justify-center flex-col text-center py-4">
            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl">Predict Your Chances of Getting Placed</h1>
        </div>



        <form className="flex flex-col items-center gap-6 py-8" onSubmit={handlePredict}>
            
            {/* Group for IQ and CGPA */}
            <div className='flex flex-col md:flex-row gap-6 w-full justify-center items-center'>

                {/* IQ Field */}
                <div className="flex flex-col gap-2 w-full max-w-md">
                    <label className="text-white font-medium">Enter your IQ</label>
                    <input 
                        required
                        placeholder="IQ (range: ~50.0 to 200.0)" 
                        type="number" 
                        className="input input-bordered w-full" 
                        max="200" 
                        min="50"
                        value={iq}
                        onChange={(e)=> setIq(parseInt(e.target.value))}
                    />
                </div>

                {/* CGPA Field */}
                <div className="flex flex-col gap-2 w-full max-w-md">
                    <label className="text-white font-medium">Enter your CGPA</label>
                    <input 
                        required
                        placeholder="CGPA (range: ~5.0 to 10.0)" 
                        type="number" 
                        step="any"
                        className="input input-bordered w-full" 
                        max="10" 
                        min="1"
                        value={cgpa}
                        onChange={(e) => setCgpa(parseFloat(e.target.value))}
                    />
                </div>
            </div>

            {/* Group for Previous Semester GPA and Academic Performance */}
            <div className='flex flex-col md:flex-row gap-6 w-full justify-center items-center'>
                {/* Previous Semester Results Field */}
                <div className="flex flex-col gap-2 w-full max-w-md">
                    <label className="text-white font-medium">Enter your Previous Semester GPA</label>
                    <input 
                        required
                        placeholder="GPA (range: ~5.0 to 10.0)" 
                        type="number" 
                        step="any"
                        className="input input-bordered w-full" 
                        max="10" 
                        min="5"
                        value={previousSemesterGpa}
                        onChange={(e) => setPreviousSemesterGpa(parseFloat(e.target.value))}
                    />
                </div>

                {/* Academic Performance Field */}
                <div className="flex flex-col gap-2 w-full max-w-md">
                    <label className="text-white font-medium">Academic Performance</label>
                    <input 
                        required
                        placeholder="Annual academic rating (scale: 1 to 10)" 
                        type="number" 
                        className="input input-bordered w-full" 
                        max="10" 
                        min="1"
                        value={academicPerformance}
                        onChange={(e) => setAcademicPerformance(parseInt(e.target.value))}
                    />
                </div>
            </div>

            {/* Group for Extra-Curricular Activities and Communication Skills */}
            <div className='flex flex-col md:flex-row gap-6 w-full justify-center items-center'>
                {/* Extra-Curricular Activities Field */}
                <div className="flex flex-col gap-2 w-full max-w-md">
                    <label className="text-white font-medium">Extra-Curricular Activities</label>
                    <input 
                        required
                        placeholder="Involvement in extracurriculars (score from 0 to 10)" 
                        type="number" 
                        className="input input-bordered w-full" 
                        max="10" 
                        min="0"
                        value={extraCurriculars}
                        onChange={(e) => setExtraCurriculars(parseInt(e.target.value))}
                    />
                </div>

                {/* Communication Skills Field */}
                <div className="flex flex-col gap-2 w-full max-w-md">
                    <label className="text-white font-medium">Communication Skills</label>
                    <input 
                        required
                        placeholder="Communication skills rating (scale: 1 to 10)" 
                        type="number" 
                        className="input input-bordered w-full" 
                        max="10" 
                        min="1"
                        value={communicationSkills}
                        onChange={(e) => setCommunicationSkills(parseInt(e.target.value))}
                    />
                </div>
            </div>

            {/* Group for Projects Completed and Internship Experience */}
            <div className='flex flex-col md:flex-row gap-6 w-full justify-center items-center'>
                {/* Projects Completed Field */}
                <div className="flex flex-col gap-2 w-full max-w-md">
                    <label className="text-white font-medium">Major Projects Completed</label>
                    <input 
                        required
                        placeholder="Number of projects completed (0 to 5)" 
                        type="number" 
                        className="input input-bordered w-full" 
                        max="5" 
                        min="0"
                        value={projectsCompleted}
                        onChange={(e) => setProjectsCompleted(parseInt(e.target.value))}
                    />
                </div>

                {/* Internship Experience Field */}
                <div className="flex flex-col gap-2 w-full max-w-md">
                    <label className="text-white font-medium">Have you done an internship?</label>
                    <div className="flex gap-6">
                        <label className="label cursor-pointer">
                        <span className="label-text text-white">Yes</span>
                        <input type="radio" name="internship" value="1" className="radio checked:bg-primary ml-2"
                        onChange={(e) => setInternshipExperience(parseInt(e.target.value))} checked={internshipExperience === 1}/>
                        </label>
                        <label className="label cursor-pointer">
                        <span className="label-text text-white">No</span>
                        <input type="radio" name="internship" value="0" className="radio checked:bg-primary ml-2"
                        onChange={(e) => setInternshipExperience(parseInt(e.target.value))} checked={internshipExperience === 0}/>
                        </label>
                    </div>
                </div>
            </div>

            {/* Submit Button */}
                <div className="flex justify-center mt-6">
                    {loading ? (
                        <span className="text-white">Loading... Waiting for Server to Respond....</span>
                    ) : (
                        <button
                        type="submit"
                        className="btn btn-primary"
                        >
                        Submit
                        </button>
                    )}
                </div>
        </form>

    </div>
    );
}