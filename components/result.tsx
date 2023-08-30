import React from 'react';
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import { dropRight } from 'lodash';

const Result = () => {
    const [data, setData] = useState<any[]>([])
    const router = useRouter();
    const [maxMark, setmaxMark] = useState<any>(0);
    const [maxWork, setmaxWork] = useState<number>(0);
    const [name, setName] = useState<string>("");
    const [dropDownWork, setdropDownWork] = useState<any[]>([]);
    const [selectedSemesterMark, setSelectedSemesterMark] = useState<any>(0);
    const [midMark, setmidMark] = useState<any>(0);
    const [dropDownMid, setdropDownMid] = useState<any[]>([]);
    const [dropDownFinal, setdropDownFinal] = useState<any[]>([]);
    const [finalMark, setfinalMark] = useState<any>(0);
    const [dropDownPractical, setdropDownPractical] = useState<any[]>([]);
    const [practicalMark, setpracticalMark] = useState<any>(0);
    const [totalMarks, setTotalMarks] = useState<number>(0)
    const [percentage, setpercentage] = useState<number>(0);
    const [grade, setGrade] = useState<string>("")
    const [status, setStatus] = useState<string>("")
    const [credithour, setCredithour] = useState<number>(0)
    const [oning, setOning] = useState<number>(0)
    const [totalling, setTotalling] = useState<number>(0)
    const [maximumMarks, setmaximumMarks] = useState<number>(0)
    const [credit, setcredit] = useState<number>(0)
    const [gpa, setGpa] = useState<number>(0.0)
    const [submitted, setSubmitted] = useState<boolean>(false);


    const alpha = (e: any) => {
        const inputValue = e.target.value;
        const formattedName = inputValue.charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase();
        setName(formattedName);

    };

    const beta = (e: any) => {
        let value = Number(e.target.value);
        setmaxMark(value);
        let a: number[] = [];
        let b: number[] = [];
        let c: number[] = [];
        let d: number[] = [];


        if (value === 80) {

            setmaxWork(12);
            for (let i = 1; i <= 12; i++) {
                a.push(i);
            }
            for (let j = 1; j <= 18; j++) {
                b.push(j);

            }
            for (let k = 1; k <= 30; k++) {
                c.push(k);
            }
            for (let l = 1; l <= 20; l++) {
                d.push(l);
            }
            setCredithour(4);
        }
        else if (value === 60) {
            setmaxWork(12);
            for (let i = 1; i <= 12; i++) {
                a.push(i);
            }
            for (let j = 1; j <= 18; j++) {
                b.push(j);

            }
            for (let k = 1; k <= 30; k++) {
                c.push(k);
            }
            setCredithour(3);

        }
        else if (value === 40) {
            setmaxWork(8);
            for (let i = 1; i <= 8; i++) {
                a.push(i);
            }
            for (let j = 1; j <= 12; j++) {
                b.push(j);

            }
            for (let k = 1; k <= 20; k++) {
                c.push(k);
            }
            setCredithour(2);
        }
        else {
            setmaxWork(0);

        }

        setdropDownWork(a);
        setdropDownMid(b);
        setdropDownFinal(c);
        setdropDownPractical(d);

    };
    const charli = (e: any) => {
        setmidMark(e.target.value)

    }
    const gemma = (e: any) => {
        setfinalMark(e.target.value)

    }
    const penta = (e: any) => {
        setpracticalMark(e.target.value);
        setpracticalMark(e.target.value)
    }

    const handleSubmit = () => {
        // calculateTotalMarks()
        const semesterMarks = parseInt(selectedSemesterMark);
        const midMarks = parseInt(midMark);
        const finalMarks = parseInt(finalMark);
        const practicalmarks = parseInt(practicalMark);
        const maxMarks = parseInt(maxMark);
        const total = semesterMarks + midMarks + finalMarks + practicalmarks;
        // Calculate the percentage
        const percentage = (total / maxMarks) * 100;
        let roundingNumber: number = Number(percentage.toFixed(1));
        let gradinsystem = ""
        if (roundingNumber >= 80) {
            gradinsystem = "A"
        } else if (roundingNumber >= 70) {
            gradinsystem = "B"
        } else if (roundingNumber >= 60) {
            gradinsystem = "C"
        } else if (roundingNumber >= 50) {
            gradinsystem = "D"
        } else {
            gradinsystem = "F"
        }
        // quality points 
        let quality;
        if (maxMark === 80) {

            if (total >= 64) {
                quality = (16.0)
            }
            else if (total >= 63) {
                quality = 15.6;

            }
            else if (total == 62) {
                quality = (15.2)
            }
            else if (total == 61) {
                quality = (14.8)
            }
            else if (total == 60) {
                quality = (14.8)
            }
            else if (total == 59) {
                quality = (14.4)
            }
            else if (total == 58) {
                quality = (14.0)
            }
            else if (total == 57) {
                quality = (13.6)
            }
            else if (total == 56) {
                quality = (13.2)
            }
            else if (total == 55) {
                quality = (12.8)
            }
            else if (total == 54) {
                quality = (16.24)
            }
            else if (total == 53) {
                quality = (12.0)
            }
            else if (total == 52) {
                quality = (12.0)
            }
            else if (total == 51) {
                quality = (11.6)
            }
            else if (total == 50) {
                quality = (11.2)
            }
            else if (total == 49) {
                quality = (10.8)
            }
            else if (total == 48) {
                quality = (10.8)
            }
            else if (total == 47) {
                quality = (10.4)
            }
            else if (total == 46) {
                quality = (10.0)
            }
            else if (total == 45) {
                quality = (9.6)
            }
            else if (total == 44) {
                quality = (9.2)
            }
            else if (total == 43) {
                quality = (8.8)
            }
            else if (total == 42) {
                quality = (8.8)
            }
            else if (total == 41) {
                quality = (8.4)
            }
            else if (total == 40) {
                quality = (8.0)
            }
            else if (total == 39) {
                quality = (7.6)
            }
            else if (total == 38) {
                quality = (7.2)
            }
            else if (total == 37) {
                quality = (6.4)
            }
            else if (total == 36) {
                quality = (6.0)
            }
            else if (total == 35) {
                quality = (5.6)
            }
            else if (total == 34) {
                quality = (5.2)
            }
            else if (total == 33) {
                quality = (4.4)
            }
            else if (total == 32) {
                quality = (4.0)
            }
            else {
                quality = (0.0)
            }
        }
        else if (maxMark === 60) {
            if (total >= 48) {
                quality = (12.0)
            }
            else if (total === 47) {
                quality = (11.7)
            }
            else if (total === 46) {
                quality = (11.4)
            }
            else if (total === 45) {
                quality = (11.1)
            }
            else if (total === 44) {
                quality = (10.5)
            }
            else if (total === 43) {
                quality = (10.2)
            }
            else if (total === 42) {
                quality = (9.9)
            }
            else if (total === 41) {
                quality = (9.6)
            }
            else if (total === 40) {
                quality = (9.3)
            }
            else if (total === 39) {
                quality = (9.0)
            }
            else if (total === 38) {
                quality = (8.7)
            }
            else if (total === 37) {
                quality = (8.4)
            }
            else if (total === 36) {
                quality = (8.1)
            }
            else if (total === 35) {
                quality = (7.5)
            }
            else if (total === 34) {
                quality = (7.2)
            }
            else if (total === 33) {
                quality = (6.9)
            }
            else if (total === 32) {
                quality = (6.6)
            }
            else if (total === 31) {
                quality = (6.3)
            }
            else if (total === 30) {
                quality = (6.0)
            }
            else if (total === 29) {
                quality = (5.4)
            }
            else if (total === 28) {
                quality = (5.1)
            }
            else if (total === 27) {
                quality = (4.5)
            }
            else if (total === 26) {
                quality = (3.9)
            }
            else if (total === 25) {
                quality = (3.6)
            }
            else if (total === 24) {
                quality = (3.0)
            }
            else {
                quality = (0.0)
            }
        }
        else if (maxMark === 40) {
            if (total >= 32) {
                quality = (8.0)
            }
            else if (total === 31) {
                quality = (7.6)
            }
            else if (total === 30) {
                quality = (7.4)
            }
            else if (total === 29) {
                quality = (7.0)
            }
            else if (total === 28) {
                quality = (6.6)
            }
            else if (total === 27) {
                quality = (6.4)
            }
            else if (total === 26) {
                quality = (6.0)
            }
            else if (total === 25) {
                quality = (5.6)
            }
            else if (total === 24) {
                quality = (5.4)
            }
            else if (total === 23) {
                quality = (5.0)
            }
            else if (total === 22) {
                quality = (4.6)
            }
            else if (total === 21) {
                quality = (4.4)
            }
            else if (total === 20) {
                quality = (4.0)
            }
            else if (total === 19) {
                quality = (3.6)
            }
            else if (total === 18) {
                quality = (3.0)
            }
            else if (total === 17) {
                quality = (2.6)
            }
            else if (total === 16) {
                quality = (2.0)
            }
            else if (total === 15) {
                quality = (1.6)
            }
            else {
                quality = (0.0)
            }
        }

        if (name && status !== "") {
            if (selectedSemesterMark && midMark && finalMark !== 0) {
                let z = {
                    subject: name,
                    Semwork: selectedSemesterMark,
                    Midmarks: midMark,
                    Finalmarks: finalMark,
                    Practical: practicalMark,
                    Total: total,
                    Maxmarks: maxMark,
                    percent: roundingNumber,
                    grade: gradinsystem,
                    status: status,
                    Credith: credithour,
                    QualityP: quality

                }
                console.log(z)



                setData([...data, z]);
                setName("");
                setmaxMark(0);
                setSelectedSemesterMark(0);
                setmidMark(0);
                setfinalMark(0);
                setpracticalMark(0);
                setTotalMarks(0)
                setStatus("")

                setdropDownWork([]);
                setdropDownMid([]);
                setdropDownFinal([]);
                setdropDownPractical([]);


                toast.success('Result has been added', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
            else {
                toast.warn("All field are required", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }

        }

        else {
            toast.warn("All field are required", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }


    }
    console.log(data)

    const onStatusHandler = (e: any) => {
        setStatus(e.target.value)

    }
    const onGenerateGpa = () => {
        let a = data;
        let qualityPoints = 0;
        for (let i = 0; i <= a.length - 1; i++) {
            let b = a[i];

            qualityPoints += (b.QualityP)

        }
        setOning(qualityPoints)
        let totalmarks = 0;
        for (let i = 0; i <= a.length - 1; i++) {
            let b = a[i];

            totalmarks += (b.Total)

        }
        setTotalling(totalmarks)
        let maximumMarks = 0;
        for (let i = 0; i <= a.length - 1; i++) {
            let c = a[i];

            maximumMarks += (c.Maxmarks)
        }
        setmaximumMarks(maximumMarks)
        let credit = 0;
        for (let i = 0; i <= a.length - 1; i++) {
            let d = a[i];

            credit += (d.Credith)

        }
        setcredit(credit)
        let kuch: number = 0.0
        console.log(qualityPoints, credit)
        kuch = qualityPoints / credit; console.log(kuch)

        setGpa(kuch)
        setSubmitted(true);
    }
    const onDeleteEmaiil = () => {
        localStorage.removeItem('user');
        router.push('/Login');

    }
    return (
        <div>
            <div className="d-flex justify-content-center mt-5">
                <div className="card" style={{ width: "30rem" }}>


                    <div className="card-body">
                        <div className="form-group">

                            <input type="text" className="form-control" value={name} aria-describedby="emailHelp" placeholder="Subject Title" onChange={alpha} />
                            <br />

                            <select className="form-select" value={maxMark} onChange={beta}>
                                <option value={0}>Marks</option>
                                <option value={80}>80</option>
                                <option value={60}>60</option>
                                <option value={40}>40</option>
                                <option value={20}>20</option>
                            </select>

                            <br />

                            <div>
                                {
                                    dropDownWork.length > 0 && (
                                        <div>

                                            <select className="form-select" value={selectedSemesterMark} onChange={(e) => setSelectedSemesterMark(parseInt(e.target.value))}>
                                                <option value={0}>Select Semester Marks</option>
                                                {dropDownWork.map((value) => (
                                                    <option key={value} value={value}>
                                                        {value}
                                                    </option>
                                                ))}
                                            </select>
                                            <br />
                                        </div>
                                    )
                                }
                            </div>

                            <div>
                                {
                                    dropDownMid.length > 0 && (
                                        <div>

                                            <select className='form-select' value={midMark} onChange={charli} >
                                                <option value={0}>Select Mid Marks</option>
                                                {dropDownMid.map((value) => (
                                                    <option key={value} value={value}>
                                                        {value}
                                                    </option>
                                                ))}
                                            </select>
                                            <br />
                                        </div>
                                    )
                                }
                            </div>
                            <div>
                                {
                                    dropDownFinal.length > 0 && (
                                        <div>

                                            <select className='form-select' value={finalMark} onChange={gemma} >
                                                <option value={0}>Select Final Marks</option>
                                                {dropDownFinal.map((value) => (
                                                    <option key={value} value={value}>
                                                        {value}
                                                    </option>
                                                ))}
                                            </select>
                                            <br />
                                        </div>
                                    )
                                }
                            </div>
                            <div>
                                {
                                    dropDownPractical.length > 0 && (
                                        <div>

                                            <select className='form-select' value={practicalMark} onChange={penta} >
                                                <option value={0}>Select Practical Marks</option>
                                                {dropDownPractical.map((value) => (
                                                    <option key={value} value={value}>
                                                        {value}
                                                    </option>
                                                ))}
                                            </select>
                                            <br />
                                        </div>
                                    )
                                }
                            </div>

                            <div>
                                <select className="form-select" value={status} onChange={onStatusHandler}>
                                    <option value="">Enter Status</option>
                                    <option value="Unverified">Unverified</option>
                                    <option value='Repeated'>Repeated</option>
                                    <option value='Verified'>Verified</option>
                                    <option value="Failed">Failed</option>
                                </select>
                                <br />
                            </div>
                            <div className="center">
                                <button className="beautiful-button" onClick={handleSubmit}>Submit</button>
                                <div className='' >
                                    <button className="btn btn-success"style={{position: "absolute", bottom: "15px", right: "5px" }} onClick={onDeleteEmaiil}>Logout</button>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </div>

            <table className="table table-striped mt-5">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Sem.work Marks</th>
                        <th scope="col">Mid Marks</th>
                        <th scope="col">Final Marks</th>
                        <th scope="col">Practical Marks</th>
                        <th scope="col">Obtain Marks</th>
                        <th scope="col">Maximum Marks</th>
                        <th scope="col">Percent%</th>
                        <th scope="col">Grade</th>
                        <th scope="col">Quality Points</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data?.map((value: any, index: any) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{value?.subject}</td>
                                    <td>{value?.Semwork}</td>
                                    <td>{value?.Midmarks}</td>
                                    <td>{value?.Finalmarks}</td>
                                    <td>{value?.Practical}</td>
                                    <td>{value?.Total}</td>
                                    <td>{value?.Maxmarks}</td>
                                    <td>{`${value?.percent}%`}</td>
                                    <td>{value?.grade}</td>
                                    <td>{value?.QualityP.toFixed(1)}</td>
                                    <td>{value?.status}</td>


                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
            {
                data.length > 0 ? <div className='text-center mt-3 mb-3'>
                    <button type="button" className="btn btn-primary rounded-pill" onClick={onGenerateGpa}>Generate GPA</button>
                    <p>Your Total quality point are : {oning}</p>
                    <p>Your Total obatained marks are : {totalling}</p>
                    <p>your total marks are : {maximumMarks}</p>
                    <p>your gpa is : {gpa}</p>
                </div> : null
            }


        </div>
    )
};

export default Result;
