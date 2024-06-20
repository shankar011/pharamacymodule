import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const PieChart = () => {
    const [studentSubject, setStudentSubject] = useState([]);
    const [studentMarks, setStudentMarks] = useState([]);

    useEffect(() => {
        const sSubject = [];
        const sMarks = [];

        const getStudentData = async () => {
            try {
                const reqData = await fetch(`http://localhost/reactgraphtutorial/marks`);

                if (!reqData.ok) {
                    throw new Error("Failed to fetch data");
                }

                const resData = await reqData.json();

                for (let i = 0; i < resData.length; i++) {
                    sSubject.push(resData[i].subject);
                    sMarks.push(parseInt(resData[i].marks));
                }

                setStudentSubject(sSubject);
                setStudentMarks(sMarks);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };


        getStudentData();
    }, []);

    return (
        <div className="container-fluid mb-3">
            <h3 className="mt-3">Welcome to Piechart</h3>
            <Chart
                type="pie"
                width={1349}
                height={550}
                series={studentMarks}
                options={{
                    title: {
                        text: "Student PieChart"
                    },
                    noData: {
                        text: "Empty Data"
                    },
                    labels: studentSubject
                }}
            />
        </div>
    );
}

export default PieChart;
