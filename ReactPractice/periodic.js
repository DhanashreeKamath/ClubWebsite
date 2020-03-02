import React from "react";
import ReactDOM from "react-dom";

export default function PeriodicTable(props) {
	return <table><thead><tr>
	{(props.desiredCols).map((colName) =>
		<th key={colName}>{colName}</th>
	)}
	</tr>
	</thead>
	<tbody>
	{(props.chemElements).map((chemElement) =>
		<tr key = {chemElement.atomic_number}>
		<td>{chemElement.atomic_number}</td>
  		<td>{chemElement.name}</td>
  		<td>{chemElement.symbol}</td>
  		<td>{chemElement.phase}</td>
  		<td>{chemElement.year_of_discovery}</td>
  		</tr>
	)}
	</tbody>
	</table>;
}

