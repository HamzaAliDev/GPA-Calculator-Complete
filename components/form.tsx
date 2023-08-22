
import backgroundImage from '../public/5566879.jpg';
import { useState } from "react";
// import { capitalize } from "lodash";

const Form = () => {

    const [data, setData] = useState<any[]>([])
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
    // const calculateTotalMarks = () => {
    //     const semesterMarks = selectedSemesterMark;
    //     const midMarks = midMark;
    //     const finalMarks = finalMark;
    //     const practicalmarks = practicalMark;

    //     const total = semesterMarks + midMarks + finalMarks + practicalmarks;

    //     setTotalMarks(total);
    //     calculatePercentage()
    // }
    // const calculatePercentage = () => {
    //     const tMarks = totalMarks;
    //     const mMarks = maxMark;
    //     const per = tMarks / mMarks * 100;
    //     setpercentage(per);
    // }
    const handleSubmit = () => {
        // calculateTotalMarks()
        const semesterMarks = Number(selectedSemesterMark);
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
            status: status

        }


        // Calculate the total marks
        localStorage.setItem('userData', JSON.stringify(z));





        setData([...data, z]);
        setName("");
        setSelectedSemesterMark(0);
        setmidMark(0);
        setfinalMark(0);
        setpracticalMark(0);
        setmaxMark(0);
        setTotalMarks(0)


    }
    console.log(data)

    const onStatusHandler = (e: any) => {
        setStatus(e.target.value)

    }


    return (
        <div className='kuch'>
            <div>
                <div className="d-flex justify-content-center pt-5">
                    <div className="card" style={{ width: "30rem" }}>
                        <div className="card-header" style={{ textAlign: "center" }}>
                            Subject Marks
                        </div>
                        <div>
                            <label >Subject Name</label>
                            <input type="text" className="form-control" value={name} placeholder="Enter subject" onChange={alpha} />
                            <br />
                            <label >Maximum Marks</label>
                            <select className="form-select" onChange={beta}>
                                <option value="o">Marks</option>
                                <option value="80">80</option>
                                <option value="60">60</option>
                                <option value="40">40</option>
                                <option value="20">20</option>
                            </select>
                            <br />

                        </div>
                        <div>
                            {
                                dropDownWork.length > 0 && (
                                    <div>
                                        <label>Sem.Work Marks</label>
                                        <select value={selectedSemesterMark} onChange={(e) => setSelectedSemesterMark(parseInt(e.target.value))}>
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
                                        <label>Mid Marks</label>
                                        <select value={midMark} onChange={charli} >
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
                                        <label>Final Marks</label>
                                        <select value={finalMark} onChange={gemma} >
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
                                        <label>Practical Marks</label>
                                        <select value={practicalMark} onChange={penta} >
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
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
                            <select multiple className="form-control" id="exampleFormControlSelect2" onChange={onStatusHandler}>
                                <option value="Unverified">Unverified</option>
                                <option value='Repeated'>Repeated</option>
                                <option value='Verified'>Verified</option>
                                <option value="Failed">Failed</option>

                            </select>
                        </div>
                        <div>
                            <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                        </div>

                    </div>


                </div>
                <div className="d-flex justify-content-center pt-5">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
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
                                            <tr>
                                                <th scope="row">{index + 1}</th>
                                                <td>{value?.subject}</td>
                                                <td>{value?.Semwork}</td>
                                                <td>{value?.Midmarks}</td>
                                                <td>{value?.Finalmarks}</td>
                                                <td>{value?.Practical}</td>
                                                <td>{value?.Total}</td>
                                                <td>{value?.Maxmarks}</td>
                                                <td>{value?.percent}</td>
                                                <td>{value?.grade}</td>
                                                <td>{}</td>
                                                <td>{value?.status}</td>


                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;



//portal created 2 



