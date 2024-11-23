import React from "react";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";

function Table({openTable}) {
console.log(openTable);

    return (
        <div className={`${openTable==true?'visible':'hidden'}`}>
            <table className="">
                <thead className="bg-blue-300">
                    <th className="th">Sun</th>
                    <th className="th">Mon</th>
                    <th className="th">Tue</th>
                    <th className="th">Wed</th>
                    <th className="th">Thu</th>
                    <th className="th">Fri</th>
                    <th className="th">Sat</th>
                </thead>
                <tbody>
                    <tr>
                        <td className="td">1</td>
                        <td className="td">2</td>
                        <td className="td">3</td>
                        <td className="td">4</td>
                        <td className="td">5</td>
                        <td className="td">6</td>
                        <td className="td">7</td>
                    </tr>
                    <tr>
                        <td className="td">1</td>
                        <td className="td">2</td>
                        <td className="td">3</td>
                        <td className="td">4</td>
                        <td className="td">5</td>
                        <td className="td">6</td>
                        <td className="td">7</td>
                    </tr>
                    <tr>
                        <td className="td">1</td>
                        <td className="td">2</td>
                        <td className="td">3</td>
                        <td className="td">4</td>
                        <td className="td">5</td>
                        <td className="td">6</td>
                        <td className="td">7</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Table;
